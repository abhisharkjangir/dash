(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{418:function(e,t,a){"use strict";var n=a(141);t.a={default:{title:"Meuzic",description:"www.meuzic.com",image:n.a,twitter:"",sep:" | ",siteURL:"",keywords:"",facebookAppId:"XXXXXXXXX",updated:(new Date).toDateString(),published:(new Date).toDateString(),contentType:"website"},home:{id:"home",title:"Dashboard",description:"Dashboard"},login:{id:"login",title:"Login",description:"Login to Meuzic"},signup:{id:"signup",title:"Signup",description:"Signup on Meuzic"},forgetpassword:{id:"forgotpassword",title:"Forget Password",description:"Forget Password"},notfound:{id:"notfound",title:"Oops! 404",description:"This is not the web page you are looking for."}}},419:function(e,t,a){"use strict";var n=a(1),r=a.n(n);t.a=function(e){var t=e.children,a=e.className;return r.a.createElement("div",{className:a},t)}},420:function(e,t,a){"use strict";var n=a(91),r=a(28),l=a(29),i=a(32),c=a(30),o=a(31),s=a(1),u=a.n(s),d=a(107),m=a(430),g=a.n(m),p=a(418),h=p.a.default.siteURL,b=p.a.default.title,f=p.a.default.description,v=p.a.default.keywords,E=p.a.default.image,y=p.a.default.twitter,C=p.a.default.sep,w=p.a.default.updated,O=p.a.default.published,j=p.a.default.contentType,k=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(l.a)(t,[{key:"getMetaTags",value:function(e,t){var a=e.title,n=e.description,r=e.image,l=e.contentType,i=e.twitter,c=e.noCrawl,o=e.published,s=e.updated,u=e.category,d=e.tags,m=e.keywords,g=a?(a+C+b).substring(0,60):b,p=n?n.substring(0,155):f,k=r?"".concat(h).concat(r):E,N=[{itemprop:"name",content:g},{itemprop:"description",content:p},{itemprop:"image",content:k},{name:"description",content:p},{name:"keywords",content:m||v},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:site",content:y},{name:"twitter:title",content:g},{name:"twitter:description",content:p},{name:"twitter:creator",content:i||y},{name:"twitter:image:src",content:k},{property:"og:title",content:g},{property:"og:type",content:l||j},{property:"og:url",content:h+t},{property:"og:image",content:k},{property:"og:description",content:p},{property:"og:site_name",content:b},{property:"fb:app_id",content:"XXXXXXXXX"}];return c?N.push({name:"robots",content:"noindex, nofollow"}):N.push({name:"robots",content:"index, follow"}),o&&N.push({name:"article:published_time",content:o||O}),s&&N.push({name:"article:modified_time",content:s||w}),u&&N.push({name:"article:section",content:u}),d&&N.push({name:"article:tag",content:d}),N}},{key:"render",value:function(){var e=this.props,t=e.children,a=e.id,r=e.className,l=Object(n.a)(e,["children","id","className"]);return u.a.createElement("div",{id:a,className:r},u.a.createElement(g.a,{htmlAttributes:{lang:"en",itemscope:void 0,itemtype:"http://schema.org/".concat(l.schema||"WebPage")},title:l.title?l.title+C+b:b,link:[{rel:"canonical",href:h+this.props.location.pathname}],meta:this.getMetaTags(l,this.props.location.pathname)}),t)}}]),t}(s.Component);t.a=Object(d.a)(k)},421:function(e,t,a){"use strict";var n=a(1),r=a.n(n);t.a=function(e){var t=e.autoComplete,a=e.children;return r.a.createElement("form",{autoComplete:t},a)}},422:function(e,t,a){"use strict";var n=a(1),r=a.n(n),l=(a(423),a(419));t.a=function(e){var t=e.id,a=e.type,n=e.name,i=e.value,c=e.onChange,o=e.label,s=e.disabled,u=e.className;return r.a.createElement(l.a,{className:"mb-3"},r.a.createElement("label",{htmlFor:t},o),r.a.createElement("input",{id:t,type:a,name:n,value:i,onChange:c,disabled:s,className:u}))}},423:function(e,t,a){},424:function(e,t,a){"use strict";var n=a(1),r=a.n(n);a(425);t.a=function(e){var t=e.label,a=e.type,n=e.onClick,l=e.className,i=e.disabled,c=e.variations,o="";return l&&(o=l),c&&(o="".concat(o," ").concat(c)),r.a.createElement("button",{type:a,onClick:n,className:o,disabled:i},t)}},425:function(e,t,a){},435:function(e,t,a){"use strict";var n=a(1),r=a.n(n);a(436);t.a=function(e){var t=e.text;return r.a.createElement("div",{className:"page-heading mb-2"},t)}},436:function(e,t,a){},437:function(e,t,a){"use strict";a.d(t,"c",function(){return l}),a.d(t,"b",function(){return i}),a.d(t,"a",function(){return c});var n=a(1),r=a.n(n),l=(a(438),function(e){var t=e.children,a=e.className;return r.a.createElement("div",{className:"row ".concat(a||"")},t)}),i=function(e){var t=e.children;return r.a.createElement("div",{className:"container-fluid"},t)},c=function(e){var t=e.children,a=e.xs,n=e.sm,l=e.md,i=e.lg,c=e.className,o="";return a&&(o="col-xs-".concat(a)),n&&(o="".concat(o," col-sm-").concat(n)),l&&(o="".concat(o," col-md-").concat(l)),i&&(o="".concat(o," col-lg-").concat(i)),c&&(o="".concat(o," ").concat(c)),r.a.createElement("div",{className:o},t)}},438:function(e,t,a){},452:function(e,t,a){"use strict";var n=a(1),r=a.n(n),l=(a(453),a(419));t.a=function(e){var t=e.id,a=e.type,n=e.name,i=e.value,c=e.onChange,o=e.label,s=e.disabled,u=e.className,d=e.options;return r.a.createElement(l.a,{className:"mb-3"},r.a.createElement("label",{htmlFor:t},o),r.a.createElement("select",{id:t,type:a,name:n,value:i,onChange:c,disabled:s,className:u},d&&d.map(function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.name)})))}},453:function(e,t,a){},454:function(e,t,a){"use strict";var n=a(451),r=a(28),l=a(29),i=a(32),c=a(30),o=a(31),s=a(1),u=a.n(s),d=(a(455),a(419)),m=function(e){function t(){var e,a;Object(r.a)(this,t);for(var l=arguments.length,o=new Array(l),s=0;s<l;s++)o[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).clickHandler=function(e){var t=a.props,r=t.value,l=t.name,i=t.onChange,c=t.uniqueKey;if(r&&l){var o=Object(n.a)(r);o=o.indexOf(e[c].toString())>-1?o.filter(function(t){return t.toString()!==e[c].toString()}):[].concat(Object(n.a)(o),[e[c].toString()]),i(new CustomEvent("multiSelectOption",{detail:{name:l,value:o},bubbles:!0,cancelable:!0}))}},a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.value,r=t.label,l=t.options,i=t.uniqueKey;return u.a.createElement(d.a,{className:"mb-3 multi-select-tag"},u.a.createElement("label",{htmlFor:a},r),u.a.createElement("div",{className:"tags",id:a},l&&l.map(function(t){return u.a.createElement("span",{onClick:function(){return e.clickHandler(t)},key:t[i],className:"tag ".concat(n.indexOf(t[i].toString())>-1?"active":"")},t.name)})))}}]),t}(u.a.Component);t.a=m},455:function(e,t,a){},517:function(e,t,a){},518:function(e,t,a){},623:function(e,t,a){},627:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a(26),l=a(56),i=a(28),c=a(29),o=a(32),s=a(30),u=a(31),d=a(1),m=a.n(d),g=(a(517),a(420)),p=a(418),h=a(435),b=a(437),f=a(422),v=a(454),E=a(452),y=(a(518),a(419)),C=a(23),w={toolbar:[[{header:[1,2,3,4,5,6,!1]}],["bold","italic","underline","strike","blockquote"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["link","image"],["clean"]]},O=["header","bold","italic","underline","strike","blockquote","list","bullet","indent","link","image","clean"],j=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(o.a)(this,Object(s.a)(t).call(this,e))).changeHandler=function(e){var t=n.props,a=t.name;(0,t.onChange)(new CustomEvent("QuillEditorChange",{detail:{name:a,value:e},bubbles:!0,cancelable:!0}))},C.d||(n.ReactQuill=a(519)),n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.value,n=e.label,r=this.ReactQuill;return!C.d&&r?m.a.createElement(y.a,{className:"mb-3"},m.a.createElement("label",{htmlFor:t},n),m.a.createElement(r,{value:a,onChange:this.changeHandler,modules:w,formats:O})):null}}]),t}(m.a.PureComponent),k=a(175),N=(a(623),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(s.a)(t).call(this))).renderImage=function(t){var a=Object(k.a)(e);if(t&&""!==t&&null!==t){var n=new FileReader;n.onload=function(e){a.setState({imageUrl:e.target.result})},n.readAsDataURL(t)}},e.imageChangeHandler=function(t){var a=t.target.files[0],n=e.props.onChange;e.renderImage(a),n(t)},e.state={imageUrl:""},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillReceiveProps",value:function(e,t){e!==t&&""===t.selectedImage&&this.setState({imageUrl:""})}},{key:"render",value:function(){var e=this.props,t=e.id,a=e.name,n=e.label,r=e.disabled,l=e.selectedImage,i=e.accept,c=this.state.imageUrl;return m.a.createElement(y.a,{className:"mb-3"},m.a.createElement("div",{className:"file-browser"},m.a.createElement("p",null,n),m.a.createElement("div",{className:"custom-file"},m.a.createElement("input",{type:"file",className:"custom-file-input",id:t,name:a,onChange:this.imageChangeHandler,disabled:r,accept:i}),m.a.createElement("label",{className:"custom-file-label",htmlFor:t},""!==c?m.a.createElement("img",{src:c,alt:""}):null,m.a.createElement("span",null,l&&""!==l?l.name:"Plese choose ".concat(n))))))}}]),t}(m.a.PureComponent)),H=a(421),x=a(424),X=a(109),B=a(49),F=(a(13),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).onChangeHandler=function(e){var t,n,r=a.props.updateFormData;"multiSelectOption"===e.type||"QuillEditorChange"===e.type?(t=e.detail.name,n=e.detail.value):e.target.files?(n=e.target.files[0],t=e.target.name):(n=e.target.value,t=e.target.name),r(Object(l.a)({},t,n))},a.renderPageHeader=function(){return m.a.createElement("div",{className:"page-header"},m.a.createElement("h1",null,"Add New Blog"))},a.renderBlogForm=function(){var e=a.props,t=e.categories,n=e.isAdding,r=e.formData,l=r.title,i=r.author,c=r.keywords,o=r.image,s=r.category,u=r.isPublished,d=r.isFeatured,g=r.story,p=r.publishedBy,h=r.isTrending;return m.a.createElement("div",{className:"blog-form"},m.a.createElement(H.a,{onSubmit:a.addBlog},m.a.createElement(b.c,null,m.a.createElement(b.a,{xs:12,sm:3,lg:3},m.a.createElement(f.a,{id:"title",value:l,onChange:a.onChangeHandler,name:"title",label:"Title"})),m.a.createElement(b.a,{xs:12,sm:3,lg:3},m.a.createElement(f.a,{id:"author",value:i,onChange:a.onChangeHandler,name:"author",label:"author"})),m.a.createElement(b.a,{xs:12,sm:6,lg:6},m.a.createElement(f.a,{id:"keywords",value:c,onChange:a.onChangeHandler,name:"keywords",label:"keywords"})),m.a.createElement(b.a,{xs:12,sm:6,lg:6},m.a.createElement(N,{id:"image",label:"Image",selectedImage:o,name:"image",accept:"image/*",onChange:a.onChangeHandler})),m.a.createElement(b.a,{xs:12,sm:6,lg:6},m.a.createElement(v.a,{label:"CATEGORY",uniqueKey:"_id",value:s,name:"category",onChange:a.onChangeHandler,options:t.data})),m.a.createElement(b.a,{xs:12,lg:12},m.a.createElement(j,{value:g,name:"story",label:"Content",onChange:a.onChangeHandler})),m.a.createElement(b.a,{xs:12,lg:3},m.a.createElement(E.a,{id:"isPublished",name:"isPublished",value:u,onChange:a.onChangeHandler,label:"Publish Status",options:X.b})),m.a.createElement(b.a,{xs:12,lg:3},m.a.createElement(E.a,{id:"publishedBy",name:"publishedBy",value:p,onChange:a.onChangeHandler,label:"Publish By",options:X.c})),m.a.createElement(b.a,{xs:12,lg:3},m.a.createElement(E.a,{id:"isFeatured",name:"isFeatured",value:d,onChange:a.onChangeHandler,label:"Featured",options:X.a})),m.a.createElement(b.a,{xs:12,lg:3},m.a.createElement(E.a,{id:"isTrending",value:h,name:"isTrending",onChange:a.onChangeHandler,label:"Trending",options:X.d}))),m.a.createElement(b.c,null,m.a.createElement(b.a,{lg:4}),m.a.createElement(b.a,{lg:4},m.a.createElement(x.a,{label:"Add Blog",onClick:a.addBlog,disabled:n})),m.a.createElement(b.a,{lg:4}))))},a.addBlog=function(e){e.preventDefault();var t=a.props,n=t.addBlog,r=t.formData,l=t.history,i=r,c=!1;if(Object.keys(i).forEach(function(e){(""===i[e]||i[e]&&0===i[e].length)&&"imageSrc"!==e&&(c||B.b.error("".concat(e.toLocaleUpperCase()," is invalid!")),c=!0)}),!c){var o=new FormData;Object.keys(i).forEach(function(e){o.append(e,i[e])}),n(o,l)}},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return m.a.createElement(g.a,p.a.addBlog,m.a.createElement("div",{className:"add-blog-page"},m.a.createElement(h.a,{text:"Dashboard \u2022 Blogs \u2022 Add New Blog"}),this.renderPageHeader(),this.renderBlogForm()))}}]),t}(m.a.PureComponent)),S=a(90);t.default=Object(r.connect)(function(e){return Object(n.a)({},e.addBlog,e.app)},function(e){return{addBlog:function(t,a){return e(Object(S.a)(t,a))},updateFormData:function(t){return e(Object(S.e)(t))}}})(F)}}]);
//# sourceMappingURL=addblog.e1221c77.chunk.js.map