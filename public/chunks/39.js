(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{ylQw:function(t,a,e){"use strict";e.r(a);var s=e("ke3Z"),i={data:function(){return{matrix:{},page:{},form:{}}},computed:{sections:function(){var t=[],a=[];return this.matrix.fieldset&&(t=_.filter(this.matrix.fieldset.sections,function(t){return"body"==t.placement}),a=_.filter(this.matrix.fieldset.sections,function(t){return"sidebar"==t.placement})),{body:t,sidebar:a}}},methods:{submit:function(){this.form.patch("/api/pages/"+this.matrix.id).then(function(t){toast("Page saved successfully","success")}).catch(function(t){toast(t.response.data.message,"failed")})},getPage:function(t,a,e){var i=this;axios.get("/api/pages/handle/"+t.params.page).then(function(t){i.matrix=t.data.data.matrix,i.page=t.data.data.page;var a={status:i.page.status};_.forEach(i.matrix.fields,function(t,e){Vue.set(a,e,i.page[e])}),i.form=new s.a(a)})}},beforeRouteEnter:function(t,a,e){e(function(s){s.getPage(t,a,e)})},beforeRouteUpdate:function(t,a,e){this.getPage(t,a,e),e()}},n=e("KHd+"),o=Object(n.a)(i,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("portal",{attrs:{to:"title"}},[e("app-title",{attrs:{icon:t.matrix.icon||"pencil"}},[t._v(t._s(t.matrix.name))])],1),t._v(" "),e("portal",{attrs:{to:"subtitle"}},[t._v(t._s(t.matrix.description))]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"content-container"},[e("form",{on:{submit:function(a){return a.preventDefault(),t.submit(a)}}},[t.sections.body.length>0?e("p-card",{key:t.matrix.handle},t._l(t.sections.body,function(a,s){return e("div",{key:a.handle},[e("div",{staticClass:"row"},[e("div",{staticClass:"col xxl:text-right w-full xxl:w-1/3"},[e("div",{staticClass:"xxl:mr-10"},[e("h3",[t._v(t._s(a.name))]),t._v(" "),e("p",{staticClass:"text-sm"},[t._v(t._s(a.description))])])]),t._v(" "),e("div",{staticClass:"col w-full xxl:w-2/3"},t._l(a.fields,function(a){return e("div",{key:a.handle,staticClass:"form__group"},[e(a.type.handle+"-fieldtype",{tag:"component",attrs:{field:a},model:{value:t.form[a.handle],callback:function(e){t.$set(t.form,a.handle,e)},expression:"form[field.handle]"}})],1)}),0)]),t._v(" "),s!==t.sections.body.length-1?e("hr"):t._e()])}),0):e("p-card",{staticClass:"text-center"},[e("p",[t._v("You should configure your Matrix Page with some sections and fields first "),e("fa-icon",{staticClass:"text-emoji",attrs:{icon:["fas","hand-peace"]}})],1),t._v(" "),e("router-link",{staticClass:"button items-center",attrs:{to:"/matrices/manage/"+t.matrix.id}},[e("fa-icon",{staticClass:"mr-2 text-sm",attrs:{icon:["fas","atom-alt"]}}),t._v(" Manage your page")],1)],1)],1)]),t._v(" "),e("div",{staticClass:"side-container"},[e("form",{on:{submit:function(a){return a.preventDefault(),t.submit(a)}}},[e("p-card",[e("div",{staticClass:"row"},[e("div",{staticClass:"col w-full"},[e("p-select",{attrs:{name:"status",label:"Status",options:[{label:"Enabled",value:1},{label:"Disabled",value:0}]},model:{value:t.form.status,callback:function(a){t.$set(t.form,"status",a)},expression:"form.status"}})],1)]),t._v(" "),e("portal",{attrs:{to:"actions"}},[e("router-link",{staticClass:"button mr-3",attrs:{to:{name:"dashboard"}}},[t._v("Go Back")]),t._v(" "),e("button",{staticClass:"button button--primary",attrs:{type:"submit"},on:{click:function(a){return a.preventDefault(),t.submit(a)}}},[t._v("Save")])],1)],1),t._v(" "),t._l(t.sections.sidebar,function(a,s){return e("p-card",{key:a.handle,staticClass:"mt-6"},[e("h3",[t._v(t._s(a.name))]),t._v(" "),e("p",{staticClass:"text-sm"},[t._v(t._s(a.description))]),t._v(" "),e("div",{staticClass:"w-full"},t._l(a.fields,function(a){return e("div",{key:a.handle,staticClass:"form__group"},[e(a.type.handle+"-fieldtype",{tag:"component",attrs:{field:a},model:{value:t.form[a.handle],callback:function(e){t.$set(t.form,a.handle,e)},expression:"form[field.handle]"}})],1)}),0)])})],2)])])],1)},[],!1,null,null,null);a.default=o.exports}}]);