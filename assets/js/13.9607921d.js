(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{686:function(t,e,n){"use strict";n.r(e);n(53),n(3),n(24),n(19),n(61);var u={name:"CountUp",props:{startVal:{type:Number,default:0},endVal:{type:Number,required:!0},decimalPlaces:{type:Number,default:0},duration:{type:Number,default:2},delay:{type:Number,default:0}},data:function(){return{counter:null}},mounted:function(){this.init()},methods:{init:function(){var t=this;n.e(22).then(n.bind(null,678)).then((function(e){t.$nextTick((function(){t.counter=new e.CountUp(t.$refs.countUp,t.endVal,{startVal:t.startVal,decimalPlaces:t.decimalPlaces,duration:t.duration}),setTimeout((function(){t.counter.start()}),t.delay)}))}))},aaa:function(){}},beforeDestroy:function(){this.counter.reset(),this.counter=null}},a=n(32),i=Object(a.a)(u,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("ClientOnly",[this._t("before"),this._v(" "),e("span",{ref:"countUp"})],2)],1)}),[],!1,null,"68d86b1e",null);e.default=i.exports}}]);