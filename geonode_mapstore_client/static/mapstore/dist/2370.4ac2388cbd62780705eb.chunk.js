(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[2370,3105],{85447:(t,e,i)=>{"use strict";i.d(e,{Z:()=>n});var s=i(39153);var o=i(29346);const n=function(t,e){if(e=e||{},!(0,o.Kn)(e))throw new Error("options is invalid");var i=e.properties;if(!t)throw new Error("geojson is required");var n=function(t){var e=[1/0,1/0,-1/0,-1/0];return(0,s.pZ)(t,(function(t){e[0]>t[0]&&(e[0]=t[0]),e[1]>t[1]&&(e[1]=t[1]),e[2]<t[0]&&(e[2]=t[0]),e[3]<t[1]&&(e[3]=t[1])})),e}(t),r=(n[0]+n[2])/2,h=(n[1]+n[3])/2;return(0,o.xm)([r,h],i)}},80760:(t,e,i)=>{var s=i(89881);t.exports=function(t,e){var i=[];return s(t,(function(t,s,o){e(t,s,o)&&i.push(t)})),i}},63105:(t,e,i)=>{var s=i(34963),o=i(80760),n=i(67206),r=i(1469);t.exports=function(t,e){return(r(t)?s:o)(t,n(e,3))}},69669:(t,e,i)=>{"use strict";i.d(e,{Z:()=>a});var s=i(21915),o=i(28795),n=i(32538),r=i(38667),h=function(t){function e(e,i,s){if(t.call(this),void 0!==s&&void 0===i)this.setFlatCoordinates(s,e);else{var o=i||0;this.setCenterAndRadius(e,o,s)}}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.clone=function(){return new e(this.flatCoordinates.slice(),void 0,this.layout)},e.prototype.closestPointXY=function(t,e,i,s){var o=this.flatCoordinates,n=t-o[0],r=e-o[1],h=n*n+r*r;if(h<s){if(0===h)for(var a=0;a<this.stride;++a)i[a]=o[a];else{var d=this.getRadius()/Math.sqrt(h);i[0]=o[0]+d*n,i[1]=o[1]+d*r;for(var _=2;_<this.stride;++_)i[_]=o[_]}return i.length=this.stride,h}return s},e.prototype.containsXY=function(t,e){var i=this.flatCoordinates,s=t-i[0],o=e-i[1];return s*s+o*o<=this.getRadiusSquared_()},e.prototype.getCenter=function(){return this.flatCoordinates.slice(0,this.stride)},e.prototype.computeExtent=function(t){var e=this.flatCoordinates,i=e[this.stride]-e[0];return(0,s.T9)(e[0]-i,e[1]-i,e[0]+i,e[1]+i,t)},e.prototype.getRadius=function(){return Math.sqrt(this.getRadiusSquared_())},e.prototype.getRadiusSquared_=function(){var t=this.flatCoordinates[this.stride]-this.flatCoordinates[0],e=this.flatCoordinates[this.stride+1]-this.flatCoordinates[1];return t*t+e*e},e.prototype.getType=function(){return o.Z.CIRCLE},e.prototype.intersectsExtent=function(t){var e=this.getExtent();if((0,s.kK)(t,e)){var i=this.getCenter();return t[0]<=i[0]&&t[2]>=i[0]||t[1]<=i[1]&&t[3]>=i[1]||(0,s.H6)(t,this.intersectsCoordinate,this)}return!1},e.prototype.setCenter=function(t){var e=this.stride,i=this.flatCoordinates[e]-this.flatCoordinates[0],s=t.slice();s[e]=s[0]+i;for(var o=1;o<e;++o)s[e+o]=t[o];this.setFlatCoordinates(this.layout,s),this.changed()},e.prototype.setCenterAndRadius=function(t,e,i){this.setLayout(i,t,0),this.flatCoordinates||(this.flatCoordinates=[]);var s=this.flatCoordinates,o=(0,r.IG)(s,0,t,this.stride);s[o++]=s[0]+e;for(var n=1,h=this.stride;n<h;++n)s[o++]=s[n];s.length=o,this.changed()},e.prototype.getCoordinates=function(){return null},e.prototype.setCoordinates=function(t,e){},e.prototype.setRadius=function(t){this.flatCoordinates[this.stride]=this.flatCoordinates[0]+t,this.changed()},e}(n.ZP);h.prototype.transform;const a=h},72445:(t,e,i)=>{"use strict";i.d(e,{ZP:()=>O});var s=i(73381),o=i(23068),n=i(30006),r=i(86968),h=i(58493),a=i(90728),d=i(13002),_=i(9520),c=i(36403),u=i(64011),l=i(69669),p=i(28795),f=i(44538),y=i(25642),C=i(52329),g=i(13987),m=i(14303),v=i(52043),k=i(40353),w=i(38024),T=i(73604),P=i(29902),Z=i(97016),F=i(31219),L="Point",D="LineString",E="Polygon",N="Circle",x="drawstart",I=function(t){function e(e,i){t.call(this,e),this.feature=i}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(_.ZP);const O=function(t){function e(e){var i=e;i.stopDown||(i.stopDown=u.Dv),t.call(this,i),this.shouldHandle_=!1,this.downPx_=null,this.downTimeout_,this.lastDragTime_,this.freehand_=!1,this.source_=e.source?e.source:null,this.features_=e.features?e.features:null,this.snapTolerance_=e.snapTolerance?e.snapTolerance:12,this.type_=e.type,this.mode_=function(t){var e;return t===p.Z.POINT||t===p.Z.MULTI_POINT?e=L:t===p.Z.LINE_STRING||t===p.Z.MULTI_LINE_STRING?e=D:t===p.Z.POLYGON||t===p.Z.MULTI_POLYGON?e=E:t===p.Z.CIRCLE&&(e=N),e}(this.type_),this.stopClick_=!!e.stopClick,this.minPoints_=e.minPoints?e.minPoints:this.mode_===E?3:2,this.maxPoints_=e.maxPoints?e.maxPoints:1/0,this.finishCondition_=e.finishCondition?e.finishCondition:u.uX;var s,o=e.geometryFunction;if(!o)if(this.type_===p.Z.CIRCLE)o=function(t,e){var i=e||new l.Z([NaN,NaN]),s=(0,a.bI)(t[0],t[1]);return i.setCenterAndRadius(t[0],Math.sqrt(s)),i};else{var n,r=this.mode_;r===L?n=v.Z:r===D?n=f.Z:r===E&&(n=k.ZP),o=function(t,e){var i=e;return i?r===E?t[0].length?i.setCoordinates([t[0].concat([t[0][0]])]):i.setCoordinates([]):i.setCoordinates(t):i=new n(t),i}}this.geometryFunction_=o,this.dragVertexDelay_=void 0!==e.dragVertexDelay?e.dragVertexDelay:500,this.finishCoordinate_=null,this.sketchFeature_=null,this.sketchPoint_=null,this.sketchCoords_=null,this.sketchLine_=null,this.sketchLineCoords_=null,this.squaredClickTolerance_=e.clickTolerance?e.clickTolerance*e.clickTolerance:36,this.overlay_=new P.Z({source:new Z.Z({useSpatialIndex:!1,wrapX:!!e.wrapX&&e.wrapX}),style:e.style?e.style:(s=(0,F.createEditingStyle)(),function(t,e){return s[t.getGeometry().getType()]}),updateWhileInteracting:!0}),this.geometryName_=e.geometryName,this.condition_=e.condition?e.condition:c.rM,this.freehandCondition_,e.freehand?this.freehandCondition_=c.Bx:this.freehandCondition_=e.freehandCondition?e.freehandCondition:c.vY,(0,d.oL)(this,(0,h.v_)(T.Z.ACTIVE),this.updateState_,this)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setMap=function(e){t.prototype.setMap.call(this,e),this.updateState_()},e.prototype.getOverlay=function(){return this.overlay_},e.prototype.handleEvent=function(e){e.originalEvent.type===s.Z.CONTEXTMENU&&e.preventDefault(),this.freehand_=this.mode_!==L&&this.freehandCondition_(e);var i=e.type===n.Z.POINTERMOVE,o=!0;return!this.freehand_&&this.lastDragTime_&&e.type===n.Z.POINTERDRAG&&(Date.now()-this.lastDragTime_>=this.dragVertexDelay_?(this.downPx_=e.pixel,this.shouldHandle_=!this.freehand_,i=!0):this.lastDragTime_=void 0,this.shouldHandle_&&void 0!==this.downTimeout_&&(clearTimeout(this.downTimeout_),this.downTimeout_=void 0)),this.freehand_&&e.type===n.Z.POINTERDRAG&&null!==this.sketchFeature_?(this.addToDrawing_(e),o=!1):this.freehand_&&e.type===n.Z.POINTERDOWN?o=!1:i?(o=e.type===n.Z.POINTERMOVE)&&this.freehand_?o=this.handlePointerMove_(e):(e.pointerEvent.pointerType==m.T2||e.type===n.Z.POINTERDRAG&&void 0===this.downTimeout_)&&this.handlePointerMove_(e):e.type===n.Z.DBLCLICK&&(o=!1),t.prototype.handleEvent.call(this,e)&&o},e.prototype.handleDownEvent=function(t){return this.shouldHandle_=!this.freehand_,this.freehand_?(this.downPx_=t.pixel,this.finishCoordinate_||this.startDrawing_(t),!0):!!this.condition_(t)&&(this.lastDragTime_=Date.now(),this.downTimeout_=setTimeout(function(){this.handlePointerMove_(new r.Z(n.Z.POINTERMOVE,t.map,t.pointerEvent,!1,t.frameState))}.bind(this),this.dragVertexDelay_),this.downPx_=t.pixel,!0)},e.prototype.handleUpEvent=function(t){var e=!0;this.downTimeout_&&(clearTimeout(this.downTimeout_),this.downTimeout_=void 0),this.handlePointerMove_(t);var i=this.mode_===N;return this.shouldHandle_?(this.finishCoordinate_?this.freehand_||i?this.finishDrawing():this.atFinish_(t)?this.finishCondition_(t)&&this.finishDrawing():this.addToDrawing_(t):(this.startDrawing_(t),this.mode_===L&&this.finishDrawing()),e=!1):this.freehand_&&(this.finishCoordinate_=null,this.abortDrawing_()),!e&&this.stopClick_&&t.stopPropagation(),e},e.prototype.handlePointerMove_=function(t){if(this.downPx_&&(!this.freehand_&&this.shouldHandle_||this.freehand_&&!this.shouldHandle_)){var e=this.downPx_,i=t.pixel,s=e[0]-i[0],o=e[1]-i[1],n=s*s+o*o;if(this.shouldHandle_=this.freehand_?n>this.squaredClickTolerance_:n<=this.squaredClickTolerance_,!this.shouldHandle_)return!0}return this.finishCoordinate_?this.modifyDrawing_(t):this.createOrUpdateSketchPoint_(t),!0},e.prototype.atFinish_=function(t){var e=!1;if(this.sketchFeature_){var i=!1,s=[this.finishCoordinate_];if(this.mode_===D)i=this.sketchCoords_.length>this.minPoints_;else if(this.mode_===E){var o=this.sketchCoords_;i=o[0].length>this.minPoints_,s=[o[0][0],o[0][o[0].length-2]]}if(i)for(var n=t.map,r=0,h=s.length;r<h;r++){var a=s[r],d=n.getPixelFromCoordinate(a),_=t.pixel,c=_[0]-d[0],u=_[1]-d[1],l=this.freehand_?1:this.snapTolerance_;if(e=Math.sqrt(c*c+u*u)<=l){this.finishCoordinate_=a;break}}}return e},e.prototype.createOrUpdateSketchPoint_=function(t){var e=t.coordinate.slice();this.sketchPoint_?this.sketchPoint_.getGeometry().setCoordinates(e):(this.sketchPoint_=new o.Z(new v.Z(e)),this.updateSketchFeatures_())},e.prototype.startDrawing_=function(t){var e=t.coordinate;this.finishCoordinate_=e,this.mode_===L?this.sketchCoords_=e.slice():this.mode_===E?(this.sketchCoords_=[[e.slice(),e.slice()]],this.sketchLineCoords_=this.sketchCoords_[0]):this.sketchCoords_=[e.slice(),e.slice()],this.sketchLineCoords_&&(this.sketchLine_=new o.Z(new f.Z(this.sketchLineCoords_)));var i=this.geometryFunction_(this.sketchCoords_);this.sketchFeature_=new o.Z,this.geometryName_&&this.sketchFeature_.setGeometryName(this.geometryName_),this.sketchFeature_.setGeometry(i),this.updateSketchFeatures_(),this.dispatchEvent(new I(x,this.sketchFeature_))},e.prototype.modifyDrawing_=function(t){var e,i,s,n=t.coordinate,r=this.sketchFeature_.getGeometry();if(this.mode_===L?i=this.sketchCoords_:this.mode_===E?(i=(e=this.sketchCoords_[0])[e.length-1],this.atFinish_(t)&&(n=this.finishCoordinate_.slice())):i=(e=this.sketchCoords_)[e.length-1],i[0]=n[0],i[1]=n[1],this.geometryFunction_(this.sketchCoords_,r),this.sketchPoint_&&this.sketchPoint_.getGeometry().setCoordinates(n),r.getType()==p.Z.POLYGON&&this.mode_!==E){this.sketchLine_||(this.sketchLine_=new o.Z);var h=r.getLinearRing(0);(s=this.sketchLine_.getGeometry())?(s.setFlatCoordinates(h.getLayout(),h.getFlatCoordinates()),s.changed()):(s=new f.Z(h.getFlatCoordinates(),h.getLayout()),this.sketchLine_.setGeometry(s))}else this.sketchLineCoords_&&(s=this.sketchLine_.getGeometry()).setCoordinates(this.sketchLineCoords_);this.updateSketchFeatures_()},e.prototype.addToDrawing_=function(t){var e,i,s=t.coordinate,o=this.sketchFeature_.getGeometry();this.mode_===D?(this.finishCoordinate_=s.slice(),(i=this.sketchCoords_).length>=this.maxPoints_&&(this.freehand_?i.pop():e=!0),i.push(s.slice()),this.geometryFunction_(i,o)):this.mode_===E&&((i=this.sketchCoords_[0]).length>=this.maxPoints_&&(this.freehand_?i.pop():e=!0),i.push(s.slice()),e&&(this.finishCoordinate_=i[0]),this.geometryFunction_(this.sketchCoords_,o)),this.updateSketchFeatures_(),e&&this.finishDrawing()},e.prototype.removeLastPoint=function(){if(this.sketchFeature_){var t,e=this.sketchFeature_.getGeometry();this.mode_===D?((t=this.sketchCoords_).splice(-2,1),this.geometryFunction_(t,e),t.length>=2&&(this.finishCoordinate_=t[t.length-2].slice())):this.mode_===E&&((t=this.sketchCoords_[0]).splice(-2,1),this.sketchLine_.getGeometry().setCoordinates(t),this.geometryFunction_(this.sketchCoords_,e)),0===t.length&&(this.finishCoordinate_=null),this.updateSketchFeatures_()}},e.prototype.finishDrawing=function(){var t=this.abortDrawing_();if(t){var e=this.sketchCoords_,i=t.getGeometry();this.mode_===D?(e.pop(),this.geometryFunction_(e,i)):this.mode_===E&&(e[0].pop(),this.geometryFunction_(e,i),e=i.getCoordinates()),this.type_===p.Z.MULTI_POINT?t.setGeometry(new C.Z([e])):this.type_===p.Z.MULTI_LINE_STRING?t.setGeometry(new y.Z([e])):this.type_===p.Z.MULTI_POLYGON&&t.setGeometry(new g.Z([e])),this.dispatchEvent(new I("drawend",t)),this.features_&&this.features_.push(t),this.source_&&this.source_.addFeature(t)}},e.prototype.abortDrawing_=function(){this.finishCoordinate_=null;var t=this.sketchFeature_;return t&&(this.sketchFeature_=null,this.sketchPoint_=null,this.sketchLine_=null,this.overlay_.getSource().clear(!0)),t},e.prototype.extend=function(t){var e=t.getGeometry();this.sketchFeature_=t,this.sketchCoords_=e.getCoordinates();var i=this.sketchCoords_[this.sketchCoords_.length-1];this.finishCoordinate_=i.slice(),this.sketchCoords_.push(i.slice()),this.updateSketchFeatures_(),this.dispatchEvent(new I(x,this.sketchFeature_))},e.prototype.updateSketchFeatures_=function(){var t=[];this.sketchFeature_&&t.push(this.sketchFeature_),this.sketchLine_&&t.push(this.sketchLine_),this.sketchPoint_&&t.push(this.sketchPoint_);var e=this.overlay_.getSource();e.clear(!0),e.addFeatures(t)},e.prototype.updateState_=function(){var t=this.getMap(),e=this.getActive();t&&e||this.abortDrawing_(),this.overlay_.setMap(e?t:null)},e}(w.Z)}}]);