(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[205],{2789:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var n=r(5893),a=r(3855),o=r(8319),i=r(8523),c=r(6710),s=r.n(c);function m(e){var t=e.dateString,r=(0,a.Z)(t);return(0,n.jsxs)("time",{dateTime:t,className:"date",children:[(0,n.jsx)("span",{className:s().day,children:(0,o.Z)(r,"dd",{locale:i.Z})}),(0,n.jsx)("span",{className:s().month,children:(0,o.Z)(r,"mm",{locale:i.Z})}),(0,n.jsx)("span",{className:s().year,children:(0,o.Z)(r,"yyyy",{locale:i.Z})})]})}},3525:function(e,t,r){"use strict";r.d(t,{MW:function(){return g},h4:function(){return a},nS:function(){return D},v2:function(){return f}});r(2789);var n=r(5893);function a(){return(0,n.jsx)("header",{children:(0,n.jsx)(f,{})})}var o=r(6156),i=r(2949),c=r(7294),s=r(1664),m=r(1163),u=r(1202),d=r.n(u);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var _=(0,m.withRouter)((function(e){var t=e.router,r=e.children,a=(0,i.Z)(e,["router","children"]);return(0,n.jsx)(s.default,h(h({},a),{},{children:c.cloneElement(r,{className:t.pathname===a.href?"".concat(d().item," ").concat(d().item_active):d().item})}))}));function f(){return(0,n.jsxs)("nav",{className:d().root,children:[(0,n.jsx)(_,{href:"/",children:(0,n.jsx)("a",{children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}),(0,n.jsx)(_,{href:"/geo",children:(0,n.jsx)("a",{children:"\u0413\u0435\u043e\u0433\u0440\u0430\u0444\u0438\u044f"})}),(0,n.jsx)(_,{href:"/photos",children:(0,n.jsx)("a",{children:"\u0424\u043e\u0442\u043e"})}),(0,n.jsx)(_,{href:"/memories",children:(0,n.jsx)("a",{children:"\u0418\u0441\u0442\u043e\u0440\u0438\u0438"})}),(0,n.jsx)(_,{href:"/airfield",children:(0,n.jsx)("a",{children:"\u0410\u044d\u0440\u043e\u0434\u0440\u043e\u043c"})}),(0,n.jsx)(_,{href:"https://yandex.ru/maps/24/veliky-novgorod/routes/bus_101/796d617073626d313a2f2f7472616e7369742f6c696e653f69643d32353330343539393237266c6c3d33312e33323331393225324335382e353639323132266e616d653d31303126723d3632393726747970653d627573/?ll=31.343047%2C58.579901&z=13",children:(0,n.jsx)("a",{target:"_blank",children:"101 \u0430\u0432\u0442\u043e\u0431\u0443\u0441"})})]})}var p=r(6610),j=r(5991),x=r(5255),y=r(6089),v=r(7608);function w(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,v.Z)(e);if(t){var a=(0,v.Z)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,y.Z)(this,r)}}var g=function(e){(0,x.Z)(r,e);var t=w(r);function r(){return(0,p.Z)(this,r),t.apply(this,arguments)}return(0,j.Z)(r,[{key:"componentDidMount",value:function(){var e=document.createElement("script");e.src="//mc.yandex.ru/metrika/watch.js",e.onload=function(e){try{window.yaCounter414633=new window.Ya.Metrika(414633)}catch(e){console.log("e: ",e)}},document.body.appendChild(e)}},{key:"render",value:function(){return(0,n.jsx)("noscript",{children:(0,n.jsx)("div",{style:{position:"absolute"},children:(0,n.jsx)("img",{src:"//mc.yandex.ru/watch/414633",alt:""})})})}}]),r}(c.Component),b=r(6151),N=r.n(b);function O(e){var t=e.data;return(0,n.jsxs)("div",{className:N().root,children:[(0,n.jsx)("time",{className:N().time,children:t.memory_date_parsed.month?t.memory_date_parsed.month+1:"1"}),(0,n.jsx)("div",{className:N().slug,children:(0,n.jsx)(s.default,{href:"/memories/".concat(t.slug),children:(0,n.jsx)("a",{children:t.title})})})]})}var Z=r(1158),k=r.n(Z);function D(e){var t=e.allMemoriesData.reduce((function(e,t){return e[t.metaData.memory_date_parsed.year]?e[t.metaData.memory_date_parsed.year].push(t):e[t.metaData.memory_date_parsed.year]=[t],e}),{});return(0,n.jsx)("ul",{className:k().root,children:Object.keys(t).sort((function(e,t){return t-e})).map((function(e){return(0,n.jsxs)("li",{className:k().memoriesItem,children:[(0,n.jsx)("time",{className:k().memoriesItem__year,dateTime:e,children:e}),(0,n.jsx)("div",{className:k().memoriesItem__records,children:t[e].map((function(e){return(0,n.jsx)("div",{className:k().memoriesItem__record,children:(0,n.jsx)(O,{data:e.metaData},e.metaData.slug)},e.metaData.slug)}))})]},e)}))})}},6122:function(e,t){"use strict";t.Z={description:"\u041a\u0440\u0435\u0447\u0435\u0432\u0438\u0446\u044b, \u041a\u0440\u0435\u0447\u0438, \u041a\u0440\u0435\u0447\u0438-\u0441\u0438\u043b\u0430, Krechi, Krechi-sila, \u0428\u043a\u043e\u043b\u0430 \u043d\u043e\u043c\u0435\u0440 15, \u0448\u043a\u043e\u043b\u0430 \u2116 15 \u0438\u043c\u0435\u043d\u0438 \u0428\u043f\u0443\u043d\u044f\u043a\u043e\u0432\u0430, \u041a\u0440\u0435\u0447\u0435\u0432\u0438\u0446\u044b (\u0430\u044d\u0440\u043e\u043f\u043e\u0440\u0442), 110 \u0412\u0422\u0410\u041f",title:"\u041a\u0440\u0435\u0447\u0435\u0432\u0438\u0446\u044b \u2014 \u043c\u0438\u043a\u0440\u043e\u0440\u0430\u0439\u043e\u043d \u0412\u0435\u043b\u0438\u043a\u043e\u0433\u043e \u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434\u0430",videos:["https://www.youtube.com/watch?v=eA7BNpoW9hE","https://www.youtube.com/watch?v=vDKhStzvyQE","https://www.youtube.com/watch?v=87HshcMLM18","https://www.youtube.com/watch?v=TT7mDODyf1w","https://www.youtube.com/watch?v=Lst4A4bKNAE"]}},5532:function(e,t,r){"use strict";r.d(t,{j:function(){return m}});var n=r(5893),a=r(9008),o=r(1742),i=r.n(o),c=r(6122),s=r(3525);function m(e){var t=e.children;e.home;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:i().container,children:[(0,n.jsxs)(a.default,{children:[(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("meta",{name:"yandex-verification",content:"4c16862f72d07481"}),(0,n.jsx)("meta",{name:"description",content:c.Z.description}),(0,n.jsx)("meta",{name:"og:title",content:c.Z.title}),(0,n.jsx)("title",{children:c.Z.title})]}),(0,n.jsx)(s.h4,{}),(0,n.jsx)("main",{children:t})]}),(0,n.jsxs)("footer",{className:"footer",children:[(0,n.jsxs)("span",{className:"copyright footer__item",children:["2003 \u2014 ",(new Date).getFullYear(),","," ",(0,n.jsx)("a",{href:"//metrika.yandex.ru/stat/?id=414633",children:"\u041a\u0440\u0435\u0447\u0435\u0432\u0438\u0446\u044b \u0432 \u0441\u0435\u0442\u0438"})]}),(0,n.jsxs)("span",{className:"feedback footer__item",children:["\u041f\u0438\u0448\u0438\u0442\u0435: "," ",(0,n.jsx)("a",{href:"mailto:krechi-sila@yandex.ru",children:"krechi-sila@yandex.ru"})]})]}),(0,n.jsx)(s.MW,{})]})}},5429:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return c},default:function(){return s}});var n=r(5893),a=r(9008),o=r(6982),i=(r(5090),r(5532)),c=!0;function s(e){var t=e.pageData;return(0,n.jsxs)(i.j,{children:[(0,n.jsx)(a.default,{children:(0,n.jsx)("title",{children:t.title})}),(0,n.jsxs)("article",{children:[(0,n.jsx)("h1",{className:"page__header",children:t.title}),(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:t.contentHtml}})]}),(0,n.jsx)(o.Z,{items:t.images})]})}},1822:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/photos",function(){return r(5429)}])},6710:function(e){e.exports={day:"date_day__mDkvN",month:"date_month__1n1Tg",year:"date_year__3mjjY"}},1158:function(e){e.exports={root:"memories_root__7g0J5",memoriesItem:"memories_memoriesItem__10OWP",memoriesItem__year:"memories_memoriesItem__year__3btFb",memoriesItem__records:"memories_memoriesItem__records__2LBOd",memoriesItem__record:"memories_memoriesItem__record__1FcZf"}},6151:function(e){e.exports={root:"memory_root__3KYyb",time:"memory_time__3d3-5",slug:"memory_slug__2WLBI"}},1202:function(e){e.exports={root:"menu_root__1MXa7",item:"menu_item__2gTkm",item_active:"menu_item_active__1IxB7"}},1742:function(e){e.exports={container:"postLayout_container__2Qt_Q",header:"postLayout_header__2RoiI",headerImage:"postLayout_headerImage__2Zg0p",headerHomeImage:"postLayout_headerHomeImage__2EYSP",backToHome:"postLayout_backToHome__3C4GC"}}},function(e){e.O(0,[774,874,816,888,179],(function(){return t=1822,e(e.s=t);var t}));var t=e.O();_N_E=t}]);