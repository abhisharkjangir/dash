(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{418:function(e,t,a){"use strict";var n=a(141);t.a={default:{title:"Meuzic",description:"www.meuzic.com",image:n.a,twitter:"",sep:" | ",siteURL:"",keywords:"",facebookAppId:"XXXXXXXXX",updated:(new Date).toDateString(),published:(new Date).toDateString(),contentType:"website"},home:{id:"home",title:"Dashboard",description:"Dashboard"},login:{id:"login",title:"Login",description:"Login to Meuzic"},signup:{id:"signup",title:"Signup",description:"Signup on Meuzic"},forgetpassword:{id:"forgotpassword",title:"Forget Password",description:"Forget Password"},notfound:{id:"notfound",title:"Oops! 404",description:"This is not the web page you are looking for."}}},419:function(e,t,a){"use strict";var n=a(1),o=a.n(n);t.a=function(e){var t=e.children,a=e.className;return o.a.createElement("div",{className:a},t)}},420:function(e,t,a){"use strict";var n=a(91),o=a(28),i=a(29),r=a(32),c=a(30),s=a(31),l=a(1),m=a.n(l),u=a(107),p=a(430),d=a.n(p),f=a(418),g=f.a.default.siteURL,b=f.a.default.title,h=f.a.default.description,w=f.a.default.keywords,v=f.a.default.image,E=f.a.default.twitter,y=f.a.default.sep,N=f.a.default.updated,X=f.a.default.published,k=f.a.default.contentType,C=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"getMetaTags",value:function(e,t){var a=e.title,n=e.description,o=e.image,i=e.contentType,r=e.twitter,c=e.noCrawl,s=e.published,l=e.updated,m=e.category,u=e.tags,p=e.keywords,d=a?(a+y+b).substring(0,60):b,f=n?n.substring(0,155):h,C=o?"".concat(g).concat(o):v,O=[{itemprop:"name",content:d},{itemprop:"description",content:f},{itemprop:"image",content:C},{name:"description",content:f},{name:"keywords",content:p||w},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:site",content:E},{name:"twitter:title",content:d},{name:"twitter:description",content:f},{name:"twitter:creator",content:r||E},{name:"twitter:image:src",content:C},{property:"og:title",content:d},{property:"og:type",content:i||k},{property:"og:url",content:g+t},{property:"og:image",content:C},{property:"og:description",content:f},{property:"og:site_name",content:b},{property:"fb:app_id",content:"XXXXXXXXX"}];return c?O.push({name:"robots",content:"noindex, nofollow"}):O.push({name:"robots",content:"index, follow"}),s&&O.push({name:"article:published_time",content:s||X}),l&&O.push({name:"article:modified_time",content:l||N}),m&&O.push({name:"article:section",content:m}),u&&O.push({name:"article:tag",content:u}),O}},{key:"render",value:function(){var e=this.props,t=e.children,a=e.id,o=e.className,i=Object(n.a)(e,["children","id","className"]);return m.a.createElement("div",{id:a,className:o},m.a.createElement(d.a,{htmlAttributes:{lang:"en",itemscope:void 0,itemtype:"http://schema.org/".concat(i.schema||"WebPage")},title:i.title?i.title+y+b:b,link:[{rel:"canonical",href:g+this.props.location.pathname}],meta:this.getMetaTags(i,this.props.location.pathname)}),t)}}]),t}(l.Component);t.a=Object(u.a)(C)},421:function(e,t,a){"use strict";var n=a(1),o=a.n(n);t.a=function(e){var t=e.autoComplete,a=e.children;return o.a.createElement("form",{autoComplete:t},a)}},422:function(e,t,a){"use strict";var n=a(1),o=a.n(n),i=(a(423),a(419));t.a=function(e){var t=e.id,a=e.type,n=e.name,r=e.value,c=e.onChange,s=e.label,l=e.disabled,m=e.className;return o.a.createElement(i.a,{className:"mb-3"},o.a.createElement("label",{htmlFor:t},s),o.a.createElement("input",{id:t,type:a,name:n,value:r,onChange:c,disabled:l,className:m}))}},423:function(e,t,a){},424:function(e,t,a){"use strict";var n=a(1),o=a.n(n);a(425);t.a=function(e){var t=e.label,a=e.type,n=e.onClick,i=e.className,r=e.disabled,c=e.variations,s="";return i&&(s=i),c&&(s="".concat(s," ").concat(c)),o.a.createElement("button",{type:a,onClick:n,className:s,disabled:r},t)}},425:function(e,t,a){},426:function(e,t,a){"use strict";var n=a(1),o=a.n(n),i=a(413);a(427);t.a=function(e){var t=e.label,a=e.to,n=e.className;return o.a.createElement(i.a,{to:a,className:n},t)}},427:function(e,t,a){},432:function(e,t,a){"use strict";var n=a(1),o=a.n(n);a(433);t.a=function(e){var t=e.text,a=e.className;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"separator ".concat(a||"")},o.a.createElement("span",null,t)))}},433:function(e,t,a){},494:function(e,t,a){},626:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),i=a(420),r=(a(494),a(418)),c=a(141),s=a(421),l=a(422),m=a(424),u=a(426),p=a(432);t.default=function(){return o.a.createElement(i.a,r.a.forgetpassword,o.a.createElement("div",{className:"forgetspassword-page"},o.a.createElement("div",{className:"logo"},o.a.createElement("img",{src:c.a,alt:"logo"})),o.a.createElement("div",{className:"forgetspassword-form-box"},o.a.createElement(s.a,{autoComplete:"off"},o.a.createElement(l.a,{id:"username",type:"text",name:"username",value:"",label:"USERNAME"}),o.a.createElement(m.a,{label:"SEND RESET LINK",className:""})),o.a.createElement(p.a,{text:"Or"}),o.a.createElement(u.a,{to:"/login",label:"Go back to login",className:"text-center mt-3 d-block fs-14"})),o.a.createElement("div",{className:"forgetspassword-footer"},"Made with ",o.a.createElement("span",{role:"img","aria-label":"heart"},"\ud83d\udc96")," by ",o.a.createElement("a",{href:"http://abhijangir.me"},"Abhishar Jangir."))))}}}]);
//# sourceMappingURL=forgetpassword.efbe6182.chunk.js.map