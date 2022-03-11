---
id: troubleshooting-development
title: Troubleshooting Development
---

> Hint: If something isn't working locally and the pipeline still works, it's been helpful to look at what is being run in the pipeline at that step and adapt the command(s) to run locally.

Here are some common errors that may occur when developing.

Feel free to add to this if you've encountered an error and found a fix that may be helpful to share 🙂:

### Can't find an environment variable

If you encounter an error about a missing environment variable when running a command, a possible solution is to precede the command with `NODE_ENV=<ENVIRONMENT_YOU_WANT>`.
For example:

```bash
    NODE_ENV=test command_you_want_to_run
```

The above example will set your environment as test and use environment variables from your `env.test.local` file.

You can also explicitly set your missing environment variable before each string of commands you want to run.

### Database missing tables or problems with seeding data or migrations

If you encounter this error (or similar) while trying to seed the database, run a migration, etc., using the above strategy, you can try:

```bash
    DATABASE_URL=<URL_OF_YOUR_LOCAL_DATABASE> node_modules/.bin/prisma migrate deploy
```

This should run migrations on your database.

You can also try: `DATABASE_URL=<URL_OF_YOUR_LOCAL_DATABASE> node_modules/.bin/prisma migrate reset` if migrations have already been done in your database or the above command errors.

See the [making a database schema change](https://github.com/LBHackney-IT/lbh-core-pathway-pilot#making-a-database-schema-change) section in the core pathways repo for more information about creating and applying migrations.

### Errors while running Cypress (integration) tests

Here are some examples of common errors that have been encountered while setting up or running cypress tests and some suggested fixes:

#### Prisma/Database errors

Check the section above for some suggested fixes for errors related to the database or prisma.

#### Wrong environment being used or similar when running `npm run` commands

If running the npm run commands doesn't work correctly, you can try explicitly setting the environment variable.

The following commands have helped:

```bash
    NODE_ENV=test npm run test:mock:sccv
    NODE_ENV=test npm run db:seed        #You may not need to run this if you've already seeded your database(& it has not been wiped)
    NODE_ENV=test npm run build && NODE_ENV=test PORT=3001 npm run start
    npm run test:browser:open
```
