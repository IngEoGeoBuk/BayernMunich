(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n(1),r=n.n(c),s=n(8),a=n.n(s),j=(n(91),n(10)),d=n(11),l=n(35);function o(){var e=Object(j.a)(["\n    display: none;\n    text-align: center;\n    justify-content: center;\n    @media screen and (max-width: 600px) {\n        display: flex;\n    }\n  "]);return o=function(){return e},e}function b(){var e=Object(j.a)(["\n    @media screen and (max-width: 600px) {\n        display: none;\n    }\n  "]);return b=function(){return e},e}function x(){var e=Object(j.a)(["\n  border-radius: 4px;\n  background: rgba(220, 5, 44);\n  padding: 5px 15px;\n  color: white;\n  border: none;\n  outline: none;\n  corsor: pointer;\n  transition: all 0.2s ease-in-out;\n  text-decoration: none;\n\n  // 2nd Nav\n  // margin-left: 5vw;\n\n  &:hover {\n    transition: all 0.2s ease-in-out;\n    color: lightgray;\n  }\n"]);return x=function(){return e},e}function h(){var e=Object(j.a)(["\n  display: flex;\n  align-items: center;\n  margin-right: 5px;\n\n  @media screen and (max-width: 1070px) {\n    display: none;\n  }\n"]);return h=function(){return e},e}function O(){var e=Object(j.a)(["\n  display: flex;\n  align-items: left;\n  // flex-wrap: wrap;\n  flex-direction: row;\n  color: lightgray;\n  font-size: 13px;\n\n  @media screen and (max-width: 1070px) {\n    display: none;\n  }\n"]);return O=function(){return e},e}function p(){var e=Object(j.a)(["\n  display: flex;\n  align-items: left;\n\n  flex-wrap: wrap;\n  flex-direction: column;\n\n  @media screen and (max-width: 1070px) {\n    display: none;\n  }\n"]);return p=function(){return e},e}function u(){var e=Object(j.a)(["\n  display: none;\n\n  @media screen and (max-width: 1070px) {\n    display: flex;\n    position: relative;\n    top: 0;\n    right: 0;\n    transform: translate(-10%, 40%);\n    font-size: 1rem;\n    cursor: pointer;\n    color: lightgray\n  }\n"]);return u=function(){return e},e}function v(){var e=Object(j.a)(["\n  display: none;\n\n  @media screen and (max-width: 1070px) {\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    transform: translate(-30%, 70%);\n    font-size: 1.8rem;\n    cursor: pointer;\n  }\n"]);return v=function(){return e},e}function m(){var e=Object(j.a)(["\n  color: #fff;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  padding: 0 1rem;\n  height: 100%;\n  cursor: pointer;\n\n  &.active {\n    color: lightGray;\n  }\n"]);return m=function(){return e},e}function y(){var e=Object(j.a)(["\n  background: rgba(220, 5, 44);\n  height: 100px;\n  display: flex;\n  padding: 0.5rem calc((100vw - 1400px) / 2);\n  padding: 5px\n  z-index: 10;\n"]);return y=function(){return e},e}var f=d.a.nav(y()),g=Object(d.a)(l.b)(m()),w=d.a.div(v()),C=d.a.div(u()),F=d.a.div(p()),k=d.a.div(O()),B=(d.a.nav(h()),Object(d.a)(l.b)(x())),M=d.a.div(b()),E=d.a.div(o()),I=n(51),L=n(141),S=n(25),T=n(46),A=n(134),D=n(135),N=n(149),K=n(140),W=n(109),R=n(107),G=n(137),P=n(138),U=n(139),Y=n(67),z=n.n(Y),J=n(150),Q=n(66),H=n.n(Q),q=n(13),Z=Object(A.a)((function(e){return{appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1}}})),X=r.a.forwardRef((function(e,t){return Object(i.jsx)(J.a,Object(T.a)({direction:"down",ref:t},e))}));function V(){var e=Z(),t=r.a.useState(!1),n=Object(S.a)(t,2),c=n[0],s=n[1],a=function(){s(!1)},j=Object(q.f)();var d={padding:"5px 0px",blockSize:"20px",verticalAlign:"center"};return Object(i.jsxs)("div",{children:[Object(i.jsx)(D.a,{variant:"outlined",color:"red",onClick:function(){s(!0)},style:{border:"1px solid white",backgroundColor:"white"},children:Object(i.jsx)(H.a,{style:{color:"rgba(220, 5, 44)"}})}),Object(i.jsxs)(N.a,{fullScreen:!0,open:c,onClose:a,TransitionComponent:X,children:[Object(i.jsx)(G.a,{className:e.appBar,style:{backgroundColor:"rgba(220, 5, 44)"},children:Object(i.jsxs)(P.a,{children:[Object(i.jsx)(I.a,{variant:"h6",className:e.title,children:"Menu"}),Object(i.jsx)(U.a,{edge:"end",color:"rgba(220, 5, 44)",onClick:a,"aria-label":"close",children:Object(i.jsx)(z.a,{style:{color:"white"}})})]})}),Object(i.jsxs)(R.a,{children:[Object(i.jsx)(W.a,{button:!0,onClick:function(){j.push("/news"),a()},children:Object(i.jsx)(K.a,{primary:"News",style:d})}),Object(i.jsx)(L.a,{}),Object(i.jsx)(W.a,{button:!0,onClick:function(){j.push("/tv"),a()},children:Object(i.jsx)(K.a,{primary:"FC Bayern.tv",style:d})}),Object(i.jsx)(L.a,{}),Object(i.jsx)(W.a,{button:!0,onClick:function(){j.push("/teams"),a()},children:Object(i.jsx)(K.a,{primary:"Teams",style:d})}),Object(i.jsx)(L.a,{}),Object(i.jsx)(W.a,{button:!0,onClick:function(){j.push("/matches"),a()},children:Object(i.jsx)(K.a,{primary:"Matches",style:d})}),Object(i.jsx)(L.a,{}),Object(i.jsx)(W.a,{button:!0,onClick:function(){j.push("/club"),a()},children:Object(i.jsx)(K.a,{primary:"Club",style:d})}),Object(i.jsx)(L.a,{}),Object(i.jsx)(W.a,{button:!0,onClick:function(){j.push("/fans"),a()},children:Object(i.jsx)(K.a,{primary:"Fans",style:d})}),Object(i.jsx)(L.a,{}),Object(i.jsx)(W.a,{button:!0,onClick:function(){j.push("/login"),a()},children:Object(i.jsx)(K.a,{primary:"Log in",style:d})}),Object(i.jsx)(L.a,{})]})]})]})}var $=n(144),_=n(143),ee=n(105),te=n(142),ne=n(146),ie=n(145),ce=n(68),re=n.n(ce),se=Object(A.a)((function(e){return{root:{display:"flex"},paper:{marginRight:e.spacing(2)}}}));function ae(){var e=se(),t=r.a.useState(!1),n=Object(S.a)(t,2),c=n[0],s=n[1],a=r.a.useRef(null),j=function(e){a.current&&a.current.contains(e.target)||s(!1)};function d(e){"Tab"===e.key&&(e.preventDefault(),s(!1))}var l=r.a.useRef(c);return r.a.useEffect((function(){!0===l.current&&!1===c&&a.current.focus(),l.current=c}),[c]),Object(i.jsx)("div",{className:e.root,children:Object(i.jsxs)("div",{children:[Object(i.jsxs)(D.a,{ref:a,"aria-controls":c?"menu-list-grow":void 0,"aria-haspopup":"true",onClick:function(){s((function(e){return!e}))},children:[Object(i.jsx)(I.a,{variant:"subtitle1",style:{color:"white"},children:"EN"}),Object(i.jsx)(re.a,{style:{color:"white"}})]}),Object(i.jsx)(te.a,{open:c,anchorEl:a.current,role:void 0,transition:!0,disablePortal:!0,children:function(e){var t=e.TransitionProps,n=e.placement;return Object(i.jsx)(_.a,Object(T.a)(Object(T.a)({},t),{},{style:{transformOrigin:"bottom"===n?"center top":"center bottom"},children:Object(i.jsx)(ee.a,{children:Object(i.jsx)($.a,{onClickAway:j,children:Object(i.jsxs)(ie.a,{autoFocusItem:c,id:"menu-list-grow",onKeyDown:d,children:[Object(i.jsx)(ne.a,{onClick:j,children:"DE - Deutsch"}),Object(i.jsx)(ne.a,{onClick:j,children:"EN - English"}),Object(i.jsx)(ne.a,{onClick:j,children:"US - English"}),Object(i.jsx)(ne.a,{onClick:j,children:"ES - Espa\xf1ol"}),Object(i.jsx)(ne.a,{onClick:j,children:"KR - \ud55c\uad6d\uc5b4"}),Object(i.jsx)(ne.a,{onClick:j,children:"JP - \u65e5\u672c\u8a9e"}),Object(i.jsx)(ne.a,{onClick:j,children:"RU - P\u0443\u0441\u0441\u043a\u0438\u0439"}),Object(i.jsx)(ne.a,{onClick:j,children:"AR - \u0627\u0644\u0639\u0631\u0628\u064a\u0629"}),Object(i.jsx)(ne.a,{onClick:j,children:"BY - Bairisch"})]})})})}))}})]})})}var je=function(){return Object(i.jsx)("div",{children:Object(i.jsxs)(f,{children:[Object(i.jsxs)(g,{to:"/BayernMunich",style:{paddingLeft:"10px",paddingRight:"40px"},children:[Object(i.jsx)("img",{src:"https://i.esdrop.com/d/8gqkv7Kpzr.png",width:"80em",height:"80em"}),Object(i.jsx)(M,{children:Object(i.jsxs)("div",{style:{color:"white",paddingLeft:"20px"},children:[Object(i.jsx)(I.a,{variant:"subtitle2",children:"OFFICIAL WEBSITE OF"}),Object(i.jsx)(I.a,{variant:"h6",children:"FC BAYERN MUNICH"})]})}),Object(i.jsx)(E,{children:Object(i.jsx)("div",{style:{color:"white",paddingLeft:"10px"},children:Object(i.jsx)(I.a,{variant:"h6",children:"FC BAYERN"})})})]}),Object(i.jsx)(w,{children:Object(i.jsx)(V,{})}),Object(i.jsx)(M,{children:Object(i.jsxs)(C,{children:[Object(i.jsx)("div",{style:{padding:"0px 10px",marginTop:"20px"},children:"presented by"}),Object(i.jsx)("div",{style:{paddingTop:"10px"},children:Object(i.jsx)("img",{src:"https://i.esdrop.com/d/m2gOCQT7EE.svg",width:"40px",height:"40px"})})]})}),Object(i.jsxs)(F,{children:[Object(i.jsxs)(k,{children:[Object(i.jsx)("div",{style:{padding:"13px 10px",color:"lightgray"},children:"presented by"}),Object(i.jsx)("div",{children:Object(i.jsx)("img",{src:"https://i.esdrop.com/d/m2gOCQT7EE.svg",width:"50px",height:"50px"})})]}),Object(i.jsxs)("div",{style:{display:"flex"},children:[Object(i.jsx)(g,{to:"/news",activeStyle:!0,children:Object(i.jsx)(I.a,{variant:"subtitle1",children:"News"})}),Object(i.jsx)(g,{to:"/tv",activeStyle:!0,children:Object(i.jsx)(I.a,{variant:"subtitle1",children:"FC Bayern.tv"})}),Object(i.jsx)(g,{to:"/teams",activeStyle:!0,children:Object(i.jsx)(I.a,{variant:"subtitle1",children:"Teams"})}),Object(i.jsx)(g,{to:"/matches",activeStyle:!0,children:Object(i.jsx)(I.a,{variant:"subtitle1",children:"Matches"})}),Object(i.jsx)(g,{to:"/club",activeStyle:!0,children:Object(i.jsx)(I.a,{variant:"subtitle1",children:"Club"})}),Object(i.jsx)(g,{to:"/fans",activeStyle:!0,children:Object(i.jsx)(I.a,{variant:"subtitle1",children:"Fans"})}),Object(i.jsx)("div",{style:{marginLeft:"5vw"},children:Object(i.jsx)(ae,{})}),Object(i.jsx)(L.a,{orientation:"vertical",flexItem:!0,style:{backgroundColor:"white"}}),Object(i.jsx)(B,{to:"/login",children:Object(i.jsx)(I.a,{variant:"subtitle1",children:"Log in"})})]})]})]})})},de=n(147);function le(){var e=Object(j.a)(["\n        display: none;\n        @media screen and (max-width: 600px) {\n            display: flex;\n        }\n    "]);return le=function(){return e},e}function oe(){var e=Object(j.a)(["\n        @media screen and (max-width: 600px) {\n            display: none;\n        }\n    "]);return oe=function(){return e},e}var be=function(){var e=d.a.div(oe()),t=d.a.div(le());return Object(i.jsxs)("div",{children:[Object(i.jsx)(e,{children:Object(i.jsx)("div",{style:{backgroundColor:"#F8F8FF",textAlign:"center",padding:"10px"},children:Object(i.jsx)("a",{href:"/BayernMunich",children:Object(i.jsx)("img",{src:"https://i.esdrop.com/d/OzMCzhaSQb.png",width:"100%"})})})}),Object(i.jsx)(t,{children:Object(i.jsx)("div",{style:{backgroundColor:"#F8F8FF",textAlign:"center",padding:"5px",verticalAlign:"center"},children:Object(i.jsx)("a",{href:"/BayernMunich",children:Object(i.jsx)("img",{src:"https://i.esdrop.com/d/h4hZguUTpf.png",width:"100%"})})})})]})},xe=n(148);function he(){var e=Object(j.a)(["\n        display: none;\n        padding: 0;\n        @media screen and (max-width: 600px) {\n            display: grid;\n        }\n    "]);return he=function(){return e},e}function Oe(){var e=Object(j.a)(["\n        @media screen and (max-width: 600px) {\n            display: none;\n        }\n    "]);return Oe=function(){return e},e}var pe=function(){var e=d.a.div(Oe()),t=d.a.div(he()),n={padding:"20px 10px",margin:"0px"};return Object(i.jsxs)("div",{style:{backgroundColor:"#F8F8FF",padding:"0 10vh",width:"100%"},children:[Object(i.jsx)(e,{children:Object(i.jsxs)(de.a,{container:!0,spacing:1,children:[Object(i.jsx)(de.a,{item:!0,xs:12,md:4,children:Object(i.jsx)(xe.a,{p:0,style:n,children:Object(i.jsx)("a",{href:"/BayernMunich",children:Object(i.jsx)("img",{src:"https://i.esdrop.com/d/Y12SkSvZKO.gif",width:"100%"})})})}),Object(i.jsx)(de.a,{item:!0,xs:12,md:4,children:Object(i.jsx)(xe.a,{p:0,style:n,children:Object(i.jsx)("a",{href:"/BayernMunich",children:Object(i.jsx)("img",{src:"https://i.esdrop.com/d/vjaxXBp2lZ.jpg",width:"100%"})})})}),Object(i.jsx)(de.a,{item:!0,xs:12,md:4,children:Object(i.jsx)(xe.a,{p:0,style:n,children:Object(i.jsx)("a",{href:"/BayernMunich",children:Object(i.jsx)("img",{src:"https://i.esdrop.com/d/IeipP46AYG.jpg",width:"100%"})})})})]})}),Object(i.jsxs)(t,{children:[Object(i.jsx)("div",{sytle:{width:"100%"},children:Object(i.jsx)("img",{src:"https://i.esdrop.com/d/Y12SkSvZKO.gif",width:"100%"})}),Object(i.jsx)("div",{children:Object(i.jsx)("img",{src:"https://i.esdrop.com/d/vjaxXBp2lZ.jpg",width:"100%"})}),Object(i.jsx)("div",{children:Object(i.jsx)("img",{src:"https://i.esdrop.com/d/IeipP46AYG.jpg",width:"100%"})})]})]})};var ue=function(){var e=Object(c.useState)(!1),t=Object(S.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(!1),a=Object(S.a)(s,2),j=a[0],d=a[1],l=Object(c.useState)(!1),o=Object(S.a)(l,2),b=o[0],x=o[1],h={color:"rgb(162, 47, 73)"},O={color:"rgb(30, 71, 125)"},p={opacity:"0.75"},u={opacity:"1"};return Object(i.jsxs)("div",{style:{width:"100%"},children:[Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsxs)(xe.a,{display:"flex",flexDirection:"row",children:[Object(i.jsx)("div",{style:{color:"rgb(162, 47, 73)",marginLeft:"20px",paddingTop:"10px"},children:Object(i.jsx)(I.a,{variant:"h4",children:"NEWS"})}),Object(i.jsx)("div",{style:{width:"100%",color:"rgb(162, 47, 73)",borderBottom:"solid 2px rgb(162, 47, 73)"}})]}),Object(i.jsxs)(de.a,{container:!0,spacing:0,children:[Object(i.jsx)(de.a,{item:!0,xs:12,md:4,children:Object(i.jsxs)(xe.a,{p:0,style:{padding:"20px"},children:[Object(i.jsx)("a",{href:"/BayernMunich",children:Object(i.jsx)("img",{src:"https://i.esdrop.com/d/Kr9WK5Ceao.webp",width:"100%",style:n?p:u,onMouseEnter:function(){return r(!0)},onMouseLeave:function(){return r(!1)}})}),Object(i.jsx)("div",{style:h,children:Object(i.jsx)(I.a,{variant:"subtitle1",children:"WATCH AGAIN"})}),Object(i.jsx)("div",{style:n?h:O,onMouseEnter:function(){return x(!0)},onMouseLeave:function(){return x(!1)},children:Object(i.jsx)(I.a,{variant:"subtitle2",children:"Hansi Flick's press conference before the Bundesliga game at Borussia Dortmund"})}),Object(i.jsx)("div",{style:{color:"gray"},children:Object(i.jsx)(I.a,{variant:"subtitle2",children:"On Friday, Hansi Flick held his pre-match press conference ahead of Saturday's Bundesliga Klassiker away at Borussia Dortmund."})})]})}),Object(i.jsx)(de.a,{item:!0,xs:12,md:4,children:Object(i.jsxs)(xe.a,{p:0,style:{padding:"20px"},children:[Object(i.jsx)("a",{href:"/BayernMunich",children:Object(i.jsx)("img",{src:"https://i.esdrop.com/d/RQH1miIgI4.webp",width:"100%",style:j?p:u,onMouseEnter:function(){return d(!0)},onMouseLeave:function(){return d(!1)}})}),Object(i.jsx)("div",{style:h,children:Object(i.jsx)(I.a,{variant:"subtitle1",children:"FACTS AND FIGURES"})}),Object(i.jsx)("div",{style:j?h:O,onMouseEnter:function(){return d(!0)},onMouseLeave:function(){return d(!1)},children:Object(i.jsx)(I.a,{variant:"subtitle2",children:"7 facts on the top-of-the-table clash at Dortmund"})}),Object(i.jsx)("div",{style:{color:"gray"},children:Object(i.jsx)(I.a,{variant:"subtitle2",children:"Brush up on the fact and stats ahead of the Bundesliga Klassiker between Borussia Dortmund and FC Bayern."})})]})}),Object(i.jsx)(de.a,{item:!0,xs:12,md:4,children:Object(i.jsxs)(xe.a,{p:0,style:{padding:"20px"},children:[Object(i.jsx)("a",{href:"/BayernMunich",children:Object(i.jsx)("img",{src:"https://i.esdrop.com/d/oGTtZ8l4kP.webp",width:"100%",style:b?p:u,onMouseEnter:function(){return x(!0)},onMouseLeave:function(){return x(!1)}})}),Object(i.jsx)("div",{style:h,children:Object(i.jsx)(I.a,{variant:"subtitle1",children:"DOUBLE MATCH-WINNER"})}),Object(i.jsx)("div",{style:b?h:O,onMouseEnter:function(){return x(!0)},onMouseLeave:function(){return x(!1)},children:Object(i.jsx)(I.a,{variant:"subtitle2",children:"'Mentality monster' Kimmich in top form for next Klassiker"})}),Object(i.jsx)("div",{style:{color:"gray"},children:Object(i.jsx)(I.a,{variant:"subtitle2",children:"Joshua Kimmich has scored the winning goal in the last two meetings with Borussia Dortmund, and arrives in top form once again."})})]})})]})]})};function ve(){var e=Object(j.a)(["\n    display: none;\n\n    @media screen and (max-width: 600px) {\n        display: flex;\n    }\n\n"]);return ve=function(){return e},e}function me(){var e=Object(j.a)(["\n    @media screen and (max-width: 600px) {\n        display: none;\n    }\n"]);return me=function(){return e},e}var ye=d.a.div(me()),fe=d.a.div(ve());var ge=function(){var e={color:"rgb(162, 47, 73)",textAlign:"center"},t={color:"rgb(30, 71, 125)",textAlign:"center"},n={padding:"0 5px"};return Object(i.jsxs)("div",{style:{width:"100%"},children:[Object(i.jsxs)(xe.a,{display:"flex",flexDirection:"row",p:0,m:0,children:[Object(i.jsx)("div",{style:{color:"rgb(162, 47, 73)",paddingLeft:"20px"},children:Object(i.jsx)(I.a,{variant:"h4",children:"NEW"})}),Object(i.jsx)("div",{style:{color:"rgb(162, 47, 73)",paddingLeft:"10px"},children:Object(i.jsx)(I.a,{variant:"h4",children:"PRODUCTS"})}),Object(i.jsx)("div",{style:{width:"100%",color:"rgb(162, 47, 73)",borderBottom:"solid 2px rgb(162, 47, 73)"}})]}),Object(i.jsx)("br",{}),Object(i.jsx)("div",{style:{color:"rgb(30, 71, 125)",paddingTop:"20px",paddingLeft:"40px"},children:Object(i.jsx)(I.a,{variant:"h4",children:"Honours"})}),Object(i.jsx)("br",{}),Object(i.jsxs)(ye,{children:[Object(i.jsxs)(de.a,{container:!0,spacing:0,children:[Object(i.jsx)(de.a,{item:!0,xs:12,lg:6,children:Object(i.jsxs)(xe.a,{display:"flex",flexDirection:"row",p:0,m:"auto",justifyContent:"center",children:[Object(i.jsxs)("div",{style:n,children:[Object(i.jsx)("img",{src:"https://i.esdrop.com/d/UDeElYTfJK.webp",width:"100%"}),Object(i.jsx)(I.a,{variant:"h4",style:e,children:"30"}),Object(i.jsx)(I.a,{variant:"subtitle2",style:t,children:"German Championship"})]}),Object(i.jsx)(L.a,{orientation:"vertical",flexItem:!0}),Object(i.jsxs)("div",{style:n,children:[Object(i.jsx)("img",{src:"https://i.esdrop.com/d/55WybIj1oS.webp",width:"100%"}),Object(i.jsx)(I.a,{variant:"h4",style:e,children:"20"}),Object(i.jsx)(I.a,{variant:"subtitle2",style:t,children:"DFB German Cup"})]}),Object(i.jsx)(L.a,{orientation:"vertical",flexItem:!0}),Object(i.jsxs)("div",{style:n,children:[Object(i.jsx)("img",{src:"https://i.esdrop.com/d/r2mmYcN3k6.webp",width:"100%"}),Object(i.jsx)(I.a,{variant:"h4",style:e,children:"9"}),Object(i.jsx)(I.a,{variant:"subtitle2",style:t,children:"German Supercup"})]}),Object(i.jsx)(L.a,{orientation:"vertical",flexItem:!0}),Object(i.jsxs)("div",{style:n,children:[Object(i.jsx)("img",{src:"https://i.esdrop.com/d/LAu00m3TQL.webp",width:"100%"}),Object(i.jsx)(I.a,{variant:"h4",style:e,children:"6"}),Object(i.jsx)(I.a,{variant:"subtitle2",style:t,children:"League Cup"})]}),Object(i.jsx)(L.a,{orientation:"vertical",flexItem:!0}),Object(i.jsxs)("div",{style:n,children:[Object(i.jsx)("img",{src:"https://i.esdrop.com/d/ibKToOFmvy.webp",width:"100%"}),Object(i.jsx)(I.a,{variant:"h4",style:e,children:"6"}),Object(i.jsx)(I.a,{variant:"subtitle2",style:t,children:"Champions League"})]})]})}),Object(i.jsx)(de.a,{item:!0,xs:12,lg:6,children:Object(i.jsxs)(xe.a,{display:"flex",flexDirection:"row",p:0,m:"auto",justifyContent:"center",children:[Object(i.jsxs)("div",{style:n,children:[Object(i.jsx)("img",{src:"https://i.esdrop.com/d/duCrwqsqzW.webp",width:"100%"}),Object(i.jsx)(I.a,{variant:"h4",style:e,children:"1"}),Object(i.jsx)(I.a,{variant:"subtitle2",style:t,children:"UEFA Cup"})]}),Object(i.jsx)(L.a,{orientation:"vertical",flexItem:!0}),Object(i.jsxs)("div",{style:n,children:[Object(i.jsx)("img",{src:"https://i.esdrop.com/d/fTfapT9nvm.webp",width:"100%"}),Object(i.jsx)(I.a,{variant:"h4",style:e,children:"1"}),Object(i.jsx)(I.a,{variant:"subtitle2",style:t,children:"UEFA Cup Winners' Cup"})]}),Object(i.jsx)(L.a,{orientation:"vertical",flexItem:!0}),Object(i.jsxs)("div",{style:n,children:[Object(i.jsx)("img",{src:"https://i.esdrop.com/d/FWQVR0zBXv.webp",width:"100%"}),Object(i.jsx)(I.a,{variant:"h4",style:e,children:"2"}),Object(i.jsx)(I.a,{variant:"subtitle2",style:t,children:"Intercontinental Cup"})]}),Object(i.jsx)(L.a,{orientation:"vertical",flexItem:!0}),Object(i.jsxs)("div",{style:n,children:[Object(i.jsx)("img",{src:"https://i.esdrop.com/d/DY5qJvYdbi.webp",width:"100%"}),Object(i.jsx)(I.a,{variant:"h4",style:e,children:"1"}),Object(i.jsx)(I.a,{variant:"subtitle2",style:t,children:"FIFA Club World Cup"})]}),Object(i.jsx)(L.a,{orientation:"vertical",flexItem:!0}),Object(i.jsxs)("div",{style:n,children:[Object(i.jsx)("img",{src:"https://i.esdrop.com/d/2J0ncCdL9D.webp",width:"100%"}),Object(i.jsx)(I.a,{variant:"h4",style:e,children:"2"}),Object(i.jsx)(I.a,{variant:"subtitle2",style:t,children:"UEFA Supercup"})]})]})})]}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{})]}),Object(i.jsx)(fe,{children:Object(i.jsxs)(de.a,{container:!0,spacing:0,children:[Object(i.jsx)(de.a,{item:!0,xs:12,children:Object(i.jsxs)(xe.a,{display:"flex",flexDirection:"row",p:0,m:"auto",justifyContent:"center",children:[Object(i.jsxs)("div",{style:n,children:[Object(i.jsx)("img",{src:"https://i.esdrop.com/d/UDeElYTfJK.webp",width:"100%"}),Object(i.jsx)(I.a,{variant:"h4",style:e,children:"30"}),Object(i.jsx)(I.a,{variant:"subtitle2",style:t,children:"German Championship"})]}),Object(i.jsx)(L.a,{orientation:"vertical",flexItem:!0}),Object(i.jsxs)("div",{style:n,children:[Object(i.jsx)("img",{src:"https://i.esdrop.com/d/55WybIj1oS.webp",width:"100%"}),Object(i.jsx)(I.a,{variant:"h4",style:e,children:"20"}),Object(i.jsx)(I.a,{variant:"subtitle2",style:t,children:"DFB German Cup"})]}),Object(i.jsx)(L.a,{orientation:"vertical",flexItem:!0}),Object(i.jsxs)("div",{style:n,children:[Object(i.jsx)("img",{src:"https://i.esdrop.com/d/r2mmYcN3k6.webp",width:"100%"}),Object(i.jsx)(I.a,{variant:"h4",style:e,children:"9"}),Object(i.jsx)(I.a,{variant:"subtitle2",style:t,children:"German Supercup"})]})]})}),Object(i.jsx)(de.a,{item:!0,xs:12,children:Object(i.jsxs)(xe.a,{display:"flex",flexDirection:"row",p:0,m:"auto",justifyContent:"center",children:[Object(i.jsxs)("div",{style:n,children:[Object(i.jsx)("img",{src:"https://i.esdrop.com/d/LAu00m3TQL.webp",width:"100%"}),Object(i.jsx)(I.a,{variant:"h4",style:e,children:"6"}),Object(i.jsx)(I.a,{variant:"subtitle2",style:t,children:"League Cup"})]}),Object(i.jsx)(L.a,{orientation:"vertical",flexItem:!0}),Object(i.jsxs)("div",{style:n,children:[Object(i.jsx)("img",{src:"https://i.esdrop.com/d/ibKToOFmvy.webp",width:"100%"}),Object(i.jsx)(I.a,{variant:"h4",style:e,children:"6"}),Object(i.jsx)(I.a,{variant:"subtitle2",style:t,children:"Champions League"})]}),Object(i.jsx)(L.a,{orientation:"vertical",flexItem:!0}),Object(i.jsxs)("div",{style:n,children:[Object(i.jsx)("img",{src:"https://i.esdrop.com/d/duCrwqsqzW.webp",width:"100%"}),Object(i.jsx)(I.a,{variant:"h4",style:e,children:"1"}),Object(i.jsx)(I.a,{variant:"subtitle2",style:t,children:"UEFA Cup"})]})]})}),Object(i.jsx)(de.a,{item:!0,xs:12,children:Object(i.jsxs)(xe.a,{display:"flex",flexDirection:"row",p:0,m:"auto",justifyContent:"center",children:[Object(i.jsxs)("div",{style:n,children:[Object(i.jsx)("img",{src:"https://i.esdrop.com/d/FWQVR0zBXv.webp",width:"100%"}),Object(i.jsx)(I.a,{variant:"h4",style:e,children:"2"}),Object(i.jsx)(I.a,{variant:"subtitle2",style:t,children:"Intercontinental Cup"})]}),Object(i.jsx)(L.a,{orientation:"vertical",flexItem:!0}),Object(i.jsxs)("div",{style:n,children:[Object(i.jsx)("img",{src:"https://i.esdrop.com/d/DY5qJvYdbi.webp",width:"100%"}),Object(i.jsx)(I.a,{variant:"h4",style:e,children:"1"}),Object(i.jsx)(I.a,{variant:"subtitle2",style:t,children:"FIFA Club World Cup"})]}),Object(i.jsx)(L.a,{orientation:"vertical",flexItem:!0}),Object(i.jsxs)("div",{style:n,children:[Object(i.jsx)("img",{src:"https://i.esdrop.com/d/2J0ncCdL9D.webp",width:"100%"}),Object(i.jsx)(I.a,{variant:"h4",style:e,children:"2"}),Object(i.jsx)(I.a,{variant:"subtitle2",style:t,children:"UEFA Supercup"})]})]})})]})})]})};var we=function(e){var t=e.src;return Object(i.jsx)("img",{src:t,alt:"slide-img",style:{width:"100%",height:"auto"}})},Ce=(n(98),n(70)),Fe=n.n(Ce),ke=n(71),Be=n.n(ke);var Me=function(){var e=[Object(i.jsx)(we,{src:"https://i.esdrop.com/d/AQLsEZuIlB.JPG"}),Object(i.jsx)(we,{src:"https://i.esdrop.com/d/RFpbHdpPY8.JPG"}),Object(i.jsx)(we,{src:"https://i.esdrop.com/d/ooJFjLe9Q2.JPG"}),Object(i.jsx)(we,{src:"https://i.esdrop.com/d/lNWXWFEk0N.JPG"})],t=Object(c.useState)(0),n=Object(S.a)(t,2),r=n[0],s=n[1];return Object(i.jsxs)("div",{className:"slider",children:[e.map((function(e,t){return Object(i.jsx)("div",{className:"slide",style:{transform:"translateX(".concat(r,"%)")},children:e},t)})),Object(i.jsx)("button",{id:"goLeft",onClick:function(){s(0===r?-100*(e.length-1):r+100)},children:Object(i.jsx)(Fe.a,{style:{color:"white"}})}),Object(i.jsx)("button",{id:"goRight",onClick:function(){r===-100*(e.length-1)?s(0):s(r-100)},children:Object(i.jsx)(Be.a,{style:{color:"white"}})})]})};n(99);var Ee=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("div",{class:"video-container",children:Object(i.jsx)("iframe",{width:"100%",height:"100%",src:"https://www.youtube.com/embed/CKr09b-94kM?controls=0",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})})})};n(100);var Ie=function(){return Object(i.jsxs)("div",{class:"wrapper",style:{zIndex:"-10"},children:[Object(i.jsx)("div",{class:"divimage"}),Object(i.jsxs)("div",{class:"divtext",children:["Bayern Munich wins",Object(i.jsx)("br",{}),"6th Champions League title"]})]})};n(101);function Le(){var e=Object(j.a)(["\n        display: none;\n        text-align: center;\n        justify-content: center;\n        @media screen and (max-width: 600px) {\n            display: flex;\n        }\n    "]);return Le=function(){return e},e}function Se(){var e=Object(j.a)(["\n        @media screen and (max-width: 600px) {\n            display: none;\n        }\n    "]);return Se=function(){return e},e}var Te=function(){var e=d.a.div(Se()),t=d.a.div(Le()),n={padding:"30px"},c={padding:"10px 20px"};return Object(i.jsxs)("div",{style:{justifyContent:"center",textAlign:"center"},children:[Object(i.jsxs)("div",{class:"LogoHalf",children:[Object(i.jsx)(e,{children:Object(i.jsx)("img",{src:"https://i.esdrop.com/d/8gqkv7Kpzr.png",width:"10%"})}),Object(i.jsx)(t,{children:Object(i.jsx)("img",{src:"https://i.esdrop.com/d/8gqkv7Kpzr.png",width:"90rem",height:"90rem"})})]}),Object(i.jsxs)("div",{style:{backgroundColor:"rgba(220, 5, 44)",color:"white"},children:[Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsxs)(I.a,{variant:"h6",children:["PARTNER",Object(i.jsx)("br",{}),Object(i.jsx)("br",{})]}),Object(i.jsx)(e,{children:Object(i.jsxs)(xe.a,{display:"flex",flexDirection:"row",justifyContent:"center",p:0,m:0,children:[Object(i.jsx)(xe.a,{p:0,children:Object(i.jsx)("div",{style:n,children:Object(i.jsx)("a",{href:"/BayernMunich",children:Object(i.jsx)("img",{src:"https://i.esdrop.com/d/B5Qe3xFsyM.png",width:"100px"})})})}),Object(i.jsx)(xe.a,{p:0,children:Object(i.jsx)("div",{style:n,children:Object(i.jsx)("a",{href:"/BayernMunich",children:Object(i.jsx)("img",{src:"https://i.esdrop.com/d/6yxZfr65jA.png",width:"100px"})})})}),Object(i.jsx)(xe.a,{p:0,children:Object(i.jsx)("div",{style:n,children:Object(i.jsx)("a",{href:"/BayernMunich",children:Object(i.jsx)("img",{src:"https://i.esdrop.com/d/1W02FKOiHp.png",width:"100px"})})})}),Object(i.jsx)(xe.a,{p:0,children:Object(i.jsx)("div",{style:n,children:Object(i.jsx)("a",{href:"/BayernMunich",children:Object(i.jsx)("img",{src:"https://i.esdrop.com/d/hg6NTUaDW7.png",width:"100px",style:{paddingTop:"20px"}})})})})]})}),Object(i.jsx)(t,{children:Object(i.jsxs)(de.a,{container:!0,spacing:0,children:[Object(i.jsx)(de.a,{item:!0,xs:12,children:Object(i.jsxs)(xe.a,{display:"flex",flexDirection:"row",p:0,m:"auto",justifyContent:"center",children:[Object(i.jsx)("div",{style:c,children:Object(i.jsx)("a",{href:"/BayernMunich",children:Object(i.jsx)("img",{src:"https://i.esdrop.com/d/B5Qe3xFsyM.png",width:"100px"})})}),Object(i.jsx)("div",{style:c,children:Object(i.jsx)("a",{href:"/BayernMunich",children:Object(i.jsx)("img",{src:"https://i.esdrop.com/d/6yxZfr65jA.png",width:"100px"})})})]})}),Object(i.jsx)(de.a,{item:!0,xs:12,children:Object(i.jsxs)(xe.a,{display:"flex",flexDirection:"row",p:0,m:"auto",justifyContent:"center",children:[Object(i.jsx)("div",{style:c,children:Object(i.jsx)("a",{href:"/BayernMunich",children:Object(i.jsx)("img",{src:"https://i.esdrop.com/d/1W02FKOiHp.png",width:"100px"})})}),Object(i.jsx)("div",{style:c,children:Object(i.jsx)("a",{href:"/BayernMunich",children:Object(i.jsx)("img",{src:"https://i.esdrop.com/d/hg6NTUaDW7.png",width:"100px",style:{paddingTop:"20px"}})})})]})})]})})]})]})};var Ae=function(){return Object(i.jsx)("div",{children:Object(i.jsxs)(de.a,{container:!0,spacing:0,children:[Object(i.jsxs)(de.a,{item:!0,xs:12,children:[Object(i.jsx)("div",{children:Object(i.jsx)(be,{})}),Object(i.jsx)("br",{})]}),Object(i.jsx)(de.a,{item:!0,xs:12,md:6,children:Object(i.jsx)("div",{children:Object(i.jsx)(Ee,{})})}),Object(i.jsx)(de.a,{item:!0,xs:12,md:6,children:Object(i.jsx)("div",{children:Object(i.jsx)(Ie,{})})}),Object(i.jsxs)(de.a,{item:!0,xs:12,children:[Object(i.jsx)("br",{}),Object(i.jsx)("div",{p:0,children:Object(i.jsx)(Me,{})}),Object(i.jsx)("br",{})]}),Object(i.jsx)(pe,{}),Object(i.jsx)(ue,{}),Object(i.jsx)(ge,{}),Object(i.jsx)(de.a,{item:!0,xs:12,children:Object(i.jsx)("div",{p:48,children:Object(i.jsx)(Te,{})})})]})})};var De=function(){return Object(i.jsx)("div",{children:"News"})};var Ne=function(){return Object(i.jsx)("div",{children:"Tv"})};var Ke=function(){return Object(i.jsx)("div",{children:"Teams"})};var We=function(){return Object(i.jsx)("div",{children:"Matches"})};var Re=function(){return Object(i.jsx)("div",{children:"Club"})};var Ge=function(){return Object(i.jsx)("div",{children:"Fans"})};var Pe=function(){return Object(i.jsx)("div",{children:"Login"})};var Ue=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)(l.a,{children:[Object(i.jsx)(je,{}),Object(i.jsxs)(q.c,{children:[Object(i.jsx)(q.a,{path:"/BayernMunich",exact:!0,component:Ae}),Object(i.jsx)(q.a,{path:"/news",exact:!0,component:De}),Object(i.jsx)(q.a,{path:"/tv",exact:!0,component:Ne}),Object(i.jsx)(q.a,{path:"/teams",exact:!0,component:Ke}),Object(i.jsx)(q.a,{path:"/matches",exact:!0,component:We}),Object(i.jsx)(q.a,{path:"/club",exact:!0,component:Re}),Object(i.jsx)(q.a,{path:"/fans",exact:!0,component:Ge}),Object(i.jsx)(q.a,{path:"/login",exact:!0,component:Pe})]})]})})},Ye=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,152)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),i(e),c(e),r(e),s(e)}))};a.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(Ue,{})}),document.getElementById("root")),Ye()},91:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[102,1,2]]]);
//# sourceMappingURL=main.ce4e2b3b.chunk.js.map