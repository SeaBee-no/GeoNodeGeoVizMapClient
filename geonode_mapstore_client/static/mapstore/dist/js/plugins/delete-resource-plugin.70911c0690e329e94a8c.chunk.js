(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[1157,47310,2095],{921914:(e,t,n)=>{"use strict";n.d(t,{XL:()=>o,km:()=>a,Ih:()=>i,Xw:()=>l,Pn:()=>u,DZ:()=>c,e8:()=>s,E0:()=>d,F9:()=>f,X_:()=>E,pb:()=>p,qb:()=>m,Re:()=>y,ih:()=>O,xy:()=>v,jL:()=>g,oz:()=>b,ph:()=>h,lF:()=>_,gG:()=>R,cb:()=>T,GI:()=>N,B1:()=>S,fv:()=>D,gc:()=>C,zX:()=>I,ZF:()=>P,Zb:()=>w,DW:()=>A,Xp:()=>U,Fm:()=>G,sV:()=>j,Mn:()=>M,LU:()=>F,XP:()=>k,WU:()=>L,JB:()=>x,g:()=>z,ws:()=>Z,HP:()=>H,aN:()=>Y,Pg:()=>B,u0:()=>W,TM:()=>X,PM:()=>Q,lK:()=>V,sv:()=>K,MO:()=>$,oO:()=>J,Mc:()=>ee,Zw:()=>te,RA:()=>ne,am:()=>re,ZM:()=>oe,wm:()=>ae,Y$:()=>ie,Qu:()=>le,kT:()=>ue});var r=n(647310),o="LOAD_FEATURE_INFO",a="ERROR_FEATURE_INFO",i="EXCEPTIONS_FEATURE_INFO",l="CHANGE_MAPINFO_STATE",u="NEW_MAPINFO_REQUEST",c="PURGE_MAPINFO_RESULTS",s="CHANGE_MAPINFO_FORMAT",d="SHOW_MAPINFO_MARKER",f="HIDE_MAPINFO_MARKER",E="SHOW_REVERSE_GEOCODE",p="HIDE_REVERSE_GEOCODE",m="GET_VECTOR_INFO",y="NO_QUERYABLE_LAYERS",O="CLEAR_WARNING",v="FEATURE_INFO_CLICK",g="IDENTIFY:UPDATE_FEATURE_INFO_CLICK_POINT",b="IDENTIFY:TOGGLE_HIGHLIGHT_FEATURE",h="TOGGLE_MAPINFO_STATE",_="UPDATE_CENTER_TO_MARKER",R="IDENTIFY:CHANGE_PAGE",T="IDENTIFY:CLOSE_IDENTIFY",N="IDENTIFY:CHANGE_FORMAT",S="IDENTIFY:TOGGLE_SHOW_COORD_EDITOR",D="IDENTIFY:EDIT_LAYER_FEATURES",C="IDENTIFY:CURRENT_EDIT_FEATURE_QUERY",I="IDENTIFY:SET_MAP_TRIGGER",P="IDENTIFY:TOGGLE_EMPTY_MESSAGE_GFI",w="IDENTIFY:SET_SHOW_IN_MAP_POPUP",A="IDENTIFY:IDENTIFY_IS_MOUNTED",U="IDENTIFY:INIT_PLUGIN";function G(e,t,n,r,a){return{type:o,data:t,reqId:e,requestParams:n,layerMetadata:r,layer:a}}function j(e,t,n,r){return{type:a,error:t,reqId:e,requestParams:n,layerMetadata:r}}function M(e,t,n,r){return{type:i,reqId:e,exceptions:t,requestParams:n,layerMetadata:r}}function F(){return{type:y}}function k(){return{type:O}}function L(e,t){return{type:u,reqId:e,request:t}}function x(e,t,n,r){return{type:m,layer:e,request:t,metadata:n,queryableLayers:r}}function z(){return{type:c}}function Z(e){return{type:s,infoFormat:e}}function H(){return{type:d}}function Y(){return{type:f}}function q(e){return{type:E,reverseGeocodeData:e.data}}function B(e){return function(t){r.Z.reverseGeocode(e).then((function(e){t(q(e))})).catch((function(e){t(q(e))}))}}function W(){return{type:p}}function X(){return{type:h}}function Q(e){return{type:_,status:e}}function V(e,t){return{type:v,point:e,layer:t,filterNameList:arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],overrideParams:arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},itemId:arguments.length>4&&void 0!==arguments[4]?arguments[4]:null}}function K(e){return{type:g,point:e}}function $(e){return{type:b,enabled:e}}function J(e){return{type:R,index:e}}var ee=function(){return{type:T}},te=function(e){return{type:N,format:e}},ne=function(e){return{type:S,showCoordinateEditor:e}},re=function(e){return{type:D,layer:e}},oe=function(e){return{type:C,query:e}},ae=function(e){return{type:I,trigger:e}},ie=function(e){return{type:w,value:e}},le=function(e){return{type:A,isMounted:e}},ue=function(e){return{type:U,cfg:e}}},647310:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(375875),o=n.n(r),a=n(472500),i=n.n(a),l=n(727418),u=n.n(l),c={format:"json",bounded:0,polygon_geojson:1,priority:5};const s={geocode:function(e,t){var n=u()({q:e},c,t||{}),r=i().format({protocol:"https",host:"nominatim.openstreetmap.org",query:n});return o().get(r)},reverseGeocode:function(e,t){var n=u()({lat:e.lat,lon:e.lng},t||{},c),r=i().format({protocol:"https",host:"nominatim.openstreetmap.org/reverse",query:n});return o().get(r)}}},807472:(e,t,n)=>{"use strict";n.d(t,{Z:()=>T});var r=n(727418),o=n.n(r),a=n(675263),i=n.n(a),l=n(124852),u=n.n(l),c=n(485294),s=n.n(c),d=n(472986),f=n.n(d),E=n(805346);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,_(r.key),r)}}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function h(e,t,n){return(t=_(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _(e){var t=function(e,t){if("object"!==p(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===p(t)?t:String(t)}var R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(l,e);var t,n,r,a,i=(r=l,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(r);if(a){var n=b(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return g(e)}(this,e)});function l(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return h(g(e=i.call.apply(i,[this].concat(n))),"renderLoading",(function(){return e.props.maskLoading?u().createElement("div",{style:{width:"100%",height:"100%",position:"absolute",overflow:"visible",margin:"auto",verticalAlign:"center",left:"0",background:"rgba(255, 255, 255, 0.5)",zIndex:2}},u().createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -40%)"}},u().createElement(E.Z,{msgId:"loading"}),u().createElement(f(),{spinnerName:"circle",noFadeIn:!0,overrideSpinnerClassName:"spinner"}))):null})),h(g(e),"renderRole",(function(t){return u().Children.toArray(e.props.children).filter((function(e){return e.props.role===t}))})),h(g(e),"hasRole",(function(t){return u().Children.toArray(e.props.children).filter((function(e){return e.props.role===t})).length>0})),h(g(e),"onClickOut",(function(t){e.props.onClickOut&&e.mask===t.target&&e.props.onClickOut(t)})),e}return t=l,(n=[{key:"render",value:function(){var e=this,t=u().createElement("div",{id:this.props.id,style:y({},this.props.style),className:"".concat(this.props.draggable?"modal-dialog-draggable":""," ").concat(this.props.className," modal-dialog-container")},u().createElement("div",{className:this.props.headerClassName+" draggable-header"},this.renderRole("header")),u().createElement("div",{className:this.props.bodyClassName},this.renderLoading(),this.renderRole("body")),this.hasRole("footer")?u().createElement("div",{className:this.props.footerClassName},this.renderRole("footer")):u().createElement("span",null)),n=this.props.draggable?u().createElement(s(),{defaultPosition:this.props.start,bounds:this.props.bounds,handle:".draggable-header, .draggable-header *"},t):t,r=o()({},this.props.style.display?{display:this.props.style.display}:{},this.props.backgroundStyle);return this.props.modal?u().createElement("div",{ref:function(t){e.mask=t},onClick:this.onClickOut,style:r,className:"fade in modal "+this.props.containerClassName,role:"dialog"},n):n}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),l}(u().Component);h(R,"propTypes",{id:i().string.isRequired,style:i().object,backgroundStyle:i().object,className:i().string,maskLoading:i().bool,containerClassName:i().string,headerClassName:i().string,bodyClassName:i().string,footerClassName:i().string,onClickOut:i().func,modal:i().bool,start:i().object,draggable:i().bool,bounds:i().oneOfType([i().string,i().object])}),h(R,"defaultProps",{style:{},backgroundStyle:{background:"rgba(0,0,0,.5)"},start:{x:0,y:150},className:"modal-dialog modal-content",maskLoading:!1,containerClassName:"",headerClassName:"modal-header",bodyClassName:"modal-body",footerClassName:"modal-footer",modal:!1,draggable:!0,bounds:"parent"});const T=R},975480:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(124852),o=n.n(r);const a=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).style,t=void 0===e?{display:"inline-block"}:e;return o().createElement("div",{style:t,className:"mapstore-inline-loader"})}},399534:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(461365),o=n(356936);const a=(0,r.Z)(o.h_)},694745:(e,t,n)=>{"use strict";n.d(t,{Z:()=>y});var r=n(124852),o=n.n(r),a=n(294184),i=n.n(a),l=n(480681),u=n(807472),c=n(80717),s=n(867076),d=n(819081),f=n.n(d),E=n(975480),p={xs:" ms-xs",sm:" ms-sm",md:"",lg:" ms-lg"},m={className:{vertical:" ms-fullscreen-v",horizontal:" ms-fullscreen-h",full:" ms-fullscreen"},glyph:{expanded:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-small"},collapsed:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-full"}}};const y=(0,s.withState)("fullscreenState","onFullscreen",(function(e){var t=e.initialFullscreenState;return void 0===t?"collapsed":t}))((function(e){var t=e.show,n=void 0!==t&&t,r=e.loading,a=e.loadingText,s=e.onClose,d=void 0===s?function(){}:s,y=e.title,O=void 0===y?"":y,v=e.clickOutEnabled,g=void 0===v||v,b=e.showClose,h=void 0===b||b,_=e.disabledClose,R=void 0!==_&&_,T=e.showFullscreen,N=void 0!==T&&T,S=e.fullscreenType,D=void 0===S?"full":S,C=e.buttons,I=void 0===C?[]:C,P=e.size,w=void 0===P?"":P,A=e.bodyClassName,U=void 0===A?"":A,G=e.children,j=e.draggable,M=void 0!==j&&j,F=e.fullscreenState,k=e.onFullscreen,L=e.fade,x=void 0!==L&&L,z=e.fitContent,Z=e.modalClassName,H=void 0===Z?"":Z,Y=e.dialogClassName,q=void 0===Y?"":Y,B=e.enableFooter,W=void 0===B||B,X=p[w]||"",Q=N&&"expanded"===F&&m.className[D]||"",V=n?o().createElement("div",{className:"modal-fixed ".concat(H," ")+(M?"ms-draggable":"")},o().createElement(u.Z,{id:"ms-resizable-modal",style:{display:"flex"},onClickOut:g?d:function(){},containerClassName:"ms-resizable-modal",draggable:M,modal:!0,className:i()("modal-dialog modal-content",X,Q,q,{"ms-fit-content":z})},o().createElement("span",{role:"header"},o().createElement("h4",{className:"modal-title"},o().createElement("div",{className:"ms-title"},O),N&&m.className[D]&&o().createElement(l.Glyphicon,{className:"ms-header-btn",onClick:function(){return k("expanded"===F?"collapsed":"expanded")},glyph:m.glyph[F][D]}),h&&d&&o().createElement(l.Glyphicon,{glyph:"1-close",className:"ms-header-btn",onClick:d,disabled:R}))),o().createElement("div",{role:"body",className:U},G),W&&o().createElement("div",{style:{display:"flex"},role:"footer"},o().createElement("div",{className:"ms-resizable-modal-loading-spinner-container"},r?o().createElement(E.Z,null):null),o().createElement("div",{className:"ms-resizable-modal-loading-text"},r?a:null),o().createElement(c.Z,{buttons:I})))):null;return x?o().createElement(f(),{transitionName:"ms-resizable-modal-fade",transitionEnterTimeout:300,transitionLeaveTimeout:300},V):V}))},925108:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var r=n(782904),o=n(727418),a=n.n(o),i=n(921914);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===l(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.kM:var n=t.property||"enabled";return a()({},e,s({},t.control,a()({},e[t.control],s({},n,!(e[t.control]||{})[n]))));case r.At:return!0===t.toggle&&e[t.control]&&e[t.control][t.property]===t.value?a()({},e,s({},t.control,a()({},e[t.control],s({},t.property,void 0)))):a()({},e,s({},t.control,a()({},e[t.control],s({},t.property,t.value))));case r.dc:return a()({},e,s({},t.control,a()({},e[t.control],t.properties)));case r.l:var o=Object.keys(e).filter((function(e){return-1===(t.skip||[]).indexOf(e)})).reduce((function(t,n){return a()(t,s({},n,a()({},e[n],!0===e[n].enabled?{enabled:!1}:{})))}),{});return a()({},e,o);case i.DW:return c(c({},e),{},{info:c(c({},e.info),{},{available:t.isMounted})});default:return e}}},55237:(e,t,n)=>{"use strict";n.d(t,{tr:()=>h,jb:()=>_,Xu:()=>R,un:()=>T,Qn:()=>N,_q:()=>S,og:()=>D,$4:()=>C,kN:()=>I,oD:()=>P,V$:()=>w,uH:()=>A,pC:()=>U,tz:()=>G,p:()=>j});var r=n(747037),o=n.n(r),a=n(647960),i=n.n(a),l=n(227361),u=n.n(l),c=n(984596),s=n.n(c),d=n(730381),f=n.n(d),E=n(86638);function p(e){return function(e){if(Array.isArray(e))return O(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||y(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,l=[],u=!0,c=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(c)throw o}}return l}}(e,t)||y(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){if(e){if("string"==typeof e)return O(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?O(e,t):void 0}}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var v=/PT?[\d\.]+[YMWDHMS]/,g=function(e){return e?o()(e)?new Date(e).getTime():(i()(e)&&e.getTime(),e):null},b=function(e){var t=e.start,n=e.end,r=e.duration,o=f().duration(r).asMilliseconds();return(new Date(n).getTime()-new Date(t).getTime())/o},h=function(e){for(var t=e.start,n=e.end,r=e.duration,o=f().duration(r).asMilliseconds(),a=[],i=new Date(t),l=new Date(n);i<=l;)a.push(new Date(i).toISOString()),i.setTime(i.getTime()+o);return a},_=function(e){var t=e.start,n=e.end,r=e.duration;return h({start:t,end:n,duration:r}).map((function(e){return{start:new Date(e),end:new Date(new Date(e).getTime()+f().duration(r).asMilliseconds())}}))},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.start,n=e.end,r=e.duration,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=o.start,i=o.end;if(!a||!i)return{count:b({start:t,end:n,duration:r}),start:t,end:n};var l=f().duration(r).asMilliseconds(),u=new Date(t).getTime(),c=new Date(n).getTime(),s=new Date(a).getTime(),d=new Date(i).getTime(),E=Math.ceil((s-u)/l),p=Math.floor((d-u)/l),m=Math.floor((c-u)/l);if(E>=0&&p<=m){var y=p-E;return{start:new Date(u+Math.max(0,E)*l),end:new Date(u+Math.min(m,p)*l),count:y}}return{count:b({start:t,end:n,duration:r}),start:t,end:n}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.start,n=e.end,r=arguments.length>1?arguments[1]:void 0,o=new Date(t),a=new Date(n),i=Math.floor(a.getTime()-o.getTime())/r;return{range:{start:t,end:n},resolution:f().duration(i).toISOString().match(v)[0]}},N=function(){var e,t,n=arguments.length>1?arguments[1]:void 0,r=(e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],(t=arguments.length>2?arguments[2]:void 0)?e.map((function(e){var n=m(e.split("/"),2);return{start:n[0],end:n[1]}[t]})):e);return r[function(e,t){var n=g(t),r=1/0,o=-1;return e.forEach((function(e,t){var a=g(e),i=Math.abs(a-n);i<r&&(r=i,o=t)})),o}(r,n)]},S=function(e){return e&&e.indexOf&&e.indexOf("--")>0},D=function(e,t){var n=f()(e).diff(t);return{start:n>=0?t:e,end:n>=0?e:t}},C=function(e){return 6e4*e.getTimezoneOffset()},I=function(e){var t=e;!i()(e)&o()(e)&&(t=new Date(e));var n=t.getUTCHours();n=n<10?"0"+n:n;var r=t.getUTCMinutes();r=r<10?"0"+r:r;var a=t.getUTCSeconds();return a=a<10?"0"+a:a,"".concat(n,":").concat(r,":").concat(a)},P=function(e){var t=e;!i()(e)&o()(e)&&(t=new Date(e));var n=t.getUTCMonth()+1,r=t.getUTCDate();return n=n<10?"0"+n:n,r=r<10?"0"+r:r,"".concat(t.getUTCFullYear(),"-").concat(n,"-").concat(r)},w=function(e,t){var n=(0,E.mh)(e),r="HH:mm:SS";switch(t){case"time":return r;case"date":return n;default:return n+" "+r}},A=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).Domains,t=void 0===e?{}:e,n=arguments.length>1?arguments[1]:void 0,r=s()(t.DimensionDomain||[]).concat(),o=t["@version"]||t.version,a=u()(t,"SpaceDomain.BoundingBox");return a&&r.push({Identifier:"space",Domain:a}),r.map((function(e){var t=e.Identifier,r=e.Domain;return{source:{type:"multidim-extension",version:o,url:n},name:t,domain:r}}))},U=function(e,t,n){var r=g(t),o=g(n);return e.reduce((function(e,t){var n=g(t);return g(r)<n&&g(o)>n?[].concat(p(e),[t]):p(e)}),[])},G=function(e){var t=e.reduce((function(e,t){if(-1!==t.indexOf("/")){var n=m(t.split("/"),2),r=n[0],o=n[1];return[].concat(p(e),[r,o])}return[].concat(p(e),[t])}),[]).sort();return[t[0],t[t.length-1]]},j=function(e,t,n){var r=f()(e);return("add"===n?r.add(t,"seconds"):r.subtract(t,"seconds")).toISOString()}},643892:(e,t,n)=>{"use strict";n.d(t,{W:()=>r,Zf:()=>o,Eu:()=>a,Vy:()=>i,YB:()=>l,xm:()=>u,_f:()=>c,ek:()=>s,cd:()=>d,pt:()=>f,ww:()=>E,tR:()=>p,Js:()=>m,p2:()=>y,ZH:()=>O,eQ:()=>v,ql:()=>g,$X:()=>b,nS:()=>h,ih:()=>_,J5:()=>R,uA:()=>T,Pv:()=>N,_Z:()=>S,dh:()=>D,IH:()=>C,e3:()=>I,Oq:()=>P,Q$:()=>w,DF:()=>A,id:()=>U,Br:()=>G,bI:()=>j,U5:()=>M,e5:()=>F,b3:()=>k,mN:()=>L,QN:()=>x,HV:()=>z,xe:()=>Z,vA:()=>H,gw:()=>Y,qs:()=>q,CB:()=>B,vg:()=>W,Z0:()=>X,lf:()=>Q,jQ:()=>V,nk:()=>K,X7:()=>$,nO:()=>J,F4:()=>ee,EU:()=>te,Rk:()=>ne,V1:()=>re});var r="GEONODE:RESOURCE_LOADING",o="GEONODE:SET_RESOURCE",a="GEONODE:RESOURCE_ERROR",i="GEONODE:UPDATE_RESOURCE_PROPERTIES",l="GEONODE:SET_RESOURCE_TYPE",u="GEONODE:SET_NEW_RESOURCE",c="GEONODE:SET_RESOURCE_ID",s="GEONODE:SET_RESOURCE_PERMISSIONS",d="GEONODE:EDIT_TITLE_RESOURCE",f="GEONODE:EDIT_ABSTRACT_RESOURCE",E="GEONODE:EDIT_THUMBNAIL_RESOURCE",p="GEONODE:SET_FAVORITE_RESOURCE",m="GEONODE:SET_MAP_THUMBNAIL",y="GEONODE:SET_SELECTED_DATASET_PERMISSIONS",O="GEONODE:REQUEST_RESOURCE_CONFIG",v="GEONODE:REQUEST_NEW_RESOURCE_CONFIG",g="GEONODE:LOADING_RESOURCE_CONFIG",b="GEONODE:RESET_RESOURCE_STATE",h="GEONODE:RESOURCE_CONFIG_ERROR",_="GEONODE:SET_RESOURCE_COMPACT_PERMISSIONS",R="GEONODE:UPDATE_RESOURCE_COMPACT_PERMISSIONS",T="GEONODE:RESET_GEO_LIMITS",N="GEONODE:PROCESS_RESOURCES",S="GEONODE_SET_RESOURCE_THUMBNAIL",D="GEONODE_ENABLE_MAP_THUMBNAIL_VIEWER",C="GEONODE_DOWNLOAD_RESOURCE",I="GEONODE_DOWNLOAD_COMPLETE",P="GEONODE_UPDATE_SINGLE_RESOURCE";function w(){return{type:r}}function A(e){return{type:o,data:e}}function U(e){return{type:P,data:e}}function G(e){return{type:d,title:e}}function j(e){return{type:f,abstract:e}}function M(e){return{type:E,thumbnailUrl:e,thumbnailChanged:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"false"}}function F(){return{type:S}}function k(e){return{type:l,resourceType:e}}function L(e){return{type:a,error:e}}function x(e){return{type:i,properties:e}}function z(){return{type:u}}function Z(e){return{type:c,id:e}}function H(e){return{type:y,permissions:e}}function Y(e){return{type:p,favorite:e}}function q(e){return{type:D,enabled:e}}function B(e){return{type:m,bbox:e}}function W(e,t,n){return{type:O,resourceType:e,pk:t,options:n}}function X(e){return{type:v,resourceType:e}}function Q(e){return{type:g,loading:e}}function V(e){return{type:h,message:e}}function K(){return{type:b}}function $(e){return{type:_,compactPermissions:e}}function J(e){return{type:R,compactPermissions:e}}function ee(){return{type:T}}function te(e,t,n){return{type:N,processType:e,resources:t,redirectTo:n}}function ne(e){return{type:C,resource:e}}function re(e){return{type:I,resource:e}}},560466:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>S});var r=n(124852),o=n.n(r),a=n(322843),i=n(171703),l=n(22222),u=n(793520),c=n(507412),s=n(805346),d=n(303744),f=n(694745),E=n(399534),p=n(782904),m=n(76907),y=n(643892),O=n(182021),v=n(12530),g=n(532425),b=n(925108),h=n(274621),_=n(877593),R=(0,i.connect)((0,l.P1)([function(e){var t,n;return null==e||null===(t=e.controls)||void 0===t||null===(n=t[v.zj.DELETE_RESOURCE])||void 0===n?void 0:n.value},function(e){var t,n;return null==e||null===(t=e.controls)||void 0===t||null===(n=t[v.zj.DELETE_RESOURCE])||void 0===n?void 0:n.loading},function(e){var t;return null==e||null===(t=e.router)||void 0===t?void 0:t.location},m.yK],(function(e,t,n,r){return{resources:e,enabled:!!e,loading:t,location:n,selectedResource:r}})),{onClose:p.Xg.bind(null,v.zj.DELETE_RESOURCE,"value",void 0),onDelete:y.EU.bind(null,v.zj.DELETE_RESOURCE)})((function(e){var t=e.enabled,n=e.resources,r=void 0===n?[]:n,a=e.onClose,i=void 0===a?function(){}:a,l=e.onDelete,u=void 0===l?function(){}:l,c=e.redirectTo,d=void 0===c?"/":c,p=e.loading,m=e.location,y=e.selectedResource;return o().createElement(E.Z,null,o().createElement(f.Z,{title:o().createElement(s.Z,{msgId:"gnviewer.deleteResourceTitle",msgParams:{count:r.length}}),show:t,fitContent:!0,clickOutEnabled:!1,modalClassName:"gn-simple-dialog",buttons:p?[]:[{text:o().createElement(s.Z,{msgId:"gnviewer.deleteResourceNo",msgParams:{count:r.length}}),onClick:function(){return i()}},{text:o().createElement(s.Z,{msgId:"gnviewer.deleteResourceYes",msgParams:{count:r.length}}),bsStyle:"danger",onClick:function(){var e,t,n=r.map((function(e){return e.pk}));!d&&null!=y&&y.pk&&n.includes(y.pk)&&(e=(0,_.nz)({location:m,excludeQueryKeys:["d"]}),(t=document.createElement("a")).setAttribute("href",e),t.click()),u(r,d)}}],onClose:p?null:function(){return i()}},o().createElement("ul",{className:"gn-card-grid",style:{listStyleType:"none",padding:"0.5rem",margin:0}},r.map((function(e,t){return o().createElement("li",{style:{padding:"0.25rem 0"},key:e.pk+"-"+t},o().createElement(O.Z,{data:e,layoutCardsStyle:"list",readOnly:!0}))}))),p&&o().createElement("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(255, 255, 255, 0.8)",zIndex:2,display:"flex",alignItems:"center",justifyContent:"center"}},o().createElement(g.Z,{size:70}))))})),T=(0,i.connect)((0,l.P1)([m.yK],(function(e){return{resource:e}})),{onClick:p.Xg.bind(null,v.zj.DELETE_RESOURCE,"value")})((function(e){var t=e.onClick,n=e.size,r=e.resource;return o().createElement(d.Z,{variant:"danger",size:n,onClick:function(){t([r])}},o().createElement(s.Z,{msgId:"gnhome.delete"}))})),N=(0,i.connect)((0,l.P1)([h.jl],(function(e){return{authenticated:e}})),{onDelete:p.Xg.bind(null,v.zj.DELETE_RESOURCE,"value")})((function(e){var t,n=e.resource,r=e.authenticated,a=e.onDelete;return r&&null!=n&&null!==(t=n.perms)&&void 0!==t&&t.includes("delete_resourcebase")?o().createElement(u.Z.Item,{onClick:function(){return a([n])}},o().createElement(c.Z,{name:"trash"})," ",o().createElement(s.Z,{msgId:"gnhome.delete"})):null}));const S=(0,a.rx)("DeleteResource",{component:R,containers:{ActionNavbar:{name:"DeleteResource",Component:T},ResourcesGrid:{name:v.zj.DELETE_RESOURCE,target:"cardOptions",Component:N}},epics:{},reducers:{controls:b.Z}})},887157:(e,t,n)=>{var r=n(640554),o=n(588958);e.exports=function(e,t,n,a){var i=e.length;for((n=r(n))<0&&(n=-n>i?0:i+n),(a=void 0===a||a>i?i:r(a))<0&&(a+=i),a=n>a?0:o(a);n<a;)e[n++]=t;return e}},580760:(e,t,n)=>{var r=n(989881);e.exports=function(e,t){var n=[];return r(e,(function(e,r,o){t(e,r,o)&&n.push(e)})),n}},441761:(e,t,n)=>{var r=n(644239),o=n(637005);e.exports=function(e){return o(e)&&"[object Date]"==r(e)}},389179:(e,t,n)=>{var r=n(555639),o=n(640554),a=n(14841),i=n(479833),l=r.isFinite,u=Math.min;e.exports=function(e){var t=Math[e];return function(e,n){if(e=a(e),(n=null==n?0:u(o(n),292))&&l(e)){var r=(i(e)+"e").split("e"),c=t(r[0]+"e"+(+r[1]+n));return+((r=(i(c)+"e").split("e"))[0]+"e"+(+r[1]-n))}return t(e)}}},819873:(e,t,n)=>{var r=n(887157),o=n(816612);e.exports=function(e,t,n,a){var i=null==e?0:e.length;return i?(n&&"number"!=typeof n&&o(e,t,n)&&(n=0,a=i),r(e,t,n,a)):[]}},763105:(e,t,n)=>{var r=n(234963),o=n(580760),a=n(267206),i=n(701469);e.exports=function(e,t){return(i(e)?r:o)(e,a(t,3))}},647960:(e,t,n)=>{var r=n(441761),o=n(307518),a=n(531167),i=a&&a.isDate,l=i?o(i):r;e.exports=l},313880:(e,t,n)=>{var r=n(479833);e.exports=function(){var e=arguments,t=r(e[0]);return e.length<3?t:t.replace(e[1],e[2])}},59854:(e,t,n)=>{var r=n(389179)("round");e.exports=r},588958:(e,t,n)=>{var r=n(829750),o=n(640554);e.exports=function(e){return e?r(o(e),0,4294967295):0}},819081:(e,t,n)=>{"use strict";e.exports=n(1174)}}]);