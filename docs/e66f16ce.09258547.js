(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{131:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(143)),s={id:"gens",title:"Generators",slug:"property-test-generators.html"},i={unversionedId:"proptest/gens",id:"proptest/gens",isDocsHomePage:!1,title:"Generators",description:"Generated values are provided by instances of the sealed class Gen.",source:"@site/docs/proptest/gens.md",slug:"/proptest/property-test-generators.html",permalink:"/docs/proptest/property-test-generators.html",editUrl:"https://github.com/kotest/kotest/docs/proptest/gens.md",version:"current",sidebar:"proptest",previous:{title:"Property Test Functions",permalink:"/docs/proptest/property-test-functions.html"},next:{title:"Generators List",permalink:"/docs/proptest/property-test-generators-list.html"}},l=[{value:"Arbitrary",id:"arbitrary",children:[]},{value:"Exhaustive",id:"exhaustive",children:[]}],p={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Generated values are provided by instances of the sealed class ",Object(o.b)("inlineCode",{parentName:"p"},"Gen"),".\nYou can think of a ",Object(o.b)("inlineCode",{parentName:"p"},"Gen")," as kind of like an input stream but for property test values.\nEach Gen will provide a (usually) infinite stream of these values for one particular type."),Object(o.b)("p",null,"Kotest has two types of generators - ",Object(o.b)("inlineCode",{parentName:"p"},"Arb")," for generating arbitrary (random) values and ",Object(o.b)("inlineCode",{parentName:"p"},"Exhaustive")," for generating a finite set of values in a closed space."),Object(o.b)("p",null,"Both types of gens can be mixed and matched in property tests. For example,\nyou could test a function with 100 random positive integers (an arb) alongside every\neven number from 0 to 200 (exhaustive)."),Object(o.b)("p",null,"Some generators are only available on the JVM. See the full list ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/proptest/property-test-generators-list.html"}),"here"),"."),Object(o.b)("h2",{id:"arbitrary"},"Arbitrary"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Arb"),"s generate two types of values - a hard coded set of ",Object(o.b)("em",{parentName:"p"},"edge cases")," and an infinite stream of ",Object(o.b)("em",{parentName:"p"},"randomly chosen values"),"."),Object(o.b)("p",null,"The random values may be repeated, and some values may never be generated at all.\nFor example generating 1000 random integers between 0 and Int.MAX will clearly not return all possible values,\nand some values may happen to be generated more than once. Similarly, generating 1000 random integers between 0 and 500,\nwill definitely result in some values appearing more than once."),Object(o.b)("p",null,"Typical arbs include numbers with or without a range, strings in the unicode set,\nrandom lists, data classes with random parameters, emails, codepoints, chars and much more."),Object(o.b)("p",null,'In addition to the random values, arbs may provide edge cases. One of the design features of Kotest\'s property testing is\nthat values for some types will always include "common" edge cases that you probably want to be included in your tests.'),Object(o.b)("p",null,'For example, when testing a function that accepts an integer, you probably want to ensure that at the very least, it is tested with\nzero, a positive number and a negative number. If only random values were provided, the chances of zero appearing would be fairly low,\nso Kotest will always provide some "edge cases" for integers (unless you specify otherwise).'),Object(o.b)("p",null,"These edge cases are enumerated first, then the random values are used."),Object(o.b)("p",null,"Not all arbs have edge cases, but the arbs for the most common types do. Here are some examples of edge cases used by certain arbs:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"ints: 0, 1, -1, Int.MAX_VALUE, Int.MIN_VALUE"),Object(o.b)("li",{parentName:"ul"},"strings: empty string, string of min length"),Object(o.b)("li",{parentName:"ul"},"lists: empty list"),Object(o.b)("li",{parentName:"ul"},"maps: empty map"),Object(o.b)("li",{parentName:"ul"},"nullable values: null")),Object(o.b)("h2",{id:"exhaustive"},"Exhaustive"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Exhaustive"),"s generate all values from a given space. This is useful when you want to ensure every\nvalue in that space is used. For example, for enum values, it is usually more helpful to ensure each\nenum is used, rather than picking randomly from the enums values and potentially missing some and duplicating others."),Object(o.b)("p",null,"Typical exhaustives include small collections, enums, boolean values, powerset of a list or set,\npre-defined integer ranges, and predefined string ranges."))}u.isMDXComponent=!0},143:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),b=r,m=c["".concat(s,".").concat(b)]||c[b]||d[b]||o;return n?a.a.createElement(m,i(i({ref:t},p),{},{components:n})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);