(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[80202],{654625:e=>{e.exports=function(e){if(!e||!e.type)return null;var r=t[e.type];return r?"geometry"===r?{type:"FeatureCollection",features:[{type:"Feature",properties:{},geometry:e}]}:"feature"===r?{type:"FeatureCollection",features:[e]}:"featurecollection"===r?e:void 0:null};var t={Point:"geometry",MultiPoint:"geometry",LineString:"geometry",MultiLineString:"geometry",Polygon:"geometry",MultiPolygon:"geometry",GeometryCollection:"geometry",Feature:"feature",FeatureCollection:"featurecollection"}},887157:(e,t,r)=>{var o=r(640554),n=r(588958);e.exports=function(e,t,r,u){var i=e.length;for((r=o(r))<0&&(r=-r>i?0:i+r),(u=void 0===u||u>i?i:o(u))<0&&(u+=i),u=r>u?0:n(u);r<u;)e[r++]=t;return e}},819873:(e,t,r)=>{var o=r(887157),n=r(816612);e.exports=function(e,t,r,u){var i=null==e?0:e.length;return i?(r&&"number"!=typeof r&&n(e,t,r)&&(r=0,u=i),o(e,t,r,u)):[]}},531351:e=>{var t=Array.prototype.reverse;e.exports=function(e){return null==e?e:t.call(e)}},410240:(e,t,r)=>{var o=r(829750),n=r(880531),u=r(640554),i=r(479833);e.exports=function(e,t,r){return e=i(e),r=null==r?0:o(u(r),0,e.length),t=n(t),e.slice(r,r+t.length)==t}},588958:(e,t,r)=>{var o=r(829750),n=r(640554);e.exports=function(e){return e?o(n(e),0,4294967295):0}},819081:(e,t,r)=>{"use strict";e.exports=r(1174)},755745:(e,t,r)=>{var o=r(803465),n=o.featureCollection,u=r(798098),i=r(654625);e.exports=function(e,t,r){var a=o.distanceToDegrees(t,r),l=i(e),p=i(n(l.features.map((function(e){return function(e,t){var r=(new u.io.GeoJSONReader).read(e.geometry).buffer(t);return{type:"Feature",geometry:r=(new u.io.GeoJSONWriter).write(r),properties:{}}}(e,a)}))));return p.features.length>1?p:1===p.features.length?p.features[0]:void 0}},165442:(e,t,r)=>{var o=r(798098);e.exports=function(e,t){var r,n;r="Feature"===e.type?e.geometry:e,n="Feature"===t.type?t.geometry:t;var u=new o.io.GeoJSONReader,i=u.read(JSON.stringify(r)),a=u.read(JSON.stringify(n)),l=i.intersection(a);if(!l.isEmpty())return{type:"Feature",properties:{},geometry:(new o.io.GeoJSONWriter).write(l)}}}}]);