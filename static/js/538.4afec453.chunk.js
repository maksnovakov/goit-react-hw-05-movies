"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[538],{5700:function(e,t,n){n.d(t,{W:function(){return c}});var r="Container_container__VVOCq",a=n(184),c=function(e){var t=e.children;return(0,a.jsx)("div",{className:r,children:t})}},2845:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(6731),a={galleryList:"MovieGallery_galleryList__JyKHn",gallery_item:"MovieGallery_gallery_item__xHaa6"},c=n(184),o=function(e){var t=e.movies,n=e.prevLocation;return(0,c.jsx)("div",{children:(0,c.jsx)("ul",{className:a.galleryList,children:t?t.map((function(e){var t=e.id,o=e.title;return(0,c.jsx)("li",{className:a.galleryList_item,children:(0,c.jsx)(r.rU,{to:"/movies/".concat(t),state:{from:n},children:o})},t)})):null})})}},538:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(2982),a=n(885),c=n(2791),o=n(6731),i=n(7689),u=n(7596),s=n(5700),l=n(2639),h={SearchForm_button:"Searchbar_SearchForm_button__OB9qt",SearchForm_imput:"Searchbar_SearchForm_imput__2agqX"},f=n(184),m=function(e){var t=e.onSearch,n=(0,c.useState)(""),r=(0,a.Z)(n,2),o=r[0],i=r[1];return(0,f.jsx)("header",{children:(0,f.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""===o.trim())return u.Am.warning("Search field is empty!");t(o),i("")},children:[(0,f.jsx)("button",{type:"submit",className:h.SearchForm_button,children:"Search"}),(0,f.jsx)("input",{className:h.SearchForm_input,type:"text",name:"searchRequest",value:o,onChange:function(e){i(e.currentTarget.value.toLowerCase())},autoComplete:"off",autoFocus:!0,placeholder:"Enter your search request"})]})})},_=n(2845),v=n(101);function d(){var e=(0,o.lr)(),t=(0,a.Z)(e,2),n=t[0],h=t[1],d=(0,c.useState)([]),p=(0,a.Z)(d,2),g=p[0],y=p[1],S=(0,c.useState)(null),b=(0,a.Z)(S,2),x=b[0],j=b[1],w=(0,c.useState)(!1),L=(0,a.Z)(w,2),A=L[0],Z=L[1],k=n.get("query"),q=(0,i.TH)();(0,c.useEffect)((function(){if(k){""!==k&&function(e){Z(!0);try{(0,v.oi)(e).then((function(e){if(!e.data.results.length)return u.Am.error("There is no movies found with that search request");var t=e.data.results.map((function(e){return{id:e.id,title:e.title}}));y((0,r.Z)(t))}))}catch(x){j(x)}finally{Z(!1)}}(k)}}),[k]);return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(s.W,{children:[(0,f.jsx)(m,{onSearch:function(e){h({query:"".concat(e)})}}),x&&u.Am.error("Whoops, something went wrong: ".concat(x.message)),A&&(0,f.jsx)(l.Z,{color:"#3f51b5",size:32}),g.length>0&&(0,f.jsx)(_.Z,{movies:g,prevLocation:q})]})})}},101:function(e,t,n){n.d(t,{y:function(){return h},vw:function(){return u},BG:function(){return l},oi:function(){return s},Bt:function(){return f}});var r=n(2388),a=function(e){return r.Z.get(e)},c={BASE_URL:"https://api.themoviedb.org/3",API_KEY:"06db4ee70b7b470346bb935e4264850a",DEFAULT_LANGUAGE:"en-US"},o=c.BASE_URL,i=c.API_KEY,u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return a("".concat(o,"/trending/movie/day?api_key=").concat(i,"&page=").concat(e))},s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return a("".concat(o,"/search/movie?api_key=").concat(i,"&page=").concat(t,"&query=").concat(e))},l=function(e){return a("".concat(o,"/movie/").concat(e,"?api_key=").concat(i))},h=function(e){return a("".concat(o,"/movie/").concat(e,"/credits?api_key=").concat(i))},f=function(e){return a("".concat(o,"/movie/").concat(e,"/reviews?api_key=").concat(i))}}}]);
//# sourceMappingURL=538.4afec453.chunk.js.map