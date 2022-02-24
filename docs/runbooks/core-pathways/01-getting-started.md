# Core Pathways app

# Getting started 

## Windows

for Windows users, first you need to [install WSL](https://docs.microsoft.com/en-us/windows/wsl/about) to get a Linux terminal. [Windows Terminal](https://www.microsoft.com/en-gb/p/windows-terminal/9n0dx20hk701#activetab=pivot:overviewtab) is a good utility for opening and managing Linux terminals and Powershell / cmd quickly.

Install [Docker](https://www.docker.com/)

TODO: Set up a docker postgres

Add the following to your Hosts File at 
`C:\Windows\System32\Drivers\etc\hosts`

  ```text
  # Hackney Social Care Frontend
  127.0.0.1       dev.hackney.gov.uk
  ```

## Linux and WSL

Pull the [code from our GitHub](https://github.com/LBHackney-IT/lbh-core-pathway-pilot)

Install [Homebrew](https://brew.sh/)

Install node and NPM using Homebrew:

```
brew insttall node@14
```

Install jest using NPM:

```
npm install -g jest
```

install the dependencies:

```
npm install
```

Add the following to `etc/hosts`

```text
  # Hackney Social Care Frontend
  127.0.0.1       dev.hackney.gov.uk
  ```

TODO: Set up a docker postgres

Set up a local environment file

```
cp .env.development .env.development.local
```

You'll need to add: 
- `DATABASE_URL` (from your local postgres above) 
   - Example: `postgres://username:password@localhost:5432/schema`
- `HACKNEY_AUTH_TOKEN_SECRET` (likely from the person onboarding you to the team)

TODO: Install and migrate Prisma

Run the program:

```
npm run dev
```

Run tests:

```
jest
```