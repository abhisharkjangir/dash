(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{413:function(e,t,a){"use strict";var n=a(138);t.a={default:{title:"Meuzic",description:"www.meuzic.com",image:n.a,twitter:"",sep:" | ",siteURL:"",keywords:"",facebookAppId:"XXXXXXXXX",updated:(new Date).toDateString(),published:(new Date).toDateString(),contentType:"website"},home:{id:"home",title:"Dashboard",description:"Dashboard"},login:{id:"login",title:"Login",description:"Login to Meuzic"},signup:{id:"signup",title:"Signup",description:"Signup on Meuzic"},forgetpassword:{id:"forgotpassword",title:"Forget Password",description:"Forget Password"},notfound:{id:"notfound",title:"Oops! 404",description:"This is not the web page you are looking for."}}},414:function(e,t,a){"use strict";var n=a(1),r=a.n(n);t.a=function(e){var t=e.children,a=e.className;return r.a.createElement("div",{className:a},t)}},415:function(e,t,a){"use strict";var n=a(88),r=a(31),i=a(32),l=a(34),o=a(33),c=a(35),s=a(1),u=a.n(s),d=a(104),m=a(423),p=a.n(m),g=a(413),h=g.a.default.siteURL,b=g.a.default.title,f=g.a.default.description,v=g.a.default.keywords,E=g.a.default.image,y=g.a.default.twitter,w=g.a.default.sep,C=g.a.default.updated,O=g.a.default.published,N=g.a.default.contentType,k=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(i.a)(t,[{key:"getMetaTags",value:function(e,t){var a=e.title,n=e.description,r=e.image,i=e.contentType,l=e.twitter,o=e.noCrawl,c=e.published,s=e.updated,u=e.category,d=e.tags,m=e.keywords,p=a?(a+w+b).substring(0,60):b,g=n?n.substring(0,155):f,k=r?"".concat(h).concat(r):E,j=[{itemprop:"name",content:p},{itemprop:"description",content:g},{itemprop:"image",content:k},{name:"description",content:g},{name:"keywords",content:m||v},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:site",content:y},{name:"twitter:title",content:p},{name:"twitter:description",content:g},{name:"twitter:creator",content:l||y},{name:"twitter:image:src",content:k},{property:"og:title",content:p},{property:"og:type",content:i||N},{property:"og:url",content:h+t},{property:"og:image",content:k},{property:"og:description",content:g},{property:"og:site_name",content:b},{property:"fb:app_id",content:"XXXXXXXXX"}];return o?j.push({name:"robots",content:"noindex, nofollow"}):j.push({name:"robots",content:"index, follow"}),c&&j.push({name:"article:published_time",content:c||O}),s&&j.push({name:"article:modified_time",content:s||C}),u&&j.push({name:"article:section",content:u}),d&&j.push({name:"article:tag",content:d}),j}},{key:"render",value:function(){var e=this.props,t=e.children,a=e.id,r=e.className,i=Object(n.a)(e,["children","id","className"]);return u.a.createElement("div",{id:a,className:r},u.a.createElement(p.a,{htmlAttributes:{lang:"en",itemscope:void 0,itemtype:"http://schema.org/".concat(i.schema||"WebPage")},title:i.title?i.title+w+b:b,link:[{rel:"canonical",href:h+this.props.location.pathname}],meta:this.getMetaTags(i,this.props.location.pathname)}),t)}}]),t}(s.Component);t.a=Object(d.a)(k)},416:function(e,t,a){"use strict";var n=a(1),r=a.n(n);t.a=function(e){var t=e.autoComplete,a=e.children;return r.a.createElement("form",{autoComplete:t},a)}},417:function(e,t,a){"use strict";var n=a(1),r=a.n(n),i=(a(418),a(414));t.a=function(e){var t=e.id,a=e.type,n=e.name,l=e.value,o=e.onChange,c=e.label,s=e.disabled,u=e.className;return r.a.createElement(i.a,{className:"mb-3"},r.a.createElement("label",{htmlFor:t},c),r.a.createElement("input",{id:t,type:a,name:n,value:l,onChange:o,disabled:s,className:u}))}},418:function(e,t,a){},430:function(e,t,a){"use strict";var n=a(1),r=a.n(n);a(431);t.a=function(e){var t=e.text;return r.a.createElement("div",{className:"page-heading mb-2"},t)}},431:function(e,t,a){},432:function(e,t,a){"use strict";a.d(t,"c",function(){return i}),a.d(t,"b",function(){return l}),a.d(t,"a",function(){return o});var n=a(1),r=a.n(n),i=(a(433),function(e){var t=e.children,a=e.className;return r.a.createElement("div",{className:"row ".concat(a||"")},t)}),l=function(e){var t=e.children;return r.a.createElement("div",{className:"container-fluid"},t)},o=function(e){var t=e.children,a=e.xs,n=e.sm,i=e.md,l=e.lg,o=e.className,c="";return a&&(c="col-xs-".concat(a)),n&&(c="".concat(c," col-sm-").concat(n)),i&&(c="".concat(c," col-md-").concat(i)),l&&(c="".concat(c," col-lg-").concat(l)),o&&(c="".concat(c," ").concat(o)),r.a.createElement("div",{className:c},t)}},433:function(e,t,a){},447:function(e,t,a){"use strict";var n=a(1),r=a.n(n),i=(a(448),a(414));t.a=function(e){var t=e.id,a=e.type,n=e.name,l=e.value,o=e.onChange,c=e.label,s=e.disabled,u=e.className,d=e.options;return r.a.createElement(i.a,{className:"mb-3"},r.a.createElement("label",{htmlFor:t},c),r.a.createElement("select",{id:t,type:a,name:n,value:l,onChange:o,disabled:s,className:u},d&&d.map(function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.name)})))}},448:function(e,t,a){},449:function(e,t,a){"use strict";var n=a(446),r=a(31),i=a(32),l=a(34),o=a(33),c=a(35),s=a(1),u=a.n(s),d=(a(450),a(414)),m=function(e){function t(){var e,a;Object(r.a)(this,t);for(var i=arguments.length,c=new Array(i),s=0;s<i;s++)c[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).clickHandler=function(e){var t=a.props,r=t.value,i=t.name,l=t.onChange,o=t.uniqueKey;if(r&&i){var c=Object(n.a)(r);c=c.indexOf(e[o].toString())>-1?c.filter(function(t){return t!==e[o].toString()}):[].concat(Object(n.a)(c),[e[o]]),l(new CustomEvent("multiSelectOption",{detail:{name:i,value:c},bubbles:!0,cancelable:!0}))}},a}return Object(c.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.value,r=t.label,i=t.options,l=t.uniqueKey;return u.a.createElement(d.a,{className:"mb-3 multi-select-tag"},u.a.createElement("label",{htmlFor:a},r),u.a.createElement("div",{className:"tags",id:a},i&&i.map(function(t){return u.a.createElement("span",{onClick:function(){return e.clickHandler(t)},key:t[l],className:"tag ".concat(n.indexOf(t[l].toString())>-1?"active":"")},t.name)})))}}]),t}(u.a.Component);t.a=m},450:function(e,t,a){},499:function(e,t,a){},500:function(e,t,a){},605:function(e,t,a){},609:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a(28),i=a(31),l=a(32),o=a(34),c=a(33),s=a(35),u=a(1),d=a.n(u),m=(a(499),a(415)),p=a(413),g=a(430),h=a(432),b=a(417),f=a(449),v=a(447),E=(a(500),a(414)),y=a(23),w={toolbar:[[{header:[1,2,3,4,5,6,!1]}],["bold","italic","underline","strike","blockquote"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["link","image"],["clean"]]},C=["header","bold","italic","underline","strike","blockquote","list","bullet","indent","link","image","clean"],O=function(e){function t(e){var n;return Object(i.a)(this,t),n=Object(o.a)(this,Object(c.a)(t).call(this,e)),y.d||(n.ReactQuill=a(501)),n}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=(e.type,e.name,e.value),n=e.onChange,r=e.label,i=(e.disabled,e.className,e.modules,e.formats,this.ReactQuill);return!y.d&&i?d.a.createElement(E.a,{className:"mb-3"},d.a.createElement("label",{htmlFor:t},r),d.a.createElement(i,{value:a,onChange:n,modules:w,formats:C})):null}}]),t}(d.a.PureComponent),N=(a(605),function(e){var t=e.id,a=(e.type,e.name),n=e.value,r=e.onChange,i=e.label,l=e.disabled;e.className;return d.a.createElement(E.a,{className:"mb-3"},d.a.createElement("div",{className:"file-browser"},d.a.createElement("p",null,i),d.a.createElement("div",{className:"custom-file"},d.a.createElement("input",{type:"file",className:"custom-file-input",id:t,value:n,name:a,onChange:r,disabled:l}),d.a.createElement("label",{className:"custom-file-label",htmlFor:t},"Choose file"))))}),k=a(416),j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(c.a)(t).call(this,e))).onChangeHandler=function(e){var t=e.target.value,n=e.target.name,r=a.state.formData;r[n]=t,a.setState({formData:r})},a.renderPageHeader=function(){return d.a.createElement("div",{className:"page-header"},d.a.createElement("h1",null,"Add New Blog"))},a.renderBlogForm=function(){var e=a.props.categories,t=a.state.formData,n=t.title,r=t.author,i=(t.isPublished,t.isFeatured,t.keywords);t.story,t.category,t.publishedBy,t.image,t.imageSrc;return d.a.createElement("div",{className:"blog-form"},d.a.createElement(k.a,null,d.a.createElement(h.c,null,d.a.createElement(h.a,{xs:12,lg:3},d.a.createElement(b.a,{id:"title",value:n,onChange:a.onChangeHandler,name:"title",label:"Title"})),d.a.createElement(h.a,{xs:12,lg:3},d.a.createElement(b.a,{id:"author",value:r,onChange:a.onChangeHandler,name:"author",label:"author"})),d.a.createElement(h.a,{xs:12,lg:6},d.a.createElement(b.a,{id:"keywords",value:i,onChange:a.onChangeHandler,name:"keywords",label:"keywords"})),d.a.createElement(h.a,{xs:12,lg:6},d.a.createElement(N,{label:"Image"})),d.a.createElement(h.a,{xs:12,lg:6},d.a.createElement(f.a,{label:"CATEGORY",uniqueKey:"_id",value:[],options:e.data})),d.a.createElement(h.a,{xs:12,lg:12},d.a.createElement(O,{value:"",label:"Content",onChange:a.onChangeHandler})),d.a.createElement(h.a,{xs:12,lg:3},d.a.createElement(v.a,{id:"isFeatured",name:"isFeatured",onChange:a.onChangeHandler,label:"Publish Status",options:a.FEATURED_OPTIONS})),d.a.createElement(h.a,{xs:12,lg:3},d.a.createElement(v.a,{id:"isFeatured",name:"isFeatured",onChange:a.onChangeHandler,label:"Publish By",options:a.FEATURED_OPTIONS})),d.a.createElement(h.a,{xs:12,lg:3},d.a.createElement(v.a,{id:"isFeatured",name:"isFeatured",onChange:a.onChangeHandler,label:"Trending",options:a.FEATURED_OPTIONS})),d.a.createElement(h.a,{xs:12,lg:3},d.a.createElement(v.a,{id:"isFeatured",name:"isFeatured",onChange:a.onChangeHandler,label:"Featured",options:a.FEATURED_OPTIONS})))))},a.state={formData:{title:"",author:"",isPublished:1,isTrending:0,isFeatured:0,image:"",imageSrc:"",keywords:"",story:"",viewsCount:0,category:[],sharedCount:0,createdDate:new Date,updatedDate:new Date,publishedDate:new Date,publishedBy:0}},a}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return d.a.createElement(m.a,p.a.addBlog,d.a.createElement("div",{className:"add-blog-page"},d.a.createElement(g.a,{text:"Dashboard \u2022 Blogs \u2022 Add New Blog"}),this.renderPageHeader(),this.renderBlogForm()))}}]),t}(d.a.PureComponent),F=a(78);t.default=Object(r.connect)(function(e){return Object(n.a)({},e.addblogs,e.app)},function(e){return{addBlog:function(t){return e(function(e){return{type:F.b,data:e}}(t))}}})(j)}}]);
//# sourceMappingURL=addblog.994eaf0e.chunk.js.map