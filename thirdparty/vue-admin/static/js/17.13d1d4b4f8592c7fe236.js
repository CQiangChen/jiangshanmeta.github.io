webpackJsonp([17,36],{763:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{idfield:{type:String,default:"id"}},computed:{id:function(){return this.data[this.idfield]}}}},871:function(t,e,i){var n=i(51)(i(942),i(965),null,null,null);t.exports=n.exports},942:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(149),o=i.n(n),d=i(774),a=i.n(d),l=i(763),s=i(723),u=i(750);e.default={name:"edit",mixins:[l.default],components:{editor:a.a},data:function(){return{isShowEditbox:!1,edit_editor:[]}},props:{data:{type:Object,required:!0},field_list:{type:Object,required:!0},editLink:{type:String},doEditLink:{type:String},title:{type:String,default:"编辑"},autoValidate:{type:Boolean,default:!1},getInfoRequest:{type:Function,default:s.getEditInfo},doEditRequest:{type:Function,default:s.doEdit},transformData:{type:Function,default:function(t){return t}}},methods:{showDialog:function(){this.isShowEditbox=!0},getEditFields:function(){var t=this;new o.a(function(e,i){t.getInfoRequest(t,e)}).then(function(e){t.edit_editor=e.reduce(function(e,i){var n=i.reduce(function(e,i){var n=i.field,o=t.field_list[n].editorComponent.default,d=i.hasOwnProperty("value")?i.value:"function"==typeof o?o():o;return e.push({field:n,value:d,label:t.field_list[n].label,editorComponent:t.field_list[n].editorComponent,tip:t.field_list[n].tip,validator:t.field_list[n].validator}),e},[]);return e.push(n),e},[]),t.showDialog()}).catch(u.noop)},doEdit:function(){var t=this;this.$refs.editbox.validate().then(function(e){new o.a(function(i,n){t.doEditRequest(t,t.transformData(e),i)}).then(function(){t.$message({message:"编辑成功",type:"success",duration:2e3}),t.isShowEditbox=!1,t.$emit("update")}).catch(u.noop)}).catch(function(e){t.$message(e)})}}}},965:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",[i("el-button",{attrs:{size:"small"},on:{click:t.getEditFields}},[t._v("\n        编辑\n    ")]),t._v(" "),i("el-dialog",{attrs:{title:t.title,visible:t.isShowEditbox,size:"large"},on:{"update:visible":function(e){t.isShowEditbox=e}}},[i("editor",{ref:"editbox",attrs:{fields:t.edit_editor,autoValidate:t.autoValidate}}),t._v(" "),i("section",{attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.isShowEditbox=!1}}},[t._v("取消")]),t._v(" "),i("el-button",{attrs:{type:"danger"},on:{click:t.doEdit}},[t._v("\n                确认编辑\n            ")])],1)],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=17.13d1d4b4f8592c7fe236.js.map