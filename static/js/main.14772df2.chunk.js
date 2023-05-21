(this["webpackJsonpreact-sneakers"]=this["webpackJsonpreact-sneakers"]||[]).push([[0],{26:function(e,t,r){e.exports={overlay:"Drawer_overlay__3oE1S",overlayVisible:"Drawer_overlayVisible__1Onpt",drawer:"Drawer_drawer__XaZMH",items:"Drawer_items__XutR9"}},27:function(e,t,r){e.exports={card:"Card_card__35wN0",plus:"Card_plus__3MF9E",favorite:"Card_favorite__-ptFE"}},42:function(e,t,r){},56:function(e,t,r){"use strict";r.r(t);var c=r(1),a=r.n(c),s=r(16),n=r(31),i=r.n(n),o=(r(42),r(43),r(11)),l=r(12),d=r(8),j=r(14),u=r(5),b=r(57),x=a.a.createContext({}),m=function(){var e=a.a.useContext(x),t=e.cartItems,r=e.setCartItems,c=t.reduce((function(e,t){return t.price+e}),0);return{cartItems:t,setCartItems:r,totalPrice:c}},h=r(2);var f=function(e){var t=m().totalPrice;return Object(h.jsxs)("header",{className:"d-flex justify-between align-center p-40",children:[Object(h.jsx)(s.b,{to:"/",children:Object(h.jsxs)("div",{className:"d-flex align-center",children:[Object(h.jsx)("img",{width:40,height:40,src:"sneakers-store/img/logo.png",alt:"logo"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{className:"text-uppercase",children:"React Sheakers"}),Object(h.jsx)("p",{className:"opacity-5",children:"The Best Sneaker Store"})]})]})}),Object(h.jsxs)("ul",{className:"d-flex",children:[Object(h.jsxs)("li",{onClick:e.onClickCart,className:"mr-30 cu-p",children:[Object(h.jsx)("img",{width:18,height:18,src:"sneakers-store/img/cart.svg",alt:"cart"}),Object(h.jsxs)("span",{children:[t," $"]})]}),Object(h.jsx)("li",{className:"mr-20 cu-p",children:Object(h.jsx)(s.b,{to:"/favorites",children:Object(h.jsx)("img",{width:18,height:18,src:"sneakers-store/img/heart.svg",alt:"bookmarks"})})}),Object(h.jsx)("li",{children:Object(h.jsx)(s.b,{to:"/orders",children:Object(h.jsx)("img",{width:18,height:18,src:"sneakers-store/img/user.svg",alt:"user"})})})]})]})},O=function(e){var t=e.title,r=e.image,c=e.description,s=a.a.useContext(x).setCartOpened;return Object(h.jsxs)("div",{className:"cartEmpty d-flex align-center justify-center flex-column flex",children:[Object(h.jsx)("img",{className:"mb-20",width:"120px",src:r,alt:"Empty"}),Object(h.jsx)("h2",{children:t}),Object(h.jsx)("p",{className:"opacity-6",children:c}),Object(h.jsxs)("button",{onClick:function(){return s(!1)},className:"greenButton",children:[Object(h.jsx)("img",{src:"sneakers-store/img/arrow.svg",alt:"Arrow"}),"Go back"]})]})},p=r(26),v=r.n(p),g=function(e){return new Promise((function(t){return setTimeout(t,e)}))};var k=function(e){var t=e.onRemove,r=e.onClose,c=e.items,s=void 0===c?[]:c,n=e.opened,i=m(),o=i.cartItems,l=i.setCartItems,x=i.totalPrice,f=a.a.useState(null),p=Object(u.a)(f,2),k=p[0],w=p[1],N=a.a.useState(!1),y=Object(u.a)(N,2),C=y[0],S=y[1],I=a.a.useState(!1),_=Object(u.a)(I,2),A=_[0],F=_[1],T=function(){var e=Object(j.a)(Object(d.a)().mark((function e(){var t,r,c,a;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,F(!0),e.next=4,b.a.post("https://64382ecff3a0c40814acdc08.mockapi.io/orders",{items:o});case 4:t=e.sent,r=t.data,w(r.id),S(!0),l([]),c=0;case 10:if(!(c<o.length)){e.next=19;break}return a=o[c],e.next=14,b.a.delete("https://64382ecff3a0c40814acdc08.mockapi.io/cart"+a.id);case 14:return e.next=16,g(1e3);case 16:c++,e.next=10;break;case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(0),alert("failed to create order");case 24:F(!1);case 25:case"end":return e.stop()}}),e,null,[[0,21]])})));return function(){return e.apply(this,arguments)}}();return Object(h.jsx)("div",{className:"".concat(v.a.overlay," ").concat(n?v.a.overlayVisible:""),children:Object(h.jsxs)("div",{className:v.a.drawer,children:[Object(h.jsxs)("h2",{className:"d-flex justify-between mb-30",children:["Bag ",Object(h.jsx)("img",{onClick:r,className:"cu-p",src:"sneakers-store/img/btn-remove.svg",alt:"Close"})," "]}),s.length>0?Object(h.jsxs)("div",{className:"d-flex flex-column flex",children:[Object(h.jsx)("div",{className:"items flex",children:s.map((function(e){return Object(h.jsxs)("div",{className:"cartItem d-flex align-center mb-20",children:[Object(h.jsx)("div",{style:{backgroundImage:"url(/sneakers-store/".concat(e.imageUrl,")")},className:"cartItemImg"}),Object(h.jsxs)("div",{className:"mr-20 flex",children:[Object(h.jsx)("p",{className:"mb-5",children:e.title}),Object(h.jsxs)("b",{children:[e.price,"$"]})]}),Object(h.jsx)("img",{onClick:function(){return t(e.id)},className:"removeBtn",src:"sneakers-store/img/btn-remove.svg",alt:"Remove"})]},e.id)}))}),Object(h.jsxs)("div",{className:"cartTotalBlock",children:[Object(h.jsxs)("ul",{children:[Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{children:"Subtotal:"}),Object(h.jsx)("div",{}),Object(h.jsxs)("b",{children:[x," $"]})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{children:"Tax 5%:"}),Object(h.jsx)("div",{}),Object(h.jsxs)("b",{children:[Math.round(x/100*5)," $"]})]})]}),Object(h.jsxs)("button",{disabled:A,onClick:T,className:"greenButton",children:["Checkout securely ",Object(h.jsx)("img",{src:"sneakers-store/img/arrow.svg",alt:"Arrow"})]})]})]}):Object(h.jsx)(O,{title:C?"Order is processed":"Cart empty",description:C?"Your order #".concat(k," will be delivered to courier soon"):"Add at least one pair of sneakers to order.",image:C?"sneakers-store/img/complete-order.jpg":"sneakers-store/img/empty-cart.jpg"})]})})},w=r(33),N=r(27),y=r.n(N);var C=function(e){var t=e.id,r=e.title,c=e.imageUrl,s=e.price,n=e.onFavorite,i=e.onPlus,o=e.favorited,l=void 0!==o&&o,d=e.loading,j=void 0!==d&&d,b=a.a.useContext(x).isItemAdded,m=a.a.useState(l),f=Object(u.a)(m,2),O=f[0],p=f[1],v={id:t,parentId:t,title:r,imageUrl:c,price:s};return Object(h.jsx)("div",{className:y.a.card,children:j?Object(h.jsxs)(w.a,{speed:2,width:155,height:250,viewBox:"0 0 155 265",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[Object(h.jsx)("rect",{x:"1",y:"0",rx:"10",ry:"10",width:"155",height:"155"}),Object(h.jsx)("rect",{x:"0",y:"167",rx:"5",ry:"5",width:"155",height:"15"}),Object(h.jsx)("rect",{x:"0",y:"187",rx:"5",ry:"5",width:"100",height:"15"}),Object(h.jsx)("rect",{x:"1",y:"234",rx:"5",ry:"5",width:"80",height:"25"}),Object(h.jsx)("rect",{x:"124",y:"230",rx:"10",ry:"10",width:"32",height:"32"})]}):Object(h.jsxs)(h.Fragment,{children:[n&&Object(h.jsx)("div",{className:y.a.favorite,onClick:function(){n(v),p(!O)},children:Object(h.jsx)("img",{src:O?"sneakers-store/img/favorite.svg":"sneakers-store/img/unfavorite.svg",alt:"favorite"})}),Object(h.jsx)("img",{width:133,height:112,src:"/sneakers-store/".concat(c),alt:"Shoes"}),Object(h.jsx)("h5",{children:r}),Object(h.jsxs)("div",{className:"d-flex justify-between align-center",children:[Object(h.jsxs)("div",{className:"d-flex flex-column",children:[Object(h.jsx)("span",{children:"Price:"}),Object(h.jsxs)("b",{children:[s," $"]})]}),i&&Object(h.jsx)("img",{className:y.a.plus,onClick:function(){i(v)},src:b(t)?"sneakers-store/img/btn-checked.svg":"sneakers-store/img/btn-plus.svg",alt:"Plus"})]})]})})};var S=function(e){var t=e.items,r=e.searchValue,c=e.setSearchValue,a=e.onChangeSearchInput,s=e.onAddToFavorite,n=e.onAddToCart,i=e.isLoading;return Object(h.jsxs)("div",{className:"content p-40",children:[Object(h.jsxs)("div",{className:"d-flex align-center justify-between mb-40",children:[Object(h.jsx)("h1",{children:r?'Search: "'.concat(r,'"'):"All sneakers"}),Object(h.jsxs)("div",{className:"search-block d-flex",children:[Object(h.jsx)("img",{src:"sneakers-store/img/search.svg",alt:"Search"}),r&&Object(h.jsx)("img",{onClick:function(){return c("")},className:"clear cu-p",src:"sneakers-store/img/btn-remove.svg",alt:"Clear"}),Object(h.jsx)("input",{onChange:a,value:r,placeholder:"Search"})]})]}),Object(h.jsx)("div",{className:"d-flex flex-wrap",children:function(){var e=t.filter((function(e){return e.title.toLowerCase().includes(r.toLowerCase())}));return(i?Object(l.a)(Array(8)):e).map((function(e,t){return Object(h.jsx)(C,Object(o.a)({onFavorite:function(e){return s(e)},onPlus:function(e){return n(e)},loading:i},e),t)}))}()})]})};var I=function(){var e=a.a.useContext(x),t=e.favorites,r=e.onAddToFavorite;return Object(h.jsxs)("div",{className:"content p-40",children:[Object(h.jsx)("div",{className:"d-flex align-center justify-between mb-40",children:Object(h.jsx)("h1",{children:"My bookmarks"})}),Object(h.jsx)("div",{className:"d-flex flex-wrap",children:t.map((function(e,t){return Object(h.jsx)(C,Object(o.a)({favorited:!0,onFavorite:r},e),t)}))})]})};var _=function(){var e=a.a.useState([]),t=Object(u.a)(e,2),r=t[0],c=t[1],s=a.a.useState(!0),n=Object(u.a)(s,2),i=n[0],x=n[1];return a.a.useEffect((function(){Object(j.a)(Object(d.a)().mark((function e(){var t,r;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://64382ecff3a0c40814acdc08.mockapi.io/orders");case 3:t=e.sent,r=t.data,c(r.reduce((function(e,t){return[].concat(Object(l.a)(e),Object(l.a)(t.items))}),[])),x(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),alert("error when requesting orders"),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()}),[]),Object(h.jsxs)("div",{className:"content p-40",children:[Object(h.jsx)("div",{className:"d-flex align-center justify-between mb-40",children:Object(h.jsx)("h1",{children:"My order"})}),Object(h.jsx)("div",{className:"d-flex flex-wrap",children:(i?Object(l.a)(Array(8)):r).map((function(e,t){return Object(h.jsx)(C,Object(o.a)({loading:i},e),t)}))})]})},A=r(4);var F=function(){var e=a.a.useState([]),t=Object(u.a)(e,2),r=t[0],c=t[1],s=a.a.useState([]),n=Object(u.a)(s,2),i=n[0],m=n[1],O=a.a.useState([]),p=Object(u.a)(O,2),v=p[0],g=p[1],w=a.a.useState(""),N=Object(u.a)(w,2),y=N[0],C=N[1],F=a.a.useState(!1),T=Object(u.a)(F,2),P=T[0],B=T[1],E=a.a.useState(!0),V=Object(u.a)(E,2),M=V[0],R=V[1];a.a.useEffect((function(){function e(){return(e=Object(j.a)(Object(d.a)().mark((function e(){var t,r,a,s,n;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([b.a.get("https://64382ecff3a0c40814acdc08.mockapi.io/cart"),b.a.get("https://64382ecff3a0c40814acdc08.mockapi.io/favorites"),b.a.get("https://64382ecff3a0c40814acdc08.mockapi.io/items")]);case 3:t=e.sent,r=Object(u.a)(t,3),a=r[0],s=r[1],n=r[2],R(!1),m(a.data),g(s.data),c(n.data),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),alert("error when requesting data");case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var $=function(){var e=Object(j.a)(Object(d.a)().mark((function e(t){var r,c,a;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(r=i.find((function(e){return Number(e.parentId)===Number(t.id)})))){e.next=8;break}return m((function(e){return e.filter((function(e){return Number(e.parentId)!==Number(t.id)}))})),e.next=6,b.a.delete("https://64382ecff3a0c40814acdc08.mockapi.io/cart/".concat(r.id));case 6:e.next=14;break;case 8:return m((function(e){return[].concat(Object(l.a)(e),[t])})),e.next=11,b.a.post("https://64382ecff3a0c40814acdc08.mockapi.io/cart",t);case 11:c=e.sent,a=c.data,m((function(e){return e.map((function(e){return e.parentId===a.parentId?Object(o.a)(Object(o.a)({},e),{},{id:a.id}):e}))}));case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),alert("error when adding to cart"),console.error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(j.a)(Object(d.a)().mark((function e(t){var r,c;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!v.find((function(e){return Number(e.id)===Number(t.id)}))){e.next=6;break}b.a.delete("https://64382ecff3a0c40814acdc08.mockapi.io/favorites/".concat(t.id)),g((function(e){return e.filter((function(e){return Number(e.id)!==Number(t.id)}))})),e.next=11;break;case 6:return e.next=8,b.a.post("https://64382ecff3a0c40814acdc08.mockapi.io/favorites",t);case 8:r=e.sent,c=r.data,g((function(e){return[].concat(Object(l.a)(e),[c])}));case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),alert("Failed to add to the favorites"),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)(x.Provider,{value:{items:r,cartItems:i,favorites:v,isItemAdded:function(e){return i.some((function(t){return Number(t.parentId)===Number(e)}))},onAddToFavorite:D,onAddToCart:$,setCartOpened:B,setCartItems:m},children:Object(h.jsxs)("div",{className:"wrapper clear",children:[Object(h.jsx)(k,{items:i,onClose:function(){return B(!1)},onRemove:function(e){try{b.a.delete("https://64382ecff3a0c40814acdc08.mockapi.io/cart/".concat(e)),m((function(t){return t.filter((function(t){return Number(t.id)!==Number(e)}))}))}catch(t){alert("error when deleting from cart"),console.error(t)}},opened:P}),Object(h.jsx)(f,{onClickCart:function(){return B(!0)}})," ",Object(h.jsx)(A.a,{path:"/",exact:!0,children:Object(h.jsx)(S,{items:r,cartItems:i,searchValue:y,setSearchValue:C,onChangeSearchInput:function(e){C(e.target.value)},onAddToFavorite:D,onAddToCart:$,isLoading:M})}),Object(h.jsxs)(A.a,{path:"/favorites",exact:!0,children:[Object(h.jsx)(I,{})," "]}),Object(h.jsx)(A.a,{path:"/orders",exact:!0,children:Object(h.jsx)(_,{})})]})})};i.a.createRoot(document.getElementById("root")).render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(s.a,{children:Object(h.jsx)(F,{})})}))}},[[56,1,2]]]);
//# sourceMappingURL=main.14772df2.chunk.js.map