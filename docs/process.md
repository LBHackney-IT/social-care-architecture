---
id: process
title: Process
slug: /process
---

# Process

The process of documenting the architecture is intended be:

- Collaborative and easy to contribute
- Lightweight and flexible

## Tools and Techniques

- [C4 model](https://c4model.com/) architecture diagrams.
  - Context and container diagrams (levels 1 and 2), will be defined and stored in this repository.
  - Component diagrams (level 3), will be stored in the repository alongside the code.
- [Architecture decision records](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions) will be used to document key decisions.

## Getting Started

### C4 Diagrams

- Written using the [PlantUML C4 Library](https://plantuml.com/stdlib#062f75176513a666)
- Local editing is supported with Visual Studio Code and the [PlantUML](https://marketplace.visualstudio.com/items?itemName=jebbs.plantuml) extension.
  - Extension settings are defined in `.vscode/settings.json`
- Live editing can also be done by using the [PlantUML Live Server](http://www.plantuml.com/plantuml/uml/)

### Architecture Decision Records

Architecture decision records [ADR] are generated and maintained using Nat Pryce's [adr-tools](https://github.com/npryce/adr-tools). As each ADR is plain text, they may be added without the tools - however the tools do help maintain consistency.
