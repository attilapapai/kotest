(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(143)),o={id:"spring",title:"Spring",sidebar_label:"Spring",slug:"spring.html"},s={unversionedId:"framework/extensions/spring",id:"framework/extensions/spring",isDocsHomePage:!1,title:"Spring",description:"Kotest offers a Spring extension that allows you to test code that wires dependencies using Spring.",source:"@site/docs/framework/extensions/spring.md",slug:"/framework/extensions/spring.html",permalink:"/docs/framework/extensions/spring.html",editUrl:"https://github.com/kotest/kotest/docs/framework/extensions/spring.md",version:"current",sidebar_label:"Spring",sidebar:"framework",previous:{title:"Listeners",permalink:"/docs/framework/listeners.html"},next:{title:"Ktor",permalink:"/docs/framework/extensions/ktor.html"}},c=[{value:"Constructor Injection",id:"constructor-injection",children:[]},{value:"TestContexts",id:"testcontexts",children:[]},{value:"Test Method Callbacks",id:"test-method-callbacks",children:[]},{value:"Final Classes",id:"final-classes",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Kotest offers a Spring extension that allows you to test code that wires dependencies using Spring.\nTo use this extension add the ",Object(i.b)("inlineCode",{parentName:"p"},"kotest-extensions-spring")," module to your test compile path."),Object(i.b)("p",null,"The Spring extension requires you to activate it for all test classes, or per test class. To activate it globally,\nregister the ",Object(i.b)("inlineCode",{parentName:"p"},"SpringExtension")," in ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/framework/project-config.html"}),"project config"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),"class ProjectConfig : AbstractProjectConfig() {\n   override fun extensions() = listOf(SpringExtension)\n}\n")),Object(i.b)("p",null,"To activate it per test class:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),"class MyTestSpec : FunSpec() {\n   override fun extensions() = listOf(SpringExtension)\n}\n")),Object(i.b)("p",null,"In order to let Spring know which configuration class to use, you must annotate your Spec classes with ",Object(i.b)("inlineCode",{parentName:"p"},"@ContextConfiguration"),".\nThis should point to a class annotated with the Spring ",Object(i.b)("inlineCode",{parentName:"p"},"@Configuration")," annotation. Alternatively, you can use ",Object(i.b)("inlineCode",{parentName:"p"},"@ActiveProfile")," to\npoint to a ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.spring.io/spring-boot/docs/current/reference/html/boot-features-profiles.html"}),"specific application context file"),"."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"In Kotest 4.3 and earlier, the Spring extension was called ",Object(i.b)("inlineCode",{parentName:"p"},"SpringListener"),". In 4.4 and later, this extension has been deprecated\nand ",Object(i.b)("inlineCode",{parentName:"p"},"SpringExtension")," is used instead."))),Object(i.b)("h3",{id:"constructor-injection"},"Constructor Injection"),Object(i.b)("p",null,"For constructor injection, Kotest automatically registers a ",Object(i.b)("inlineCode",{parentName:"p"},"SpringAutowireConstructorExtension"),"\nwhen the spring module is added to the build."),Object(i.b)("p",null,"This extension will intercept each call to create a Spec instance\nand will autowire the beans declared in the primary constructor."),Object(i.b)("p",null,"The following example is a test class which requires a service called ",Object(i.b)("inlineCode",{parentName:"p"},"UserService")," in its primary constructor. This service\nclass is just a regular spring bean which has been annotated with @Component."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),'@ContextConfiguration(classes = [(Components::class)])\nclass SpringAutowiredConstructorTest(service: UserService) : WordSpec() {\n  init {\n    "SpringExtension" should {\n      "have autowired the service" {\n        service.repository.findUser().name shouldBe "system_user"\n      }\n    }\n  }\n}\n')),Object(i.b)("h3",{id:"testcontexts"},"TestContexts"),Object(i.b)("p",null,"The Spring extensions makes available the ",Object(i.b)("inlineCode",{parentName:"p"},"TestContextManager")," via the coroutine context that tests execute in. You can\ngain a handle to this instance through the ",Object(i.b)("inlineCode",{parentName:"p"},"testContextManager()")," extension method."),Object(i.b)("p",null,"From this you can get the ",Object(i.b)("inlineCode",{parentName:"p"},"testContext")," that Spring is using."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),'class MySpec(service: UserService) : WordSpec() {\n  init {\n    "SpringExtension" should {\n      "provide the test context manager" {\n         println("The context is " + testContextManager().testContext)\n      }\n    }\n  }\n}\n')),Object(i.b)("h3",{id:"test-method-callbacks"},"Test Method Callbacks"),Object(i.b)("p",null,"Spring has various test callbacks such as ",Object(i.b)("inlineCode",{parentName:"p"},"beforeTestMethod")," that are based around the idea that tests are methods.\nThis assumption is fine for legacy test frameworks like JUnit but not applicable to modern test frameworks like Kotest where tests are functions."),Object(i.b)("p",null,"Therefore, when using a ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/framework/testing-styles.html"}),"spec style")," that is nested, you can customize when the test method callbacks are fired.\nBy default, this is on the leaf node. You can set these to fire on the root nodes by passing a SpringTestLifecycleMode argument to the extension:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),"class ProjectConfig : AbstractProjectConfig() {\n   override fun extensions() = listOf(SpringTestExtension(SpringTestLifecycleMode.Root))\n}\n")),Object(i.b)("h3",{id:"final-classes"},"Final Classes"),Object(i.b)("p",null,"When using a final class, you may receive a warning from Kotest:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Using SpringListener on a final class. If any Spring annotation fails to work, try making this class open")),Object(i.b)("p",null,"If you wish, you can disable this warning by setting the system property ",Object(i.b)("inlineCode",{parentName:"p"},"kotest.listener.spring.ignore.warning")," to true."))}p.isMDXComponent=!0},143:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);