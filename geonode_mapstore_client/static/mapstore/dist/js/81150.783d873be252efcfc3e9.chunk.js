(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[81150],{647310:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var n=r(375875),o=r.n(n),i=r(472500),a=r.n(i),s=r(727418),c=r.n(s),l={format:"json",bounded:0,polygon_geojson:1,priority:5};const p={geocode:function(e,t){var r=c()({q:e},l,t||{}),n=a().format({protocol:"https",host:"nominatim.openstreetmap.org",query:r});return o().get(n)},reverseGeocode:function(e,t){var r=c()({lat:e.lat,lon:e.lng},t||{},l),n=a().format({protocol:"https",host:"nominatim.openstreetmap.org/reverse",query:r});return o().get(n)}}},115047:(e,t,r)=>{"use strict";r.d(t,{b:()=>y});var n=r(727418),o=r.n(n);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=function(e){return null===e?[]:e.map((function(e){return{properties:a({},e),id:e.osm_id,type:"Feature",bbox:e.boundingbox.map((function(e){return parseFloat(e)})).reduce((function(e,t,r){return e[function(e){switch(e){case 0:return 1;case 1:return 3;case 2:return 0;case 3:return 2;default:return-1}}(r)]=t,e}),[]),geometry:e.geojson||{type:"Point",coordinates:[parseFloat(e.lon),parseFloat(e.lat)]}}}))},l=r(59286),p=r(432420),u=["url","typeName","queriableAttributes","outputFormat","predicate","staticFilter","blacklist","item","fromTextToFilter","returnFullData"];var f=function(e){var t,r=e.searchText,n=e.staticFilter,o=e.blacklist,i=e.item,a=e.queriableAttributes,s=e.predicate,c=(0,l.generateTemplateString)(n||"")(i),p=r.split(" ").filter((function(e){return e})).filter((function(e){return o.indexOf(e.toLowerCase())<0}));return 0===p.length&&(p=r?[r]:[]),p.length>0&&(t="(".concat(p.map((function(e){return a.map((function(t){return"".concat(t," ").concat(s," '%").concat(e.replace("'","''"),"%'")})).join(" OR ")})).join(") AND (")).concat(")")),t?t.concat(c):c||null},b={nominatim:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{returnFullData:!1};return r(647310).Z.geocode(e,t).then((function(e){return t.returnFullData?e:c(e.data)}))},wfs:function(e,t){var r=t.url,n=t.typeName,i=t.queriableAttributes,a=void 0===i?[]:i,s=t.outputFormat,c=void 0===s?"application/json":s,l=t.predicate,b=void 0===l?"ILIKE":l,d=t.staticFilter,y=void 0===d?"":d,m=t.blacklist,w=void 0===m?[]:m,g=t.item,h=t.fromTextToFilter,v=void 0===h?f:h,O=t.returnFullData,P=void 0!==O&&O,x=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(t,u),j=v({searchText:e,staticFilter:y,blacklist:w,item:g,queriableAttributes:a,predicate:b});return p.DH(r,o()({maxFeatures:10,typeName:n,outputFormat:c,cql_filter:j},x)).then((function(e){return P?e:e.features}))}},d={setService:function(e,t){b[e]=t},getService:function(e){return b[e]?b[e]:null}},y={Services:b,Utils:d}},848384:(e,t,r)=>{"use strict";r.d(t,{Z:()=>w});var n=r(124852),o=r.n(n),i=r(675263),a=r.n(i);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}function u(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}var b,d,y,m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(s,e);var t,r,n,i,a=(n=s,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(n);if(i){var r=f(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return u(this,e)});function s(){return c(this,s),a.apply(this,arguments)}return t=s,(r=[{key:"render",value:function(){var e=this.props.item;return e.pagination?o().createElement("span",null,e[this.props.textField]," ",e.pagination," "):o().createElement("span",null,e[this.props.textField])}}])&&l(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),s}(o().Component);b=m,d="propTypes",y={item:a().object,textField:a().string,valueField:a().string},d in b?Object.defineProperty(b,d,{value:y,enumerable:!0,configurable:!0,writable:!0}):b[d]=y;const w=m},965539:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(124852),o=r.n(n);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const c=function(e){var t=e.id,r=e.children,n=e.header,i=e.footer,s=e.columns,c=e.height,l=e.style,p=void 0===l?{}:l,u=e.className,f=e.bodyClassName,b=void 0===f?"ms2-border-layout-body":f;return o().createElement("div",{id:t,className:u,style:a({display:"flex",flexDirection:"column",width:"100%",height:"100%",overflow:"hidden"},p)},n,o().createElement("div",{className:b,style:{display:"flex",flex:1,overflowY:"auto"}},o().createElement("main",{className:"ms2-border-layout-content",style:{flex:1,overflowX:"hidden"}},c?o().createElement("div",{style:{height:c}},r):r),c?o().createElement("div",{style:{height:c}},s):s),i)}},749902:(e,t,r)=>{"use strict";r.d(t,{Z:()=>P});var n=r(675263),o=r.n(n),i=r(124852),a=r.n(i),s=r(200020),c=r(757588),l=r(86638),p=r(950966),u=r(848384);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},b.apply(this,arguments)}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},m(e,t)}function w(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return g(e)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(n);if(o){var r=h(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return w(this,e)});function u(){var e;d(this,u);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return v(g(e=i.call.apply(i,[this].concat(r))),"renderWithTooltip",(function(t){if(e.props.tooltip.customizedTooltip){var r=e.props.tooltip.customizedTooltip;return a().createElement(r,null,t)}var n=a().createElement(c.Tooltip,{id:e.props.tooltip.id},e.props.tooltip.message);return a().createElement(p.Z,{key:e.props.tooltip.overlayTriggerKey,placement:e.props.tooltip.placement,overlay:n},t)})),v(g(e),"renderPagination",(function(){var t=e.props.pagination.firstPage,r=e.props.pagination.lastPage;return a().createElement("div",{className:"autocomplete-toolbar"},!t&&a().createElement(c.Glyphicon,{className:e.props.prevPageIcon,glyph:e.props.prevPageIcon,onClick:function(t){e.props.stopPropagation&&t.stopPropagation(),e.props.pagination.loadPrevPage()}}),!r&&a().createElement(c.Glyphicon,{className:e.props.nextPageIcon,glyph:e.props.nextPageIcon,onClick:function(t){e.props.stopPropagation&&t.stopPropagation(),e.props.pagination.loadNextPage()}}))})),v(g(e),"renderField",(function(){var t,r={emptyList:(0,l.S$)(e.context.messages,"queryform.attributefilter.autocomplete.emptyList"),open:(0,l.S$)(e.context.messages,"queryform.attributefilter.autocomplete.open"),emptyFilter:(0,l.S$)(e.context.messages,"queryform.attributefilter.autocomplete.emptyFilter")},n=[];e.props.data&&e.props.data.length>0&&(n=e.props.data.map((function(e){return e}))),e.props.pagination&&e.props.pagination.paginated&&n.length>0&&n.push((v(t={},e.props.textField,""),v(t,e.props.valueField,""),v(t,"disabled",!0),v(t,"pagination",e.renderPagination()),t));var o=e.props.loading?[]:n,i=e.props.itemComponent,c=a().createElement(s.Combobox,{placeholder:e.props.placeholder,dropUp:e.props.dropUp,busy:e.props.busy,data:o,disabled:e.props.disabled,itemComponent:function(t){return a().createElement(i,b({textField:e.props.textField,valueField:e.props.valueField},t))},messages:e.props.messages||r,open:e.props.open,filter:e.props.filter,onChange:function(t){return e.props.onChange(t)},onFocus:function(){return e.props.onFocus(e.props.data)},onSelect:function(t){return e.props.onSelect(t)},onToggle:function(t){return e.props.onToggle(t)},textField:e.props.textField,valueField:e.props.valueField,value:e.props.selectedValue});return e.props.tooltip&&e.props.tooltip.enabled?e.renderWithTooltip(c):c})),e}return t=u,(r=[{key:"componentDidUpdate",value:function(e){var t=this.props.attribute;t!==e.attribute&&this.props.onChangeAttribute(t)}},{key:"render",value:function(){var e=this.props,t=e.selectedValue,r=e.disabled,n=e.onReset,o=e.label,i=e.clearable,s=o?a().createElement("label",null,o):a().createElement("span",null);return a().createElement("div",{className:"autocompleteField"},s,i?a().createElement("div",{className:"rw-combo-clearable ".concat(r?"disabled":"")},this.renderField(),a().createElement("span",{className:"rw-combo-clear ".concat(t?"":"hidden"),onClick:n},"x")):this.renderField())}}])&&y(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(a().Component);v(O,"propTypes",{busy:o().bool,data:o().array,disabled:o().bool,dropUp:o().bool,itemComponent:o().oneOfType([o().object,o().func]),label:o().string,loading:o().bool,filter:o().oneOfType([o().string,o().bool]),messages:o().object,onChange:o().func,onFocus:o().func,onSelect:o().func,onToggle:o().func,onChangeAttribute:o().func,open:o().bool,pagination:o().object,nextPageIcon:o().string,prevPageIcon:o().string,selectedValue:o().string,textField:o().string,tooltip:o().object,valueField:o().string,placeholder:o().string,stopPropagation:o().bool,clearable:o().bool,onReset:o().func,attribute:o().string}),v(O,"contextTypes",{messages:o().object}),v(O,"defaultProps",{stopPropagation:!1,dropUp:!1,itemComponent:u.Z,loading:!1,label:null,filter:"",pagination:{paginated:!0,firstPage:!1,lastPage:!1,loadPrevPage:function(){},loadNextPage:function(){}},nextPageIcon:"chevron-right",prevPageIcon:"chevron-left",onFocus:function(){},onToggle:function(){},onChange:function(){},onSelect:function(){},onReset:function(){},onChangeAttribute:function(){},textField:"label",tooltip:{customizedTooltip:void 0,enabled:!1,id:"",message:void 0,overlayTriggerKey:"",placement:"top"},valueField:"value",clearable:!1});const P=O},576364:(e,t,r)=>{"use strict";r.d(t,{Vd:()=>P,Vj:()=>x});var n=r(472500),o=r.n(n),i=r(666654),a=r.n(i),s=r(91175),c=r.n(s),l=r(414293),p=r.n(l),u=r(727418),f=r.n(u),b=r(49977),d=r.n(b),y=r(115047),m=r(375875),w=r.n(m),g=r(284069);function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var O=function(e){var t=e.searchText,r=void 0===t?"":t,n=e.queriableAttributes,o=void 0===n?[]:n,i=e.predicate,a=void 0===i?"ILIKE":i,s=c()(o),l=r.toLowerCase(),u="strToLowerCase(".concat(s,") ").concat(a," '%").concat(l,"%'");return p()(s)?"":"("+u+")"},P=function(e){return e.distinctUntilChanged((function(e){var t=e.value,r=e.currentPage,n=e.attribute,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return!(o.value!==t||o.currentPage!==r||o.attribute!==n)})).throttle((function(e){return d().Observable.timer(e.delayDebounce||0)})).merge(e.debounce((function(e){return d().Observable.timer(e.delayDebounce||0)}))).distinctUntilChanged().switchMap((function(e){if(e.performFetch){var t=(0,g.getWpsPayload)({attribute:e.attribute,layerName:e.typeName,maxFeatures:e.maxFeatures,startIndex:(e.currentPage-1)*e.maxFeatures,value:e.value});return d().Observable.fromPromise(w().post(e.url,t,{timeout:6e4,headers:{Accept:"application/json","Content-Type":"application/xml"}}).then((function(e){return{fetchedData:e.data,busy:!1}}))).catch((function(){return d().Observable.of({fetchedData:{values:[],size:0},busy:!1})})).startWith({busy:!0})}return d().Observable.of({fetchedData:{values:[],size:0},busy:!1})})).startWith({})},x=function(e){return d().Observable.merge(e.distinctUntilChanged((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.value,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.value;return t===n})).debounce((function(e){return d().Observable.timer(e.delayDebounce||0)})),e.distinctUntilChanged((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.filterProps,r=e.currentPage,n=arguments.length>1?arguments[1]:void 0,o=n.filterProps,i=n.currentPage;return t===o&&r===i}))).switchMap((function(e){if(e.performFetch){var t=o().parse(e.url,!0),r="";(a()(t.pathname,"wfs")||a()(t.pathname,"wms")||a()(t.pathname,"ows")||a()(t.pathname,"wps"))&&(r=t.pathname.replace(/(wms|ows|wps|wfs)$/,"wfs")),t.query&&t.query.service&&delete t.query.service;var n=o().format(f()({},t,{search:null,pathname:r})),i=f()({},function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){v(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({url:n,typeName:e.filterProps&&e.filterProps.typeName||"",predicate:e.filterProps&&e.filterProps.predicate||"ILIKE",blacklist:e.filterProps&&e.filterProps.blacklist||[],maxFeatures:e.filterProps&&e.filterProps.maxFeatures||3,queriableAttributes:e.filterProps&&e.filterProps.queriableAttributes||[],returnFullData:!0,startIndex:((e.currentPage||1)-1)*(e.filterProps&&e.filterProps.maxFeatures||3),outputFormat:"application/json",staticFilter:"",fromTextToFilter:O,item:{},timeout:6e4,headers:{Accept:"application/json","Content-Type":"application/xml"},srsName:e.filterProps&&e.filterProps.srsName||"EPSG:4326"},t.query));return d().Observable.fromPromise(y.b.Utils.getService("wfs")(e.value,i).then((function(t){return{fetchedData:{values:t.features.map((function(e){return e.properties})),size:t.totalFeatures,features:t.features,crs:e.filterProps&&e.filterProps.srsName||"EPSG:4326"},busy:!1}}))).catch((function(){return d().Observable.of({fetchedData:{values:[],size:0,features:[]},busy:!1})})).startWith({busy:!0})}return d().Observable.of({fetchedData:{values:[],size:0,features:[]},busy:!1})})).startWith({})}},510284:(e,t,r)=>{"use strict";r.d(t,{sw:()=>w,oB:()=>g});var n=r(49977),o=r.n(n),i=r(227361),a=r.n(i),s=r(505055),c=r(507526);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function p(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function u(e){var t="function"==typeof Map?new Map:void 0;return u=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e;var r;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return f(e,arguments,y(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),d(n,e)},u(e)}function f(e,t,r){return f=b()?Reflect.construct.bind():function(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&d(o,r.prototype),o},f.apply(null,arguments)}function b(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function d(e,t){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},d(e,t)}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}r(324384);var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(i,e);var t,r,n,o=(t=i,r=b(),function(){var e,n=y(t);if(r){var o=y(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return p(this,e)});function i(e,t){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(r=o.call(this,e)).name="OGCError",r.code=t,r}return n=i,Object.defineProperty(n,"prototype",{writable:!1}),n}(u(Error)),w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{tagNameProcessors:[c.stripPrefix],explicitArray:!1,mergeAttrs:!0};return o().Observable.bindNodeCallback((function(e,r){return(0,s.parseString)(e,t,r)}))(e)},g=function(e){return e.switchMap((function(e){return"string"==typeof e.data&&e.data.indexOf("ExceptionReport")>0?o().Observable.bindNodeCallback((function(e,t){return(0,s.parseString)(e,{tagNameProcessors:[c.stripPrefix],explicitArray:!1,mergeAttrs:!0},t)}))(e.data).map((function(e){var t=a()(e,"ExceptionReport.Exception.ExceptionText");throw new m(t||"Undefined OGC Service Error",a()(e,"ExceptionReport.Exception.exceptionCode"))})):o().Observable.of(e)}))}},284069:(e,t,r)=>{function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var o=r(47805),i=o.isFilterValid,a=o.toOGCFilterParts,s=r(102245)({}).and;e.exports={getWpsPayload:function(e){var t,r=e.layerName,o=e.layerFilter,c=e.attribute,l=e.maxFeatures,p=e.startIndex,u=e.value,f=u?'<ogc:PropertyIsLike matchCase="false" wildCard="*" singleChar="." escapeChar="!">   <ogc:PropertyName>'+c+"</ogc:PropertyName>   <ogc:Literal>*"+u+"*</ogc:Literal></ogc:PropertyIsLike>":"",b=o&&!o.disabled&&i(o)?a(o,"1.1.0","ogc"):[];return'<wps:Execute xmlns:wps="http://www.opengis.net/wps/1.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="1.0.0" service="WPS" xsi:schemaLocation="http://www.opengis.net/wps/1.0.0 http://schemas.opengis.net/wps/1.0.0/wpsAll.xsd">  <ows:Identifier xmlns:ows="http://www.opengis.net/ows/1.1">gs:PagedUnique</ows:Identifier>  <wps:DataInputs>    <wps:Input>      <ows:Identifier xmlns:ows="http://www.opengis.net/ows/1.1">features</ows:Identifier>      <ows:Title xmlns:ows="http://www.opengis.net/ows/1.1">features</ows:Title>      <wps:Data />      <wps:Reference xmlns:xlink="http://www.w3.org/1999/xlink" mimeType="text/xml" xlink:href="http://geoserver/wfs" method="POST">        <wps:Body>         <wfs:GetFeature xmlns:wfs="http://www.opengis.net/wfs" service="WFS" version="1.0.0">           <wfs:Query typeName="'+r+'">'+(f.length>0||b.length>0?'<ogc:Filter xmlns:ogc="http://www.opengis.net/ogc" xmlns:gml="http://www.opengis.net/gml">'+s.apply(void 0,(t=b,function(e){if(Array.isArray(e))return n(e)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).concat([f]))+"</ogc:Filter>":"")+'             <ogc:SortBy xmlns:ogc="http://www.opengis.net/ogc">               <ogc:SortProperty>                 <ogc:PropertyName>'+c+'</ogc:PropertyName>               </ogc:SortProperty>             </ogc:SortBy>           </wfs:Query>         </wfs:GetFeature>       </wps:Body>     </wps:Reference>   </wps:Input>   <wps:Input>     <ows:Identifier xmlns:ows="http://www.opengis.net/ows/1.1">fieldName</ows:Identifier>     <ows:Title xmlns:ows="http://www.opengis.net/ows/1.1">fieldName</ows:Title>     <wps:Data>       <wps:LiteralData>'+c+'</wps:LiteralData>     </wps:Data>   </wps:Input>   <wps:Input>     <ows:Identifier xmlns:ows="http://www.opengis.net/ows/1.1">maxFeatures</ows:Identifier>     <ows:Title xmlns:ows="http://www.opengis.net/ows/1.1">maxFeatures</ows:Title>     <wps:Data>       <wps:LiteralData>'+l+'</wps:LiteralData>     </wps:Data>   </wps:Input>   <wps:Input>     <ows:Identifier xmlns:ows="http://www.opengis.net/ows/1.1">startIndex</ows:Identifier>     <ows:Title xmlns:ows="http://www.opengis.net/ows/1.1">startIndex</ows:Title>     <wps:Data>       <wps:LiteralData>'+p+'</wps:LiteralData>     </wps:Data>   </wps:Input> </wps:DataInputs> <wps:ResponseForm>   <wps:RawDataOutput mimeType="application/json">     <ows:Identifier xmlns:ows="http://www.opengis.net/ows/1.1">result</ows:Identifier>   </wps:RawDataOutput> </wps:ResponseForm></wps:Execute>'}}}}]);