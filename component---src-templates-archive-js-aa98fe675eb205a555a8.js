(self.webpackChunkcreative_tech_blog=self.webpackChunkcreative_tech_blog||[]).push([[431],{8591:function(e,a,t){"use strict";var r=t(7294),n=t(5444);a.Z=function(e){var a=e.categories;return null!=a&&a.nodes&&0!==a.nodes?r.createElement("div",{className:"entry-categories"},r.createElement("span",{className:"screen-reader-text"},"Categories"),r.createElement("div",{className:"entry-categories-inner"},a.nodes.map((function(e,a){return r.createElement(n.Link,{to:e.uri,key:a,rel:"category tag"},e.name)})))):null}},3314:function(e,a,t){"use strict";var r,n=t(7294),s=t(3761),l=t.n(s),i=t(5444),c=t(8707),o=t.n(c),m=(t(5871),t(306)),u=null==m||null===(r=m.author)||void 0===r?void 0:r.url;a.Z=function(e){var a,t=e.author,r=(e.title,e.date);return t=null===(a=t)||void 0===a?void 0:a.node,n.createElement("div",{className:"post-meta-wrapper post-meta-single post-meta-single-top"},n.createElement("ul",{className:"post-meta"},n.createElement("li",{className:"post-author meta-wrapper"},n.createElement("span",{className:"meta-icon"},n.createElement("span",{className:"screen-reader-text"},"Post author"),n.createElement(i.Link,{to:u},n.createElement(l(),null))),n.createElement("span",{className:"meta-text"},"By"," ",n.createElement(i.Link,{to:u},t.firstName?t.lastName?t.firstName+" "+t.lastName:t.firstName:t.name))),n.createElement("li",{className:"post-date meta-wrapper"},n.createElement("span",{className:"meta-icon"},n.createElement("span",{className:"screen-reader-text"},"Post date"),n.createElement(o(),null)),n.createElement("span",{className:"meta-text"},r))))}},8295:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return d}});var r=t(7294),n=t(492),s=t(7969),l=t(5444),i=t(3314),c=t(8591),o=t(7109),m=function(e){var a=e.post,t=e.isLast;return r.createElement(r.Fragment,null,r.createElement("article",{className:"post-"+a.databaseId+" post type-post status-publish format-standard has-post-thumbnail hentry category-uncategorized",id:"post-"+a.databaseId},r.createElement("header",{className:"entry-header has-text-align-center"},r.createElement("div",{className:"entry-header-inner section-inner medium"},r.createElement(c.Z,{categories:a.categories}),r.createElement("h2",{className:"entry-title heading-size-1"},r.createElement(l.Link,{to:a.uri,dangerouslySetInnerHTML:{__html:a.title}})),r.createElement(i.Z,{title:a.title,author:a.author,date:a.date}))),r.createElement(l.Link,{to:a.uri},r.createElement(o.Z,{image:a.featuredImage})),r.createElement("div",{className:"post-inner thin "},r.createElement("div",{className:"entry-content"},r.createElement("div",{dangerouslySetInnerHTML:{__html:a.excerpt}})))),r.createElement("div",{class:"wp-block-button has-text-align-center"},r.createElement(l.Link,{className:"wp-block-button__link",to:a.uri},"Continue reading")),!t&&r.createElement("hr",{key:a.postId+"-hr",className:"post-separator styled-separator is-style-wide section-inner","aria-hidden":"true"}))},u=t(9756),p=function(e){var a=e.hasPreviousPage,t=e.hasNextPage,n=e.currentPage,s=e.pageCount,i=e.archivePath;return s<=1?null:r.createElement("div",{className:"pagination-wrapper section-inner"},r.createElement("hr",{className:"styled-separator pagination-separator is-style-wide","aria-hidden":"true"}),r.createElement("nav",{className:"navigation pagination",role:"navigation","aria-label":"Posts"},r.createElement("h2",{className:"screen-reader-text"},"Posts navigation"),r.createElement("div",{className:"nav-links"},function(e){var a=e.hasPreviousPage,t=e.currentPage,n=e.archivePath,s=null;return 2===t?s=n:2<t&&(s=n+"page/"+(t-1)),a?r.createElement(l.Link,{className:"prev page-numbers",to:s},r.createElement("span",{"aria-hidden":"true"},"←"),r.createElement("span",{className:"nav-prev-text"},"Newer ",r.createElement("span",{className:"nav-short"},"Posts"))):r.createElement("span",{className:"prev page-numbers placeholder","aria-hidden":"true"},r.createElement("span",{"aria-hidden":"true"},"←"),r.createElement("span",{className:"nav-prev-text"},"Newer ",r.createElement("span",{className:"nav-short"},"Posts")))}({hasPreviousPage:a,currentPage:n,archivePath:i}),function(e){var a=e.currentPage,t=e.pageCount,n=e.archivePath,s=function(e,a,t){if(a)return{tag:"span",children:e,className:"page-numbers"};var r=t?n:n+"page/"+e;return{tag:l.Link,children:e,to:r}},i={tag:"span",children:"…",className:"page-numbers dots"},c=[];if(t>5)if(a<4){for(var o=1;o<=a+1;o++)c.push(s(o,a===o,1===o));c.push(i),c.push(s(t,!1,!1))}else if(a>=t-2){c.push(s(1,!1,!0)),c.push(i);for(var m=a-1;m<t+1;m++)c.push(s(m,a===m,1===m))}else{c.push(s(1,!1,!0)),c.push(i);for(var p=a-1;p<=a+1;p++)c.push(s(p,a===p,1===p));c.push(i),c.push(s(t,!1,!1))}else for(var d=1;d<t+1;d++)c.push(s(d,a===d,1===d));return c.map((function(e,a){var t=e.tag,n=e.children,s=(0,u.Z)(e,["tag","children"]);return r.createElement(t,Object.assign({key:a},s),n)}))}({currentPage:n,pageCount:s,archivePath:i}),function(e){var a=e.hasNextPage,t=e.currentPage,n=e.archivePath;return a?r.createElement(l.Link,{className:"next page-numbers",to:n+"page/"+(t+1)},r.createElement("span",{className:"nav-next-text"},"Older ",r.createElement("span",{className:"nav-short"},"Posts")),"->"):r.createElement("span",{className:"next page-numbers placeholder","aria-hidden":"true"},r.createElement("span",{className:"nav-next-text"},"Older ",r.createElement("span",{className:"nav-short"},"Posts")),"->")}({hasNextPage:t,currentPage:n,archivePath:i}))))},d=function(e){var a=e.data.allWpPost,t=a.nodes,l=a.pageInfo,i=e.pageContext,c=(i.archiveType,i.archivePath),o=i.uri;return r.createElement(n.Z,{bodyClass:"home blog wp-embed-responsive has-no-pagination showing-comments hide-avatars footer-top-visible customize-support"},r.createElement(s.Z,{title:"Home",description:"Welcome to the Twenty Nineteen Theme.",uri:o}),t&&t.map((function(e,a){return r.createElement(m,{key:a,post:e,isLast:a===t.length-1})})),r.createElement(p,Object.assign({},l,{archivePath:c})))}},3761:function(e,a,t){var r=t(7294);function n(e){return r.createElement("svg",e,r.createElement("path",{fill:"",d:"M18,19 C18,19.5522847 17.5522847,20 17,20 C16.4477153,20 16,19.5522847 16,19 L16,17 C16,15.3431458 14.6568542,14 13,14 L5,14 C3.34314575,14 2,15.3431458 2,17 L2,19 C2,19.5522847 1.55228475,20 1,20 C0.44771525,20 0,19.5522847 0,19 L0,17 C0,14.2385763 2.23857625,12 5,12 L13,12 C15.7614237,12 18,14.2385763 18,17 L18,19 Z M9,10 C6.23857625,10 4,7.76142375 4,5 C4,2.23857625 6.23857625,0 9,0 C11.7614237,0 14,2.23857625 14,5 C14,7.76142375 11.7614237,10 9,10 Z M9,8 C10.6568542,8 12,6.65685425 12,5 C12,3.34314575 10.6568542,2 9,2 C7.34314575,2 6,3.34314575 6,5 C6,6.65685425 7.34314575,8 9,8 Z"}))}n.defaultProps={className:"svg-icon","aria-hidden":"true",role:"img",focusable:"false",width:"18",height:"20",viewBox:"0 0 18 20"},e.exports=n,n.default=n},5871:function(e,a,t){var r=t(7294);function n(e){return r.createElement("svg",e,r.createElement("path",{d:"M9.43016863,13.2235931 C9.58624731,13.094699 9.7823475,13.0241935 9.98476849,13.0241935 L15.0564516,13.0241935 C15.8581553,13.0241935 16.5080645,12.3742843 16.5080645,11.5725806 L16.5080645,3.44354839 C16.5080645,2.64184472 15.8581553,1.99193548 15.0564516,1.99193548 L3.44354839,1.99193548 C2.64184472,1.99193548 1.99193548,2.64184472 1.99193548,3.44354839 L1.99193548,11.5725806 C1.99193548,12.3742843 2.64184472,13.0241935 3.44354839,13.0241935 L5.76612903,13.0241935 C6.24715123,13.0241935 6.63709677,13.4141391 6.63709677,13.8951613 L6.63709677,15.5301903 L9.43016863,13.2235931 Z M3.44354839,14.766129 C1.67980032,14.766129 0.25,13.3363287 0.25,11.5725806 L0.25,3.44354839 C0.25,1.67980032 1.67980032,0.25 3.44354839,0.25 L15.0564516,0.25 C16.8201997,0.25 18.25,1.67980032 18.25,3.44354839 L18.25,11.5725806 C18.25,13.3363287 16.8201997,14.766129 15.0564516,14.766129 L10.2979143,14.766129 L6.32072889,18.0506004 C5.75274472,18.5196577 4.89516129,18.1156602 4.89516129,17.3790323 L4.89516129,14.766129 L3.44354839,14.766129 Z"}))}n.defaultProps={className:"svg-icon","aria-hidden":"true",role:"img",focusable:"false",width:"19",height:"19",viewBox:"0 0 19 19"},e.exports=n,n.default=n},8707:function(e,a,t){var r=t(7294);function n(e){return r.createElement("svg",e,r.createElement("path",{fill:"",d:"M4.60069444,4.09375 L3.25,4.09375 C2.47334957,4.09375 1.84375,4.72334957 1.84375,5.5 L1.84375,7.26736111 L16.15625,7.26736111 L16.15625,5.5 C16.15625,4.72334957 15.5266504,4.09375 14.75,4.09375 L13.3993056,4.09375 L13.3993056,4.55555556 C13.3993056,5.02154581 13.0215458,5.39930556 12.5555556,5.39930556 C12.0895653,5.39930556 11.7118056,5.02154581 11.7118056,4.55555556 L11.7118056,4.09375 L6.28819444,4.09375 L6.28819444,4.55555556 C6.28819444,5.02154581 5.9104347,5.39930556 5.44444444,5.39930556 C4.97845419,5.39930556 4.60069444,5.02154581 4.60069444,4.55555556 L4.60069444,4.09375 Z M6.28819444,2.40625 L11.7118056,2.40625 L11.7118056,1 C11.7118056,0.534009742 12.0895653,0.15625 12.5555556,0.15625 C13.0215458,0.15625 13.3993056,0.534009742 13.3993056,1 L13.3993056,2.40625 L14.75,2.40625 C16.4586309,2.40625 17.84375,3.79136906 17.84375,5.5 L17.84375,15.875 C17.84375,17.5836309 16.4586309,18.96875 14.75,18.96875 L3.25,18.96875 C1.54136906,18.96875 0.15625,17.5836309 0.15625,15.875 L0.15625,5.5 C0.15625,3.79136906 1.54136906,2.40625 3.25,2.40625 L4.60069444,2.40625 L4.60069444,1 C4.60069444,0.534009742 4.97845419,0.15625 5.44444444,0.15625 C5.9104347,0.15625 6.28819444,0.534009742 6.28819444,1 L6.28819444,2.40625 Z M1.84375,8.95486111 L1.84375,15.875 C1.84375,16.6516504 2.47334957,17.28125 3.25,17.28125 L14.75,17.28125 C15.5266504,17.28125 16.15625,16.6516504 16.15625,15.875 L16.15625,8.95486111 L1.84375,8.95486111 Z"}))}n.defaultProps={className:"svg-icon","aria-hidden":"true",role:"img",focusable:"false",width:"18",height:"19",viewBox:"0 0 18 19"},e.exports=n,n.default=n},306:function(e){"use strict";e.exports=JSON.parse('{"name":"creative-tech-blog","description":"Creative Tech Blog","license":"SEE LICENSE IN <LICENSE>","private":true,"version":"0.1.0","author":{"name":"Louie Christie","url":"https://www.louiechristie.com"},"scripts":{"develop":"yarn gatsby develop","clean":"yarn gatsby clean","build":"yarn gatsby build","cdev":"yarn gatsby clean && yarn gatsby develop","cbuild":"yarn gatsby clean && yarn gatsby build","start":"yarn develop","serve":"yarn gatsby serve","deploy":"yarn clean && yarn gatsby build --prefix-paths && yarn gh-pages -d public"},"dependencies":{"dotenv":"^9.0.2","gatsby":"^3.5.0","gatsby-plugin-image":"^1.5.0","gatsby-plugin-mailgo":"^0.12.2","gatsby-plugin-manifest":"^3.8.0","gatsby-plugin-notifications":"^0.0.2","gatsby-plugin-react-svg":"^3.0.1","gatsby-plugin-sharp":"^3.5.0","gatsby-source-filesystem":"^3.5.0","gatsby-source-wordpress":"^5.5.0","gatsby-transformer-sharp":"^3.5.0","prop-types":"^15.7.2","react":"^17.0.2","react-dom":"^17.0.2","react-helmet":"^6.1.0"},"devDependencies":{"gh-pages":"^3.2.3","prettier":"^2.3.0"}}')}}]);
//# sourceMappingURL=component---src-templates-archive-js-aa98fe675eb205a555a8.js.map