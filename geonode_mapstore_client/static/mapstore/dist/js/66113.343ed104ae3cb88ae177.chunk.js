(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[66113],{866113:(t,e,n)=>{"use strict";n.d(e,{$F:()=>S,eg:()=>P,Kg:()=>w,PR:()=>T,eK:()=>R,pu:()=>M,Lu:()=>C,W5:()=>D,TQ:()=>L,KR:()=>N,sY:()=>U,vv:()=>G,jq:()=>k,Tr:()=>z,w:()=>W,CK:()=>B,u5:()=>H,z7:()=>V,FW:()=>x,GC:()=>_,yL:()=>X,_O:()=>K,JM:()=>F,bU:()=>J,mm:()=>Y,X6:()=>Z,NR:()=>$,I0:()=>Q,eB:()=>tt,HB:()=>et});var r=n(227361),o=n.n(r),i=n(313311),u=n.n(i),c=n(630998),l=n.n(c),a=n(618446),s=n.n(a),f=n(944908),d=n.n(f),y=n(264721),p=n.n(y),g=n(192579),v=n(274621),m=n(324684);function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function h(t){return function(t){if(Array.isArray(t))return E(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return E(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?E(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function A(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function I(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?A(Object(n),!0).forEach((function(e){O(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function O(t,e,n){return(e=function(t){var e=function(t,e){if("object"!==b(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===b(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var S=function(t){return function(e){return o()(e,(0,g.Ll)("geostory.currentStory.".concat(t),e),"")}},P=function(t){return o()(t,"geostory.isCollapsed",!1)},w=function(t){return o()(t,"geostory.currentStory")},T=function(t){return o()(t,"geostory.currentPage",{})},R=function(t){return o()(t,"geostory.mode")},M=function(t){return function(t){return o()(function(t){return o()(t,"geostory.resource")}(t),"canEdit",!1)}(t)||(0,v.qg)(t)},j=function(t){return o()(w(t),"sections",[])},C=function(t){return j(t).length>0},D=function(t){return o()(t,"geostory.isSettingsEnabled",!1)},L=function(t){var e=o()(w(t),"settings",{}),n=j(t).filter((function(t){var e=t.type;return p()([g.ID.CAROUSEL,g.ID.IMMERSIVE],e)})),r=e.checked||[],i=d()(r.map((function(t){return(0,g.Un)(n,t)})).filter((function(t){return t})));return I(I({},e),{},{expanded:i})},N=function(t){return!s()(o()(w(t),"settings",{}),function(t){return o()(t,"geostory.oldSettings",{})}(t))},U=function(t){return o()(t,"geostory.selectedCard","")},G=function(t){return function(e){return S("".concat(t,".resourceId"))(e)}},k=function(t){return o()(w(t),"resources",[])},z=function(t){return function(e){return u()(k(e),{id:t})}},W=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.withImmersiveSection,n=void 0!==e&&e,r=t.includeAlways,i=void 0===r||r;return function(t){var e=j(t),r=function(t){return o()(L(t),"checked",[]).reduce((function(t,e){return I(I({},t),{},O({},e,!0))}),{})}(t);return e.reduce((function(t,e){if(e.type===g.ID.TITLE&&(i||r[e.id]))return[].concat(h(t),[e]);if(e.type===g.ID.PARAGRAPH&&(i||r[e.id]))return[].concat(h(t),[e]);if(e.type===g.ID.BANNER&&(i||r[e.id]))return[].concat(h(t),[e]);if(e.type===g.ID.CAROUSEL&&(i||r[e.id]))return[].concat(h(t),[e]);if(e.type===g.ID.IMMERSIVE){var o=e.contents&&e.contents.reduce((function(t,e){return i||r[e.id]?[].concat(h(t),[I(I({},e),{},{sectionId:t.id})]):t}),[])||[];return n?[].concat(h(t),[e],h(o)):[].concat(h(t),h(o))}return t}),[])}},B=function(t){return W({includeAlways:!0})(t).length},H=function(t){var e=function(t){var e=T(t);return l()(W({includeAlways:!0})(t),{id:e.columns&&e.columns[e.sectionId]?e.columns[e.sectionId]:e.sectionId||""})}(t);return-1!==e?e:l()(W({includeAlways:!0})(t),{id:T(t).sectionId})},V=function(t){return void 0!==o()(t,"geostory.focusedContent.target")},x=function(t){return o()(t,"geostory.focusedContent")},_=function(t){return S(o()(t,"geostory.focusedContent.path",""))(t)},X=function(t){return j(t).reduce((function(t,e){if(p()([g.ID.IMMERSIVE,g.ID.CAROUSEL],e.type)){var n=e.contents&&e.contents.map((function(t){return{label:t.title||"",value:t.id}}))||[];return[].concat(h(t),[I({label:e.title||"",value:e.id},e.type===g.ID.IMMERSIVE&&{children:n})])}return[].concat(h(t),[{label:e.title||"",value:e.id}])}),[])},q=function t(e,n){var r=n.contents,o=n.background;return n.resourceId===e||!(!o||o.resourceId!==e)||!!r&&!!u()(r,(function(n){return t(e,n)}))},K=function(t,e){return!!u()(j(t),(function(t){return q(e,t)}))},F=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,m.F)(t).includes("geostory/shared")},J=function(t){return o()(t,"geostory.updateUrlOnScroll",!1)},Y=function(t){return o()(t,"geostory.currentStory.settings.theme.fontFamilies",[])},Z=function(t){return o()(t,"geostory.mediaEditorSettings")},$=function(t){var e;return((null===(e=w(t))||void 0===e?void 0:e.sections)||[]).filter((function(t){return t.type===g.ID.CAROUSEL}))},Q=function(t){return function(e){return!!u()($(e),{id:t})}},tt=function(t){return function(e){var n=u()($(e)||[],{id:t});return(null==n?void 0:n.contents)||[]}},et=function(t){var e;return!(null==t||null===(e=t.geostory)||void 0===e||!e.drawOptions)}},274621:(t,e,n)=>{"use strict";n.d(e,{np:()=>r,L3:()=>o,jl:()=>i,y8:()=>u,qg:()=>c}),n(727418),n(227361);var r=function(t){return t&&t.security&&t.security.user},o=function(t){return r(t)&&r(t).role},i=function(t){return t&&t.security&&t.security.user},u=function(t){return t.security&&t.security.token},c=function(t){return"ADMIN"===o(t)}},192579:(t,e,n)=>{"use strict";n.d(e,{gg:()=>L,Ln:()=>N,ID:()=>U,bT:()=>G,tQ:()=>k,Tr:()=>z,nl:()=>W,ZX:()=>B,lg:()=>H,w:()=>V,cy:()=>x,lt:()=>_,M1:()=>X,kn:()=>K,oH:()=>F,Aq:()=>Y,nq:()=>Z,Ll:()=>$,ln:()=>Q,Un:()=>tt,NC:()=>et,t4:()=>nt,NP:()=>rt,bm:()=>ot,_R:()=>it,Km:()=>ut,of:()=>ct,u0:()=>lt,eI:()=>at,Yh:()=>st,c0:()=>ft});var r=n(227361),o=n.n(r),i=n(630998),u=n.n(i),c=n(30084),l=n.n(c),a=n(701469),s=n.n(a),f=n(252628),d=n.n(f),y=n(763105),p=n.n(y),g=n(682492),v=n.n(g),m=n(747037),b=n.n(m),h=n(513218),E=n.n(h),A=n(264721),I=n.n(A),O=n(313880),S=n.n(O),P=n(455877),w=n.n(P);function T(t){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(t)}function R(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function M(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?R(Object(n),!0).forEach((function(e){j(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function j(t,e,n){return(e=function(t){var e=function(t,e){if("object"!==T(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==T(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===T(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function C(t){return function(t){if(Array.isArray(t))return D(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return D(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?D(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var L="EMPTY_CONTENT",N={CASCADE:"cascade"},U={TITLE:"title",PARAGRAPH:"paragraph",IMMERSIVE:"immersive",BANNER:"banner",CAROUSEL:"carousel"},G={TEXT:"text",MEDIA:"media",WEBPAGE:"webPage",COLUMN:"column"},k={MEDIA:"template-media",WEBPAGE:"template-web-page"},z={IMAGE:"image",MAP:"map",VIDEO:"video"},W={EDIT:"edit",VIEW:"view"},B={SHOW_SAVE:"save.show",SHOW_DELETE:"delete.show",LOADING:"loading"},H={StoryTypes:d()(N),SectionTypes:d()(U),MediaTypes:d()(z),Modes:d()(W)},V=function(t){var e=t.theme,n=void 0===e?{}:e,r=t.align,o=void 0===r?"center":r,i=t.size,u=void 0===i?"full":i,c=(null==n?void 0:n.value)||b()(n)&&n,l=c&&"custom"!==c&&b()(c)&&" ms-".concat(c)||"",a=" ms-align-".concat(o),s=u.split(",").map((function(t){return" ms-size-".concat(t)})).join("");return"".concat(l).concat(a).concat(s)},x=function(t){var e=t.theme,n=void 0===e?{}:e,r=t.storyTheme;if(""===n||""===(null==n?void 0:n.value))return E()(r)?r:{};var o=null==n?void 0:n.value,i=null==n?void 0:n[o];return E()(i)&&i||{}},_=function(t){return t.type===U.PARAGRAPH&&t&&s()(t.contents)&&t.contents.length&&s()(t.contents[0].contents)&&t.contents[0].contents.length&&t.contents[0].contents[0].type===G.MEDIA},X=function(t,e){var n=function(t){var e=t.split("?");return 2===e.length?e[0]:t}(t),r=document.getElementById(n);r&&r.scrollIntoView(e)},q={zoomControl:!0,mapInfoControl:!1,mapOptions:{scrollWheelZoom:!1,interactions:{mouseWheelZoom:!1,dragPan:!0}}},K=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return v()({},q,t)},F=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return v()({},t,e)},J=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:RegExp(e,"i");return!e||n.test(t)},Y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:RegExp(e,"i");return p()(t,(function(t){return J(t.data&&(t.data.title||t.data.name),e,n)||J(t.data&&t.data.description,e,n)}))},Z=function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(t){return t};switch(e){case U.TITLE:return{id:w()(),type:U.TITLE,title:n("geostory.builder.defaults.titleTitle"),cover:!1,contents:[{id:w()(),type:G.TEXT,html:"",size:"large",align:"center",theme:"",background:{fit:"cover",size:"full",align:"center"}}]};case U.BANNER:return{id:w()(),type:U.BANNER,title:n("geostory.builder.defaults.titleBanner"),cover:!1,contents:[{id:w()(),background:{fit:"cover",size:"full",align:"center"}}]};case U.PARAGRAPH:return{id:w()(),type:U.PARAGRAPH,title:n("geostory.builder.defaults.titleParagraph"),contents:[{id:w()(),type:G.COLUMN,size:"full",align:"center",contents:[{id:w()(),type:G.TEXT,html:""}]}]};case U.IMMERSIVE:return{id:w()(),type:U.IMMERSIVE,title:n("geostory.builder.defaults.titleImmersive"),contents:[t(G.COLUMN,n("geostory.builder.defaults.titleImmersiveContent"))]};case U.CAROUSEL:return{id:w()(),type:e,title:n("geostory.builder.defaults.titleGeocarousel"),template:e,background:{fit:"cover",size:"full",align:"center"},contents:[t(G.COLUMN,n("geostory.builder.defaults.titleGeocarouselContent"))]};case k.MEDIA:return{id:w()(),type:U.PARAGRAPH,title:n("geostory.builder.defaults.titleMedia"),contents:[{id:w()(),type:G.COLUMN,contents:[{id:w()(),type:G.MEDIA,size:"large",align:"center"}]}]};case k.WEBPAGE:return{id:w()(),type:U.PARAGRAPH,title:n("geostory.builder.defaults.titleWebPageSection"),contents:[{id:w()(),type:G.COLUMN,contents:[{id:w()(),type:G.WEBPAGE,size:"h-medium,v-medium",align:"center"}]}]};case G.COLUMN:return{id:w()(),type:G.COLUMN,align:"left",size:"small",theme:"",title:n,contents:[{id:w()(),type:G.TEXT,html:""}],background:{fit:"cover",size:"full",align:"center"}};case G.TEXT:return{id:w()(),type:G.TEXT,title:n("geostory.builder.defaults.titleText"),html:""};case G.IMAGE:return{id:w()(),type:e,title:n("geostory.builder.defaults.titleMedia"),size:"full",align:"center"};case G.WEBPAGE:return{id:w()(),type:e,title:n("geostory.builder.defaults.titleWebPage"),size:"h-full,v-medium",align:"center"};case G.MEDIA:return{id:w()(),type:e,title:n("geostory.builder.defaults.titleUnknown"),size:"large",align:"center"};default:return{id:w()(),type:e,title:n("geostory.builder.defaults.titleUnknown"),size:"full",align:"center"}}},$=function(t,e){return l()(t).reduce((function(t,n){if(n&&0===n.indexOf("{")){var r=JSON.parse(n),i=o()(e,t),c=u()(i,r);return c>=0?[].concat(C(t),[c]):t}return[].concat(C(t),[n])}),[])},Q=function(t,e){return l()(t).reduce((function(t,n){var r=t.path,i=t.flatPath;if(n&&0===n.indexOf("{")){var c=JSON.parse(n),l=o()(e,r),a=u()(l,c);if(a>=0){var s=l[a],f=s.id,d=s.type;return{path:[].concat(C(r),[a]),flatPath:[].concat(C(i),[{id:f,type:r[r.length-1],contentType:d}])}}return{path:r,flatPath:i}}return{path:[].concat(C(r),[n]),flatPath:i}}),{path:[],flatPath:[]})},tt=function(t,e){return t.reduce((function(t,n){return I()(n.contents.map((function(t){return t.id})),e)?n.id:t}),null)},et=function(t){return t.type===U.PARAGRAPH&&!1!==t.editURL&&t&&s()(t.contents)&&t.contents.length&&s()(t.contents[0].contents)&&t.contents[0].contents.length&&t.contents[0].contents[0].type===G.WEBPAGE&&!1!==t.contents[0].contents[0].editURL},nt=function(t,e){if(e)switch(t){case"small":return.4*e;case"medium":return.6*e;case"large":return.8*e;default:return e}return 0},rt=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0;if(!e.includes(n))return null;var i=e.substring(e.indexOf(n)).split("/");return r&&n?i.length>1&&i[2]&&Number(i[0])===n?5===i.length?S()(t,"".concat(i[2],"/column/").concat(i[4]),"".concat(r)):S()(t,"".concat(i[2]),"".concat(r)):(e.includes("shared"),""!==i[1]?"".concat(t,"/section/").concat(r):"".concat(t,"section/").concat(r)):!r&&o&&b()(o)&&"EMPTY"!==o&&i.length>1?e.includes("shared")&&!i[2]?t:5===i.length?S()(t,"".concat(i[4]),"".concat(o)):"".concat(t,"/column/").concat(o):null},ot=function(t,e,n){var r={active:e,inactive:n,custom:{families:[],urls:[]}};return t.filter((function(t){return!!t.src})).forEach((function(t,e){r.custom.families[e]=t.family,r.custom.urls[e]=t.src})),r},it=function(t){return t.map((function(t){return t.family}))},ut=["inherit","Arial","Georgia","Impact","Tahoma","Times New Roman","Verdana"],ct=function(){return window.location.href.match("geostory-embedded")?"geostoryEmbedded":"geostory"},lt=function(t){var e=function(t){try{var e;return null===(e=JSON.parse(t))||void 0===e?void 0:e.id}catch(t){return null}},n=l()(t)||[];return{sectionId:e(null==n?void 0:n[1]),contentId:e(null==n?void 0:n[3]),innerContentId:e(null==n?void 0:n[5])}},at=function(){var t=arguments.length>1?arguments[1]:void 0;return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map((function(e){return t.sectionId===e.id?M(M({},e),{},{contents:(e.contents||[]).map((function(e){return M(M({},e),{},{hideContent:e.id!==t.showContentId})}))}):e}))};function st(t){var e=t.id,n=t.contents,r=t.featureStyle;return M(M({visibility:!0,handleClickOnLayer:!0},t.layerOptions),{},{id:"geostory-vector-".concat(e),name:"geostory-vector-".concat(e),type:"vector",features:n.reduce((function(t,e,n){return[].concat(C(t),C(((null==e?void 0:e.features)||[]).map((function(t){return M(M({},t),{},{contentRefId:e.id},r&&{style:r({content:e,feature:t},n)})}))||[]))}),[]).reverse()})}var ft=function(t,e,n,r,o){return M(M(M({},t),{},{iconText:"".concat(u()(e,(function(t){var e=t.id;return n.id===e}))+1)},o.style),{},{highlight:r===n.id})}}}]);