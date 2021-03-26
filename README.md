# Social Care System Architecture

This repository is a "central landing zone" to document and share the architecture of the interim social care system.

## Architecture Decision Records

Lightweight architectural decision records are stored in the [decisions directory](decisions/README.md).

An architectural decision record (ADR) is a document that captures an important architectural decision made along with its context and consequences. Further information can be found on Michael Nygard's [blog](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions).

## Related Repositories

| Name                                                                                                     | Description                                                              |
|----------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [API-Playbook-v2-beta](https://github.com/LBHackney-IT/API-Playbook-v2-beta)                             | API design Guidance                                                      |
| [Hackney AWS Infrastructure](https://github.com/LBHackney-IT/infrastructure)                             | [IaC](https://en.wikipedia.org/wiki/Infrastructure_as_code) of AWS infra |
| [LBH Social Care](https://github.com/LBHackney-IT/lbh-social-care)                                       | Front End                                                                |
| [Social Care Case Viewer API](https://github.com/LBHackney-IT/social-care-case-viewer-api)               |                                                                          |
| [Residents Social Care Platform API](https://github.com/LBHackney-IT/residents-social-care-platform-api) |                                                                          |

## Current State

![Current State](images/2021-03-25-architecture.png)

[Drawio Image Source](images/2021-03-25-architecture.drawio)

### C4 Context Diagram

The diagram below shows the overall data flow between the various moving components for Here To Help.

![System Context Diagram](https://www.plantuml.com/plantuml/proxy?cache=no&src=https://raw.githubusercontent.com/LBHackney-IT/social-care-architecture/test-plantuml/images/system-context.iuml)

### Data Flow

![Data Flow](images/data-flows.png)

[Drawio Image Source](images/data-flows.drawio)
