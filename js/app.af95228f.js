(function(t){function e(e){for(var s,i,o=e[0],l=e[1],c=e[2],f=0,m=[];f<o.length;f++)i=o[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&m.push(a[i][0]),a[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(m.length)m.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],s=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(s=!1)}s&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var s={},a={app:0},r=[];function i(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=s,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"07a7":function(t,e,n){},5120:function(t,e,n){},"54e6":function(t,e,n){t.exports=n.p+"img/instagram.f3eaf76f.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),a=n("afa7"),r=(n("abe2"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("main-header",{staticClass:"app__main-header d-flex d-md-none"}),n("div",{staticClass:"position-relative overflow-hidden"},[n("main-video",{staticClass:"app__main-video"}),n("div",{staticClass:"container app__container"},[n("main-header",{staticClass:"app__container__main-header d-none d-md-flex"}),n("lead-jumbotron",{staticClass:"app__container__lead-jumbotron"}),n("newsletter-form",{staticClass:"app__container__newsletter-form"})],1)],1),n("main-footer",{staticClass:"app__main-footer"})],1)}),i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-footer container bg-dark text-light"},[n("div",{staticClass:"main-footer__container d-md-flex"},[n("social-links",{staticClass:"flex-grow-1 main-footer__container__social-links"}),n("div",{staticClass:"main-footer__container__credits"},[t._v(" © "+t._s(t.year)+" Panafrican Stories - Tous droits réservés. ")])],1)])},l=[],c=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},u=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"social-links d-md-flex align-items-center"},[s("div",{staticClass:"social-links__label"},[t._v(" Restez connectés ")]),s("ul",{staticClass:"list-inline social-links__items ml-4"},[s("li",{staticClass:"social-links__items__network list-inline-item mr-4"},[s("a",{staticClass:"social-links__items__network__link",attrs:{href:"https://www.instagram.com/panafricanstories/",target:"_blank",title:"Instagram"}},[s("img",{staticClass:"social-links__items__network__icon",attrs:{src:n("54e6"),alt:""}}),s("span",{staticClass:"sr-only"},[t._v("Instagram")])])]),s("li",{staticClass:"social-links__items__network list-inline-item mr-4"},[s("a",{staticClass:"social-links__items__network__link",attrs:{href:"https://www.facebook.com/panafricanstories/",target:"_blank",title:"Facebook"}},[s("img",{staticClass:"social-links__items__network__icon",attrs:{src:n("aaa3"),alt:""}}),s("span",{staticClass:"sr-only"},[t._v("Facebook")])])])])])}],f={name:"SocialLinks"},m=f,p=(n("d69c"),n("2877")),d=Object(p["a"])(m,c,u,!1,null,null,null),_=d.exports,v={name:"MainFooter",components:{SocialLinks:_},computed:{year:function(){return(new Date).getFullYear()}}},h=v,b=(n("df5c"),Object(p["a"])(h,o,l,!1,null,null,null)),g=b.exports,w=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main-header"},[s("div",{staticClass:"main-header__brand"},[s("img",{attrs:{src:n("cf05")}})])])}],C={name:"MainHeader"},k=C,x=(n("d63c"),Object(p["a"])(k,w,y,!1,null,null,null)),j=x.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-video",class:{"main-video--play":"play"===t.state,"main-video--pause":"pause"===t.state}},[n("vue-plyr",{ref:"plyr",staticClass:"main-video__plyr",attrs:{options:t.options}},[n("video",{attrs:{autoplay:"",loop:"",src:"https://s3.eu-west-3.amazonaws.com/media.panafricanstories.com/videos/00.mp4"}},[n("source",{attrs:{src:"https://s3.eu-west-3.amazonaws.com/media.panafricanstories.com/videos/00.mp4",type:"wideo/mp4"}})])]),n("button",{staticClass:"btn btn-light main-video__controls",on:{click:t.toggleState}},[t._v(" "+t._s(t.state)+" ")])],1)},O=[],E={name:"MainVideo",data:function(){return{state:"pause",mounted:!1}},computed:{player:function(){return this.$refs.plyr.player},options:function(){return{controls:!1,clickToPlay:!1}}},methods:{toggleState:function(t){return this.player.togglePlay(t)}},mounted:function(){var t=this;this.player.on("play",(function(){return t.state="play"})),this.player.on("pause",(function(){return t.state="pause"}))}},P=E,S=(n("6897"),Object(p["a"])(P,M,O,!1,null,null,null)),z=S.exports,$=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},I=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lead-jumbotron"},[n("div",{staticClass:"lead-jumbotron__coming-soon text-primary"},[t._v(" Coming Soon ")]),n("h1",{staticClass:"lead-jumbotron__heading"},[t._v(" Raconter "),n("br",{staticClass:"d-none d-lg-block"}),t._v(" l'Afrique autrement ")]),n("p",{staticClass:"lead-jumbotron__desc"},[t._v(" Reconnections l'Afrique et sa diaspora à travers les histoires d'afro-descendants. ")])])}],F={name:"LeadJumbotron"},L=F,q=(n("959c"),Object(p["a"])(L,$,I,!1,null,null,null)),A=q.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"newsletter-form",on:{submit:function(e){return e.preventDefault(),t.subscribe(e)}}},[n("fieldset",{attrs:{disabled:t.frozen}},[n("label",{staticClass:"newsletter-form__label",attrs:{for:t.uniqueId}},[t._v(" Soyez les premiers informés ")]),n("div",{staticClass:"d-block d-md-flex"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"newsletter-form__input form-control form-control-lg",attrs:{name:"EMAIL",id:t.uniqueId,placeholder:"Recevoir la newsletter"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),n("button",{staticClass:"btn btn-primary btn-lg text-nowrap text-white newsletter-form__submit",attrs:{type:"submit"}},[t._v(" Envoyer ")])])])])},T=[],J=(n("99af"),n("d3b7"),n("ac1f"),n("3ca3"),n("5319"),n("1276"),n("ddb0"),n("2b3d"),n("07f7")),U=n("f2e8"),N=n.n(U),D=n("2ef0"),H={name:"NewsletterForm",props:{action:{type:String,default:"https://pirhoo.com"}},data:function(){return{email:"",frozen:!1,response:{},errorMessage:null,successMessage:null}},computed:{url:function(){return this.action.replace("/post?","/post-json?").concat("&c=?")},submitUrl:function(){var t=new URL(this.url);return t.searchParams.set("EMAIL",this.email),t.searchParams.set("group[9][1]","1"),t.href},uniqueId:function(){return Object(D["uniqueId"])("newsletter-form__input--")}},methods:{subscribe:function(){return this.resetMessages(),this.freeze(),this.send().then(this.done,this.done)},send:function(){var t=this;return new J["a"]((function(e,n){N()(t.submitUrl,{param:"c"},(function(t,s){return t?n(t):e(s)}))}))},done:function(t){var e=t.result,n=t.msg;"success"===e?(this.email="",this.successMessage=n):this.errorMessage=Object(D["last"])((n||"Une erreur s'est produite").split("0 -")),this.unfreeze()},resetMessages:function(){this.errorMessage=null,this.successMessage=null},freeze:function(){this.frozen=!0},unfreeze:function(){this.frozen=!1}}},V=H,Y=(n("e15e"),Object(p["a"])(V,R,T,!1,null,null,null)),B=Y.exports,G={name:"App",components:{MainFooter:g,MainHeader:j,MainVideo:z,LeadJumbotron:A,NewsletterForm:B}},K=G,Q=(n("c796"),Object(p["a"])(K,r,i,!1,null,null,null)),W=Q.exports;s["a"].use(a["a"],{plyr:{fullscreen:{enabled:!1}},emit:["ended"]}),s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(W)}}).$mount("#app")},"620b":function(t,e,n){},6897:function(t,e,n){"use strict";var s=n("620b"),a=n.n(s);a.a},"73df":function(t,e,n){},"73f7":function(t,e,n){},"959c":function(t,e,n){"use strict";var s=n("73df"),a=n.n(s);a.a},aaa3:function(t,e,n){t.exports=n.p+"img/facebook.35609e79.svg"},abe2:function(t,e,n){},c796:function(t,e,n){"use strict";var s=n("07a7"),a=n.n(s);a.a},cd03:function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.ed841e81.png"},d63c:function(t,e,n){"use strict";var s=n("cd03"),a=n.n(s);a.a},d69c:function(t,e,n){"use strict";var s=n("73f7"),a=n.n(s);a.a},df5c:function(t,e,n){"use strict";var s=n("e134"),a=n.n(s);a.a},e134:function(t,e,n){},e15e:function(t,e,n){"use strict";var s=n("5120"),a=n.n(s);a.a}});
//# sourceMappingURL=app.af95228f.js.map