"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[405],{5700:function(A,e,n){n.d(e,{W:function(){return t}});var c="Container_container__VVOCq",r=n(184),t=function(A){var e=A.children;return(0,r.jsx)("div",{className:c,children:e})}},8405:function(A,e,n){n.r(e),n.d(e,{default:function(){return I}});var c=n(885),r=n(2791),t=n(7689),i=n(7596),a=n(5700),s=n(2639),o=n(6731),l="Button_button__NWQIA",d=n(184);function h(){var A=(0,t.TH)().state;return(null===A||void 0===A?void 0:A.from)&&(0,d.jsx)(o.rU,{to:A.from,children:(0,d.jsx)("button",{type:"button",className:l,children:(0,d.jsx)("span",{children:"Back"})})})}var u={},E=n(8314),B="https://image.tmdb.org/t/p/",j="w500";function w(A){var e,n=A.movie,c=n.id,r=n.backdrop_path,i=n.title,a=n.release_date,s=n.popularity,l=n.overview,h=n.genres,w=j,v="".concat(B).concat(w).concat(r),I=(0,t.TH)();return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:u["card__info--general"],children:[(0,d.jsx)("div",{className:u.img__wrapper,children:r?(0,d.jsx)("img",{src:"".concat(v),alt:i}):(0,d.jsx)("img",{src:E,alt:i})}),(0,d.jsxs)("div",{className:u.details__wrapper,children:[(0,d.jsxs)("h2",{children:[(0,d.jsx)("span",{children:i}),(0,d.jsxs)("span",{children:["(",x(a),")"]})]}),(0,d.jsxs)("p",{children:[" User score: ",(e=s,Math.round(e))," %"]}),(0,d.jsx)("h3",{children:"Overview"}),(0,d.jsx)("p",{children:l}),(0,d.jsx)("h4",{children:"Genres"}),(0,d.jsx)("p",{children:p(h)})]})]}),(0,d.jsxs)("div",{className:u["card__info--additional"],children:[(0,d.jsx)("h5",{children:"Additional information"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(o.rU,{to:"/movies/".concat(c,"/cast"),state:I.state,children:"Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(o.rU,{to:"/movies/".concat(c,"/reviews"),state:I.state,children:"Reviews"})})]})]})]})}function x(A){return new Date(A).getFullYear()}function p(A){return A.map((function(A){return A.name})).join(", ")}var v=n(101);function I(){var A=(0,t.UO)().movieId,e=(0,r.useState)(),n=(0,c.Z)(e,2),o=n[0],l=n[1],u=(0,r.useState)(!1),E=(0,c.Z)(u,2),B=E[0],j=E[1],x=(0,r.useState)(null),p=(0,c.Z)(x,2),I=p[0],g=p[1];return(0,r.useEffect)((function(){j(!0);try{(0,v.BG)(A).then((function(A){var e=A.data,n=e.id,c=e.backdrop_path,r=e.title,t=e.release_date,i=e.popularity,a=e.overview,s=e.genres;l({id:n,backdrop_path:c,title:r,release_date:t,popularity:i,overview:a,genres:s})}))}catch(I){g(I)}finally{j(!1)}}),[A]),(0,d.jsxs)(d.Fragment,{children:[I&&i.Am.error("Whoops, something went wrong: ".concat(I.message)),(0,d.jsxs)(d.Fragment,{children:[B&&(0,d.jsx)(s.Z,{color:"#3f51b5",size:32}),(0,d.jsx)(h,{}),(0,d.jsx)(a.W,{children:o&&(0,d.jsx)(w,{movie:o})}),(0,d.jsx)(t.j3,{})]})]})}},101:function(A,e,n){n.d(e,{y:function(){return d},vw:function(){return s},BG:function(){return l},oi:function(){return o},Bt:function(){return h}});var c=n(2388),r=function(A){return c.Z.get(A)},t={BASE_URL:"https://api.themoviedb.org/3",API_KEY:"06db4ee70b7b470346bb935e4264850a",DEFAULT_LANGUAGE:"en-US"},i=t.BASE_URL,a=t.API_KEY,s=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return r("".concat(i,"/trending/movie/day?api_key=").concat(a,"&page=").concat(A))},o=function(A){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return r("".concat(i,"/search/movie?api_key=").concat(a,"&page=").concat(e,"&query=").concat(A))},l=function(A){return r("".concat(i,"/movie/").concat(A,"?api_key=").concat(a))},d=function(A){return r("".concat(i,"/movie/").concat(A,"/credits?api_key=").concat(a))},h=function(A){return r("".concat(i,"/movie/").concat(A,"/reviews?api_key=").concat(a))}},8314:function(A){A.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=405.22e682ac.chunk.js.map