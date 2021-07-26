# Social Care System Architecture

This a "central landing zone" to document and share the architecture of the
Social Care System. It's a website built using [Docusaurus](https://docusaurus.io).

## Table of contents

- [Getting started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Running the application](#running-the-application)
- [Running a production build](#running-a-production-build)
- [Creating a new documentation page](#creating-a-new-documentation-page)
- [Documentation](#documentation)
  - [Deployment](#deployment)
  - [Related Repositories](#related-repositories)

## Getting started

### Prerequisites

- [Node.js](nodejs)
- [Yarn](https://classic.yarnpkg.com/en/docs/install)

### Installation

1. Clone this repository

```sh
$ git clone git@github.com:LBHackney-IT/social-care-architecture.git
```

2. Install dependencies

```sh
$ yarn
```

## Usage

## Running the application

To run the application for local development:

```sh
$ yarn start
```

## Running a production build

1. Build the application using:

```sh
$ yarn build
```

2. Run the application using:

```sh
$ yarn serve
```

## Creating a new documentation page

Documentation files are stored in `/docs`. To add a new page:

1. Create a Markdown file within the `/docs` directory and if necessary, create
   a new directory within it
2. Update `sidebars.js` to update the side navigation (see [Docusaurus documentation for the sidebar](https://docusaurus.io/docs/sidebar))

Docusaurus also supports [MDX](https://mdxjs.com) which means that you can write
[JSX](https://reactjs.org/docs/introducing-jsx.html) within Markdown files and
render them as React components. It has a number of other features, so feel free
to explore more within the [docs for Docusaurus](https://docusaurus.io/docs).

## Documentation

### Deployment

The website is deployed using [GitHub Pages](https://pages.github.com) and will
automatically deploy using [GitHub
Actions](https://github.com/features/actions) when `main` is updated, see
[main.yml](.github/workflows/main.yml).

### Related Repositories

| Name | Purpose |
|-|-|
| [LBH Social Care Frontend](https://github.com/LBHackney-IT/lbh-social-care-frontend) | Provides the UI/UX of the Social Care System. |
| [Social Care Case Viewer API](https://github.com/LBHackney-IT/social-care-case-viewer-api) | Provides [service API](http://playbook.hackney.gov.uk/API-Playbook/platform_api_vs_service_api#a-service-apis) capabilities to the Social Care System. |
| [Residents Social Care Platform API](https://github.com/LBHackney-IT/residents-social-care-platform-api) | Provides [platform API](http://playbook.hackney.gov.uk/API-Playbook/platform_api_vs_service_api#b-platform-apis) capabilities by providing historic social care data from Mosaic to the Social Care System. |
| [Adult Social Care Care Package Builder Frontend](https://github.com/LBHackney-IT/lbh-adult-social-care-frontend) | Provides the UI/UX of the Adult Social Care Package System. |
| [Adult Social Care Care Package Builder API](https://github.com/LBHackney-IT/lbh-adult-social-care-api) | Provides [service API](http://playbook.hackney.gov.uk/API-Playbook/platform_api_vs_service_api#a-service-apis) capabilities to the Adult Social Care Package System, allowing users to build and manage care packages. |
| [Adult Social Care Package Builder Transactions API](https://github.com/LBHackney-IT/lbh-adult-social-care-transactions-api) | Provides [service API](http://playbook.hackney.gov.uk/API-Playbook/platform_api_vs_service_api#a-service-apis) transaction capabilities to the Adult Social Care Package System, managing package transactions, pay runs, invoices, bills etc. |
| [Infrastructure](https://github.com/LBHackney-IT/infrastructure) | Provides a single place for AWS infrastructure defined using [Terraform](https://www.terraform.io) as [infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code) as part of Hackney's new AWS account strategy. NB: Due to its recent introduction, the Social Care System has infrastructure across multiple places. |
| [API Playbook](http://playbook.hackney.gov.uk/API-Playbook/) | Provides guidance to the standards of APIs within Hackney. |
