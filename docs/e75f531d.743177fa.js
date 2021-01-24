(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{132:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return o}));var n=a(3),r=a(7),l=(a(0),a(143)),i={id:"tags",title:"Grouping Tests with Tags",slug:"tags.html"},b={unversionedId:"framework/tags",id:"framework/tags",isDocsHomePage:!1,title:"Grouping Tests with Tags",description:"Sometimes you don't want to run all tests and Kotest provides tags to be able to determine which",source:"@site/docs/framework/tags.md",slug:"/framework/tags.html",permalink:"/docs/framework/tags.html",editUrl:"https://github.com/kotest/kotest/docs/framework/tags.md",version:"current",sidebar:"framework",previous:{title:"Test Ordering",permalink:"/docs/framework/test-ordering.html"},next:{title:"Closing resources automatically",permalink:"/docs/framework/autoclose.html"}},c=[{value:"Marking Tests",id:"marking-tests",children:[]},{value:"Running with Tags",id:"running-with-tags",children:[]},{value:"Tag Expression Operators",id:"tag-expression-operators",children:[]},{value:"Marking Specs",id:"marking-specs",children:[]},{value:"Gradle",id:"gradle",children:[]}],s={rightToc:c};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Sometimes you don't want to run all tests and Kotest provides tags to be able to determine which\ntests are executed at runtime. Tags are objects inheriting from ",Object(l.b)("inlineCode",{parentName:"p"},"io.kotest.core.Tag"),"."),Object(l.b)("p",null,"For example, to group tests by operating system you could define the following tags:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-kotlin"}),"object Linux : Tag()\nobject Windows: Tag()\n")),Object(l.b)("p",null,"Alternatively, tags can be defined using the ",Object(l.b)("inlineCode",{parentName:"p"},"StringTag")," class. When using this class, observe the following rules:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A tag must not be null or blank."),Object(l.b)("li",{parentName:"ul"},"A tag must not contain whitespace."),Object(l.b)("li",{parentName:"ul"},"A tag must not contain ISO control characters."),Object(l.b)("li",{parentName:"ul"},"A tag must not contain any of the following characters:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"!: exclamation mark"),Object(l.b)("li",{parentName:"ul"},"(: left paren"),Object(l.b)("li",{parentName:"ul"},"): right paren"),Object(l.b)("li",{parentName:"ul"},"&: ampersand"),Object(l.b)("li",{parentName:"ul"},"|: pipe")))),Object(l.b)("p",null,"For example:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-kotlin"}),'val tag = StringTag("Linux")\n')),Object(l.b)("h2",{id:"marking-tests"},"Marking Tests"),Object(l.b)("p",null,"Test cases can then be marked with tags using the ",Object(l.b)("inlineCode",{parentName:"p"},"config")," function:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-kotlin"}),'import io.kotest.specs.StringSpec\n\nclass MyTest : StringSpec() {\n  init {\n    "should run on Windows".config(tags = setOf(Windows)) {\n      // ...\n    }\n\n    "should run on Linux".config(tags = setOf(Linux)) {\n      // ...\n    }\n\n    "should run on Windows and Linux".config(tags = setOf(Windows, Linux)) {\n      // ...\n    }\n  }\n}\n')),Object(l.b)("h2",{id:"running-with-tags"},"Running with Tags"),Object(l.b)("p",null,"Then by invoking the test runner with a system property of ",Object(l.b)("inlineCode",{parentName:"p"},"kotest.tags")," you can control which tests are run. The expression to be\npassed in is a simple boolean expression using boolean operators: ",Object(l.b)("inlineCode",{parentName:"p"},"&"),", ",Object(l.b)("inlineCode",{parentName:"p"},"|"),", ",Object(l.b)("inlineCode",{parentName:"p"},"!"),", with parenthesis for association."),Object(l.b)("p",null,"For example, ",Object(l.b)("inlineCode",{parentName:"p"},"Tag1 & (Tag2 | Tag3)")),Object(l.b)("p",null,"Provide the simple names of tag object (without package) when you run the tests.\nPlease pay attention to the use of upper case and lower case! If two tag objects have the same simple name (in different name spaces) they are treated as the same tag."),Object(l.b)("p",null,"Example: To run only test tagged with ",Object(l.b)("inlineCode",{parentName:"p"},"Linux"),", but not tagged with ",Object(l.b)("inlineCode",{parentName:"p"},"Database"),", you would invoke\nGradle like this:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),'gradle test -Dkotest.tags="Linux & !Database"\n')),Object(l.b)("p",null,"Tags can also be included/excluded in runtime (for example, if you're running a project configuration instead of properties) through the ",Object(l.b)("inlineCode",{parentName:"p"},"RuntimeTagExtension"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-kotlin"}),'RuntimeTagExpressionExtension.expression = "Linux & !Database"\n')),Object(l.b)("h2",{id:"tag-expression-operators"},"Tag Expression Operators"),Object(l.b)("p",null,"Operators (in descending order of precedence)"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Operator"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"!"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"not"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"!macos")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"&"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"and"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"linux & integration")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"|"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"or"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"windows ","|"," microservice")))),Object(l.b)("h2",{id:"marking-specs"},"Marking Specs"),Object(l.b)("p",null,"You can mark all tests in a spec using the tags function in the spec itself."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-kotlin"}),'class MyTestClass : FunSpec({\n\n  tags(Linux, Mysql)\n\n  test("my test") { } // automatically marked with the above tags\n})\n')),Object(l.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"When tagging tests in this way, the Spec will still need to be instantiated in order to retrieve the tags. If no root tests are active at runtime, the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/framework/listeners.html"}),"beforeSpec")," and ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/framework/listeners.html"}),"afterSpec")," callbacks will ",Object(l.b)("em",{parentName:"p"},"not")," be invoked."))),Object(l.b)("p",null,"If you wish to avoid creating the spec class at all then you can annotate a spec using ",Object(l.b)("inlineCode",{parentName:"p"},"@Tags(tag1, ...)"),".\nAny tags added using this annotation apply to all tests in the class, however this will not stop a class from\nbeing instantiated unless explicitly excluded."),Object(l.b)("p",null,"Consider the following example:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-kotlin"}),'@Tags(Linux)\nclass MyTestClass : FunSpec({\n\n  tags(UnitTest)\n\n  beforeSpec { println("Before") }\n\n  test("A").config(tags = setOf(Mysql)) {}\n  test("B").config(tags = setOf(Postgres)) {}\n  test("C") {}\n})\n')),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Property"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Spec Created"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Callbacks"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Outcome"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"kotest.tags=Linux"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A, B, C are executed because all tests inherit the ",Object(l.b)("inlineCode",{parentName:"td"},"Linux")," tag from the annotation")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"kotest.tags=Linux & Mysql"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A is executed only because all tests have the ",Object(l.b)("inlineCode",{parentName:"td"},"Linux")," tag, but only A has the ",Object(l.b)("inlineCode",{parentName:"td"},"Mysql")," tag")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"kotest.tags=!Linux"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No tests are executed, and the MyTestClass is not instantiated because we can exclude it based on the tags annotation")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"kotest.tags=!UnitTest"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No tests are executed because all tests inherit ",Object(l.b)("inlineCode",{parentName:"td"},"UnitTest")," from the tags function. MyTestClass is instantiated in order to retrieve the tags defined in the class. The beforeSpec callback is not executed because there are no active tests.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"kotest.tags=Mysql"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A is executed only, because that is the only test marked with ",Object(l.b)("inlineCode",{parentName:"td"},"Mysql"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"kotest.tags=!Mysql"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"B, C are executed only, because A is excluded by being marked with ",Object(l.b)("inlineCode",{parentName:"td"},"Mysql"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"kotest.tags=Linux & !Mysql"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"B, C are executed only, because all tests inherit ",Object(l.b)("inlineCode",{parentName:"td"},"Linux")," from the annotation, but A is excluded by the ",Object(l.b)("inlineCode",{parentName:"td"},"Mysql")," tag")))),Object(l.b)("h2",{id:"gradle"},"Gradle"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Special attention is needed in your gradle configuration")),Object(l.b)("p",null,"To use System Properties (-Dx=y), your gradle must be configured to propagate them to the test executors, and an extra configuration must be added to your tests:"),Object(l.b)("p",null,"Groovy:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-groovy"}),"test {\n    //... Other configurations ...\n    systemProperties = System.properties\n}\n")),Object(l.b)("p",null,"Kotlin Gradle DSL:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-kotlin"}),"val test by tasks.getting(Test::class) {\n    // ... Other configurations ...\n    systemProperties = System.getProperties().map { it.key.toString() to it.value }.toMap()\n}\n")),Object(l.b)("p",null,"This will guarantee that the system property is correctly read by the JVM"))}o.isMDXComponent=!0},143:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),o=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},p=function(e){var t=o(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=o(a),d=n,m=p["".concat(i,".").concat(d)]||p[d]||u[d]||l;return a?r.a.createElement(m,b(b({ref:t},s),{},{components:a})):r.a.createElement(m,b({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=d;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:n,i[1]=b;for(var s=2;s<l;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);