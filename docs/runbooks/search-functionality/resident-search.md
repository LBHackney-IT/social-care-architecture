---
id: resident-search
title: Resident Search Configuration
slug: /runbooks/search-functionality/resident-search
---

## Technical Notes

### Postgres
`pg_tgrm extension for Postgres`

- The person search uses fuzzy name matching that uses the postgres trigram extension in queries. 
- The *pg_tgrm* extension adds required functionality and also creates a new index to improve performance.
- If the extension is not installed in your (table/database?) you will get the following error:
~~~
HINT: No function matches the given name and argument types. You might need to add explicit type casts.
~~~

`Word Similarity Threshold`

- The similarity between two text inputs can be represented as a number that indicates how similar the two arguments are. 
- The range of the result is zero (indicating that the two strings are completely dissimilar) to one (indicating that the two strings are identical).
- The threshold must be set to between 0 and 1 (default is 0.6)
- Sets the current word similarity threshold that is used by the <% and %> operators.
~~~
SET pg_trgm.word_similarity_threshold TO 0.4;
~~~

Example:

~~~
SET pg_trgm.word_similarity_threshold TO 0.16;

SELECT word_similarity(answers::text, 'mouse'), *
FROM "Workflow"
WHERE id IN (
    SELECT id
    FROM "Workflow"
    WHERE answers::text %> 'mouse'
)
ORDER BY word_similarity(answers::text, 'mouse') DESC;
~~~

pg_size_pretty() is a system function for displaying a size in bytes into human-readable format

Example:

~~~
SELECT pg_size_pretty(pg_indexes_size('dbo.dm_persons'));
~~~


https://www.postgresql.org/docs/9.6/pgtrgm.html


`Indices in Postgres`

- IMPORTANT! - index must be created **concurrently** or you risk locking the table to other transactions.
~~~
CREATE EXTENSION IF NOT EXISTS pg_trgm;
CREATE EXTENSION IF NOT EXISTS btree_gin;

CREATE INDEX CONCURRENTLY IF NOT EXISTS index_full_name_search
    ON dbo.dm_persons
        USING gin (first_name gin_trgm_ops, last_name gin_trgm_ops);
~~~

https://www.postgresql.org/docs/13/sql-createindex.html

## Swaggerhub 
https://app.swaggerhub.com/apis/Hackney/social-care-case-viewer-api/1.0.0#/Residents/get%20search

#### Path
`/search`
#### Query Parameters
The following are all string types and optional

`name`
`date_of_birth`
`postcode`
`person_id`
`cursor`

## Jira Tickets
Proposed SQL queries: https://hackney.atlassian.net/browse/SCT-1735

## Github PR's

PR's that contain the main bulk of the new endpoint changes
- lbh-social-care-frontend: 

https://github.com/LBHackney-IT/lbh-social-care-frontend/pull/875

- social-care-case-viewer-api: 

https://github.com/LBHackney-IT/social-care-case-viewer-api/pull/595
