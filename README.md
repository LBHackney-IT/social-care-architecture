# Social Care System Architecture

This repository is a "central landing zone" to document and share the architecture of the interim social care system.

- [Vision](#vision)
- [Process and Tools](process.md)
- [Related Repositories](#related-repositories)
- [Context Diagram](#context-diagram)
- [Container Diagram](#container-diagram)
- [Architecture Decision Records](#architecture-decision-records)
- [Existing Documentation](#existing-documentation)
  - [Current State](#current-state)
  - [Data Flow](#data-flow)

## Vision

The Social Care System was created as an interim system, in response to a loss of service.

## Related Repositories

| Name                                                                                                     | Description                                                                                        |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| [LBH Social Care Frontend](https://github.com/LBHackney-IT/lbh-social-care-frontend)                     | The Social Care Frontend allows Social Care Practitioners to edit cases and residents information. |
| [Social Care Case Viewer API](https://github.com/LBHackney-IT/social-care-case-viewer-api)               |                                                                                                    |
| [Residents Social Care Platform API](https://github.com/LBHackney-IT/residents-social-care-platform-api) |                                                                                                    |
| [Mosaic Resident Information API](https://github.com/LBHackney-IT/mosaic-resident-information-api)       | Mosaic Platform API                                                                                |
| [Hackney AWS Infrastructure](https://github.com/LBHackney-IT/infrastructure)                             | [IaC](https://en.wikipedia.org/wiki/Infrastructure_as_code) of AWS infrastructure                  |
| [API-Playbook-v2-beta](https://github.com/LBHackney-IT/API-Playbook-v2-beta)                             | API design Guidance                                                                                |

## Context Diagram

The [context diagram](https://c4model.com/#SystemContextDiagram) shows the highest level of the Social Care system. It depicts the key users and systems.

![System Context Diagram](images/system-context.png)

## Container Diagram

The [container diagram](https://c4model.com/#ContainerDiagram) shows the interacting systems within the Social Care system.

![System container Diagram](images/system-container.png)

## Architecture Decision Records

Lightweight architectural decision records are stored in the [decisions directory](decisions/README.md).

An architectural decision record (ADR) is a document that captures an important architectural decision made along with its context and consequences. Further information can be found on Michael Nygard's [blog](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions).
