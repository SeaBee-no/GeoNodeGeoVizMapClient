/*! For license information please see 11426.343ed104ae3cb88ae177.chunk.js.LICENSE.txt */
(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[11426],{178598:function(t,e,n){var o,r=r||function(t){"use strict";if(!(void 0===t||"undefined"!=typeof navigator&&/MSIE [1-9]\./.test(navigator.userAgent))){var e=t.document,n=function(){return t.URL||t.webkitURL||t},o=e.createElementNS("http://www.w3.org/1999/xhtml","a"),r="download"in o,i=/constructor/i.test(t.HTMLElement)||t.safari,a=/CriOS\/[\d]+/.test(navigator.userAgent),c=function(e){(t.setImmediate||t.setTimeout)((function(){throw e}),0)},s=function(t){setTimeout((function(){"string"==typeof t?n().revokeObjectURL(t):t.remove()}),4e4)},u=function(t){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob([String.fromCharCode(65279),t],{type:t.type}):t},l=function(e,l,f){f||(e=u(e));var p,h=this,d="application/octet-stream"===e.type,y=function(){!function(t,e,n){for(var o=(e=[].concat(e)).length;o--;){var r=t["on"+e[o]];if("function"==typeof r)try{r.call(t,t)}catch(t){c(t)}}}(h,"writestart progress write writeend".split(" "))};if(h.readyState=h.INIT,r)return p=n().createObjectURL(e),void setTimeout((function(){var t,e;o.href=p,o.download=l,t=o,e=new MouseEvent("click"),t.dispatchEvent(e),y(),s(p),h.readyState=h.DONE}));!function(){if((a||d&&i)&&t.FileReader){var o=new FileReader;return o.onloadend=function(){var e=a?o.result:o.result.replace(/^data:[^;]*;/,"data:attachment/file;");t.open(e,"_blank")||(t.location.href=e),e=void 0,h.readyState=h.DONE,y()},o.readAsDataURL(e),void(h.readyState=h.INIT)}p||(p=n().createObjectURL(e)),d?t.location.href=p:t.open(p,"_blank")||(t.location.href=p),h.readyState=h.DONE,y(),s(p)}()},f=l.prototype;return"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob?function(t,e,n){return e=e||t.name||"download",n||(t=u(t)),navigator.msSaveOrOpenBlob(t,e)}:(f.abort=function(){},f.readyState=f.INIT=0,f.WRITING=1,f.DONE=2,f.error=f.onwritestart=f.onprogress=f.onwrite=f.onabort=f.onerror=f.onwriteend=null,function(t,e,n){return new l(t,e||t.name||"download",n)})}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content);t.exports?t.exports.saveAs=r:null!==n.amdD&&null!==n.amdO&&(void 0===(o=function(){return r}.call(e,n,e,t))||(t.exports=o))},776342:(t,e,n)=>{"use strict";n.d(e,{LX:()=>B});var o=n(730670),r=n.n(o),i=n(124852),a=n.n(i),c=n(675263),s=n.n(c),u=n(447435),l=n.n(u),f=n(145173),p=n.n(f),h=n(441143),d=n.n(h),y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};function v(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var m=function(t){function e(){var n,o;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return n=o=v(this,t.call.apply(t,[this].concat(i))),o.state={match:o.computeMatch(o.props.history.location.pathname)},v(o,n)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.getChildContext=function(){return{router:y({},this.context.router,{history:this.props.history,route:{location:this.props.history.location,match:this.state.match}})}},e.prototype.computeMatch=function(t){return{path:"/",url:"/",params:{},isExact:"/"===t}},e.prototype.componentWillMount=function(){var t=this,e=this.props,n=e.children,o=e.history;d()(null==n||1===a().Children.count(n),"A <Router> may have only one child element"),this.unlisten=o.listen((function(){t.setState({match:t.computeMatch(o.location.pathname)})}))},e.prototype.componentWillReceiveProps=function(t){p()(this.props.history===t.history,"You cannot change <Router history>")},e.prototype.componentWillUnmount=function(){this.unlisten()},e.prototype.render=function(){var t=this.props.children;return t?a().Children.only(t):null},e}(a().Component);m.propTypes={history:s().object.isRequired,children:s().node},m.contextTypes={router:s().object},m.childContextTypes={router:s().object.isRequired};const w=m;function b(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(function(t){function e(){var n,o;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return n=o=b(this,t.call.apply(t,[this].concat(i))),o.history=l()(o.props),b(o,n)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.componentWillMount=function(){r()(!this.props.history,"<BrowserRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { BrowserRouter as Router }`.")},e.prototype.render=function(){return a().createElement(w,{history:this.history,children:this.props.children})},e}(a().Component)).propTypes={basename:s().string,forceRefresh:s().bool,getUserConfirmation:s().func,keyLength:s().number,children:s().node};var g=n(518632),O=n.n(g);function x(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(function(t){function e(){var n,o;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return n=o=x(this,t.call.apply(t,[this].concat(i))),o.history=O()(o.props),x(o,n)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.componentWillMount=function(){r()(!this.props.history,"<HashRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { HashRouter as Router }`.")},e.prototype.render=function(){return a().createElement(w,{history:this.history,children:this.props.children})},e}(a().Component)).propTypes={basename:s().string,getUserConfirmation:s().func,hashType:s().oneOf(["hashbang","noslash","slash"]),children:s().node};var R=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};function j(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var P=function(t){function e(){var n,o;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return n=o=j(this,t.call.apply(t,[this].concat(i))),o.handleClick=function(t){if(o.props.onClick&&o.props.onClick(t),!t.defaultPrevented&&0===t.button&&!o.props.target&&!function(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(t)){t.preventDefault();var e=o.context.router.history,n=o.props,r=n.replace,i=n.to;r?e.replace(i):e.push(i)}},j(o,n)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.render=function(){var t=this.props,e=(t.replace,t.to),n=t.innerRef,o=function(t,e){var n={};for(var o in t)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}(t,["replace","to","innerRef"]);d()(this.context.router,"You should not use <Link> outside a <Router>");var r=this.context.router.history.createHref("string"==typeof e?{pathname:e}:e);return a().createElement("a",R({},o,{onClick:this.handleClick,href:r,ref:n}))},e}(a().Component);P.propTypes={onClick:s().func,target:s().string,replace:s().bool,to:s().oneOfType([s().string,s().object]).isRequired,innerRef:s().oneOfType([s().string,s().func])},P.defaultProps={replace:!1},P.contextTypes={router:s().shape({history:s().shape({push:s().func.isRequired,replace:s().func.isRequired,createHref:s().func.isRequired}).isRequired}).isRequired};const T=P;var C=n(514779),E=n.n(C),S={},k=0;const A=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments[2];"string"==typeof e&&(e={path:e});var o=e,r=o.path,i=o.exact,a=void 0!==i&&i,c=o.strict,s=void 0!==c&&c,u=o.sensitive;if(null==r)return n;var l=function(t,e){var n=""+e.end+e.strict+e.sensitive,o=S[n]||(S[n]={});if(o[t])return o[t];var r=[],i={re:E()(t,r,e),keys:r};return k<1e4&&(o[t]=i,k++),i}(r,{end:a,strict:s,sensitive:void 0!==u&&u}),f=l.re,p=l.keys,h=f.exec(t);if(!h)return null;var d=h[0],y=h.slice(1),v=t===d;return a&&!v?null:{path:r,url:"/"===r&&""===d?"/":d,isExact:v,params:p.reduce((function(t,e,n){return t[e.name]=y[n],t}),{})}};var L=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};function _(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var H=function(t){return 0===a().Children.count(t)},U=function(t){function e(){var n,o;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return n=o=_(this,t.call.apply(t,[this].concat(i))),o.state={match:o.computeMatch(o.props,o.context.router)},_(o,n)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.getChildContext=function(){return{router:L({},this.context.router,{route:{location:this.props.location||this.context.router.route.location,match:this.state.match}})}},e.prototype.computeMatch=function(t,e){var n=t.computedMatch,o=t.location,r=t.path,i=t.strict,a=t.exact,c=t.sensitive;if(n)return n;d()(e,"You should not use <Route> or withRouter() outside a <Router>");var s=e.route,u=(o||s.location).pathname;return A(u,{path:r,strict:i,exact:a,sensitive:c},s.match)},e.prototype.componentWillMount=function(){p()(!(this.props.component&&this.props.render),"You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored"),p()(!(this.props.component&&this.props.children&&!H(this.props.children)),"You should not use <Route component> and <Route children> in the same route; <Route children> will be ignored"),p()(!(this.props.render&&this.props.children&&!H(this.props.children)),"You should not use <Route render> and <Route children> in the same route; <Route children> will be ignored")},e.prototype.componentWillReceiveProps=function(t,e){p()(!(t.location&&!this.props.location),'<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.'),p()(!(!t.location&&this.props.location),'<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.'),this.setState({match:this.computeMatch(t,e.router)})},e.prototype.render=function(){var t=this.state.match,e=this.props,n=e.children,o=e.component,r=e.render,i=this.context.router,c=i.history,s=i.route,u=i.staticContext,l={match:t,location:this.props.location||s.location,history:c,staticContext:u};return o?t?a().createElement(o,l):null:r?t?r(l):null:"function"==typeof n?n(l):n&&!H(n)?a().Children.only(n):null},e}(a().Component);U.propTypes={computedMatch:s().object,path:s().string,exact:s().bool,strict:s().bool,sensitive:s().bool,component:s().func,render:s().func,children:s().oneOfType([s().func,s().node]),location:s().object},U.contextTypes={router:s().shape({history:s().object.isRequired,route:s().object.isRequired,staticContext:s().object})},U.childContextTypes={router:s().object.isRequired};const I=U;var M=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},q=function(t){var e=t.to,n=t.exact,o=t.strict,r=t.location,i=t.activeClassName,c=t.className,s=t.activeStyle,u=t.style,l=t.isActive,f=t.ariaCurrent,p=function(t,e){var n={};for(var o in t)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}(t,["to","exact","strict","location","activeClassName","className","activeStyle","style","isActive","ariaCurrent"]);return a().createElement(I,{path:"object"===(void 0===e?"undefined":N(e))?e.pathname:e,exact:n,strict:o,location:r,children:function(t){var n=t.location,o=t.match,r=!!(l?l(o,n):o);return a().createElement(T,M({to:e,className:r?[c,i].filter((function(t){return t})).join(" "):c,style:r?M({},u,s):u,"aria-current":r&&f},p))}})};q.propTypes={to:T.propTypes.to,exact:s().bool,strict:s().bool,location:s().object,activeClassName:s().string,className:s().string,activeStyle:s().object,style:s().object,isActive:s().func,ariaCurrent:s().oneOf(["page","step","location","true"])},q.defaultProps={activeClassName:"active",ariaCurrent:"true"};const B=A},856529:(t,e,n)=>{"use strict";function o(t){return t&&"object"==typeof t&&"default"in t?t.default:t}var r=o(n(196547));o(n(704508));n(645298);var i=o(n(426018));function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function c(t){return"/"===t.charAt(0)?t:"/"+t}function s(t){return"/"===t.charAt(0)?t.substr(1):t}function u(t,e){return function(t,e){return 0===t.toLowerCase().indexOf(e.toLowerCase())&&-1!=="/?#".indexOf(t.charAt(e.length))}(t,e)?t.substr(e.length):t}function l(t){return"/"===t.charAt(t.length-1)?t.slice(0,-1):t}function f(t){var e=t.pathname,n=t.search,o=t.hash,r=e||"/";return n&&"?"!==n&&(r+="?"===n.charAt(0)?n:"?"+n),o&&"#"!==o&&(r+="#"===o.charAt(0)?o:"#"+o),r}function p(t,e,n,o){var i;"string"==typeof t?(i=function(t){var e=t||"/",n="",o="",r=e.indexOf("#");-1!==r&&(o=e.substr(r),e=e.substr(0,r));var i=e.indexOf("?");return-1!==i&&(n=e.substr(i),e=e.substr(0,i)),{pathname:e,search:"?"===n?"":n,hash:"#"===o?"":o}}(t)).state=e:(void 0===(i=a({},t)).pathname&&(i.pathname=""),i.search?"?"!==i.search.charAt(0)&&(i.search="?"+i.search):i.search="",i.hash?"#"!==i.hash.charAt(0)&&(i.hash="#"+i.hash):i.hash="",void 0!==e&&void 0===i.state&&(i.state=e));try{i.pathname=decodeURI(i.pathname)}catch(t){throw t instanceof URIError?new URIError('Pathname "'+i.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):t}return n&&(i.key=n),o?i.pathname?"/"!==i.pathname.charAt(0)&&(i.pathname=r(i.pathname,o.pathname)):i.pathname=o.pathname:i.pathname||(i.pathname="/"),i}function h(){var t=null,e=[];return{setPrompt:function(e){return t=e,function(){t===e&&(t=null)}},confirmTransitionTo:function(e,n,o,r){if(null!=t){var i="function"==typeof t?t(e,n):t;"string"==typeof i?"function"==typeof o?o(i,r):r(!0):r(!1!==i)}else r(!0)},appendListener:function(t){var n=!0;function o(){n&&t.apply(void 0,arguments)}return e.push(o),function(){n=!1,e=e.filter((function(t){return t!==o}))}},notifyListeners:function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];e.forEach((function(t){return t.apply(void 0,n)}))}}}var d=!("undefined"==typeof window||!window.document||!window.document.createElement);function y(t,e){e(window.confirm(t))}var v="popstate",m="hashchange";function w(){try{return window.history.state||{}}catch(t){return{}}}var b="hashchange",g={hashbang:{encodePath:function(t){return"!"===t.charAt(0)?t:"!/"+s(t)},decodePath:function(t){return"!"===t.charAt(0)?t.substr(1):t}},noslash:{encodePath:s,decodePath:c},slash:{encodePath:c,decodePath:c}};function O(t){var e=t.indexOf("#");return-1===e?t:t.slice(0,e)}function x(){var t=window.location.href,e=t.indexOf("#");return-1===e?"":t.substring(e+1)}function R(t){window.location.replace(O(window.location.href)+"#"+t)}e.createBrowserHistory=function(t){void 0===t&&(t={}),d||i(!1);var e=window.history,n=function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history}(),o=!(-1===window.navigator.userAgent.indexOf("Trident")),r=t,s=r.forceRefresh,b=void 0!==s&&s,g=r.getUserConfirmation,O=void 0===g?y:g,x=r.keyLength,R=void 0===x?6:x,j=t.basename?l(c(t.basename)):"";function P(t){var e=t||{},n=e.key,o=e.state,r=window.location,i=r.pathname+r.search+r.hash;return j&&(i=u(i,j)),p(i,o,n)}function T(){return Math.random().toString(36).substr(2,R)}var C=h();function E(t){a(B,t),B.length=e.length,C.notifyListeners(B.location,B.action)}function S(t){(function(t){return void 0===t.state&&-1===navigator.userAgent.indexOf("CriOS")})(t)||L(P(t.state))}function k(){L(P(w()))}var A=!1;function L(t){A?(A=!1,E()):C.confirmTransitionTo(t,"POP",O,(function(e){e?E({action:"POP",location:t}):function(t){var e=B.location,n=H.indexOf(e.key);-1===n&&(n=0);var o=H.indexOf(t.key);-1===o&&(o=0);var r=n-o;r&&(A=!0,I(r))}(t)}))}var _=P(w()),H=[_.key];function U(t){return j+f(t)}function I(t){e.go(t)}var M=0;function N(t){1===(M+=t)&&1===t?(window.addEventListener(v,S),o&&window.addEventListener(m,k)):0===M&&(window.removeEventListener(v,S),o&&window.removeEventListener(m,k))}var q=!1,B={length:e.length,action:"POP",location:_,createHref:U,push:function(t,o){var r=p(t,o,T(),B.location);C.confirmTransitionTo(r,"PUSH",O,(function(t){if(t){var o=U(r),i=r.key,a=r.state;if(n)if(e.pushState({key:i,state:a},null,o),b)window.location.href=o;else{var c=H.indexOf(B.location.key),s=H.slice(0,c+1);s.push(r.key),H=s,E({action:"PUSH",location:r})}else window.location.href=o}}))},replace:function(t,o){var r="REPLACE",i=p(t,o,T(),B.location);C.confirmTransitionTo(i,r,O,(function(t){if(t){var o=U(i),a=i.key,c=i.state;if(n)if(e.replaceState({key:a,state:c},null,o),b)window.location.replace(o);else{var s=H.indexOf(B.location.key);-1!==s&&(H[s]=i.key),E({action:r,location:i})}else window.location.replace(o)}}))},go:I,goBack:function(){I(-1)},goForward:function(){I(1)},block:function(t){void 0===t&&(t=!1);var e=C.setPrompt(t);return q||(N(1),q=!0),function(){return q&&(q=!1,N(-1)),e()}},listen:function(t){var e=C.appendListener(t);return N(1),function(){N(-1),e()}}};return B},e.createHashHistory=function(t){void 0===t&&(t={}),d||i(!1);var e=window.history,n=(window.navigator.userAgent.indexOf("Firefox"),t),o=n.getUserConfirmation,r=void 0===o?y:o,s=n.hashType,v=void 0===s?"slash":s,m=t.basename?l(c(t.basename)):"",w=g[v],j=w.encodePath,P=w.decodePath;function T(){var t=P(x());return m&&(t=u(t,m)),p(t)}var C=h();function E(t){a(B,t),B.length=e.length,C.notifyListeners(B.location,B.action)}var S=!1,k=null;function A(){var t=x(),e=j(t);if(t!==e)R(e);else{var n=T(),o=B.location;if(!S&&function(t,e){return t.pathname===e.pathname&&t.search===e.search&&t.hash===e.hash}(o,n))return;if(k===f(n))return;k=null,function(t){S?(S=!1,E()):C.confirmTransitionTo(t,"POP",r,(function(e){e?E({action:"POP",location:t}):function(t){var e=B.location,n=U.lastIndexOf(f(e));-1===n&&(n=0);var o=U.lastIndexOf(f(t));-1===o&&(o=0);var r=n-o;r&&(S=!0,I(r))}(t)}))}(n)}}var L=x(),_=j(L);L!==_&&R(_);var H=T(),U=[f(H)];function I(t){e.go(t)}var M=0;function N(t){1===(M+=t)&&1===t?window.addEventListener(b,A):0===M&&window.removeEventListener(b,A)}var q=!1,B={length:e.length,action:"POP",location:H,createHref:function(t){var e=document.querySelector("base"),n="";return e&&e.getAttribute("href")&&(n=O(window.location.href)),n+"#"+j(m+f(t))},push:function(t,e){var n=p(t,void 0,void 0,B.location);C.confirmTransitionTo(n,"PUSH",r,(function(t){if(t){var e=f(n),o=j(m+e);if(x()!==o){k=e,function(t){window.location.hash=t}(o);var r=U.lastIndexOf(f(B.location)),i=U.slice(0,r+1);i.push(e),U=i,E({action:"PUSH",location:n})}else E()}}))},replace:function(t,e){var n="REPLACE",o=p(t,void 0,void 0,B.location);C.confirmTransitionTo(o,n,r,(function(t){if(t){var e=f(o),r=j(m+e);x()!==r&&(k=e,R(r));var i=U.indexOf(f(B.location));-1!==i&&(U[i]=e),E({action:n,location:o})}}))},go:I,goBack:function(){I(-1)},goForward:function(){I(1)},block:function(t){void 0===t&&(t=!1);var e=C.setPrompt(t);return q||(N(1),q=!0),function(){return q&&(q=!1,N(-1)),e()}},listen:function(t){var e=C.appendListener(t);return N(1),function(){N(-1),e()}}};return B}},447435:(t,e,n)=>{"use strict";n(802526)("createBrowserHistory"),t.exports=n(509354).createBrowserHistory},518632:(t,e,n)=>{"use strict";n(802526)("createHashHistory"),t.exports=n(509354).createHashHistory},509354:(t,e,n)=>{"use strict";t.exports=n(856529)},802526:t=>{"use strict";t.exports=function(t){}},145173:t=>{"use strict";t.exports=function(){}},196547:(t,e,n)=>{"use strict";function o(t){return"/"===t.charAt(0)}function r(t,e){for(var n=e,o=n+1,r=t.length;o<r;n+=1,o+=1)t[n]=t[o];t.pop()}n.r(e),n.d(e,{default:()=>i});const i=function(t,e){void 0===e&&(e="");var n,i=t&&t.split("/")||[],a=e&&e.split("/")||[],c=t&&o(t),s=e&&o(e),u=c||s;if(t&&o(t)?a=i:i.length&&(a.pop(),a=a.concat(i)),!a.length)return"/";if(a.length){var l=a[a.length-1];n="."===l||".."===l||""===l}else n=!1;for(var f=0,p=a.length;p>=0;p--){var h=a[p];"."===h?r(a,p):".."===h?(r(a,p),f++):f&&(r(a,p),f--)}if(!u)for(;f--;f)a.unshift("..");!u||""===a[0]||a[0]&&o(a[0])||a.unshift("");var d=a.join("/");return n&&"/"!==d.substr(-1)&&(d+="/"),d}},704508:(t,e,n)=>{"use strict";function o(t){return t.valueOf?t.valueOf():Object.prototype.valueOf.call(t)}n.r(e),n.d(e,{default:()=>r});const r=function t(e,n){if(e===n)return!0;if(null==e||null==n)return!1;if(Array.isArray(e))return Array.isArray(n)&&e.length===n.length&&e.every((function(e,o){return t(e,n[o])}));if("object"==typeof e||"object"==typeof n){var r=o(e),i=o(n);return r!==e||i!==n?t(r,i):Object.keys(Object.assign({},e,n)).every((function(o){return t(e[o],n[o])}))}return!1}},426018:t=>{"use strict";t.exports=function(t,e){if(!t)throw new Error("Invariant failed")}},645298:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>o});const o=function(t,e){}}}]);