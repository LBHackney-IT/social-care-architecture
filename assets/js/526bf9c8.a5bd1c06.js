(self.webpackChunksocial_care_system=self.webpackChunksocial_care_system||[]).push([[524],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1784:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=["components"],s={id:"resident-search",title:"Resident Search Configuration",slug:"/runbooks/case-viewer/search-functionality/resident-search"},l=void 0,c={unversionedId:"runbooks/case-viewer/search-functionality/resident-search",id:"runbooks/case-viewer/search-functionality/resident-search",isDocsHomePage:!1,title:"Resident Search Configuration",description:"Current implementation of search functionality",source:"@site/docs/runbooks/case-viewer/search-functionality/resident-search.md",sourceDirName:"runbooks/case-viewer/search-functionality",slug:"/runbooks/case-viewer/search-functionality/resident-search",permalink:"/social-care-architecture/runbooks/case-viewer/search-functionality/resident-search",editUrl:"https://github.com/LBHackney-IT/social-care-architecture/edit/main/docs/runbooks/case-viewer/search-functionality/resident-search.md",version:"current",frontMatter:{id:"resident-search",title:"Resident Search Configuration",slug:"/runbooks/case-viewer/search-functionality/resident-search"},sidebar:"docs",previous:{title:"Connecting to the case viewer API",permalink:"/social-care-architecture/runbooks/case-viewer/development/connect-to-social-care-case-viewer-api"},next:{title:"Connecting to live databases",permalink:"/social-care-architecture/runbooks/core-pathways/every-day/connecting-to-live-databases"}},p=[{value:"Current implementation of search functionality",id:"current-implementation-of-search-functionality",children:[{value:"SQL Query",id:"sql-query",children:[]},{value:"Following transformations",id:"following-transformations",children:[]}]},{value:"Technical Notes",id:"technical-notes",children:[{value:"Postgres",id:"postgres",children:[]}]},{value:"Swaggerhub",id:"swaggerhub",children:[]},{value:"Github PR&#39;s",id:"github-prs",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"current-implementation-of-search-functionality"},"Current implementation of search functionality"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Person search uses fuzzy name searching only on the input for the name entered."),(0,i.kt)("li",{parentName:"ul"},"Date of birth and postcode searching is strict and does not use any fuzzy searching."),(0,i.kt)("li",{parentName:"ul"},"If a person ID is searched for then that is the only search term that will be used, i.e., fuzzy name searching and date of birth and postcode searching is not carried out.")),(0,i.kt)("h3",{id:"sql-query"},"SQL Query"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Filtering By Name Against All Records:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Returns results of records ordered by the similarity of the supplied name, filtered by DOB and postcode (if supplied).")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"CREATE EXTENSION IF NOT EXISTS pg_trgm;\nCREATE EXTENSION IF NOT EXISTS btree_gin;\n\nCREATE INDEX CONCURRENTLY IF NOT EXISTS index_full_name_search\nON dbo.dm_persons\nUSING gin (first_name gin_trgm_ops, last_name gin_trgm_ops);\n        \nSET pg_trgm.word_similarity_threshold TO 0.4;\n\nSELECT Person.person_id as PersonId,\nCOUNT('x') OVER(PARTITION BY 0) AS TotalRecords\n                    \nword_similarity(Person.first_name || ' ' || Person.last_name, {0}) as Score\n                    \nFROM dbo.dm_persons Person LEFT JOIN dbo.dm_addresses Address ON Person.person_id = Address.person_id \nAND Address.is_display_address = 'Y' \nWHERE Person.marked_for_deletion = false\"\n                    \nAND ({0} <% Person.first_name OR {0} <% Person.last_name)\n\nAND (Person.date_of_birth BETWEEN {1}::timestamp AND {2}::timestamp)\n\nAND (REPLACE(Address.post_code, ' ', '') ILIKE REPLACE({3}, ' ', ''))\n\nGROUP BY Person.person_id, Person.first_name, Person.last_name\nORDER BY\nScore DESC,\nPerson.first_name,\nPerson.last_name\nLIMIT 20 OFFSET {4};\n")),(0,i.kt)("h3",{id:"following-transformations"},"Following transformations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The results are transformed into a new object of type Resident Information Response (RIR) as this type is required by the frontend, however this process doesn't preserve the ordering from the previous step."),(0,i.kt)("li",{parentName:"ul"},"To preserve the order, we loop through the original ordered results, checking against the unordered RIR array looking for where they contain the same person ID."),(0,i.kt)("li",{parentName:"ul"},"When a match on person ID is found, we add that specific RIR record to the ordered result record object as a new parameter."),(0,i.kt)("li",{parentName:"ul"},"This preserves the order and allows us to return an object with data of type RIR that the frontend requires along with totalCount and a value for the cursor.")),(0,i.kt)("h2",{id:"technical-notes"},"Technical Notes"),(0,i.kt)("h3",{id:"postgres"},"Postgres"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pg_tgrm extension for Postgres")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The person search uses fuzzy name matching that uses the postgres trigram extension in queries. "),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("em",{parentName:"li"},"pg_tgrm")," extension adds required functionality and also creates a new index to improve performance."),(0,i.kt)("li",{parentName:"ul"},"If the extension is not installed in your database you will get the following error when you try to run queries that make use of trigrams:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"HINT: No function matches the given name and argument types. You might need to add explicit type casts.\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Word Similarity Threshold")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The similarity between two text inputs can be represented as a number that indicates how similar the two arguments are. "),(0,i.kt)("li",{parentName:"ul"},"The range of the result is zero (indicating that the two strings are completely dissimilar) to one (indicating that the two strings are identical)."),(0,i.kt)("li",{parentName:"ul"},"The threshold must be set to between 0 and 1 (default is 0.6)"),(0,i.kt)("li",{parentName:"ul"},"Sets the current word similarity threshold that is used by the <% and %> operators.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"SET pg_trgm.word_similarity_threshold TO 0.4;\n")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"SET pg_trgm.word_similarity_threshold TO 0.16;\n\nSELECT word_similarity(answers::text, 'mouse'), *\nFROM \"Workflow\"\nWHERE id IN (\n    SELECT id\n    FROM \"Workflow\"\n    WHERE answers::text %> 'mouse'\n)\nORDER BY word_similarity(answers::text, 'mouse') DESC;\n")),(0,i.kt)("p",null,"pg_size_pretty() is a system function for displaying a size in bytes into human-readable format"),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"SELECT pg_size_pretty(pg_indexes_size('dbo.dm_persons'));\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/9.6/pgtrgm.html"},"https://www.postgresql.org/docs/9.6/pgtrgm.html")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Indices In Postgres")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"IMPORTANT! - index must be created ",(0,i.kt)("strong",{parentName:"li"},"concurrently")," or you risk locking the table to other transactions.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"CREATE EXTENSION IF NOT EXISTS pg_trgm;\nCREATE EXTENSION IF NOT EXISTS btree_gin;\n\nCREATE INDEX CONCURRENTLY IF NOT EXISTS index_full_name_search\n    ON dbo.dm_persons\n        USING gin (first_name gin_trgm_ops, last_name gin_trgm_ops);\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/13/sql-createindex.html"},"https://www.postgresql.org/docs/13/sql-createindex.html")),(0,i.kt)("h2",{id:"swaggerhub"},"Swaggerhub"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://app.swaggerhub.com/apis/Hackney/social-care-case-viewer-api/1.0.0#/Residents/get%20search"},"https://app.swaggerhub.com/apis/Hackney/social-care-case-viewer-api/1.0.0#/Residents/get%20search")),(0,i.kt)("h4",{id:"path"},"Path"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"/search")),(0,i.kt)("h4",{id:"query-parameters"},"Query Parameters"),(0,i.kt)("p",null,"The following are all string types and optional"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"name"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"date_of_birth"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"postcode"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"person_id"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"cursor")),(0,i.kt)("h2",{id:"github-prs"},"Github PR's"),(0,i.kt)("p",null,"PR's that contain the main bulk of the new endpoint changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"lbh-social-care-frontend: ")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/LBHackney-IT/lbh-social-care-frontend/pull/875"},"https://github.com/LBHackney-IT/lbh-social-care-frontend/pull/875")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"social-care-case-viewer-api: ")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/LBHackney-IT/social-care-case-viewer-api/pull/595"},"https://github.com/LBHackney-IT/social-care-case-viewer-api/pull/595")))}d.isMDXComponent=!0}}]);