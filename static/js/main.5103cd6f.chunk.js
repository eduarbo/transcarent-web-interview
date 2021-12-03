(this.webpackJsonptrees=this.webpackJsonptrees||[]).push([[0],{11:function(e,t,n){},31:function(e,t,n){},33:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var r=n(2),s=n(26),i=n.n(s),a=(n(31),n(32),n(59)),c=n(60),o=n(61),l=(n(33),n(9)),d=n(10),h=n.n(d),j=n(15),u=n(17),b=n(16),m=n.n(b),p=(n(11),n(0));function x(e){var t=e.text,n=e.children,r=e.path,s=(e.addItem,e.removeItem);return Object(p.jsxs)("li",{className:"list-item",children:[t,Object(p.jsx)("button",{onClick:function(){return s(r)},type:"button",className:"close remove-icon","aria-label":"Remove",children:Object(p.jsx)("span",{"aria-hidden":"true",children:"\u274c"})}),n]})}function O(e){var t=e.data,n=e.path,r=void 0===n?[]:n,s=e.addItem,i=e.removeItem,a=t||[];return a.length?Object(p.jsxs)("ol",{className:"list",children:[a.map((function(e,t){var n=e.value,a=e.items,c=[].concat(Object(l.a)(r),[t]);return Object(p.jsx)(x,{text:n,path:c,addItem:s,removeItem:i,children:Object(p.jsx)(O,{data:a,path:c,addItem:s,removeItem:i})},c)})),Object(p.jsx)("input",{onKeyDown:s(r),className:"form-control form-control-sm add-item-input",placeholder:"Add another animal",type:"text"})]}):null}function w(){return Object(p.jsx)("div",{className:"spinner",children:Object(p.jsx)("div",{className:"spinner-border text-info",role:"status",children:Object(p.jsx)("span",{className:"sr-only",children:"Loading..."})})})}var v="https://api.jsonbin.io/v3/b/61a6855f0ddbee6f8b14dad8",f="$2b$10$xJgvOstI94CVbBW4RgawUu30qbNshiErQIbBKUIJp6ursGw7Nc7Du";function g(){var e=Object(r.useState)(!0),t=Object(u.a)(e,2),n=t[0],s=t[1],i=Object(r.useState)(),a=Object(u.a)(i,2),c=a[0],o=a[1],d=function(){var e=Object(j.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("".concat(v,"/latest"),{headers:{"X-Master-Key":f}});case 2:t=e.sent,o(t.data.record),s(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){d()}),[]);var b=function(){var e=Object(j.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.put(v,t,{headers:{"X-Master-Key":f}});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(e){o(e),b(e)};return Object(p.jsx)("div",{className:"tree",children:n?Object(p.jsx)(w,{}):Object(p.jsx)(O,{data:c,addItem:function(e){return function(t){var n=t.target;if("Enter"===t.key){var r=Object(l.a)(c),s={value:n.value};if(e.length)e.reduce((function(e,t){return e[t].items}),r).push(s);else r.push(s);x(r),n.value=""}}},removeItem:function(e){var t=Object(l.a)(c);e.reduce((function(t,n,r){return r+1===e.length?t.splice(n,1):t[n].items}),t),x(t)}})})}function y(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)(a.a,{children:[Object(p.jsx)(c.a,{children:Object(p.jsxs)(o.a,{children:[Object(p.jsx)("img",{alt:"app-logo",className:"App-logo",src:"https://storage.googleapis.com/tc-assets/marketing-site/icons/logo.svg"}),Object(p.jsx)("h2",{children:"Welcome! Thanks for interviewing with Transcarent!"}),Object(p.jsx)("p",{children:"We're going to work with some trees today. Our goal with this exercise isn't to \"stump\" anyone with tricky business, but to give candidates a fair and uniform way to express themselves in code on a realistic-ish problem."}),Object(p.jsx)("p",{children:"In approximately an hour, we expect everyone will get some of the way through this problem, and no one will get all the way through. If invited to an on-site interview, you'll pair with us wherever you left off, because we'd much rather see how you work on a problem you're familiar with and have had time to think about than on some clever whiteboard puzzle we spring on you. Wherever you do stop, please make sure the code runs, and that the server starts."}),Object(p.jsx)("p",{children:"At this stage, we care most about:"}),Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:"Interpreting written specifications (following instructions)"}),Object(p.jsx)("li",{children:"General familiarity with layout, data modeling, interaction, network i/o"}),Object(p.jsx)("li",{children:"Legible code"})]}),Object(p.jsx)("p",{children:"When in doubt, do less, better. :)"}),Object(p.jsx)("hr",{})]})}),Object(p.jsxs)(c.a,{children:[Object(p.jsx)(o.a,{sm:6,children:Object(p.jsxs)("div",{className:"App-instructions",children:[Object(p.jsxs)("div",{className:"App-step",children:[Object(p.jsx)("span",{role:"img","aria-label":"paint",children:"\ud83c\udfa8"}),"First, layout and style"]}),Object(p.jsx)("div",{className:"App-instructions",children:Object(p.jsxs)("ol",{children:[Object(p.jsxs)("li",{children:["Check out the file ",Object(p.jsx)("code",{children:"./src/tree/index.js"}),"."]}),Object(p.jsxs)("li",{children:["Replace the inline ",Object(p.jsx)("code",{children:"&nbsp"}),' "styling" with an improved layout by editing the html and css in the'," ",Object(p.jsx)("code",{children:"./src/tree/index.js"}),"and ",Object(p.jsx)("code",{children:"./tree/index.css"})," files."]}),Object(p.jsx)("li",{children:"When the results look the same as the original, please commit changes to main and push to remote."}),Object(p.jsx)("li",{children:Object(p.jsx)("i",{children:"Bonus: How would you prove that your results are exactly the same as the original? [Show your work in a new commit.]"})}),Object(p.jsx)("li",{children:Object(p.jsxs)("i",{children:["Bonus: Can we number every line such that",Object(p.jsx)("code",{children:"root"}),' starts with "1" and ',Object(p.jsx)("code",{children:"ant"}),"starts with 1.1 and ... ",Object(p.jsx)("code",{children:"elephant"})," starts with 1.2.2.1? [Show your work in a new commit.]"]})})]})}),Object(p.jsxs)("div",{className:"App-step",children:[Object(p.jsx)("span",{role:"img","aria-label":"code",children:"\ud83d\udd22"}),"Next, with data"]}),Object(p.jsx)("div",{className:"App-instructions",children:Object(p.jsxs)("ol",{children:[Object(p.jsxs)("li",{children:["Check out the (empty) file ",Object(p.jsx)("code",{children:"./src/tree/data.json"}),"."]}),Object(p.jsx)("li",{children:"Add a JSON object to that file that represents our animal tree. It should capture just the values and relationships currently onscreen after step one."}),Object(p.jsxs)("li",{children:["Update ",Object(p.jsx)("code",{children:"./tree/index.js"})," to use your JSON object to draw the animal tree instead of the your (styled) inline text."]}),Object(p.jsx)("li",{children:"When the results look exactly the same as the original, please commit changes and push to remote."}),Object(p.jsx)("li",{children:Object(p.jsx)("i",{children:"Bonus: Redraw the tree upside down (reading bottom to top: root, ant, bear...) [Show your work in a new commit.]"})}),Object(p.jsx)("li",{children:Object(p.jsxs)("i",{children:["Bonus: After the first letter of each element, add as many periods as the level the element is on. (Root is 0) E.g.",Object(p.jsx)("code",{children:"d..og"}),". [Show your work in a new commit.]"]})})]})}),Object(p.jsxs)("div",{className:"App-step",children:[Object(p.jsx)("span",{role:"img","aria-label":"stars",children:"\u2728"}),"Let's add interactions"]}),Object(p.jsx)("div",{className:"App-instructions",children:Object(p.jsxs)("ol",{children:[Object(p.jsx)("li",{children:"Add a text input field below the last element in each level, at the right indentation level. There should be one text input at level 0 after frog, one at level 1 directly above that, one below elephant at level 3, and another beneath that at level 2."}),Object(p.jsx)("li",{children:"When someone types a new word in the text box and hits enter, add that word to the tree and redraw it."}),Object(p.jsxs)("li",{children:["Add an",Object(p.jsxs)("span",{role:"img","aria-label":"cross",children:[" ","\u274c"]}),"after every element on the tree. When a user clicks the",Object(p.jsxs)("span",{role:"img","aria-label":"cross",children:[" ","\u274c"]}),", remove that node."]}),Object(p.jsx)("li",{children:"When you can add and remove items from the tree, commit your changes and push to remote."}),Object(p.jsx)("li",{children:Object(p.jsx)("i",{children:"Bonus: Add a toggle to the page that alphabetizes the tree, when toggled one way, or restores the tree to the order items were entered when toggled the other way. [Show your work in a new commit.]"})}),Object(p.jsx)("li",{children:Object(p.jsx)("i",{children:"Bonus: How would you prove that elements can be added and removed from the tree properly? [Show your work in a new commit.]"})}),Object(p.jsx)("li",{children:Object(p.jsx)("i",{children:'Bonus: How could you add a new level to an existing element. For example, if I wanted to add a level 1 animal from a level 0 animal. How could I add a level 1 "lion" to ant?'})})]})}),Object(p.jsxs)("div",{className:"App-step",children:[Object(p.jsx)("span",{role:"img","aria-label":"drive",children:"\ud83d\udcbe"}),"And persistence!"]}),Object(p.jsxs)("div",{className:"App-instructions",children:["Check out the persistence API at:"," ",Object(p.jsx)("a",{href:"https://jsonbin.io/",children:"https://jsonbin.io/"}),Object(p.jsxs)("ol",{children:[Object(p.jsxs)("li",{children:["Setup: You will need to create an account to obtain the api key. Then, create the Bin where you will Read and Update your JSON payload by referencing the Bin ID. See:"," ",Object(p.jsx)("a",{href:"https://jsonbin.io/api-reference/bins/read",children:"Bins API Reference"})]}),Object(p.jsx)("li",{children:"Save your tree whenever a new element is added or deleted."}),Object(p.jsx)("li",{children:"Commit your changes and push to remote when you can make a changes to the tree that are fetched from the API on page refresh."}),Object(p.jsx)("li",{children:Object(p.jsx)("i",{children:"Bonus: Add a debouncer to only save the tree when it's changed."})}),Object(p.jsx)("li",{children:Object(p.jsx)("i",{children:"Bonus: How would you use this API to make a (more or less) collaborative tree editing app? How collaborative could it be? What limits would it have?"})})]})]})]})}),Object(p.jsx)(o.a,{sm:6,children:Object(p.jsx)(g,{})})]})]})})}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(p.jsx)(y,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[57,1,2]]]);
//# sourceMappingURL=main.5103cd6f.chunk.js.map