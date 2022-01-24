---
id: introduction
title: MASH Referrals
slug: /mash-referrals
---

Last updated: 24th January 2022

For children's social care, we had started development on moving the process of managing and working on MASH referrals into the social care case management system. As of writing this, the programme decided not to continue this work.

We are in the process of re-purposing and cleaning up the code and infrastructure setup for the MASH work. We have not finished deciding what gets removed or re-purposed and because of this, we want to keep track of all the resources related to MASH, where they live and what decisions we have made regarding them.

Decisions should be documented in the [Architecture Decision Records](../decisions).

## Table of MASH related resources

| Stage      | Name (with link if applicable)                                                                                                                                       |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| N/A        | Referrals - MASH Workflow Google Folder, [see Google doc](https://docs.google.com/document/d/10b-2M8UbGIILisaFJnNfQ9ztRKTmx66Ol1eLYAE07Yk/edit)                      |
| N/A        | [Social Care Referral Form Ingestion Process Repo](https://github.com/LBHackney-IT/social-care-referral-form-ingestion)                                              |
| Spike      | Service Account Test Folder, [see Google doc](https://docs.google.com/document/d/10b-2M8UbGIILisaFJnNfQ9ztRKTmx66Ol1eLYAE07Yk/edit)                                  |
| Spike      | [Proof of Concept Repo](https://github.com/LBHackney-IT/gforms-sns-sqs-lambda-poc)                                                                                   |
| Spike      | Test App Script, [see Google doc](https://docs.google.com/document/d/10b-2M8UbGIILisaFJnNfQ9ztRKTmx66Ol1eLYAE07Yk/edit)                                              |
| Staging    | MASH Test Form Staging, [see Google doc](https://docs.google.com/document/d/10b-2M8UbGIILisaFJnNfQ9ztRKTmx66Ol1eLYAE07Yk/edit)                                       |
| Staging    | MASH Test Spreadsheet Staging (Responses), [see Google doc](https://docs.google.com/document/d/10b-2M8UbGIILisaFJnNfQ9ztRKTmx66Ol1eLYAE07Yk/edit)                    |
| Staging    | MASH Test Apps Script Staging, [see Google doc](https://docs.google.com/document/d/10b-2M8UbGIILisaFJnNfQ9ztRKTmx66Ol1eLYAE07Yk/edit)                                |
| Staging    | [MASH Terraform Module Staging Deploy Location](https://github.com/LBHackney-IT/social-care-referral-form-ingestion/tree/main/terraform)                             |
| Staging    | Social Care Referrals Google Cloud Project, [see Google doc](https://docs.google.com/document/d/10b-2M8UbGIILisaFJnNfQ9ztRKTmx66Ol1eLYAE07Yk/edit)                   |
| Staging    | MASH Google Form Responses - Staging, [see Google doc](https://docs.google.com/document/d/10b-2M8UbGIILisaFJnNfQ9ztRKTmx66Ol1eLYAE07Yk/edit)                         |
| Production | [MASH Terraform Module Prod Deploy Location](https://github.com/LBHackney-IT/infrastructure/blob/master/projects/mosaic/terraform/50a-mash-referrals-data-import.tf) |
