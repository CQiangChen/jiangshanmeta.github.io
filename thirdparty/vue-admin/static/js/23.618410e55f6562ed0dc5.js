webpackJsonp([23],{709:function(e,l,_){var d=_(51)(_(891),_(934),null,null,null);e.exports=d.exports},891:function(e,l,_){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var d=_(759),i=_.n(d),a=_(754),t=_.n(a),n=_(729),s=_.n(n),f=_(721),r=_.n(f),o=_(722),u=_.n(o),c=_(752),m=_.n(c),v=_(740),b=_.n(v),y=_(741),p=_.n(y),x=_(757),h=_.n(x),k=_(733),F=_.n(k),w=_(745),E=_.n(w),$=_(731);l.default={components:{field_sex:i.a,field_bool:t.a,field_enum_radio:s.a,field_enum_select:r.a,field_model:u.a,field_async_enum_radio:m.a,field_async_enum_select:b.a,field_async_model:p.a,field_relates_enum_radio:h.a,field_relates_enum_select:F.a,field_relates_model:E.a},config:{field_enum_candidate:[{valuefield:1,label:"eins"},{valuefield:2,label:"zwei"},{valuefield:3,label:"drei"},{valuefield:4,label:"fuer"}],field_relates_enum_radio_relates:[{relateField:"field_bool"},{relateField:"field_enum_radio"}]},data:function(){return{field_sex:0,field_bool:0,field_enum_radio:0,field_enum_select:0,field_model:"",field_async_enum_radio:"",field_async_enum_select:"",field_async_model:"",field_relates_enum_radio:"",field_relates_enum_select:"",field_relates_model:""}},created:function(){var e=this;_.i($.observe_relates)(this.field_relates_enum_radio_relates,this),setTimeout(function(){e.field_sex=1,e.field_bool=1,e.field_enum_radio=1,e.field_enum_select=2,e.field_model=3},2e3)}}},934:function(e,l){e.exports={render:function(){var e=this,l=e.$createElement,_=e._self._c||l;return _("section",[_("table",{staticClass:"table"},[e._m(0),e._v(" "),_("tbody",[_("tr",[_("td",[e._v("field_sex")]),e._v(" "),_("td",[e._v(e._s(e.field_sex))]),e._v(" "),_("td",[_("field_sex",{model:{value:e.field_sex,callback:function(l){e.field_sex=l},expression:"field_sex"}})],1)]),e._v(" "),_("tr",[_("td",[e._v("field_bool")]),e._v(" "),_("td",[e._v(e._s(e.field_bool))]),e._v(" "),_("td",[_("field_bool",{model:{value:e.field_bool,callback:function(l){e.field_bool=l},expression:"field_bool"}})],1)]),e._v(" "),_("tr",[_("td",[e._v("field_enum_radio")]),e._v(" "),_("td",[e._v(e._s(e.field_enum_radio))]),e._v(" "),_("td",[_("field_enum_radio",{attrs:{candidate:e.field_enum_candidate,valuefield:"valuefield"},model:{value:e.field_enum_radio,callback:function(l){e.field_enum_radio=l},expression:"field_enum_radio"}})],1)]),e._v(" "),_("tr",[_("td",[e._v("field_enum_select")]),e._v(" "),_("td",[e._v(e._s(e.field_enum_select))]),e._v(" "),_("td",[_("field_enum_select",{attrs:{candidate:e.field_enum_candidate,valuefield:"valuefield"},model:{value:e.field_enum_select,callback:function(l){e.field_enum_select=l},expression:"field_enum_select"}})],1)]),e._v(" "),_("tr",[_("td",[e._v("field_model")]),e._v(" "),_("td",[e._v(e._s(e.field_model))]),e._v(" "),_("td",[_("field_model",{attrs:{candidate:e.field_enum_candidate,valuefield:"valuefield",placeholder:"field_model的placeholder"},model:{value:e.field_model,callback:function(l){e.field_model=l},expression:"field_model"}})],1)]),e._v(" "),_("tr",[_("td",[e._v("field_async_enum_radio")]),e._v(" "),_("td",[e._v(e._s(e.field_async_enum_radio))]),e._v(" "),_("td",[_("field_async_enum_radio",{attrs:{uri:"/test/field_async_enum_radio",labelfield:"name",valuefield:"id"},model:{value:e.field_async_enum_radio,callback:function(l){e.field_async_enum_radio=l},expression:"field_async_enum_radio"}})],1)]),e._v(" "),_("tr",[_("td",[e._v("field_async_enum_select")]),e._v(" "),_("td",[e._v(e._s(e.field_async_enum_select))]),e._v(" "),_("td",[_("field_async_enum_select",{attrs:{uri:"/test/field_async_enum_select",labelfield:"name",valuefield:"id",placeholder:"the placeholder"},model:{value:e.field_async_enum_select,callback:function(l){e.field_async_enum_select=l},expression:"field_async_enum_select"}})],1)]),e._v(" "),_("tr",[_("td",[e._v("field_async_model")]),e._v(" "),_("td",[e._v(e._s(e.field_async_model))]),e._v(" "),_("td",[_("field_async_model",{attrs:{uri:"/test/field_async_model",labelfield:"name",valuefield:"id",placeholder:"placeholder"},model:{value:e.field_async_model,callback:function(l){e.field_async_model=l},expression:"field_async_model"}})],1)]),e._v(" "),_("tr",[_("td",[e._v("field_relates_enum_radio")]),e._v(" "),_("td",[e._v(e._s(e.field_relates_enum_radio))]),e._v(" "),_("td",[_("field_relates_enum_radio",{attrs:{relates:e.field_relates_enum_radio_relates,uri:"/test/field_relates_enum_radio",labelfield:"name",valuefield:"id"},model:{value:e.field_relates_enum_radio,callback:function(l){e.field_relates_enum_radio=l},expression:"field_relates_enum_radio"}})],1)]),e._v(" "),_("tr",[_("td",[e._v("field_relates_enum_select")]),e._v(" "),_("td",[e._v(e._s(e.field_relates_enum_select))]),e._v(" "),_("td",[_("field_relates_enum_select",{attrs:{relates:e.field_relates_enum_radio_relates,uri:"/test/field_relates_enum_select",labelfield:"name",valuefield:"id"},model:{value:e.field_relates_enum_select,callback:function(l){e.field_relates_enum_select=l},expression:"field_relates_enum_select"}})],1)]),e._v(" "),_("tr",[_("td",[e._v("field_relates_model")]),e._v(" "),_("td",[e._v(e._s(e.field_relates_model))]),e._v(" "),_("td",[_("field_relates_model",{attrs:{relates:e.field_relates_enum_radio_relates,uri:"/test/field_relates_model",labelfield:"name",valuefield:"id"},model:{value:e.field_relates_model,callback:function(l){e.field_relates_model=l},expression:"field_relates_model"}})],1)])])])])},staticRenderFns:[function(){var e=this,l=e.$createElement,_=e._self._c||l;return _("thead",[_("tr",[_("td",[e._v("组件名")]),e._v(" "),_("td",[e._v("组件值")]),e._v(" "),_("td",[e._v("组件实例")])])])}]}}});
//# sourceMappingURL=23.618410e55f6562ed0dc5.js.map