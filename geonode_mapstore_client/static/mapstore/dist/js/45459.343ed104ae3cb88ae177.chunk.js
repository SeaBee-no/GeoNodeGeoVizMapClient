(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[45459],{545459:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>V});var n=o(893379),r=o.n(n),i=o(949916);r()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;var s=o(727418),a=o.n(s),p=o(611847),l=o(949179),c=o(558493),u=o(193409),h=o(623068),f=o(973410),g=o(429902),d=o(116892),m=o(752043),y=o(869669),v=o(798090),b=o(898185),w=o(120767),O=o(831219),k=o(162875),x=o(823493),A=o.n(x),E=o(414293),P=o.n(E),S=o(199405);function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function C(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function L(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?C(Object(o),!0).forEach((function(e){D(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):C(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function D(t,e,o){return(e=function(t){var e=function(t,e){if("object"!==j(t)||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var n=o.call(t,"string");if("object"!==j(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===j(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var F=function(){var t=document.createElement("div");t.setAttribute("class","ol-popup");var e=document.createElement("a");e.setAttribute("class","ol-popup-close-btn"),e.setAttribute("href","#close"),e.innerHTML="x";var o=document.createElement("div");o.setAttribute("class","ol-popup-cnt-wrapper");var n=document.createElement("div");n.setAttribute("class","ol-popup-cnt"),o.appendChild(n);var r=document.createElement("div");r.setAttribute("class","ol-popup-tip-wrapper");var i=document.createElement("div");return i.setAttribute("class","ol-popup-tip"),r.appendChild(i),t.appendChild(e),t.appendChild(o),t.appendChild(r),t}(),H=function(t,e){var o=this;c.ZP.call(this,{state:"DISABLED"}),this.map=t;var n={drawCircle:!0,follow:!0,stopFollowingOnDrag:!1,remainActive:!0,style:this._getDefaultStyles()||{},metric:!0,onLocationError:this.onLocationError,keepCurrentZoomLevel:!1,showPopup:!0,strings:{metersUnit:"meters",feetUnit:"feet",popup:"You are within {distance} {unit} from this point"},locateOptions:{speedThreshold:.8,maximumAge:2e3,enableHighAccuracy:!1,timeout:1e4,maxZoom:18}};this.options=a()({},n,e||{}),this.geolocate=new d.Z({projection:this.map.getView().getProjection(),trackingOptions:this.options.locateOptions}),this.updateHandler=this._updatePosFt.bind(this),this.geolocate.on("change:position",this.options.locateOptions.rateControl?A()(this.updateHandler,this.options.locateOptions.rateControl):this.updateHandler),this.geolocate.on("change:heading",(function(){var t=o.geolocate.getHeading();o.geolocate.getSpeed()>o.options.locateOptions.speedThreshold&&o.posFt.setProperties({heading:t})})),this.popup=F,this.popup.hidden=!0,this.popCnt=F.getElementsByClassName("ol-popup-cnt")[0],this.overlay=new u.Z({element:this.popup,positioning:"top-center",stopEvent:!1}),this.layer=new g.Z({source:new f.Z({useSpatialIndex:!1})}),this.posFt=new h.Z({geometry:this.geolocate.getAccuracyGeometry(),properties:{heading:this.geolocate.getHeading()},name:"position",id:"_locate-pos"}),this.posFt.setStyle(this.options.style),this.layer.getSource().addFeature(this.posFt),this.clickHandler=this.mapClick.bind(this),this.stopHandler=this.stopFollow.bind(this),this.errorHandler=this.options.onLocationError.bind(this)};(0,l.XW)(H,c.ZP),H.prototype.start=function(){this.geolocate.on("error",this.errorHandler),this.follow=this.options.follow,this.geolocate.setTracking(!0),this.layer.setMap(this.map),this.map.addOverlay(this.overlay),this.options.showPopup&&(this.map.on("click",this.clickHandler),this.map.on("touch",this.clickHandler)),this.options.stopFollowingOnDrag&&this.map.on("pointerdrag",this.stopHandler),this.p?this._updatePosFt():this.set("state","LOCATING")},H.prototype.startFollow=function(){this.follow=!0,this.options.stopFollowingOnDrag&&this.map.on("pointerdrag",this.stopHandler),this.p&&this._updatePosFt()},H.prototype.stop=function(){this.geolocate.un("error",this.errorHandler),this.geolocate.setTracking(!1),this.popup.hide=!0,this.map.removeOverlay(this.overlay),this.layer.setMap(null),this.options.showPopup&&(this.map.un("click",this.clickHandler),this.map.un("touch",this.clickHandler)),this.options.stopFollowingOnDrag&&this.map.un("pointerdrag",this.stopHandler),this.set("state","DISABLED")},H.prototype.stopFollow=function(){this.follow=!1,this.map.un("pointerdrag",this.stopHandler),this.set("state","ENABLED")},H.prototype._updatePosFt=function(){var t=this.get("state"),e=this.follow?"FOLLOWING":"ENABLED";e!==t&&this.set("state",e);var o=this.geolocate.getPosition();this.p=o;var n=new m.Z([parseFloat(o[0]),parseFloat(o[1])]);if(this.options.drawCircle)if(null===this.geolocate.getAccuracyGeometry()){var r=new y.Z([parseFloat(o[0]),parseFloat(o[1])],this.geolocate.getAccuracy());this.posFt.setGeometry(new v.default([n,r]))}else{var i=this.geolocate.getAccuracyGeometry();this.posFt.setGeometry(new v.default([n,i]))}else this.posFt.setGeometry(new v.default([n]));var s=this.geolocate.getHeading();if(this.posFt.setProperties({heading:s}),this.popup.hidden||this._updatePopUpCnt(),this.follow&&this.updateView(n),this.options.remainActive||this.geolocate.setTracking(!1),"true"===(0,p.vl)(window.location.search).locateDebug){var a=document.getElementById("OL_LOCATION_DEBUG");a||((a=document.createElement("div")).setAttribute("id","OL_LOCATION_DEBUG"),a.setAttribute("style","position: absolute; bottom: 0; width: 100%; height: 200px; z-index:100000; background: rgba(5,5,5,.5)"),document.body.appendChild(a));var l=this.geolocate.getSpeed();a.innerHTML="<pre>\n            Position: ".concat(o[0],", ").concat(o[1],",\n            Heading: ").concat(s,"\n            speed: ").concat(l,"\n        </pre>")}},H.prototype.updateView=function(t){this.follow&&(this.map.getView().setCenter(t.getCoordinates()),this.options.keepCurrentZoomLevel||this.map.getView().setZoom(this.options.locateOptions.maxZoom))},H.prototype._updatePopUpCnt=function(){var t,e;this.options.metric?(t=this.geolocate.getAccuracy(),e=this.options.strings.metersUnit):(t=Math.round(3.2808399*this.geolocate.getAccuracy()),e=this.options.strings.feetUnit);var o=this.options.strings.popup.replace("{distance}",t);this.popCnt.innerHTML=o.replace("{unit}",e),this.overlay.setPosition(this.posFt.getGeometry().getGeometries()[0].getCoordinates()),this.popup.hidden=!1},H.prototype.onLocationError=function(t){alert(t.message)},H.prototype.mapClick=function(t){var e=this.map.forEachFeatureAtPixel(t.pixel,(function(t){return t}));e&&"_locate-pos"===e.get("id")&&this.popup.hidden?this._updatePopUpCnt():this.popup.hidden||(F.hidden=!0)},H.prototype._getDefaultStyles=function(){var t=this,e="#2A93EE",o={fill:new b.default({color:"rgba(19,106,236,0.15)"}),stroke:new w.default({color:"rgba(19,106,236,1)",width:2})},n=(0,S.w)({color:e,svgAttributes:'width="300" height="300"'}),r=(0,S.B)({color:e,svgAttributes:'width="300" height="300"'});return function(e){var i,s=null===(i=e.getProperties())||void 0===i?void 0:i.heading,a=t.geolocate.getSpeed();return!P()(s)&&a>t.options.locateOptions.speedThreshold?new O.default(L({image:new k.default({imgSize:[300,300],anchorXUnits:"fraction",anchorYUnits:"fraction",anchor:[.5,.5],scale:.2,rotation:null!=s?s:0,opacity:1,src:"data:image/svg+xml;charset=utf-8,"+encodeURIComponent(n)})},o)):new O.default(L({image:new k.default({imgSize:[300,300],anchorXUnits:"fraction",anchorYUnits:"fraction",anchor:[.5,.5],scale:.2,rotation:null!=s?s:0,opacity:1,src:"data:image/svg+xml;charset=utf-8,"+encodeURIComponent(r)})},o))}},H.prototype.setStrings=function(t){this.options.strings=a()({},this.options.strings,t)},H.prototype.setTrackingOptions=function(t){this.geolocate&&(this.geolocate.setTrackingOptions(t),this.options.locateOptions=L({},t))};const T=H;function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function U(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,B(n.key),n)}}function Z(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function G(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?Z(Object(o),!0).forEach((function(e){I(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):Z(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function I(t,e,o){return(e=B(e))in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function B(t){var e=function(t,e){if("object"!==_(t)||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var n=o.call(t,"string");if("object"!==_(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===_(e)?e:String(e)}var N={follow:!0,remainActive:!0,metric:!0,stopFollowingOnDrag:!0,keepCurrentZoomLevel:!1,locateOptions:{speedThreshold:.8,maximumAge:2e3,enableHighAccuracy:!0,timeout:1e4,maxZoom:18}};function z(t){return G(G(G({},N),t),{},{locateOptions:G(G({},N.locateOptions),t.locateOptions)})}var M=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,o;return e=t,o=[{key:"start",value:function(t){var e=t.map,o=t.options,n=t.messages,r=t.status,i=t.onStateChange,s=t.onLocationError;this.locate=new T(e,z(o)),this.locate.setStrings(n),this.locate.options.onLocationError=s,this.locate.on("propertychange",(function(t){i(t.target.get(t.key))})),this.configureLocate(r)}},{key:"update",value:function(t){var e=t.status,o=t.messages,n=t.options;this.configureLocate(e),this.locate.setStrings(o),this.locate.setTrackingOptions(z(n).locateOptions)}},{key:"clear",value:function(){}},{key:"configureLocate",value:function(t){var e=this.locate.get("state");"ENABLED"===t&&"DISABLED"===e?this.locate.start():"FOLLOWING"===t&&"ENABLED"===e?this.locate.startFollow():"DISABLED"===t&&this.locate.stop()}}],o&&U(e.prototype,o),Object.defineProperty(e,"prototype",{writable:!1}),t}();const V=M},199405:(t,e,o)=>{"use strict";o.d(e,{w:()=>r,B:()=>i});var n=8;function r(t){var e=t.color,o=void 0===e?"#2A93EE":e,r=t.svgAttributes,i=t.strokeWidth,s=void 0===i?n:i;return'<svg xmlns="http://www.w3.org/2000/svg" '.concat(r,' viewBox="0 0 100 100" xml:space="preserve">\n\t\t<g transform="matrix(0.2 0 0 0.2 49.8 50.19)">\n            <linearGradient gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 1 -65 -65)" x1="65" y1="130" x2="65" y2="0">\n                <stop offset="100%" style="stop-color:rgba(0, 132, 202, 1);"/>\n                <stop offset="100%" style="stop-color:rgba(0, 0, 255, 1);"/>\n            </linearGradient>\n            <circle style="stroke: rgb(255,255,255); stroke-width: ').concat(s,"; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: ").concat(o,'; fill-rule: nonzero; opacity: 1;" vector-effect="non-scaling-stroke" cx="0" cy="0" r="65"/>\n        </g>\n        <g transform="matrix(-0.12 -0.22 0.22 -0.12 47.11 20.53)">\n            <polygon style="stroke: rgb(255,255,255); stroke-width: ').concat(s,"; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: ").concat(o,'; fill-rule: nonzero; opacity: 1;" vector-effect="non-scaling-stroke" points="0,-42.5 50,42.5 -50,42.5 "/>\n        </g>\n    </svg>')}function i(t){var e=t.color,o=void 0===e?"#2A93EE":e,r=t.svgAttributes,i=t.strokeWidth,s=void 0===i?n:i;return'<svg xmlns="http://www.w3.org/2000/svg" '.concat(r,' viewBox="0 0 100 100" xml:space="preserve">\n\t\t<g transform="matrix(0.2 0 0 0.2 49.8 50.19)">\n            <linearGradient gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 1 -65 -65)" x1="65" y1="130" x2="65" y2="0">\n                <stop offset="100%" style="stop-color:rgba(0, 132, 202, 1);"/>\n                <stop offset="100%" style="stop-color:rgba(0, 0, 255, 1);"/>\n            </linearGradient>\n            <circle style="stroke: rgb(255,255,255); stroke-width: ').concat(s,"; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: ").concat(o,'; fill-rule: nonzero; opacity: 1;" vector-effect="non-scaling-stroke" cx="0" cy="0" r="65"/>\n        </g>\n    </svg>')}},611847:(t,e,o)=>{"use strict";o.d(e,{ij:()=>y,w0:()=>v,vl:()=>b,K2:()=>w,Nw:()=>O});var n=o(472500),r=o.n(n),i=o(701469),s=o.n(i),a=o(747037),p=o.n(a),l=o(618446),c=o.n(l),u=o(189734),h=o.n(u),f=o(313311),g=o.n(f),d=o(964210);function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,n=new Array(e);o<e;o++)n[o]=t[o];return n}var y=function(t){if(!t)return{};var e=!(0===t.indexOf("http")),o=e?[]:t.match(/([^:]*:)\/\/([^:]*:?[^@]*@)?([^:\/\?]*):?([^\/\?]*)/);if(e){var n=window.location;o[1]=n.protocol,o[3]=n.hostname,o[4]=n.port,o[5]=t}o[4]=""!==o[4]&&o[4]?o[4]:"https:"===o[1]?"443":"80",o[5]=o[5]?o[5]:t.slice(o[0].length);var r,i,s=(i=6,function(t){if(Array.isArray(t))return t}(r=o)||function(t,e){var o=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=o){var n,r,i,s,a=[],p=!0,l=!1;try{if(i=(o=o.call(t)).next,0===e){if(Object(o)!==o)return;p=!1}else for(;!(p=(n=i.call(o)).done)&&(a.push(n.value),a.length!==e);p=!0);}catch(t){l=!0,r=t}finally{try{if(!p&&null!=o.return&&(s=o.return(),Object(s)!==s))return}finally{if(l)throw r}}return a}}(r,i)||function(t,e){if(t){if("string"==typeof t)return m(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?m(t,e):void 0}}(r,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=s[1],p=s[3],l=s[4],c=s[5],u=0===c.indexOf("/")?c.split("/")[1]:"";return{protocol:a,domain:p,port:l,rootPath:c,applicationRootPath:u}},v=function(t,e){var o=s()(t)?t[0]:t,n=s()(e)?e[0]:e;if(o===n)return!0;if(!o||!n)return!1;if(!p()(o)||!p()(n))return!1;var i=r().parse(o),a=r().parse(n),l=y(o),u=y(n),f=l.protocol===u.protocol,g=l.domain===u.domain,d=l.port===u.port,m=i.pathname===a.pathname,v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(t===e)return!0;if(!t&&!e)return!0;var o=t?t.split("&").filter((function(t){return!!t})):[],n=e?e.split("&").filter((function(t){return!!t})):[];return c()(h()(o),h()(n))}(i.query,a.query);return f&&d&&g&&m&&v},b=function(t){return d.Qc(t)},w=function(t){return new RegExp(arguments.length>1&&void 0!==arguments[1]?arguments[1]:/^(http(s{0,1}):\/\/)+?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/).test(t)},O=function(t,e){var o=new RegExp(arguments.length>2&&void 0!==arguments[2]?arguments[2]:/^(http(s{0,1}):\/\/)+?[\w.\-{}]+(?:\.[\w\.-]+)+[\w\-\._~\/\;\.\%\:\&\=\?{}]+$/).test(t);if(!o)return!1;if(o&&!e)return!0;if(o&&e){var n=/\{(.*?)\}/.test(t);return 0===e.filter((function(t){return g()(n,t)})).length}return!1}},949916:(t,e,o)=>{"use strict";o.d(e,{Z:()=>i});var n=o(923645),r=o.n(n)()((function(t){return t[1]}));r.push([t.id,'.msgapi .ol-popup {\n    position: absolute;\n    text-align: center;\n    font: 12px/1.5 "Helvetica Neue", Arial, Helvetica, sans-serif;\n    -ms-transform: translate(-50%,-100%); /* IE 9 */\n    -webkit-transform: translate(-50%,-100%); /* Safari */\n    transform: translate(-50%,-100%);\n}\n.msgapi a.ol-popup-close-btn {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 4px 4px 0 0;\n  text-align: center;\n  width: 18px;\n  height: 14px;\n  font: 16px/14px Tahoma, Verdana, sans-serif;\n  color: #c3c3c3;\n  text-decoration: none;\n  font-weight: bold;\n  background: transparent;\n}\n.msgapi .ol-popup-cnt-wrapper {\n  padding: 1px;\n  text-align: left;\n  border-radius: 12px;\n}\n.msgapi .ol-popup-cnt-wrapper, .msgapi .ol-popup-tip {\n  background: white;\n  box-shadow: 0 3px 14px rgba(0,0,0,0.4);\n}\n.msgapi .ol-popup-cnt {\n  margin: 13px 19px;\n  line-height: 1.4;\n   white-space: nowrap;\n\n}\n.msgapi .ol-popup-tip-wrapper {\n  margin: 0 auto;\n  width: 40px;\n  height: 20px;\n  position: relative;\n  overflow: hidden;\n\n}\n.msgapi .ol-popup-tip {\n  width: 17px;\n  height: 17px;\n  padding: 1px;\n  margin: -10px auto 0;\n  -webkit-transform: rotate(45deg);\n  -moz-transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  -o-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n',""]);const i=r}}]);