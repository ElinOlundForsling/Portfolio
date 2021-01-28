(this["webpackJsonpelin-portfolio"]=this["webpackJsonpelin-portfolio"]||[]).push([[0],{129:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(2),i=a(22),o=a.n(i),c=(a(70),a(71),a(72),a(73),a(74),a(75),a(5)),r=a(23),l=a.n(r),h=a(25),d=function(){return Object(n.jsxs)(l.a,{className:"about",children:[Object(n.jsx)(c.a,{className:"about-image",animation:{x:0,opacity:1,ease:"easeOutQuad"},style:{transform:"translateX(-100px)",opacity:0}},"image"),Object(n.jsxs)(h.a,{type:"right",className:"about-text",leaveReverse:!0,children:[Object(n.jsx)("h2",{children:"Is this the droid that you seek?"},"h2"),Object(n.jsx)("h1",{children:"Elin \xd6lund Forsling"},"h1"),Object(n.jsx)("p",{children:"Hello, I'm an overbearing cat-mom and a very loving but often neglectful plant-mom. I write excellent code and make excellent cocktails. In a team, I'm the moodmaker, and I aspire to be the person that automatically gets the onboarding duty, as I love meeting new people, and to talk about code and the ins and outs and arounds of it."},"p1"),Object(n.jsx)("p",{children:"My past work experience include a lot of 3D art, from environment artist on Minecraft: Dungeons to VFX artist for Hollywood productions, and from that I'm used to fast-paced working environments, SCRUM, AGILE workflows and an unexpected appriciation for McDonalds."},"p2"),Object(n.jsx)("p",{children:"Recently, I graduated <salt />, who hand-picked me and 33 others among 1600 applicants for their full-stack development program. I'm currently a consultant with them looking for full-time work."}),Object(n.jsxs)("p",{children:[Object(n.jsx)("b",{children:"I'm superb at these:"})," Javascript, Typescript, React, Hooks, Redux, Express, Node, React Testing Liberary, Eslint, Kotlin, CSS, MySql, MongoDB, Mongoose, Firebase",Object(n.jsx)("br",{}),Object(n.jsx)("b",{children:"I can also do these:"})," Java, Swift, ThreeJS, Kubernets, Amazon Web Services Services, Babel, Webpack, Docker, SASS",Object(n.jsx)("br",{}),Object(n.jsx)("b",{children:"In dire times I'll do: "})," C#"]},"p3")]},"text")]})},u=function(){return Object(n.jsx)("section",{className:"landing",children:Object(n.jsx)("div",{id:"noise",children:Object(n.jsx)("div",{className:"app",children:Object(n.jsxs)("div",{className:"landing-text",children:[Object(n.jsx)("h3",{children:"LOOKING FOR"}),Object(n.jsx)("h1",{children:"EXCELLENT CODE?"}),Object(n.jsx)("p",{children:"I'm here to deliver full-stack solutions to whatever you might need."}),Object(n.jsx)("p",{children:"Scroll to get your fancy tickled!"})]})})})})},p=function(){return Object(n.jsx)("div",{className:"footer",children:Object(n.jsx)("p",{children:"All these right are belong to me\xa9"})})},m=a(26),b=function(){var e=Object(s.useState)(""),t=Object(m.a)(e,2),a=t[0],i=t[1],o=Object(s.useState)(""),r=Object(m.a)(o,2),d=r[0],u=r[1],p=Object(s.useState)(""),b=Object(m.a)(p,2),j=b[0],g=b[1];Object(s.useEffect)((function(){if("SUCCESS"===a||"ERROR"===a){var e=setTimeout((function(){i("")}),5e3);return function(){return clearTimeout(e)}}}),[a]);return Object(n.jsxs)(l.a,{className:"contact",children:[Object(n.jsxs)(h.a,{type:"right",className:"contact-text",leaveReverse:!0,children:[Object(n.jsx)("h2",{children:"Contact"},"h2"),Object(n.jsx)("p",{children:"I'm currently employed by <salt /> as a consultant. If you're interested in my services, please reach out to Sara at sara@appliedtechnology.se"},"p"),Object(n.jsx)("p",{children:"For other matters, leave a message below :)"},"p"),Object(n.jsxs)("form",{className:"contact-form",onSubmit:function(e){e.preventDefault();var t=e.target,a=new FormData(t),n=new XMLHttpRequest;n.open(t.method,t.action),n.setRequestHeader("Accept","application/json"),n.onreadystatechange=function(){n.readyState===XMLHttpRequest.DONE&&(200===n.status?(t.reset(),i("SUCCESS")):i("ERROR"))},n.send(a)},action:"https://formspree.io/f/xnqowkzw",method:"POST",children:[Object(n.jsx)("input",{type:"email",name:"_replyto",placeholder:"Email",value:d,onChange:function(e){return u(e.target.value)}}),Object(n.jsx)("textarea",{placeholder:"Message",name:"message",value:j,onChange:function(e){return g(e.target.value)}}),"SUCCESS"===a?Object(n.jsx)("p",{children:"Thanks!"}):Object(n.jsx)("button",{children:"Submit"}),"ERROR"===a&&Object(n.jsx)("p",{children:"Ooops! There was an error."})]})]},"text"),Object(n.jsx)(c.a,{className:"contact-image",animation:{x:0,opacity:1,ease:"easeOutQuad"},style:{transform:"translateX(-100px)",opacity:0}},"image")]})},j=[{name:"Museion",lc:"museion",desc:"My current baby that I'm working on, an online school portal, meant to enable students and teachers to more easily keep track of theirlesson plans, grades and schedules. The future plan is also to havean integrated video feature, to enable teachers to hold and savetheir lectures directly in the app. I'm incredibly excited for whatthe future holds for this app.",techStack:["javascript","react","firebase"],urlName:"Live Demo",url:"https://museion-f9110.web.app/",githubUrl:"https://github.com/ElinOlundForsling/museion"},{name:"ECLIPSE",lc:"eclipse",desc:"Have you and your friends ever struggled with what movies you want to watch together? ECLIPSE is an android app with a solution. You and your friends sign up, add the movies you want to see, and then the app matches you the movies you both want to see, using the movie database API.",techStack:["kotlin"],urlName:"Figma",url:"https://www.figma.com/file/lST2JujCvGTUHFVGSR5wIh/Eclipse3?node-id=0%3A1",githubUrl:"https://github.com/ElinOlundForsling/eclipse"},{name:"listknife",lc:"listknife",desc:"Building a portfolio, speed has been key. And when you go fast in a project, scale and keeping it substantiable has got been a priority. So for this project, I have challenged that, with typescript, 50+ tests, the whole shebang. If you download the chat branch from github, that works too.",techStack:["typescript","react","firebase"],urlName:"Live Demo",url:"https://listknife.web.app/",githubUrl:"https://github.com/ElinOlundForsling/listknife"},{name:"AHOY",lc:"ahoy",desc:"AHOY was the graduation project I made at <salt /> with Jesper Zachrisson and Alexander Zagame. I implemented the chat feature, the interactive Pong game, the admin panel, made the design, and most of the routing.",urlName:"Live Demo",techStack:["javascript","react","redux","firebase"],url:"https://ahoy-9a920.web.app/",githubUrl:"https://github.com/ElinOlundForsling/ahoy"},{name:"Minesweeper",lc:"minesweeper",desc:"Minesweeper, minesweeper, does whatever, a minesweeper does. Three levels of difficulty, a highscore board hosted on firebase, timer and lots of logic, this Minesweeper is a one-day project, with the intent to learn more about how to utilise React in real-time.",techStack:["javascript","react","firebase"],urlName:"Live Demo",url:"https://minesweeper-4ebc6.web.app/",githubUrl:"https://github.com/ElinOlundForsling/minesweeper"},{name:"HEL",lc:"hel",desc:"HEL is an app I have made with the help of the Philips Hue API and the Google Speech API to create my own Siri to control the lights in my home. The end goal, is of course a system that randomly locks the doors in my home with a cheeky \"I'm afraid I can't let you do that, Elin\".",techStack:["javascript","react"],urlName:"",url:"",githubUrl:"https://github.com/ElinOlundForsling/hel"}],g=function(e){var t=e.project,a=e.reversed,i=t.name,o=t.lc,r=t.desc,d=t.techStack,u=t.urlName,p=t.url,b=t.githubUrl,j=Object(s.useState)(!1),g=Object(m.a)(j,2),f=g[0],O=g[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(l.a,{className:"presentation ".concat(a&&"reversed"),children:[Object(n.jsx)(c.a,{className:"".concat(o,"-image presentation-image"),animation:{x:0,opacity:1,ease:"easeOutQuad"},style:{transform:"translateX(-100px)",opacity:0},onClick:function(){return O(!0)}},"image"),Object(n.jsxs)(h.a,{type:"right",className:"presentation-text",leaveReverse:!0,children:[Object(n.jsx)("h2",{children:i},"h2"),Object(n.jsx)("ul",{className:"language-list",children:d.map((function(e){return Object(n.jsx)("li",{children:Object(n.jsx)("img",{src:"/images/icons/".concat(e,".png"),className:"language-icon",alt:e})})}))},"ul"),Object(n.jsx)("p",{children:r},"p"),p&&Object(n.jsx)("a",{href:p,children:Object(n.jsx)("button",{children:u})},"a1"),Object(n.jsx)("a",{href:b,children:Object(n.jsx)("button",{children:"Github"})},"a2")]},"text")]}),f&&Object(n.jsx)("dialog",{className:"dialog",style:{position:"fixed"},open:!0,onClick:function(){return O(!1)},children:Object(n.jsx)("img",{className:"image",src:"/images/screenshots/screenshot-".concat(o,".png"),onClick:function(){return O(!1)},alt:i})})]})},f=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(u,{}),Object(n.jsx)(d,{}),j.map((function(e,t){return Object(n.jsx)(g,{project:e,reversed:t%2})})),Object(n.jsx)(b,{}),Object(n.jsx)(p,{})]})};o.a.render(Object(n.jsx)(f,{}),document.getElementById("root"))},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){}},[[129,1,2]]]);
//# sourceMappingURL=main.dbf91716.chunk.js.map