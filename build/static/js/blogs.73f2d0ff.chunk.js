(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{412:function(e,t,a){"use strict";var n=a(138);t.a={default:{title:"Meuzic",description:"www.meuzic.com",image:n.a,twitter:"",sep:" | ",siteURL:"",keywords:"",facebookAppId:"XXXXXXXXX",updated:(new Date).toDateString(),published:(new Date).toDateString(),contentType:"website"},home:{id:"home",title:"Dashboard",description:"Dashboard"},login:{id:"login",title:"Login",description:"Login to Meuzic"},signup:{id:"signup",title:"Signup",description:"Signup on Meuzic"},forgetpassword:{id:"forgotpassword",title:"Forget Password",description:"Forget Password"},notfound:{id:"notfound",title:"Oops! 404",description:"This is not the web page you are looking for."}}},413:function(e,t,a){"use strict";var n=a(88),r=a(31),l=a(32),c=a(34),i=a(33),o=a(35),u=a(1),s=a.n(u),m=a(104),d=a(422),p=a.n(d),g=a(412),f=g.a.default.siteURL,b=g.a.default.title,h=g.a.default.description,E=g.a.default.keywords,v=g.a.default.image,y=g.a.default.twitter,O=g.a.default.sep,N=g.a.default.updated,j=g.a.default.published,C=g.a.default.contentType,k=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(l.a)(t,[{key:"getMetaTags",value:function(e,t){var a=e.title,n=e.description,r=e.image,l=e.contentType,c=e.twitter,i=e.noCrawl,o=e.published,u=e.updated,s=e.category,m=e.tags,d=e.keywords,p=a?(a+O+b).substring(0,60):b,g=n?n.substring(0,155):h,k=r?"".concat(f).concat(r):v,w=[{itemprop:"name",content:p},{itemprop:"description",content:g},{itemprop:"image",content:k},{name:"description",content:g},{name:"keywords",content:d||E},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:site",content:y},{name:"twitter:title",content:p},{name:"twitter:description",content:g},{name:"twitter:creator",content:c||y},{name:"twitter:image:src",content:k},{property:"og:title",content:p},{property:"og:type",content:l||C},{property:"og:url",content:f+t},{property:"og:image",content:k},{property:"og:description",content:g},{property:"og:site_name",content:b},{property:"fb:app_id",content:"XXXXXXXXX"}];return i?w.push({name:"robots",content:"noindex, nofollow"}):w.push({name:"robots",content:"index, follow"}),o&&w.push({name:"article:published_time",content:o||j}),u&&w.push({name:"article:modified_time",content:u||N}),s&&w.push({name:"article:section",content:s}),m&&w.push({name:"article:tag",content:m}),w}},{key:"render",value:function(){var e=this.props,t=e.children,a=e.id,r=e.className,l=Object(n.a)(e,["children","id","className"]);return s.a.createElement("div",{id:a,className:r},s.a.createElement(p.a,{htmlAttributes:{lang:"en",itemscope:void 0,itemtype:"http://schema.org/".concat(l.schema||"WebPage")},title:l.title?l.title+O+b:b,link:[{rel:"canonical",href:f+this.props.location.pathname}],meta:this.getMetaTags(l,this.props.location.pathname)}),t)}}]),t}(u.Component);t.a=Object(m.a)(k)},414:function(e,t,a){"use strict";var n=a(1),r=a.n(n);t.a=function(e){var t=e.children,a=e.className;return r.a.createElement("div",{className:a},t)}},415:function(e,t,a){"use strict";var n=a(1),r=a.n(n),l=a(407);a(416);t.a=function(e){var t=e.label,a=e.to,n=e.className;return r.a.createElement(l.a,{to:a,className:n},t)}},416:function(e,t,a){},417:function(e,t,a){"use strict";var n=a(1),r=a.n(n);t.a=function(e){var t=e.autoComplete,a=e.children;return r.a.createElement("form",{autoComplete:t},a)}},418:function(e,t,a){"use strict";var n=a(1),r=a.n(n),l=(a(419),a(414));t.a=function(e){var t=e.id,a=e.type,n=e.name,c=e.value,i=e.onChange,o=e.label,u=e.disabled,s=e.className;return r.a.createElement(l.a,{className:"mb-3"},r.a.createElement("label",{htmlFor:t},o),r.a.createElement("input",{id:t,type:a,name:n,value:c,onChange:i,disabled:u,className:s}))}},419:function(e,t,a){},420:function(e,t,a){"use strict";var n=a(1),r=a.n(n);a(421);t.a=function(e){var t=e.label,a=e.type,n=e.onClick,l=e.className,c=e.disabled;return r.a.createElement("button",{type:a,onClick:n,className:l,disabled:c},t)}},421:function(e,t,a){},427:function(e,t,a){"use strict";var n=a(1),r=a.n(n);a(449);t.a=function(e){var t=e.text;return r.a.createElement("div",{className:"page-heading mb-2"},t)}},428:function(e,t,a){"use strict";a.d(t,"c",function(){return l}),a.d(t,"b",function(){return c}),a.d(t,"a",function(){return i});var n=a(1),r=a.n(n),l=(a(450),function(e){var t=e.children,a=e.className;return r.a.createElement("div",{className:"row ".concat(a||"")},t)}),c=function(e){var t=e.children;return r.a.createElement("div",{className:"container-fluid"},t)},i=function(e){var t=e.children,a=e.xs,n=e.sm,l=e.md,c=e.lg,i=e.className,o="";return a&&(o="col-xs-".concat(a)),n&&(o="".concat(o," col-sm-").concat(n)),l&&(o="".concat(o," col-md-").concat(l)),c&&(o="".concat(o," col-lg-").concat(c)),i&&(o="".concat(o," ").concat(i)),r.a.createElement("div",{className:o},t)}},448:function(e,t,a){},449:function(e,t,a){},450:function(e,t,a){},451:function(e,t,a){},452:function(e,t,a){},453:function(e,t,a){},457:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a(28),l=a(429),c=a(52),i=a(31),o=a(32),u=a(34),s=a(33),m=a(35),d=a(1),p=a.n(d),g=a(73),f=a.n(g),b=a(442),h=a.n(b),E=a(443),v=a(413),y=(a(448),a(412)),O=a(417),N=a(418),j=a(415),C=a(23),k=a(427),w=a(107),B=a(428),T=(a(451),a(414)),F=function(e){var t=e.id,a=e.type,n=e.name,r=e.value,l=e.onChange,c=e.label,i=e.disabled,o=e.className,u=e.options;return p.a.createElement(T.a,{className:"mb-3"},p.a.createElement("label",{htmlFor:t},c),p.a.createElement("select",{id:t,type:a,name:n,value:r,onChange:l,disabled:i,className:o},u&&u.map(function(e){return p.a.createElement("option",{key:e.id,value:e.id},e.name)})))},S=(a(452),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).clickHandler=function(e){var t=a.props,n=t.value,r=t.name,c=t.onChange,i=t.uniqueKey;if(n&&r){var o=Object(l.a)(n);o=o.indexOf(e[i].toString())>-1?o.filter(function(t){return t!==e[i].toString()}):[].concat(Object(l.a)(o),[e[i]]),c(new CustomEvent("multiSelectOption",{detail:{name:r,value:o},bubbles:!0,cancelable:!0}))}},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.value,r=t.label,l=t.options,c=t.uniqueKey;return p.a.createElement(T.a,{className:"mb-3 multi-select-tag"},p.a.createElement("label",{htmlFor:a},r),p.a.createElement("div",{className:"tags",id:a},l&&l.map(function(t){return p.a.createElement("span",{onClick:function(){return e.clickHandler(t)},key:t[c],className:"tag ".concat(n.indexOf(t[c].toString())>-1?"active":"")},t.name)})))}}]),t}(p.a.Component)),A=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).deleteBlog=function(e){var t=Object(E.pathOr)(null,"_id",e);t&&a.props.deleteBlog(t)},a.fetchBlogs=function(){var e=a.props,t=e.fetchBlogs,n=e.updateFilters,r=e.location,l=e.filters,c=e.history,i=Object(C.e)(r,l);n(i),c.replace({path:r.pathname,search:f.a.stringify(Object(C.a)(i))}),t(Object(C.a)(i))},a.renderBlogsTable=function(){var e=a.props,t=e.data,n=e.isFetching;if(n){return p.a.createElement(p.a.Fragment,null,[["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""]].map(function(e,t){return p.a.createElement("div",{key:t,className:"table-skeleton"},e.map(function(e,t){return p.a.createElement("div",{key:t})}))}))}if(!n&&t.length>0)return p.a.createElement("div",{className:"table-responsive"},p.a.createElement("table",{className:"table"},p.a.createElement("thead",null,p.a.createElement("tr",null,a.TABLE_COLUMNS.map(function(e,t){return p.a.createElement("th",{key:t},e.name)}))),p.a.createElement("tbody",null,t.map(function(e){return p.a.createElement("tr",{key:e._id},a.TABLE_COLUMNS.map(function(t,a){return p.a.createElement("td",{key:a},t.getValue(e))}))}))))},a.onChangeHandler=function(e){e.preventDefault();var t,r,l=a.props,i=l.updateFilters,o=l.history,u=l.filters,s=l.location;"multiSelectOption"===e.type?(t=e.detail.name,r=e.detail.value):(t=e.target.name,r=e.target.value);var m=Object(c.a)({},t,r),d=Object(n.a)({},u,m);i(d),o.replace({path:s.pathname,search:f.a.stringify(Object(C.a)(d))}),a.filterDebounce()},a.renderFilterMessage=function(){var e,t=a.props,n=t.data;return e=t.isFetching?"Loading... Please wait.":n&&n.length?"Showing ".concat(n.length," result(s)"):"Sorry, no data found.",p.a.createElement(B.c,null,p.a.createElement(B.a,null,p.a.createElement("div",{className:"message"},e)))},a.renderFilterView=function(){var e=a.props,t=e.filters,n=e.categories,r=t.title,l=t.isFeatured,c=t.isTrending,i=t.category;return p.a.createElement("div",{className:"filter-view"},p.a.createElement(O.a,{autoComplete:"off",onSubmit:a.onChangeHandler},p.a.createElement(B.b,null,p.a.createElement(B.c,null,p.a.createElement(B.a,{xs:12,sm:6,lg:6},p.a.createElement(N.a,{id:"title",name:"title",value:r,onChange:a.onChangeHandler,label:"SEARCH BLOGS BY NAME/CATEGORY"})),p.a.createElement(B.a,{xs:12,sm:3,lg:3},p.a.createElement(F,{id:"isTrending",name:"isTrending",value:c,onChange:a.onChangeHandler,label:"TRENDING",options:a.TRENDING_OPTIONS})),p.a.createElement(B.a,{xs:12,sm:3,lg:3},p.a.createElement(F,{id:"isFeatured",name:"isFeatured",value:l,onChange:a.onChangeHandler,label:"FEATURED",options:a.FEATURED_OPTIONS}))),p.a.createElement(B.c,null,p.a.createElement(B.a,{xs:12,lg:12},p.a.createElement(S,{id:"category",uniqueKey:"_id",name:"category",value:i,onChange:a.onChangeHandler,label:"CATEGORY",options:n.data}))),a.renderFilterMessage())))},a.renderPageHeader=function(){return p.a.createElement("div",{className:"page-header"},p.a.createElement("h1",null,"Blogs"),p.a.createElement(j.a,{to:"/blog/add",label:"Add New Blog"}))},a.TABLE_COLUMNS=[{name:"Title",key:"title",getValue:function(e){return p.a.createElement(j.a,{className:"d-block",label:e.title,to:"/blog/".concat(e._id)})}},{name:"Author",key:"author",getValue:function(e){return e.author}},{name:"Trending",key:"isTrending",getValue:function(e){return Object(C.b)(w.c,e.isTrending)}},{name:"Featured",key:"isFeatured",getValue:function(e){return Object(C.b)(w.a,e.isFeatured)}},{name:"Views",key:"viewsCount",getValue:function(e){return e.viewsCount}},{name:"Published By",key:"publishedBy",getValue:function(e){return Object(C.b)(w.b,e.publishedBy)}},{name:"Action",key:"publishedBy",getValue:function(e){return p.a.createElement(p.a.Fragment,null,p.a.createElement(j.a,{to:"/blog/".concat(e._id),label:"Edit",className:"edit"}),p.a.createElement("span",{className:"delete",onClick:function(){return a.deleteBlog(e)}},"Delete"))}}],a.PUBLISHED_BY_OPTIONS=[{name:"All",id:""}].concat(Object(l.a)(w.b)),a.FEATURED_OPTIONS=[{name:"All",id:""}].concat(Object(l.a)(w.a)),a.TRENDING_OPTIONS=[{name:"All",id:""}].concat(Object(l.a)(w.c)),a.filterDebounce=h.a.debounce(a.fetchBlogs,600),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){this.fetchBlogs()}},{key:"render",value:function(){return p.a.createElement(v.a,y.a.blogs,p.a.createElement("div",{className:"blogs-page"},p.a.createElement(k.a,{text:"Dashboard \u2022 Blogs"}),this.renderPageHeader(),this.renderFilterView(),this.renderBlogsTable()))}}]),t}(p.a.Component),_=a(54);t.default=Object(r.connect)(function(e){return Object(n.a)({},e.blogs,e.app)},function(e){return{fetchBlogs:function(t){return e(Object(_.e)(t))},deleteBlog:function(t){return e(Object(_.a)(t))},updateFilters:function(t){return e(Object(_.i)(t))}}})(A)},458:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a(28),l=a(31),c=a(32),i=a(34),o=a(33),u=a(35),s=a(1),m=a.n(s),d=a(413),p=a(412),g=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return m.a.createElement(d.a,p.a.addBlog,m.a.createElement("div",{className:"add-blog-page"}))}}]),t}(m.a.PureComponent),f=a(78);t.default=Object(r.connect)(function(e){return Object(n.a)({},e.addblogs,e.app)},function(e){return{addBlog:function(t){return e(function(e){return{type:f.b,data:e}}(t))}}})(g)},459:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a(28),l=a(52),c=a(31),i=a(32),o=a(34),u=a(33),s=a(35),m=a(1),d=a.n(m),p=a(73),g=a.n(p),f=a(413),b=(a(453),a(412)),h=a(417),E=a(418),v=a(23),y=a(427),O=a(428),N=a(420),j=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).renderBlogsTable=function(){var e=a.props,t=e.data,n=e.isFetching;if(n){return d.a.createElement(d.a.Fragment,null,[["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""]].map(function(e,t){return d.a.createElement("div",{key:t,className:"table-skeleton"},e.map(function(e,t){return d.a.createElement("div",{key:t})}))}))}if(!n&&t.length>0)return d.a.createElement("div",{className:"table-responsive"},d.a.createElement("table",{className:"table"},d.a.createElement("thead",null,d.a.createElement("tr",null,a.TABLE_COLUMNS.map(function(e,t){return d.a.createElement("th",{key:t},e.name)}))),d.a.createElement("tbody",null,t.map(function(e,t){return d.a.createElement("tr",{key:e._id},a.TABLE_COLUMNS.map(function(a,n){return d.a.createElement("td",{key:n},a.getValue(e,t))}))}))))},a.onChangeHandler=function(e){e.preventDefault();var t,r,c=a.props,i=c.updateFilters,o=c.history,u=c.filters,s=c.location;"multiSelectOption"===e.type?(t=e.detail.name,r=e.detail.value):(t=e.target.name,r=e.target.value);var m=Object(l.a)({},t,r),d=Object(n.a)({},u,m);i(d),o.replace({path:s.pathname,search:g.a.stringify(Object(v.a)(d))}),a.filterDebounce()},a.renderFilterMessage=function(){var e,t=a.props,n=t.data;return e=t.isFetching?"Loading... Please wait.":n&&n.length?"Showing ".concat(n.length," result(s)"):"Sorry, no data found.",d.a.createElement(O.c,null,d.a.createElement(O.a,null,d.a.createElement("div",{className:"message"},e)))},a.renderFilterView=function(){var e=a.props.filters.title;return d.a.createElement("div",{className:"filter-view"},d.a.createElement(h.a,{autoComplete:"off",onSubmit:a.onChangeHandler},d.a.createElement(O.b,null,d.a.createElement(O.c,null,d.a.createElement(O.a,{xs:12,sm:6,lg:6},d.a.createElement(E.a,{id:"title",name:"title",value:e,onChange:a.onChangeHandler,label:"SEARCH BLOGS BY NAME/CATEGORY"}))),a.renderFilterMessage())))},a.renderPageHeader=function(){return d.a.createElement("div",{className:"page-header"},d.a.createElement("h1",null,"Categories"),d.a.createElement(N.a,{label:"Add New Category"}))},a.TABLE_COLUMNS=[{name:"S No",key:"_id",getValue:function(e,t){return t+1}},{name:"Cat ID",key:"_id",getValue:function(e){return e._id}},{name:"Name",key:"name",getValue:function(e){return e.name}},{name:"Action",key:"publishedBy",getValue:function(e){return d.a.createElement(d.a.Fragment,null,d.a.createElement("span",{className:"edit",onClick:function(){return a.deleteBlog(e)}},"Edit"),d.a.createElement("span",{className:"delete",onClick:function(){return a.deleteBlog(e)}},"Delete"))}}],a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){this.props.fetchCategory()}},{key:"render",value:function(){return d.a.createElement(f.a,b.a.blogs,d.a.createElement("div",{className:"categories-page"},d.a.createElement(y.a,{text:"Dashboard \u2022 Categories"}),this.renderPageHeader(),this.renderBlogsTable()))}}]),t}(d.a.Component),C=a(86);t.default=Object(r.connect)(function(e){return Object(n.a)({},e.categories)},function(e){return{fetchCategory:function(t){return e(Object(C.a)(t))}}})(j)}}]);
//# sourceMappingURL=blogs.73f2d0ff.chunk.js.map