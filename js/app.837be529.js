(function(e){function t(t){for(var n,i,o=t[0],l=t[1],c=t[2],f=0,m=[];f<o.length;f++)i=o[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&m.push(a[i][0]),a[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(m.length)m.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],n=!0,o=1;o<s.length;o++){var l=s[o];0!==a[l]&&(n=!1)}n&&(r.splice(t--,1),e=i(i.s=s[0]))}return e}var n={},a={app:0},r=[];function i(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=n,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(s,n,function(t){return e[t]}.bind(null,n));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"07a7":function(e,t,s){},"14ae":function(e,t,s){e.exports=s.p+"img/poster.61af3ea3.png"},5120:function(e,t,s){},"54e6":function(e,t,s){e.exports=s.p+"img/instagram.f3eaf76f.svg"},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),a=s("afa7"),r=(s("abe2"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app",attrs:{id:"app"}},[s("main-header",{staticClass:"app__main-header d-flex d-md-none"}),s("div",{staticClass:"position-relative overflow-hidden"},[s("main-video",{staticClass:"app__main-video"}),s("div",{staticClass:"container app__container"},[s("main-header",{staticClass:"app__container__main-header d-none d-md-flex"}),s("lead-jumbotron",{staticClass:"app__container__lead-jumbotron"}),s("newsletter-form",{staticClass:"app__container__newsletter-form"})],1)],1),s("main-footer",{staticClass:"app__main-footer"})],1)}),i=[],o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"main-footer container bg-dark text-light"},[s("div",{staticClass:"main-footer__container d-md-flex"},[s("social-links",{staticClass:"flex-grow-1 main-footer__container__social-links"}),s("div",{staticClass:"main-footer__container__credits"},[e._v(" © "+e._s(e.year)+" Panafrican Stories - Tous droits réservés. ")])],1)])},l=[],c=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},u=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"social-links d-md-flex align-items-center"},[n("div",{staticClass:"social-links__label"},[e._v(" Restez connectés ")]),n("ul",{staticClass:"list-inline social-links__items ml-4"},[n("li",{staticClass:"social-links__items__network list-inline-item mr-4"},[n("a",{staticClass:"social-links__items__network__link",attrs:{href:"https://www.instagram.com/panafricanstories/",target:"_blank",title:"Instagram"}},[n("img",{staticClass:"social-links__items__network__icon",attrs:{src:s("54e6"),alt:""}}),n("span",{staticClass:"sr-only"},[e._v("Instagram")])])]),n("li",{staticClass:"social-links__items__network list-inline-item mr-4"},[n("a",{staticClass:"social-links__items__network__link",attrs:{href:"https://www.facebook.com/panafricanstories/",target:"_blank",title:"Facebook"}},[n("img",{staticClass:"social-links__items__network__icon",attrs:{src:s("aaa3"),alt:""}}),n("span",{staticClass:"sr-only"},[e._v("Facebook")])])])])])}],f={name:"SocialLinks"},m=f,p=(s("d69c"),s("2877")),d=Object(p["a"])(m,c,u,!1,null,null,null),_=d.exports,v={name:"MainFooter",components:{SocialLinks:_},computed:{year:function(){return(new Date).getFullYear()}}},b=v,h=(s("df5c"),Object(p["a"])(b,o,l,!1,null,null,null)),g=h.exports,w=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},y=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-header"},[n("div",{staticClass:"main-header__brand"},[n("img",{attrs:{src:s("cf05")}})])])}],C={name:"MainHeader"},k=C,x=(s("d63c"),Object(p["a"])(k,w,y,!1,null,null,null)),M=x.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-video",class:{"main-video--play":"play"===e.state,"main-video--pause":"pause"===e.state}},[n("vue-plyr",{ref:"plyr",staticClass:"main-video__plyr",attrs:{options:e.options}},[n("video",{attrs:{autoplay:"",loop:"",src:"https://s3.eu-west-3.amazonaws.com/media.panafricanstories.com/videos/00.mp4",poster:s("14ae")}},[n("source",{attrs:{src:"https://s3.eu-west-3.amazonaws.com/media.panafricanstories.com/videos/00.mp4",type:"wideo/mp4"}})])]),n("button",{staticClass:"btn btn-light main-video__controls",on:{click:e.toggleState}},[e._v(" "+e._s(e.state)+" ")])],1)},O=[],E={name:"MainVideo",data:function(){return{state:"pause",mounted:!1}},computed:{player:function(){return this.$refs.plyr.player},options:function(){return{controls:!1,clickToPlay:!1,autoplay:!0}}},methods:{toggleState:function(e){return this.player.togglePlay(e)}},mounted:function(){var e=this;this.player.on("play",(function(){return e.state="play"})),this.player.on("pause",(function(){return e.state="pause"}))}},P=E,S=(s("6897"),Object(p["a"])(P,j,O,!1,null,null,null)),z=S.exports,$=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},I=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"lead-jumbotron"},[s("div",{staticClass:"lead-jumbotron__coming-soon text-primary"},[e._v(" Coming Soon ")]),s("h1",{staticClass:"lead-jumbotron__heading"},[e._v(" Raconter "),s("br",{staticClass:"d-none d-lg-block"}),e._v(" l'Afrique autrement ")]),s("p",{staticClass:"lead-jumbotron__desc"},[e._v(" Reconnectons l'Afrique et sa diaspora à travers les histoires d'afro-descendants. ")])])}],F={name:"LeadJumbotron"},L=F,q=(s("959c"),Object(p["a"])(L,$,I,!1,null,null,null)),T=q.exports,A=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("form",{staticClass:"newsletter-form",class:{"newsletter-form--success":!!e.successMessage,"newsletter-form--error":!!e.errorMessage},on:{submit:function(t){return t.preventDefault(),e.subscribe(t)}}},[s("label",{staticClass:"newsletter-form__label",attrs:{for:e.uniqueId}},[e._v(" Soyez les premiers informés ")]),s("fieldset",{attrs:{disabled:e.frozen,"data-success-message":e.successMessage,"data-error-message":e.errorMessage}},[s("div",{staticClass:"d-block d-md-flex"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"newsletter-form__input form-control form-control-lg",attrs:{name:"EMAIL",id:e.uniqueId,placeholder:"Recevoir la newsletter"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),s("button",{staticClass:"btn btn-primary btn-lg text-nowrap text-white newsletter-form__submit",attrs:{type:"submit"}},[e._v(" Envoyer ")])])])])},R=[],J=(s("99af"),s("d3b7"),s("ac1f"),s("3ca3"),s("5319"),s("1276"),s("ddb0"),s("2b3d"),s("07f7")),U=s("f2e8"),N=s.n(U),D=s("2ef0"),H={name:"NewsletterForm",props:{action:{type:String,default:"https://mc.us10.list-manage.com/signup-form/subscribe?u=76d5d5f38b640569aaf3bfc98&id=00ea78e1f0"}},data:function(){return{email:"",frozen:!1,response:{},errorMessage:null,successMessage:null}},computed:{url:function(){return this.action.replace("/post?","/post-json?").concat("&c=?")},submitUrl:function(){var e=new URL(this.url);return e.searchParams.set("EMAIL",this.email),e.searchParams.set("group[9][1]","1"),e.href},uniqueId:function(){return Object(D["uniqueId"])("newsletter-form__input--")}},methods:{subscribe:function(){return this.resetMessages(),this.freeze(),this.send().then(this.done,this.done)},send:function(){var e=this;return new J["a"]((function(t,s){N()(e.submitUrl,{param:"c"},(function(e,n){return e?s(e):t(n)}))}))},done:function(e){var t=e.result,s=e.msg;"success"===t?(this.email="",this.successMessage="Merci !"):this.errorMessage=Object(D["last"])((s||"Une erreur s'est produite").split("0 -")),setTimeout(this.unfreeze,3e3)},resetMessages:function(){this.errorMessage=null,this.successMessage=null},freeze:function(){this.frozen=!0},unfreeze:function(){this.frozen=!1,this.resetMessages()}}},V=H,Y=(s("e15e"),Object(p["a"])(V,A,R,!1,null,null,null)),B=Y.exports,G={name:"App",components:{MainFooter:g,MainHeader:M,MainVideo:z,LeadJumbotron:T,NewsletterForm:B}},K=G,Q=(s("c796"),Object(p["a"])(K,r,i,!1,null,null,null)),W=Q.exports;n["a"].use(a["a"],{plyr:{fullscreen:{enabled:!1}},emit:["ended"]}),n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(W)}}).$mount("#app")},"620b":function(e,t,s){},6897:function(e,t,s){"use strict";var n=s("620b"),a=s.n(n);a.a},"73df":function(e,t,s){},"73f7":function(e,t,s){},"959c":function(e,t,s){"use strict";var n=s("73df"),a=s.n(n);a.a},aaa3:function(e,t,s){e.exports=s.p+"img/facebook.35609e79.svg"},abe2:function(e,t,s){},c796:function(e,t,s){"use strict";var n=s("07a7"),a=s.n(n);a.a},cd03:function(e,t,s){},cf05:function(e,t,s){e.exports=s.p+"img/logo.ed841e81.png"},d63c:function(e,t,s){"use strict";var n=s("cd03"),a=s.n(n);a.a},d69c:function(e,t,s){"use strict";var n=s("73f7"),a=s.n(n);a.a},df5c:function(e,t,s){"use strict";var n=s("e134"),a=s.n(n);a.a},e134:function(e,t,s){},e15e:function(e,t,s){"use strict";var n=s("5120"),a=s.n(n);a.a}});
//# sourceMappingURL=app.837be529.js.map