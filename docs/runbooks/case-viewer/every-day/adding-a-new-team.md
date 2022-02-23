---
title: Add a new team
layout: page
slug: /case-viewer/every-day/adding-a-new-team.md
---

# Add a new team 

There are two platforms that include the concept of teams. 
  *  **case viewer api** (main tool) 
  * **core pathways tool**.

## This guide covers

1. Retrieving details in AWS for communicating with the API
2. How to add a new team to the case viewer api 
3. How to add a new team to the core pathways tool
------------------------------------------------------
## 1. Retrieving details in AWS for communicating with the API 

The steps will cover where to look in Staging & Production AWS accounts

You’ll require access to the  `Staging APIs`  AWS account for staging and `Mosaic-Production` account for production

In the relevant account:
-   go to  `API Gateway`

-  click  `“APIs”` and select the correct API: 
   * staging =  `“staging-social-care-case-viewer-api”`
   * production = `“mosaic-prod-social-care-case-viewer-api”`
    
-  click  `“stages”` and select the correct stage: 
    * staging =  `“staging”` 
    * production = `"mosaic-prod”`
    
-  where it says  `“Invoke URL:"`, copy the value of the URL.
This URL is the endpoint you'll be sending the details of the new team to.

- click `“API Keys”` and select the correct API key name
   * staging =  `“api-key-social-care-case-viewer-api-staging”`
   * production = `“api-key-social-care-case-viewer-api-mosaic-prod"`

- click **show** next to `“API key”` and copy the key value. We will require this key value to set up our authorisation header.

--------------------------------------------------------

## 2. How to add a new team to the case viewer api 

  * Appending the correct value for Route to the endpoint
  * Creating a new team JSON object
  * Making a request to the API using CURL
  * Checking it worked
### -- Appending the correct value for Route to the endpoint --

Once you have the correct endpoint for hitting either Staging or Production, if you wish to direct your HTTP request to the right resource in the API then you will have to append the correct route to the endpoint.

Route information can be found in the specific controller that handles the resource you wish to target.
In the Social Care Case Viewer API, the controller for teams is found at:

`social-care-case-viewer-api/SocialCareCaseViewerApi/V1/Controllers/TeamController.cs`

Route is defined in that file like so **[Route("api/v1/teams")]**

Append ```api/v1/teams``` to the endpoint in order to target the teams resource e.g.,
```
https://thecorrecturl.something.yourregion.amazonaws.com/environment/api/v1/teams
```

--------------------------------------------------------

### -- Creating a new JSON team object --

The API expects to receive a JSON object containing the data properties needed to create a new team.

These properties consist of a `name` and a `context`

name = the name of the new team

context = refers to which service, 

“A” for ASC or “C” for CFS
e.g.,
```
{
“name”: “chosen_name”,
“context”: “chosen_context”
}
```
--------------------------------------------------------

### --  Making an API request to the API using CURL --

If you are unfamiliar with how to use CURL, see this [guide](https://dev.to/iggredible/how-to-make-api-request-with-curl-kg8)

Construct your CURL request like so:

(here it is split onto new lines for readability with `\` and 
commented with `#` to explain each component of the CURL request)
~~~
curl \
-X POST \ # send a post request
-d '{"name": "chosen_name", "context": "chosen_context"}' \ # request body containing the JSON object
-H "Content-type: application/json" \ # set json content type
-H "x-api-key: the_api_key_from_AWS" \ # AWS API key
https://thecorrecturl.something.yourregion.amazonaws.com/environment/api/v1/teams \ # the full url of the endpoint
~~~

--------------------------------------------------------------------

### --  Checking it worked --

Go to the Frontend application for whichever environment you added the team to
* staging = https://social-care-service-staging.hackney.gov.uk/login
* production = https://social-care-service.hackney.gov.uk/login

Click on the `"Manage workers"` link & enter a workers email to search for


Once found, you should press the `“Update worker’s details”` button

On the following page you will have the `“Team”` drop down, select this and check that it contains your newly added team for the correct service, e.g., Customer Service in the ASC service.

--------------------------------------------------------------------
## 3. How to add a new team to the core pathways tool

**@TODO Complete docs for core pathways**
