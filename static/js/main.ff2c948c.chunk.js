(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(0),r=n.n(i),s=n(8),a=n.n(s),j=(n(91),n(26)),l=n(27),o=n(35);function d(){var e=Object(j.a)(["\n  border-radius: 4px;\n  background: rgba(220, 5, 44);\n  padding: 5px 15px;\n  color: white;\n  border: none;\n  outline: none;\n  corsor: pointer;\n  transition: all 0.2s ease-in-out;\n  text-decoration: none;\n\n  // 2nd Nav\n  // margin-left: 5vw;\n\n  &:hover {\n    transition: all 0.2s ease-in-out;\n    color: lightgray;\n  }\n"]);return d=function(){return e},e}function b(){var e=Object(j.a)(["\n  display: flex;\n  align-items: center;\n  margin-right: 5px;\n\n  @media screen and (max-width: 1070px) {\n    display: none;\n  }\n"]);return b=function(){return e},e}function x(){var e=Object(j.a)(["\n  display: flex;\n  align-items: left;\n  // flex-wrap: wrap;\n  flex-direction: row;\n  color: lightgray;\n  font-size: 13px;\n\n  @media screen and (max-width: 1070px) {\n    display: none;\n  }\n"]);return x=function(){return e},e}function h(){var e=Object(j.a)(["\n  display: flex;\n  align-items: left;\n\n  flex-wrap: wrap;\n  flex-direction: column;\n\n  @media screen and (max-width: 1070px) {\n    display: none;\n  }\n"]);return h=function(){return e},e}function O(){var e=Object(j.a)(["\n  display: none;\n\n  @media screen and (max-width: 1070px) {\n    display: flex;\n    position: relative;\n    top: 0;\n    right: 0;\n    transform: translate(-10%, 40%);\n    font-size: 1rem;\n    cursor: pointer;\n    color: lightgray\n  }\n"]);return O=function(){return e},e}function p(){var e=Object(j.a)(["\n  display: none;\n\n  @media screen and (max-width: 1070px) {\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    transform: translate(-30%, 70%);\n    font-size: 1.8rem;\n    cursor: pointer;\n  }\n"]);return p=function(){return e},e}function u(){var e=Object(j.a)(["\n  color: #fff;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  padding: 0 1rem;\n  height: 100%;\n  cursor: pointer;\n\n  &.active {\n    color: lightGray;\n  }\n"]);return u=function(){return e},e}function v(){var e=Object(j.a)(["\n  background: rgba(220, 5, 44);\n  height: 100px;\n  display: flex;\n  padding: 0.5rem calc((100vw - 1400px) / 2);\n  padding: 5px\n  z-index: 10;\n"]);return v=function(){return e},e}var m=l.a.nav(v()),f=Object(l.a)(o.b)(u()),g=l.a.div(p()),y=l.a.div(O()),w=l.a.div(h()),C=l.a.div(x()),k=(l.a.nav(b()),Object(l.a)(o.b)(d())),F=n(51),B=n(141),M=n(18),E=n(46),L=n(134),S=n(135),T=n(149),I=n(140),N=n(109),A=n(107),D=n(137),R=n(138),K=n(139),P=n(67),W=n.n(P),G=n(150),J=n(66),z=n.n(J),H=n(11),U=Object(L.a)((function(e){return{appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1}}})),Q=r.a.forwardRef((function(e,t){return Object(c.jsx)(G.a,Object(E.a)({direction:"down",ref:t},e))}));function Y(){var e=U(),t=r.a.useState(!1),n=Object(M.a)(t,2),i=n[0],s=n[1],a=function(){s(!1)},j=Object(H.f)();var l={padding:"5px 0px",blockSize:"20px",verticalAlign:"center"};return Object(c.jsxs)("div",{children:[Object(c.jsx)(S.a,{variant:"outlined",color:"red",onClick:function(){s(!0)},style:{border:"1px solid white",backgroundColor:"white"},children:Object(c.jsx)(z.a,{style:{color:"rgba(220, 5, 44)"}})}),Object(c.jsxs)(T.a,{fullScreen:!0,open:i,onClose:a,TransitionComponent:Q,children:[Object(c.jsx)(D.a,{className:e.appBar,style:{backgroundColor:"rgba(220, 5, 44)"},children:Object(c.jsxs)(R.a,{children:[Object(c.jsx)(F.a,{variant:"h6",className:e.title,children:"Menu"}),Object(c.jsx)(K.a,{edge:"end",color:"rgba(220, 5, 44)",onClick:a,"aria-label":"close",children:Object(c.jsx)(W.a,{style:{color:"white"}})})]})}),Object(c.jsxs)(A.a,{children:[Object(c.jsx)(N.a,{button:!0,onClick:function(){j.push("/news"),a()},children:Object(c.jsx)(I.a,{primary:"News",style:l})}),Object(c.jsx)(B.a,{}),Object(c.jsx)(N.a,{button:!0,onClick:function(){j.push("/tv"),a()},children:Object(c.jsx)(I.a,{primary:"FC Bayern.tv",style:l})}),Object(c.jsx)(B.a,{}),Object(c.jsx)(N.a,{button:!0,onClick:function(){j.push("/teams"),a()},children:Object(c.jsx)(I.a,{primary:"Teams",style:l})}),Object(c.jsx)(B.a,{}),Object(c.jsx)(N.a,{button:!0,onClick:function(){j.push("/matches"),a()},children:Object(c.jsx)(I.a,{primary:"Matches",style:l})}),Object(c.jsx)(B.a,{}),Object(c.jsx)(N.a,{button:!0,onClick:function(){j.push("/club"),a()},children:Object(c.jsx)(I.a,{primary:"Club",style:l})}),Object(c.jsx)(B.a,{}),Object(c.jsx)(N.a,{button:!0,onClick:function(){j.push("/fans"),a()},children:Object(c.jsx)(I.a,{primary:"Fans",style:l})}),Object(c.jsx)(B.a,{}),Object(c.jsx)(N.a,{button:!0,onClick:function(){j.push("/login"),a()},children:Object(c.jsx)(I.a,{primary:"Log in",style:l})}),Object(c.jsx)(B.a,{})]})]})]})}var q=n(144),X=n(143),Z=n(105),V=n(142),$=n(146),_=n(145),ee=n(68),te=n.n(ee),ne=Object(L.a)((function(e){return{root:{display:"flex"},paper:{marginRight:e.spacing(2)}}}));function ce(){var e=ne(),t=r.a.useState(!1),n=Object(M.a)(t,2),i=n[0],s=n[1],a=r.a.useRef(null),j=function(e){a.current&&a.current.contains(e.target)||s(!1)};function l(e){"Tab"===e.key&&(e.preventDefault(),s(!1))}var o=r.a.useRef(i);return r.a.useEffect((function(){!0===o.current&&!1===i&&a.current.focus(),o.current=i}),[i]),Object(c.jsx)("div",{className:e.root,children:Object(c.jsxs)("div",{children:[Object(c.jsxs)(S.a,{ref:a,"aria-controls":i?"menu-list-grow":void 0,"aria-haspopup":"true",onClick:function(){s((function(e){return!e}))},children:[Object(c.jsx)(F.a,{variant:"subtitle1",style:{color:"white"},children:"EN"}),Object(c.jsx)(te.a,{style:{color:"white"}})]}),Object(c.jsx)(V.a,{open:i,anchorEl:a.current,role:void 0,transition:!0,disablePortal:!0,children:function(e){var t=e.TransitionProps,n=e.placement;return Object(c.jsx)(X.a,Object(E.a)(Object(E.a)({},t),{},{style:{transformOrigin:"bottom"===n?"center top":"center bottom"},children:Object(c.jsx)(Z.a,{children:Object(c.jsx)(q.a,{onClickAway:j,children:Object(c.jsxs)(_.a,{autoFocusItem:i,id:"menu-list-grow",onKeyDown:l,children:[Object(c.jsx)($.a,{onClick:j,children:"DE - Deutsch"}),Object(c.jsx)($.a,{onClick:j,children:"EN - English"}),Object(c.jsx)($.a,{onClick:j,children:"US - English"}),Object(c.jsx)($.a,{onClick:j,children:"ES - Espa\xf1ol"}),Object(c.jsx)($.a,{onClick:j,children:"KR - \ud55c\uad6d\uc5b4"}),Object(c.jsx)($.a,{onClick:j,children:"JP - \u65e5\u672c\u8a9e"}),Object(c.jsx)($.a,{onClick:j,children:"RU - P\u0443\u0441\u0441\u043a\u0438\u0439"}),Object(c.jsx)($.a,{onClick:j,children:"AR - \u0627\u0644\u0639\u0631\u0628\u064a\u0629"}),Object(c.jsx)($.a,{onClick:j,children:"BY - Bairisch"})]})})})}))}})]})})}var ie=function(){return Object(c.jsx)("div",{children:Object(c.jsxs)(m,{children:[Object(c.jsxs)(f,{to:"/BayernMunich",style:{paddingLeft:"10px",paddingRight:"40px"},children:[Object(c.jsx)("img",{src:"https://i.esdrop.com/d/8gqkv7Kpzr.png",width:"80px",height:"80px"}),Object(c.jsxs)("div",{style:{color:"white",paddingLeft:"20px"},children:[Object(c.jsx)(F.a,{variant:"subtitle2",children:"OFFICIAL WEBSITE OF"}),Object(c.jsx)(F.a,{variant:"h6",children:"FC BAYERN MUNICH"})]})]}),Object(c.jsx)(g,{children:Object(c.jsx)(Y,{})}),Object(c.jsxs)(y,{children:[Object(c.jsx)("div",{style:{padding:"0px 10px",marginTop:"5px"},children:"presented by"}),Object(c.jsx)("div",{children:Object(c.jsx)("img",{src:"https://i.esdrop.com/d/m2gOCQT7EE.svg",width:"40px",height:"40px"})})]}),Object(c.jsxs)(w,{children:[Object(c.jsxs)(C,{children:[Object(c.jsx)("div",{style:{padding:"13px 10px",color:"lightgray"},children:"presented by"}),Object(c.jsx)("div",{children:Object(c.jsx)("img",{src:"https://i.esdrop.com/d/m2gOCQT7EE.svg",width:"50px",height:"50px"})})]}),Object(c.jsxs)("div",{style:{display:"flex"},children:[Object(c.jsx)(f,{to:"/news",activeStyle:!0,children:Object(c.jsx)(F.a,{variant:"subtitle1",children:"News"})}),Object(c.jsx)(f,{to:"/tv",activeStyle:!0,children:Object(c.jsx)(F.a,{variant:"subtitle1",children:"FC Bayern.tv"})}),Object(c.jsx)(f,{to:"/teams",activeStyle:!0,children:Object(c.jsx)(F.a,{variant:"subtitle1",children:"Teams"})}),Object(c.jsx)(f,{to:"/matches",activeStyle:!0,children:Object(c.jsx)(F.a,{variant:"subtitle1",children:"Matches"})}),Object(c.jsx)(f,{to:"/club",activeStyle:!0,children:Object(c.jsx)(F.a,{variant:"subtitle1",children:"Club"})}),Object(c.jsx)(f,{to:"/fans",activeStyle:!0,children:Object(c.jsx)(F.a,{variant:"subtitle1",children:"Fans"})}),Object(c.jsx)("div",{style:{marginLeft:"5vw"},children:Object(c.jsx)(ce,{})}),Object(c.jsx)(B.a,{orientation:"vertical",flexItem:!0,style:{backgroundColor:"white"}}),Object(c.jsx)(k,{to:"/login",children:Object(c.jsx)(F.a,{variant:"subtitle1",children:"Log in"})})]})]})]})})},re=n(147),se=n(148);var ae=function(){return Object(c.jsx)("div",{style:{backgroundColor:"#F8F8FF",textAlign:"center",padding:"10px"},children:Object(c.jsx)("a",{href:"/BayernMunich",children:Object(c.jsx)("img",{src:"https://i.esdrop.com/d/OzMCzhaSQb.png",width:"100%"})})})};var je=function(){var e={padding:"20px 20px",margin:"0px"};return Object(c.jsx)("div",{style:{backgroundColor:"#F8F8FF",padding:"0 20vh",width:"100%"},children:Object(c.jsxs)(re.a,{container:!0,spacing:1,children:[Object(c.jsx)(re.a,{item:!0,xs:12,md:4,children:Object(c.jsx)(se.a,{p:0,style:e,children:Object(c.jsx)("a",{href:"/BayernMunich",children:Object(c.jsx)("img",{src:"https://i.esdrop.com/d/Y12SkSvZKO.gif",width:"100%"})})})}),Object(c.jsx)(re.a,{item:!0,xs:12,md:4,children:Object(c.jsx)(se.a,{p:0,style:e,children:Object(c.jsx)("a",{href:"/BayernMunich",children:Object(c.jsx)("img",{src:"https://i.esdrop.com/d/vjaxXBp2lZ.jpg",width:"100%"})})})}),Object(c.jsx)(re.a,{item:!0,xs:12,md:4,children:Object(c.jsx)(se.a,{p:0,style:e,children:Object(c.jsx)("a",{href:"/BayernMunich",children:Object(c.jsx)("img",{src:"https://i.esdrop.com/d/IeipP46AYG.jpg",width:"100%"})})})})]})})};var le=function(){var e=Object(i.useState)(!1),t=Object(M.a)(e,2),n=t[0],r=t[1],s=Object(i.useState)(!1),a=Object(M.a)(s,2),j=a[0],l=a[1],o=Object(i.useState)(!1),d=Object(M.a)(o,2),b=d[0],x=d[1],h={color:"rgb(162, 47, 73)"},O={color:"rgb(30, 71, 125)"},p={opacity:"0.75"},u={opacity:"1"};return Object(c.jsxs)("div",{style:{width:"100%"},children:[Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsxs)(se.a,{display:"flex",flexDirection:"row",p:0,m:0,children:[Object(c.jsx)("div",{style:{color:"rgb(162, 47, 73)",paddingLeft:"20px",paddingTop:"10px"},children:Object(c.jsx)(F.a,{variant:"h4",children:"NEWS"})}),Object(c.jsx)("div",{style:{width:"100%",color:"rgb(162, 47, 73)",borderBottom:"solid 2px rgb(162, 47, 73)"}})]}),Object(c.jsxs)(re.a,{container:!0,spacing:1,children:[Object(c.jsx)(re.a,{item:!0,xs:12,md:4,children:Object(c.jsxs)(se.a,{p:0,style:{padding:"20px"},children:[Object(c.jsx)("a",{href:"/BayernMunich",children:Object(c.jsx)("img",{src:"https://i.esdrop.com/d/Kr9WK5Ceao.webp",width:"100%",style:n?p:u,onMouseEnter:function(){return r(!0)},onMouseLeave:function(){return r(!1)}})}),Object(c.jsx)("div",{style:h,children:Object(c.jsx)(F.a,{variant:"subtitle1",children:"WATCH AGAIN"})}),Object(c.jsx)("div",{style:n?h:O,onMouseEnter:function(){return x(!0)},onMouseLeave:function(){return x(!1)},children:Object(c.jsx)(F.a,{variant:"subtitle2",children:"Hansi Flick's press conference before the Bundesliga game at Borussia Dortmund"})}),Object(c.jsx)("div",{style:{color:"gray"},children:Object(c.jsx)(F.a,{variant:"subtitle2",children:"On Friday, Hansi Flick held his pre-match press conference ahead of Saturday's Bundesliga Klassiker away at Borussia Dortmund."})})]})}),Object(c.jsx)(re.a,{item:!0,xs:12,md:4,children:Object(c.jsxs)(se.a,{p:0,style:{padding:"20px"},children:[Object(c.jsx)("a",{href:"/BayernMunich",children:Object(c.jsx)("img",{src:"https://i.esdrop.com/d/RQH1miIgI4.webp",width:"100%",style:j?p:u,onMouseEnter:function(){return l(!0)},onMouseLeave:function(){return l(!1)}})}),Object(c.jsx)("div",{style:h,children:Object(c.jsx)(F.a,{variant:"subtitle1",children:"FACTS AND FIGURES"})}),Object(c.jsx)("div",{style:j?h:O,onMouseEnter:function(){return l(!0)},onMouseLeave:function(){return l(!1)},children:Object(c.jsx)(F.a,{variant:"subtitle2",children:"7 facts on the top-of-the-table clash at Dortmund"})}),Object(c.jsx)("div",{style:{color:"gray"},children:Object(c.jsx)(F.a,{variant:"subtitle2",children:"Brush up on the fact and stats ahead of the Bundesliga Klassiker between Borussia Dortmund and FC Bayern."})})]})}),Object(c.jsx)(re.a,{item:!0,xs:12,md:4,children:Object(c.jsxs)(se.a,{p:0,style:{padding:"20px"},children:[Object(c.jsx)("a",{href:"/BayernMunich",children:Object(c.jsx)("img",{src:"https://i.esdrop.com/d/oGTtZ8l4kP.webp",width:"100%",style:b?p:u,onMouseEnter:function(){return x(!0)},onMouseLeave:function(){return x(!1)}})}),Object(c.jsx)("div",{style:h,children:Object(c.jsx)(F.a,{variant:"subtitle1",children:"DOUBLE MATCH-WINNER"})}),Object(c.jsx)("div",{style:b?h:O,onMouseEnter:function(){return x(!0)},onMouseLeave:function(){return x(!1)},children:Object(c.jsx)(F.a,{variant:"subtitle2",children:"'Mentality monster' Kimmich in top form for next Klassiker"})}),Object(c.jsx)("div",{style:{color:"gray"},children:Object(c.jsx)(F.a,{variant:"subtitle2",children:"Joshua Kimmich has scored the winning goal in the last two meetings with Borussia Dortmund, and arrives in top form once again."})})]})})]})]})};var oe=function(){var e={color:"rgb(162, 47, 73)",textAlign:"center"},t={color:"rgb(30, 71, 125)",textAlign:"center"},n={padding:"0 5px"};return Object(c.jsxs)("div",{style:{width:"100%"},children:[Object(c.jsxs)(se.a,{display:"flex",flexDirection:"row",p:0,m:0,children:[Object(c.jsx)("div",{style:{color:"rgb(162, 47, 73)",paddingLeft:"20px"},children:Object(c.jsx)(F.a,{variant:"h4",children:"NEW"})}),Object(c.jsx)("div",{style:{color:"rgb(162, 47, 73)",paddingLeft:"10px"},children:Object(c.jsx)(F.a,{variant:"h4",children:"PRODUCTS"})}),Object(c.jsx)("div",{style:{width:"100%",color:"rgb(162, 47, 73)",borderBottom:"solid 2px rgb(162, 47, 73)"}})]}),Object(c.jsx)("br",{}),Object(c.jsx)("div",{style:{color:"rgb(30, 71, 125)",paddingTop:"20px",paddingLeft:"40px"},children:Object(c.jsx)(F.a,{variant:"h4",children:"Honours"})}),Object(c.jsx)("br",{}),Object(c.jsxs)(re.a,{container:!0,spacing:0,children:[Object(c.jsx)(re.a,{item:!0,xs:12,lg:6,children:Object(c.jsxs)(se.a,{display:"flex",flexDirection:"row",p:0,m:"auto",justifyContent:"center",children:[Object(c.jsxs)("div",{style:n,children:[Object(c.jsx)("img",{src:"https://i.esdrop.com/d/UDeElYTfJK.webp",width:"100%"}),Object(c.jsx)(F.a,{variant:"h4",style:e,children:"30"}),Object(c.jsx)(F.a,{variant:"subtitle2",style:t,children:"German Championship"})]}),Object(c.jsx)(B.a,{orientation:"vertical",flexItem:!0}),Object(c.jsxs)("div",{style:n,children:[Object(c.jsx)("img",{src:"https://i.esdrop.com/d/55WybIj1oS.webp",width:"100%"}),Object(c.jsx)(F.a,{variant:"h4",style:e,children:"20"}),Object(c.jsx)(F.a,{variant:"subtitle2",style:t,children:"DFB German Cup"})]}),Object(c.jsx)(B.a,{orientation:"vertical",flexItem:!0}),Object(c.jsxs)("div",{style:n,children:[Object(c.jsx)("img",{src:"https://i.esdrop.com/d/r2mmYcN3k6.webp",width:"100%"}),Object(c.jsx)(F.a,{variant:"h4",style:e,children:"9"}),Object(c.jsx)(F.a,{variant:"subtitle2",style:t,children:"German Supercup"})]}),Object(c.jsx)(B.a,{orientation:"vertical",flexItem:!0}),Object(c.jsxs)("div",{style:n,children:[Object(c.jsx)("img",{src:"https://i.esdrop.com/d/LAu00m3TQL.webp",width:"100%"}),Object(c.jsx)(F.a,{variant:"h4",style:e,children:"6"}),Object(c.jsx)(F.a,{variant:"subtitle2",style:t,children:"League Cup"})]}),Object(c.jsx)(B.a,{orientation:"vertical",flexItem:!0}),Object(c.jsxs)("div",{style:n,children:[Object(c.jsx)("img",{src:"https://i.esdrop.com/d/ibKToOFmvy.webp",width:"100%"}),Object(c.jsx)(F.a,{variant:"h4",style:e,children:"6"}),Object(c.jsx)(F.a,{variant:"subtitle2",style:t,children:"Champions League"})]})]})}),Object(c.jsx)(re.a,{item:!0,xs:12,lg:6,children:Object(c.jsxs)(se.a,{display:"flex",flexDirection:"row",p:0,m:"auto",justifyContent:"center",children:[Object(c.jsxs)("div",{style:n,children:[Object(c.jsx)("img",{src:"https://i.esdrop.com/d/duCrwqsqzW.webp",width:"100%"}),Object(c.jsx)(F.a,{variant:"h4",style:e,children:"1"}),Object(c.jsx)(F.a,{variant:"subtitle2",style:t,children:"UEFA Cup"})]}),Object(c.jsx)(B.a,{orientation:"vertical",flexItem:!0}),Object(c.jsxs)("div",{style:n,children:[Object(c.jsx)("img",{src:"https://i.esdrop.com/d/fTfapT9nvm.webp",width:"100%"}),Object(c.jsx)(F.a,{variant:"h4",style:e,children:"1"}),Object(c.jsx)(F.a,{variant:"subtitle2",style:t,children:"UEFA Cup Winners' Cup"})]}),Object(c.jsx)(B.a,{orientation:"vertical",flexItem:!0}),Object(c.jsxs)("div",{style:n,children:[Object(c.jsx)("img",{src:"https://i.esdrop.com/d/FWQVR0zBXv.webp",width:"100%"}),Object(c.jsx)(F.a,{variant:"h4",style:e,children:"2"}),Object(c.jsx)(F.a,{variant:"subtitle2",style:t,children:"Intercontinental Cup"})]}),Object(c.jsx)(B.a,{orientation:"vertical",flexItem:!0}),Object(c.jsxs)("div",{style:n,children:[Object(c.jsx)("img",{src:"https://i.esdrop.com/d/DY5qJvYdbi.webp",width:"100%"}),Object(c.jsx)(F.a,{variant:"h4",style:e,children:"1"}),Object(c.jsx)(F.a,{variant:"subtitle2",style:t,children:"FIFA Club World Cup"})]}),Object(c.jsx)(B.a,{orientation:"vertical",flexItem:!0}),Object(c.jsxs)("div",{style:n,children:[Object(c.jsx)("img",{src:"https://i.esdrop.com/d/2J0ncCdL9D.webp",width:"100%"}),Object(c.jsx)(F.a,{variant:"h4",style:e,children:"2"}),Object(c.jsx)(F.a,{variant:"subtitle2",style:t,children:"UEFA Supercup"})]})]})})]}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{})]})};var de=function(e){var t=e.src;return Object(c.jsx)("img",{src:t,alt:"slide-img",style:{width:"100%",height:"auto"}})},be=(n(98),n(70)),xe=n.n(be),he=n(71),Oe=n.n(he);var pe=function(){var e=[Object(c.jsx)(de,{src:"https://i.esdrop.com/d/AQLsEZuIlB.JPG"}),Object(c.jsx)(de,{src:"https://i.esdrop.com/d/RFpbHdpPY8.JPG"}),Object(c.jsx)(de,{src:"https://i.esdrop.com/d/ooJFjLe9Q2.JPG"}),Object(c.jsx)(de,{src:"https://i.esdrop.com/d/lNWXWFEk0N.JPG"})],t=Object(i.useState)(0),n=Object(M.a)(t,2),r=n[0],s=n[1];return Object(c.jsxs)("div",{className:"slider",children:[e.map((function(e,t){return Object(c.jsx)("div",{className:"slide",style:{transform:"translateX(".concat(r,"%)")},children:e},t)})),Object(c.jsx)("button",{id:"goLeft",onClick:function(){s(0===r?-100*(e.length-1):r+100)},children:Object(c.jsx)(xe.a,{style:{color:"white"}})}),Object(c.jsx)("button",{id:"goRight",onClick:function(){r===-100*(e.length-1)?s(0):s(r-100)},children:Object(c.jsx)(Oe.a,{style:{color:"white"}})})]})};n(99);var ue=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("div",{class:"video-container",children:Object(c.jsx)("iframe",{width:"100%",height:"100%",src:"https://www.youtube.com/embed/CKr09b-94kM?controls=0",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})})})};n(100);var ve=function(){var e=Object(i.useState)(!1),t=Object(M.a)(e,2),n=t[0],r=t[1];return Object(c.jsx)("div",{children:Object(c.jsx)("img",{src:"https://i.esdrop.com/d/NeXHnnqhIj.jpg",width:"100%",style:n?{opacity:"0.75"}:{opacity:"1"},onMouseEnter:function(){return r(!0)},onMouseLeave:function(){return r(!1)}})})};n(101);var me=function(){var e={padding:"30px"};return Object(c.jsxs)("div",{style:{justifyContent:"center",textAlign:"center"},children:[Object(c.jsx)("div",{class:"LogoHalf",children:Object(c.jsx)("img",{src:"https://i.esdrop.com/d/8gqkv7Kpzr.png",width:"10%"})}),Object(c.jsxs)("div",{style:{backgroundColor:"rgba(220, 5, 44)",color:"white"},children:[Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)(F.a,{variant:"h6",children:"PARTNER"}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsxs)(se.a,{display:"flex",flexDirection:"row",justifyContent:"center",p:0,m:0,children:[Object(c.jsx)(se.a,{p:0,children:Object(c.jsx)("div",{style:e,children:Object(c.jsx)("a",{href:"/BayernMunich",children:Object(c.jsx)("img",{src:"https://i.esdrop.com/d/B5Qe3xFsyM.png",width:"100px"})})})}),Object(c.jsx)(se.a,{p:0,children:Object(c.jsx)("div",{style:e,children:Object(c.jsx)("a",{href:"/BayernMunich",children:Object(c.jsx)("img",{src:"https://i.esdrop.com/d/6yxZfr65jA.png",width:"100px"})})})}),Object(c.jsx)(se.a,{p:0,children:Object(c.jsx)("div",{style:e,children:Object(c.jsx)("a",{href:"/BayernMunich",children:Object(c.jsx)("img",{src:"https://i.esdrop.com/d/1W02FKOiHp.png",width:"100px"})})})}),Object(c.jsx)(se.a,{p:0,children:Object(c.jsx)("div",{style:e,children:Object(c.jsx)("a",{href:"/BayernMunich",children:Object(c.jsx)("img",{src:"https://i.esdrop.com/d/hg6NTUaDW7.png",width:"100px",style:{paddingTop:"20px"}})})})})]})]})]})};var fe=function(){return Object(c.jsx)("div",{children:Object(c.jsxs)(re.a,{container:!0,spacing:1,children:[Object(c.jsxs)(re.a,{item:!0,xs:12,children:[Object(c.jsx)("div",{children:Object(c.jsx)(ae,{})}),Object(c.jsx)("br",{})]}),Object(c.jsx)(re.a,{item:!0,xs:12,md:6,children:Object(c.jsx)(se.a,{children:Object(c.jsx)(ue,{})})}),Object(c.jsx)(re.a,{item:!0,xs:12,md:6,children:Object(c.jsx)(se.a,{children:Object(c.jsx)(ve,{})})}),Object(c.jsxs)(re.a,{item:!0,xs:12,children:[Object(c.jsx)("br",{}),Object(c.jsx)("div",{p:0,children:Object(c.jsx)(pe,{})}),Object(c.jsx)("br",{})]}),Object(c.jsx)(je,{}),Object(c.jsx)(le,{}),Object(c.jsx)(oe,{}),Object(c.jsx)(re.a,{item:!0,xs:12,children:Object(c.jsx)("div",{p:48,children:Object(c.jsx)(me,{})})})]})})};var ge=function(){return Object(c.jsx)("div",{children:"News"})};var ye=function(){return Object(c.jsx)("div",{children:"Tv"})};var we=function(){return Object(c.jsx)("div",{children:"Teams"})};var Ce=function(){return Object(c.jsx)("div",{children:"Matches"})};var ke=function(){return Object(c.jsx)("div",{children:"Club"})};var Fe=function(){return Object(c.jsx)("div",{children:"Fans"})};var Be=function(){return Object(c.jsx)("div",{children:"Login"})};var Me=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(o.a,{children:[Object(c.jsx)(ie,{}),Object(c.jsxs)(H.c,{children:[Object(c.jsx)(H.a,{path:"/BayernMunich",exact:!0,component:fe}),Object(c.jsx)(H.a,{path:"/news",exact:!0,component:ge}),Object(c.jsx)(H.a,{path:"/tv",exact:!0,component:ye}),Object(c.jsx)(H.a,{path:"/teams",exact:!0,component:we}),Object(c.jsx)(H.a,{path:"/matches",exact:!0,component:Ce}),Object(c.jsx)(H.a,{path:"/club",exact:!0,component:ke}),Object(c.jsx)(H.a,{path:"/fans",exact:!0,component:Fe}),Object(c.jsx)(H.a,{path:"/login",exact:!0,component:Be})]})]})})},Ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,152)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),r(e),s(e)}))};a.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(Me,{})}),document.getElementById("root")),Ee()},91:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[102,1,2]]]);
//# sourceMappingURL=main.ff2c948c.chunk.js.map