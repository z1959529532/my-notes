(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{631:function(t,e,n){},673:function(t,e,n){"use strict";n(631)},687:function(t,e,n){"use strict";n.r(e);var i=n(82),r=(n(61),n(13),n(3),n(20),n(126),{name:"printer-page",data:function(){return{curTitle:"",titleArr:["跟随光，成为光！","如果没有梦想，和咸鱼有什么区别！"],curIndex:0,h1:null,spans:null,textOpen:!1,textClose:!1}},mounted:function(){var t=this;setTimeout((function(){t.initPrinter()}),800)},methods:{initPrinter:function(){var t=this;this.curIndex===this.titleArr.length&&(this.curIndex=0),this.curTitle=this.titleArr[this.curIndex],this.$nextTick((function(){t.textOpen=!0,t.h1=document.getElementById("printer-page-h1"),t.spans=Object(i.a)(document.querySelectorAll("#printer-page-h1 span"));var e=0;t.spans.forEach((function(t){e+=.14,t.style.setProperty("--delay","".concat(e,"s"))})),t.h1.addEventListener("animationend",t.goForward)}))},goForward:function(t){var e=this;t.target===document.querySelector("#printer-page-h1 span:last-child")&&(this.h1.classList.add("ended"),setTimeout((function(){e.h1.removeEventListener("animationend",e.goForward),e.h1.classList.remove("ended"),e.goBack()}),1600))},goBack:function(){this.textOpen=!1,this.textClose=!0;var t=0;this.spans.reverse().forEach((function(e){t+=.1,e.style.animationDelay="".concat(t,"s")})),this.h1.addEventListener("animationend",this.textEnd)},textEnd:function(t){t.target===document.querySelector("#printer-page-h1 span:first-child")&&(this.curTitle="",this.h1.removeEventListener("animationend",this.textEnd),this.textClose=!1,this.curIndex++,this.initPrinter())}}}),s=(n(673),n(32)),a=Object(s.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"printer-page"}},[t.curTitle?[n("h1",{class:{"text-open":t.textOpen,"text-close":t.textClose},attrs:{id:"printer-page-h1"}},t._l(t.curTitle,(function(e,i){return n("span",{key:e+i},[t._v(t._s(e))])})),0)]:t._e()],2)}),[],!1,null,"0e45074c",null);e.default=a.exports}}]);