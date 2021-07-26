(self.webpackChunksocial_care_system=self.webpackChunksocial_care_system||[]).push([[770],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return f},kt:function(){return p}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},f=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,f=a(e,["components","mdxType","originalType","parentName"]),d=u(r),p=o,m=d["".concat(c,".").concat(p)]||d[p]||l[p]||i;return r?n.createElement(m,s(s({ref:t},f),{},{components:r})):n.createElement(m,s({ref:t},f))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var u=2;u<i;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4858:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return f},default:function(){return d}});var n=r(2122),o=r(9756),i=(r(7294),r(3905)),s=["components"],a={id:"use-iso-8601-format-for-dates",title:"2. Use ISO 8601 format for dates"},c="2. Use ISO 8601 format for dates",u={unversionedId:"decisions/use-iso-8601-format-for-dates",id:"decisions/use-iso-8601-format-for-dates",isDocsHomePage:!1,title:"2. Use ISO 8601 format for dates",description:"Date: 2021-03-25",source:"@site/docs/decisions/0002-use-iso-8601-format-for-dates.md",sourceDirName:"decisions",slug:"/decisions/use-iso-8601-format-for-dates",permalink:"/social-care-architecture/decisions/use-iso-8601-format-for-dates",editUrl:"https://github.com/LBHackney-IT/social-care-architecture/edit/main/docs/decisions/0002-use-iso-8601-format-for-dates.md",version:"current",sidebarPosition:2,frontMatter:{id:"use-iso-8601-format-for-dates",title:"2. Use ISO 8601 format for dates"},sidebar:"docs",previous:{title:"1. Record architecture decisions",permalink:"/social-care-architecture/decisions/record-architecture-decisions"},next:{title:"3. Prefer open source software",permalink:"/social-care-architecture/decisions/prefer-open-source-software"}},f=[{value:"Status",id:"status",children:[]},{value:"Context",id:"context",children:[]},{value:"Decision",id:"decision",children:[]},{value:"Consequences",id:"consequences",children:[]}],l={toc:f};function d(e){var t=e.components,r=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"2-use-iso-8601-format-for-dates"},"2. Use ISO 8601 format for dates"),(0,i.kt)("p",null,"Date: 2021-03-25"),(0,i.kt)("h2",{id:"status"},"Status"),(0,i.kt)("p",null,"Accepted"),(0,i.kt)("h2",{id:"context"},"Context"),(0,i.kt)("p",null,"The system is composed of a number of API and related datastores. There are currently a number of differing date formats in use."),(0,i.kt)("h2",{id:"decision"},"Decision"),(0,i.kt)("p",null,"We will use the ISO 8601 format for dates: yyyy-mm-dd and times."),(0,i.kt)("h2",{id:"consequences"},"Consequences"),(0,i.kt)("p",null,"Dates and times are displayed in a standard, culture-neutral format."),(0,i.kt)("p",null,"Standardisation will simplify development effort, permitting focus on business value."))}d.isMDXComponent=!0}}]);