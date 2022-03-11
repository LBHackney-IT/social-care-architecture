---
id: troubleshooting-bugs
title: Troubleshooting Bugs
---
> Feel free to add to this if you've encountered a live bug and found a fix/understand what could be have caused it 🙂:

### Validation on next steps or answer filters fails for no reason

#### Context

Staging and Production pull the contents of answer filters, next steps and forms from JSON files saved in S3 in the respective environment.

When the function to get content is called, if it cannot contact S3, e.g. connection error, AWS is down, etc., it will return the locally saved JSON file.

Because of this, it is possible (but very uncommon) for the local JSON file built into the application and the JSON file in S3 to be out of sync.

To avoid making async calls to S3 whenever we want to validate the next steps on a page, we instead validate using the locally saved file. Ideally, this would always be the most up-to-date version from the main branch.

> Note: The file in the main branch will always be up-to-date, but unless there has been a recent deployment to Staging/Production, we should not assume that the same file has been updated within the built application.

#### What could happen if the file in S3 and the file built into the application are out of sync?

If the **S3 files** are older than the file built into the application, this should be fine as all the content in the S3 file would still be in the newer locally committed file. e.g. an ID for the next step would not be missing in both.

However, it is possible that when **no** recent pushes to Staging (or Production) have happened, the local JSON file built into the application would be an older version compared to one pushed to S3. i.e. some of the newer content in S3 would not be in the locally saved JSON file. 

Since the S3 file is used to display content on the page, there is a chance that validation would fail if the validator is trying to check new content that is not in an older file.

Since our pipeline pushes changes automatically to Staging, getting to a state similar to the above might be rare and may only be noticeable if there haven't been any deploys for a long time compared to when the most recent content update to S3 was.

#### Possible fix

A possible fix is to redeploy the pipeline, and this could be by rerunning the jobs or pushing a commit to main.
