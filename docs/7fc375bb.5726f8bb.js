(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{143:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,f=p["".concat(i,".").concat(b)]||p[b]||m[b]||o;return r?a.a.createElement(f,s(s({ref:t},c),{},{components:r})):a.a.createElement(f,s({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},97:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(143)),i={id:"junit_xml",title:"JUnit XML Format Reporter",sidebar_label:"JUnit XML",slug:"junit_xml.html"},s={unversionedId:"framework/extensions/junit_xml",id:"framework/extensions/junit_xml",isDocsHomePage:!1,title:"JUnit XML Format Reporter",description:"JUnit includes an XML report generator that it calls the legacy xml report.",source:"@site/docs/framework/extensions/junit_xml.md",slug:"/framework/extensions/junit_xml.html",permalink:"/docs/framework/extensions/junit_xml.html",editUrl:"https://github.com/kotest/kotest/docs/framework/extensions/junit_xml.md",version:"current",sidebar_label:"JUnit XML",sidebar:"framework",previous:{title:"MockServer",permalink:"/docs/framework/extensions/mockserver.html"},next:{title:"Allure",permalink:"/docs/framework/extensions/allure.html"}},l=[{value:"Parameters",id:"parameters",children:[]}],c={rightToc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"JUnit includes an XML report generator that it calls the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://junit.org/junit5/docs/5.5.0-RC2/api/org/junit/platform/reporting/legacy/xml/LegacyXmlReportGeneratingListener.html"}),"legacy xml report"),".\nMany tools integrate with this format so it is very useful.\nHowever, this report has no concept of nesting tests.\nTherefore when used with a nested ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/framework/testing-styles.html"}),"test style")," in Kotest, it will include parent tests as orphans."),Object(o.b)("p",null,"To solve this, Kotest has it's own implementation of the same format, that is configurable on whether to include parent tests and/or collapse the names."),Object(o.b)("p",null,"To set this up, we need to add the ",Object(o.b)("inlineCode",{parentName:"p"},"JunitXmlReporter")," to our project through ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/framework/project-config.html"}),"project config"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-kotlin"}),"class MyConfig : AbstractProjectConfig() {\n   override fun listeners(): List<Listener> = listOf(\n      JunitXmlReporter(\n         includeContainers = false,\n         useTestPathAsName = true\n      )\n   )\n}\n")),Object(o.b)("p",null,"Additionally, the reporter needs to know where your build output folder is by setting a system property, so we configure that in the tests block in gradle."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-kotlin"}),'tasks.named<Test>("test") {\n   useJUnitPlatform()\n   systemProperty("gradle.build.dir", project.buildDir)\n}\n')),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,"The reporter has two parameters:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"includeContainers")," when true, all intermediate tests are included in the report as tests in their own right. Defaults to false."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"useTestPathAsName")," when true, the full test path will be used as the name. In other words the name will include the name of any parent tests as a single string.")))}u.isMDXComponent=!0}}]);