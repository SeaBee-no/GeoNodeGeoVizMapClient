(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[86997],{923645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var o=t(e);return e[2]?"@media ".concat(e[2]," {").concat(o,"}"):o})).join("")},e.i=function(t,o,n){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(n)for(var r=0;r<this.length;r++){var s=this[r][0];null!=s&&(i[s]=!0)}for(var a=0;a<t.length;a++){var u=[].concat(t[a]);n&&i[u[0]]||(o&&(u[2]?u[2]="".concat(o," and ").concat(u[2]):u[2]=o),e.push(u))}},e}},365544:(t,e,o)=>{var n=o(105976),i=o(497727),r=o(720893),s=o(846460),a=n((function(t,e){var o=s(e,r(a));return i(t,64,void 0,e,o)}));a.placeholder={},t.exports=a},506806:(t,e,o)=>{"use strict";var n,i=(n=o(715132))&&n.__esModule?n:{default:n};e.Z=i.default},715132:(t,e,o)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}}(),s=o(124852),a=l(s),u=l(o(45697));function l(t){return t&&t.__esModule?t:{default:t}}var h={position:"absolute",top:0,left:0,right:0,bottom:0,overflow:"hidden"},c={zIndex:2,position:"absolute",top:0,bottom:0,transition:"transform .3s ease-out",WebkitTransition:"-webkit-transform .3s ease-out",willChange:"transform",overflowY:"auto"},d={position:"absolute",top:0,left:0,right:0,bottom:0,overflowY:"scroll",WebkitOverflowScrolling:"touch",transition:"left .3s ease-out, right .3s ease-out"},f={zIndex:1,position:"fixed",top:0,left:0,right:0,bottom:0,opacity:0,visibility:"hidden",transition:"opacity .3s ease-out, visibility .3s ease-out",backgroundColor:"rgba(0,0,0,.3)"},p={zIndex:1,position:"fixed",top:0,bottom:0},b=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var o=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return o.state={sidebarWidth:t.defaultSidebarWidth,touchIdentifier:null,touchStartX:null,touchStartY:null,touchCurrentX:null,touchCurrentY:null,dragSupported:!1},o.overlayClicked=o.overlayClicked.bind(o),o.onTouchStart=o.onTouchStart.bind(o),o.onTouchMove=o.onTouchMove.bind(o),o.onTouchEnd=o.onTouchEnd.bind(o),o.onScroll=o.onScroll.bind(o),o.saveSidebarRef=o.saveSidebarRef.bind(o),o}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),r(e,[{key:"componentDidMount",value:function(){this.setState({dragSupported:"object"===("undefined"==typeof window?"undefined":i(window))&&"ontouchstart"in window}),this.saveSidebarWidth()}},{key:"componentDidUpdate",value:function(){this.isTouching()||this.saveSidebarWidth()}},{key:"onTouchStart",value:function(t){if(!this.isTouching()){var e=t.targetTouches[0];this.setState({touchIdentifier:e.identifier,touchStartX:e.clientX,touchStartY:e.clientY,touchCurrentX:e.clientX,touchCurrentY:e.clientY})}}},{key:"onTouchMove",value:function(t){if(this.isTouching())for(var e=0;e<t.targetTouches.length;e++)if(t.targetTouches[e].identifier===this.state.touchIdentifier){this.setState({touchCurrentX:t.targetTouches[e].clientX,touchCurrentY:t.targetTouches[e].clientY});break}}},{key:"onTouchEnd",value:function(){if(this.isTouching()){var t=this.touchSidebarWidth();(this.props.open&&t<this.state.sidebarWidth-this.props.dragToggleDistance||!this.props.open&&t>this.props.dragToggleDistance)&&this.props.onSetOpen(!this.props.open),this.setState({touchIdentifier:null,touchStartX:null,touchStartY:null,touchCurrentX:null,touchCurrentY:null})}}},{key:"onScroll",value:function(){this.isTouching()&&this.inCancelDistanceOnScroll()&&this.setState({touchIdentifier:null,touchStartX:null,touchStartY:null,touchCurrentX:null,touchCurrentY:null})}},{key:"inCancelDistanceOnScroll",value:function(){return this.props.pullRight?Math.abs(this.state.touchCurrentX-this.state.touchStartX)<20:Math.abs(this.state.touchStartX-this.state.touchCurrentX)<20}},{key:"isTouching",value:function(){return null!==this.state.touchIdentifier}},{key:"overlayClicked",value:function(){this.props.open&&this.props.onSetOpen(!1)}},{key:"saveSidebarWidth",value:function(){var t=this.sidebar.offsetWidth;t!==this.state.sidebarWidth&&this.setState({sidebarWidth:t})}},{key:"saveSidebarRef",value:function(t){this.sidebar=t}},{key:"touchSidebarWidth",value:function(){return this.props.pullRight?this.props.open&&window.innerWidth-this.state.touchStartX<this.state.sidebarWidth?this.state.touchCurrentX>this.state.touchStartX?this.state.sidebarWidth+this.state.touchStartX-this.state.touchCurrentX:this.state.sidebarWidth:Math.min(window.innerWidth-this.state.touchCurrentX,this.state.sidebarWidth):this.props.open&&this.state.touchStartX<this.state.sidebarWidth?this.state.touchCurrentX>this.state.touchStartX?this.state.sidebarWidth:this.state.sidebarWidth-this.state.touchStartX+this.state.touchCurrentX:Math.min(this.state.touchCurrentX,this.state.sidebarWidth)}},{key:"render",value:function(){var t=n({},c,this.props.styles.sidebar),e=n({},d,this.props.styles.content),o=n({},f,this.props.styles.overlay),i=this.state.dragSupported&&this.props.touch,r=this.isTouching(),s={className:this.props.rootClassName,style:n({},h,this.props.styles.root),role:"navigation"},u=void 0;if(this.props.pullRight?(t.right=0,t.transform="translateX(100%)",t.WebkitTransform="translateX(100%)",this.props.shadow&&(t.boxShadow="-2px 2px 4px rgba(0, 0, 0, 0.15)")):(t.left=0,t.transform="translateX(-100%)",t.WebkitTransform="translateX(-100%)",this.props.shadow&&(t.boxShadow="2px 2px 4px rgba(0, 0, 0, 0.15)")),r){var l=this.touchSidebarWidth()/this.state.sidebarWidth;this.props.pullRight?(t.transform="translateX("+100*(1-l)+"%)",t.WebkitTransform="translateX("+100*(1-l)+"%)"):(t.transform="translateX(-"+100*(1-l)+"%)",t.WebkitTransform="translateX(-"+100*(1-l)+"%)"),o.opacity=l,o.visibility="visible"}else this.props.docked?(0!==this.state.sidebarWidth&&(t.transform="translateX(0%)",t.WebkitTransform="translateX(0%)"),this.props.pullRight?e.right=this.state.sidebarWidth+"px":e.left=this.state.sidebarWidth+"px"):this.props.open&&(t.transform="translateX(0%)",t.WebkitTransform="translateX(0%)",o.opacity=1,o.visibility="visible");if(!r&&this.props.transitions||(t.transition="none",t.WebkitTransition="none",e.transition="none",o.transition="none"),i)if(this.props.open)s.onTouchStart=this.onTouchStart,s.onTouchMove=this.onTouchMove,s.onTouchEnd=this.onTouchEnd,s.onTouchCancel=this.onTouchEnd,s.onScroll=this.onScroll;else{var b=n({},p,this.props.styles.dragHandle);b.width=this.props.touchHandleWidth,this.props.pullRight?b.right=0:b.left=0,u=a.default.createElement("div",{style:b,onTouchStart:this.onTouchStart,onTouchMove:this.onTouchMove,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchEnd})}return a.default.createElement("div",s,a.default.createElement("div",{className:this.props.sidebarClassName,style:t,ref:this.saveSidebarRef},this.props.sidebar),a.default.createElement("div",{className:this.props.overlayClassName,style:o,role:"presentation",tabIndex:"0",onClick:this.overlayClicked}),a.default.createElement("div",{className:this.props.contentClassName,style:e},u,this.props.children))}}]),e}(s.Component);b.propTypes={children:u.default.node.isRequired,styles:u.default.shape({root:u.default.object,sidebar:u.default.object,content:u.default.object,overlay:u.default.object,dragHandle:u.default.object}),rootClassName:u.default.string,sidebarClassName:u.default.string,contentClassName:u.default.string,overlayClassName:u.default.string,sidebar:u.default.node.isRequired,docked:u.default.bool,open:u.default.bool,transitions:u.default.bool,touch:u.default.bool,touchHandleWidth:u.default.number,pullRight:u.default.bool,shadow:u.default.bool,dragToggleDistance:u.default.number,onSetOpen:u.default.func,defaultSidebarWidth:u.default.number},b.defaultProps={docked:!1,open:!1,transitions:!0,touch:!0,touchHandleWidth:20,pullRight:!1,shadow:!0,dragToggleDistance:30,onSetOpen:function(){},styles:{},defaultSidebarWidth:0},e.default=b},893379:(t,e,o)=>{"use strict";var n,i=function(){var t={};return function(e){if(void 0===t[e]){var o=document.querySelector(e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}t[e]=o}return t[e]}}(),r=[];function s(t){for(var e=-1,o=0;o<r.length;o++)if(r[o].identifier===t){e=o;break}return e}function a(t,e){for(var o={},n=[],i=0;i<t.length;i++){var a=t[i],u=e.base?a[0]+e.base:a[0],l=o[u]||0,h="".concat(u," ").concat(l);o[u]=l+1;var c=s(h),d={css:a[1],media:a[2],sourceMap:a[3]};-1!==c?(r[c].references++,r[c].updater(d)):r.push({identifier:h,updater:b(d,e),references:1}),n.push(h)}return n}function u(t){var e=document.createElement("style"),n=t.attributes||{};if(void 0===n.nonce){var r=o.nc;r&&(n.nonce=r)}if(Object.keys(n).forEach((function(t){e.setAttribute(t,n[t])})),"function"==typeof t.insert)t.insert(e);else{var s=i(t.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(e)}return e}var l,h=(l=[],function(t,e){return l[t]=e,l.filter(Boolean).join("\n")});function c(t,e,o,n){var i=o?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(t.styleSheet)t.styleSheet.cssText=h(e,i);else{var r=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(r,s[e]):t.appendChild(r)}}function d(t,e,o){var n=o.css,i=o.media,r=o.sourceMap;if(i?t.setAttribute("media",i):t.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var f=null,p=0;function b(t,e){var o,n,i;if(e.singleton){var r=p++;o=f||(f=u(e)),n=c.bind(null,o,r,!1),i=c.bind(null,o,r,!0)}else o=u(e),n=d.bind(null,o,e),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(o)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else i()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var o=a(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var n=0;n<o.length;n++){var i=s(o[n]);r[i].references--}for(var u=a(t,e),l=0;l<o.length;l++){var h=s(o[l]);0===r[h].references&&(r[h].updater(),r.splice(h,1))}o=u}}}}}]);