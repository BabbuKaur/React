/*
<div id="parent">
    <div id="child">
        <h1>I am H1 tag</h1>
        <h2>I am H2 tag<h1>
    </div>
</div>

React.createElement=>ReactElement(Object)=>HTML(Browser Understands)
Prarent is React Element or object and it is not creating HTNL elements, it is just an object
*/


const parent=React.createElement("div", {id:"parent"}, 
[React.createElement("div", {id:"child1"}, 
[React.createElement("h1", {}, "I am H1 tag"), 
React.createElement("h2", {}, "I am H2 tag")]),
React.createElement("div", {id:"child2"}, 
[React.createElement("h1", {}, "I am H1 tag"), 
React.createElement("h2", {}, "I am H2 tag")])]);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
