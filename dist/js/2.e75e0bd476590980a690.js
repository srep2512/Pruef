webpackJsonp([2],{30:function(t,e,a){"use strict";function n(t){a(59)}Object.defineProperty(e,"__esModule",{value:!0});var r=a(61),s=a(62),o=a(2),i=n,c=o(r.a,s.a,!1,i,null,null);e.default=c.exports},59:function(t,e,a){var n=a(60);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(24)("3b29d868",n,!0)},60:function(t,e,a){e=t.exports=a(23)(void 0),e.push([t.i,"",""])},61:function(t,e,a){"use strict";var n=a(3);e.a={components:{QIcon:n.c,QBtn:n.a,QDataTable:n.b},data:function(){return{tableConfig:{rowHeight:"50px",title:"Tarefas",columnPicker:!0},taskColumns:[{label:"Título",field:"title",width:"100px"},{label:"Vencimento",field:"due",width:"100px"},{label:"Hora",field:"due",width:"50px",format:function(t,e){return new Date(t).getHours()+":"+new Date(t).getMinutes()}}]}},computed:{tarefas:function(){return this.$store.state.tasks}},methods:{carregarTask:function(){this.$store.dispatch("fetch_task")}}}},62:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("q-data-table",{attrs:{data:t.tarefas,config:t.tableConfig,columns:t.taskColumns}}),t._v(" "),a("q-btn",{attrs:{icon:"add"},on:{click:t.carregarTask}})],1)},r=[],s={render:n,staticRenderFns:r};e.a=s}});