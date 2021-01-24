(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{143:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),s=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=s.a.createContext({}),u=function(e){var t=s.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return s.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},h=s.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,d=p["".concat(r,".").concat(h)]||p[h]||b[h]||o;return n?s.a.createElement(d,c(c({ref:t},i),{},{components:n})):s.a.createElement(d,c({ref:t},i))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var i=2;i<o;i++)r[i]=n[i];return s.a.createElement.apply(null,r)}return s.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},69:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(3),s=n(7),o=(n(0),n(143)),r={id:"index",title:"Assertions",slug:"assertions.html"},c={unversionedId:"assertions/index",id:"assertions/index",isDocsHomePage:!1,title:"Assertions",description:"Kotest is split into several subprojects which can be used independently. One of these subprojects is",source:"@site/docs/assertions/index.md",slug:"/assertions/assertions.html",permalink:"/docs/assertions/assertions.html",editUrl:"https://github.com/kotest/kotest/docs/assertions/index.md",version:"current",sidebar:"assertions",next:{title:"Matchers",permalink:"/docs/assertions/matchers.html"}},l=[{value:"Multitude of Matchers",id:"multitude-of-matchers",children:[{value:"Custom Matchers",id:"custom-matchers",children:[]}]},{value:"Inspectors",id:"inspectors",children:[]},{value:"Clues",id:"clues",children:[]}],i={rightToc:l};function u(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Kotest is split into several subprojects which can be used independently. One of these subprojects is\nthe comprehensive assertion / matchers support. These can be used with the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/framework/framework.html"}),"Kotest test framework"),",\nor with another test framework like JUnit or Spock."),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://search.maven.org/search?q=kotest"}),Object(o.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/maven-central/v/io.kotest/kotest-assertions-core-jvm.svg?label=release",alt:"version badge"}))),"\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://oss.sonatype.org/content/repositories/snapshots/io/kotest"}),Object(o.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/nexus/s/https/oss.sonatype.org/io.kotest/kotest-assertions-core-jvm.svg?label=snapshot",alt:"version badge"})))),Object(o.b)("h2",{id:"multitude-of-matchers"},"Multitude of Matchers"),Object(o.b)("p",null,"The core functionality of the assertion modules is without doubt the statements that\nconfirm that your test is in the state you expect. For example, to assert that a variable has an expected value, we\nuse the ",Object(o.b)("inlineCode",{parentName:"p"},"shouldBe")," function."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'name shouldBe "sam"\n')),Object(o.b)("p",null,"Kotest calls these types of state assertion functions ",Object(o.b)("em",{parentName:"p"},"matchers"),"."),Object(o.b)("p",null,"There are general purpose matchers, such as ",Object(o.b)("inlineCode",{parentName:"p"},"shouldBe")," as well as matchers for many other specific scenarios,\nsuch as ",Object(o.b)("inlineCode",{parentName:"p"},"str.shouldHaveLength(10)")," and ",Object(o.b)("inlineCode",{parentName:"p"},"file.shouldBeDirectory()"),". They come in both infix and regular variants."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'"substring".shouldContain("str")\n\nuser.email.shouldBeLowerCase()\n\nmyImageFile.shouldHaveExtension(".jpg")\n\ncityMap.shouldContainKey("London")\n')),Object(o.b)("p",null,"There are over 325 matchers spread across multiple modules. Read about all the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/assertions/matchers.html"}),"matchers here"),"."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"withClue")," and ",Object(o.b)("inlineCode",{parentName:"p"},"asClue")," helpers can add extra context to assertions so failures are self explanatory:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'withClue("Name should be present") { user.name shouldNotBe null }\n\ndata class HttpResponse(val status: Int, body: String)\n\nval response = HttpResponse(200, "the content")\nresponse.asClue {\n   it.status shouldBe 200\n   it.body shouldBe "the content"\n}\n')),Object(o.b)("h3",{id:"custom-matchers"},"Custom Matchers"),Object(o.b)("p",null,"It is easy to add your own matchers. Simply extend the ",Object(o.b)("inlineCode",{parentName:"p"},"Matcher<T>")," interface, where T is the type you wish to match against.\nThe Matcher interface specifies one method, ",Object(o.b)("inlineCode",{parentName:"p"},"test"),", which you must implement returning an instance of Result.\nThe Result contains a boolean to indicate if the test passed or failed, and two messages."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),"interface Matcher<in T> {\n   fun test(value: T): MatcherResult\n}\n")),Object(o.b)("p",null,"Matcher is ",Object(o.b)("em",{parentName:"p"},"contravariant")," so a matcher for Number can be used to test an Int, for example."),Object(o.b)("p",null,'The first message should always be in the positive, ie, indicate what "should" happen, and the second message\nis used when the matcher is used with ',Object(o.b)("em",{parentName:"p"},"not"),"."),Object(o.b)("p",null,'For example to create a matcher that checks that a string contains the substring "foo", we can do the following:'),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'fun containFoo() = object : Matcher<String> {\n  override fun test(value: String) = MatcherResult(value.contains("foo"), "String $value should include foo", "String $value should not include foo")\n}\n')),Object(o.b)("p",null,"This matcher could then be used as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'"hello foo" should containFoo()\n"hello bar" shouldNot containFoo()\n')),Object(o.b)("p",null,"And we should then create an extension function version, like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),"fun String.shouldContainFoo() = this should containFoo()\nfun String.shouldNotContainFoo() = this shouldNot containFoo()\n")),Object(o.b)("h2",{id:"inspectors"},"Inspectors"),Object(o.b)("p",null,"Inspectors allow us to test elements in a collection, and assert the quantity of elements that should be\nexpected to pass (all, none, exactly k and so on). For example"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'mylist.forExactly(3) {\n    it.city shouldBe "Chicago"\n}\n')),Object(o.b)("p",null,"Read about ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/assertions/inspectors.html"}),"inspectors here")),Object(o.b)("h2",{id:"clues"},"Clues"),Object(o.b)("p",null,"Sometimes a failed assertion contains enough information in the error message to know what went wrong, and other times the failure just shows that two values didn't match up."),Object(o.b)("p",null,"For example,"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),"user.name shouldNotBe null\n")),Object(o.b)("p",null,"If this failed, you would simply get:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"<null> should not equal <null>\n")),Object(o.b)("p",null,"Which isn't particularly helpful. We can add extra context to failure messages through the use of ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/assertions/clues.html"}),"clues"),"."))}u.isMDXComponent=!0}}]);