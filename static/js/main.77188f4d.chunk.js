(this["webpackJsonplibrary-react-app"]=this["webpackJsonplibrary-react-app"]||[]).push([[0],{62:function(e,t,a){e.exports=a.p+"static/media/defaultBackground.8ac9c079.svg"},77:function(e,t,a){e.exports=a(89)},82:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(9),r=a.n(o),c=(a(82),a(16)),i=a(31),u=a(146),s=a(133),m=a(135),d=a(49),b=a(130),g=Object(b.a)((function(){return{titleBarStyle:{backgroundColor:"#34315E"}}})),E=function(){var e=g();return l.a.createElement(s.a,{position:"static",className:e.titleBarStyle},l.a.createElement(m.a,null,l.a.createElement(d.a,{variant:"h4"},"Books")))},f=a(136),p=Object(b.a)((function(){return{menuBarStyle:{backgroundColor:"#6159E5"},buttonTextStyle:{color:"white"}}})),k=function(e){var t=e.displayIsFav,a=e.displayIsReading,n=e.displayIsLoaned,o=e.displayAllBooks,r=p();return l.a.createElement(s.a,{position:"static",className:r.menuBarStyle},l.a.createElement(m.a,null,l.a.createElement(f.a,{className:r.buttonTextStyle,onClick:o},"All"),l.a.createElement(f.a,{className:r.buttonTextStyle,onClick:a},"Reading"),l.a.createElement(f.a,{className:r.buttonTextStyle,onClick:t},"Favourites"),l.a.createElement(f.a,{className:r.buttonTextStyle,onClick:n},"Loaned Out")))},y=a(137),v=a(139),h=a(138),O=Object(b.a)({title:{fontSize:14},pos:{marginBottom:12}});var j=function(e){var t=e.bookTitle,a=e.bookAuthor,n=e.bookPages,o=e.isFav,r=e.isLoaned,c=e.isReading,i=e.deleteBook,u=O();return l.a.createElement(y.a,{variant:"outlined"},l.a.createElement(h.a,null,l.a.createElement(d.a,{className:u.title,color:"textSecondary",gutterBottom:!0},a),l.a.createElement(d.a,{variant:"h5",component:"h2"},t),l.a.createElement(d.a,{className:u.pos,color:"textSecondary"},"Pages: ",n),l.a.createElement(d.a,{variant:"body2",component:"p"},"Favourite: ",o?"Yes":"No",l.a.createElement("br",null),"Loaned Out: ",r?"Yes":"No",l.a.createElement("br",null),"Currently Reading: ",c?"Yes":"No")),l.a.createElement(v.a,null,l.a.createElement(f.a,{color:"secondary",variant:"outlined",size:"small",onClick:function(){return i(t)}},"Delete")))},S=a(36),C=a(38),B=a(147),x=a(149),F=a(145),N=a(141),L=a(142),R=a(140),I=a(60),T=a.n(I),A=a(143),P=a(144),w=a(150),z=function(e){var t=e.handleInputDialog,a=Object(n.useState)(!1),o=Object(i.a)(a,2),r=o[0],c=o[1],u=function(){c(!1)},s=Object(n.useState)({title:"",author:"",pages:"",isFav:!1,isLoaned:!1,isReading:!1,key:Math.random()}),m=Object(i.a)(s,2),d=m[0],b=m[1],g=function(e){b(Object(C.a)(Object(C.a)({},d),{},Object(S.a)({},e.target.id,e.target.value)))},E=function(e){b(Object(C.a)(Object(C.a)({},d),{},Object(S.a)({},e.target.name,e.target.checked)))};return l.a.createElement("div",null,l.a.createElement(f.a,{variant:"outlined",color:"primary",onClick:function(){c(!0)}},"Add Book",l.a.createElement(T.a,null)),l.a.createElement(x.a,{open:r,onClose:u,"aria-labelledby":"form-dialog-title"},l.a.createElement(R.a,{id:"form-dialog-title"},"Add Book"),l.a.createElement(N.a,null,l.a.createElement(L.a,null,"Enter book details below:"),l.a.createElement(B.a,{autoFocus:!0,margin:"dense",id:"author",label:"Book Author",type:"text",fullWidth:!0,autoComplete:"off",onChange:g,value:d.author}),l.a.createElement(B.a,{autoFocus:!0,margin:"dense",id:"title",label:"Book Title",type:"text",fullWidth:!0,autoComplete:"off",onChange:g,value:d.title}),l.a.createElement(B.a,{autoFocus:!0,margin:"dense",id:"pages",label:"# Pages",type:"number",inputProps:{inputmode:"numeric",pattern:"[0-9]*"},fullWidth:!0,autoComplete:"off",onChange:g,value:d.pages}),l.a.createElement(A.a,{row:!0},l.a.createElement(P.a,{control:l.a.createElement(w.a,{checked:d.isFav,onChange:E,name:"isFav",color:"primary",size:"small"}),label:"Favourite:",labelPlacement:"start"}),l.a.createElement(P.a,{control:l.a.createElement(w.a,{checked:d.isLoaned,onChange:E,name:"isLoaned",color:"primary",size:"small"}),label:"Loaned Out:",labelPlacement:"start"}),l.a.createElement(P.a,{control:l.a.createElement(w.a,{checked:d.isReading,onChange:E,name:"isReading",color:"primary",size:"small"}),label:"Currently Reading:",labelPlacement:"start"}))),l.a.createElement(F.a,null,l.a.createElement(f.a,{onClick:u,color:"primary"},"Cancel"),l.a.createElement(f.a,{onClick:function(){""===d.title||""===d.author||""===d.pages?alert("Please fill out all fields in the form"):(u(),t(d),b({title:"",author:"",pages:"",isFav:!1,isLoaned:!1,isReading:!1,key:Math.random()}))},color:"primary"},"Add Book"))))},M=a(61),D=a(62),J=a.n(D);function W(){var e=Object(M.a)(["\n  height: 350px;\n  @media (max-width: 688px) {\n    height: 250px;\n  }\n"]);return W=function(){return e},e}var Y=a(63).a.img(W()),H=function(){return l.a.createElement(u.a,{container:!0,direction:"column",spacing:0,alignItems:"center",justify:"center",style:{minHeight:"70vh"}},l.a.createElement(d.a,null,"Start to add books to your library."),l.a.createElement(Y,{src:J.a,alt:"Default background."}))},q=Object(b.a)({topMargin:{marginTop:12},buttonText:{color:"#6159E5"}}),G=function(e){var t=e.books,a=e.setBooks,n=e.bookStorage,o=e.setBookStorage,r=q(),i=function(e){var l=Object(c.a)(n).filter((function(t){return t.title!==e?t:null}));o(l);var r=Object(c.a)(t).filter((function(t){return t.title!==e?t:null}));a(r)},s=t.map((function(e){return l.a.createElement(u.a,{item:!0,xs:12,sm:6,md:4,key:e.key},l.a.createElement(j,{bookTitle:e.title,bookAuthor:e.author,bookPages:e.pages,isFav:e.isFav,isLoaned:e.isLoaned,isReading:e.isReading,deleteBook:i}))}));return l.a.createElement(u.a,{container:!0,spacing:2,className:r.topMargin},l.a.createElement(u.a,{container:!0,justify:"center"},l.a.createElement(z,{handleInputDialog:function(e){a([].concat(Object(c.a)(t),[e])),o([].concat(Object(c.a)(n),[e]))}})),0===t.length?l.a.createElement(H,null):null,s)};var K=function(){var e=Object(n.useState)((function(){var e=JSON.parse(localStorage.getItem("books"));return null!==e?e:[]})),t=Object(i.a)(e,2),a=t[0],o=t[1];Object(n.useEffect)((function(){localStorage.setItem("books",JSON.stringify(a))}),[a]);var r=Object(n.useState)(a),s=Object(i.a)(r,2),m=s[0],d=s[1];return l.a.createElement(u.a,{container:!0,direction:"column"},l.a.createElement(u.a,{item:!0},l.a.createElement(E,null)),l.a.createElement(u.a,{item:!0,container:!0},l.a.createElement(k,{displayIsFav:function(){var e=Object(c.a)(a).filter((function(e){return e.isFav?e:null}));d(e)},displayIsLoaned:function(){var e=Object(c.a)(a).filter((function(e){return e.isLoaned?e:null}));d(e)},displayIsReading:function(){var e=Object(c.a)(a).filter((function(e){return e.isReading?e:null}));d(e)},displayAllBooks:function(){d(a)}})),l.a.createElement(u.a,{item:!0,container:!0},l.a.createElement(u.a,{item:!0,xs:!1,sm:2}),l.a.createElement(u.a,{item:!0,xs:12,sm:8},l.a.createElement(G,{books:m,setBooks:d,bookStorage:a,setBookStorage:o})),l.a.createElement(u.a,{item:!0,xs:!1,sm:2})))};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(K,null)),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.77188f4d.chunk.js.map