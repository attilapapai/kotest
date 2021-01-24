(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{143:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,d=p["".concat(i,".").concat(m)]||p[m]||b[m]||o;return n?a.a.createElement(d,s(s({ref:t},l),{},{components:n})):a.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(143)),i={id:"instant",title:"Current Instant Listeners",sidebar_label:"Current Instant Listeners",slug:"instant.html"},s={unversionedId:"framework/extensions/instant",id:"framework/extensions/instant",isDocsHomePage:!1,title:"Current Instant Listeners",description:"Current instant listeners",source:"@site/docs/framework/extensions/instant.md",slug:"/framework/extensions/instant.html",permalink:"/docs/framework/extensions/instant.html",editUrl:"https://github.com/kotest/kotest/docs/framework/extensions/instant.md",version:"current",sidebar_label:"Current Instant Listeners",sidebar:"framework",previous:{title:"Allure",permalink:"/docs/framework/extensions/allure.html"},next:{title:"Koin",permalink:"/docs/framework/extensions/koin.html"}},c=[{value:"Current instant listeners",id:"current-instant-listeners",children:[]}],l={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"current-instant-listeners"},"Current instant listeners"),Object(o.b)("p",null,"Sometimes you may want to use the ",Object(o.b)("inlineCode",{parentName:"p"},"now")," static functions located in ",Object(o.b)("inlineCode",{parentName:"p"},"java.time")," classes for multiple reasons, such as setting the creation date of an entity"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"data class MyEntity(creationDate: LocalDateTime = LocalDateTime.now())"),"."),Object(o.b)("p",null,"But what to do when you want to test that value? ",Object(o.b)("inlineCode",{parentName:"p"},"now")," will be different\neach time you call it!"),Object(o.b)("p",null,"For that, Kotest provides ",Object(o.b)("inlineCode",{parentName:"p"},"ConstantNowListener")," and ",Object(o.b)("inlineCode",{parentName:"p"},"withConstantNow")," functions."),Object(o.b)("p",null,"While executing your code, your ",Object(o.b)("inlineCode",{parentName:"p"},"now")," will always be the value that you want to test against."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),"val foreverNow = LocalDateTime.now()\n\nwithConstantNow(foreverNow) {\n  LocalDateTime.now() shouldBe foreverNow\n  delay(10) // Code is taking a small amount of time to execute, but `now` changed!\n  LocalDateTime.now() shouldBe foreverNow\n}\n\n")),Object(o.b)("p",null,"Or, with a listener for all the tests:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),"  override fun listeners() = listOf(\n    ConstantNowTestListener(foreverNow)\n  )\n")),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},Object(o.b)("inlineCode",{parentName:"p"},"withContantNow")," and ",Object(o.b)("inlineCode",{parentName:"p"},"ConstantNowTestListener")," are very sensitive to race conditions. Using them, mocks the static method ",Object(o.b)("inlineCode",{parentName:"p"},"now")," which is global to the whole JVM instance,\nif you're using it while running test in parallel, the results may be inconsistent."))))}u.isMDXComponent=!0}}]);