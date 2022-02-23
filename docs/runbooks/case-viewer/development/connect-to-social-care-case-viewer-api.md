---
id: connect-to-social-care-case-viewer-api
title: Connecting to the case viewer API
slug: /runbooks/case-viewer/development/connect-to-social-care-case-viewer-api
---

## Retrieving details in AWS for communicating with the API 

#### The steps will cover where to look in Staging & Production AWS accounts

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

- click **show** next to `“API key”` and copy the key value. We will require this key value to set up our authorisation header when sending a request to the API via CURL or POSTMAN

You will require the URL endpoint and the API Key value in order to be able to communicate with the API

--------------------------------------------------------

To see an example of constructing a request object to send the 