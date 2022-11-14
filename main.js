console.log(document);
let ch = document.body.children;
document.body.removeChild(ch[0])

let h1 =  document.createElement("h1");
h1.innerHTML = "Lab12 Assignment";
h1.style.color = "blue";

let hr1 = document.createElement("HR");
document.body.appendChild(h1);
document.body.appendChild(hr1);

var h2 = document.createElement("h2");
h2.innerHTML = "Task";
h2.style.color = "red";
document.body.appendChild(h2);

var p1 = document.createElement("p");
p1.innerHTML = "In this task you have to reproduce this HTML page as is using" + "<strong> only </strong>" + "JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:"
document.body.appendChild(p1);

let text1 = [
    "find elements in the DOM (<strong>5 points</strong>);",
    "create/add/remove elements (<strong>5 points</strong>);",
    "change content of the elements (<strong>5 points</strong>);",
    "change styles of the elements (<strong>5 points</strong>);",
    "change attributes of the elements (<strong>5 points</strong>);",
    "change classes of the elements (<strong>5 points</strong>)."
]
var ul1 = document.createElement("ul")

function createCont(text, ul){
    for (let i = 0; i < text.length; i++){
        var j = document.createElement("li");
        j.innerHTML = text[i]
        if (i % 2 == 0){
            j.style.color = "green"
        }else{
            j.style.color = "purple"
        }
        ul.appendChild(j)
    }
}

createCont(text1, ul1)

document.body.appendChild(ul1)

let div = document.createElement("div");
div.innerHTML = "Basic necessary code can be found in the supplementary materials to the Lecture 12 via this ";
let a1 = document.createElement("a");
a1.setAttribute("href", "https://github.com/yessen/nu_web_programming/tree/main/week12");
a1.innerText = "link.";
div.style.marginBlockStart = "1em"
div.style.marginBlockEnd = "1em"
div.appendChild(a1);
document.body.appendChild(div);
let hr = document.createElement("hr")
document.body.appendChild(hr);

let h22 = document.createElement("h2")
h22.innerHTML = "Submission"
h22.style.color = "red"

document.body.appendChild(h22)

let p3 = document.createElement("p")
p3.innerHTML = "To submit your work, follow these instructions:"

document.body.appendChild(p3)

text2 = [
    "Create a new repository on Github, named <strong>lab12</strong> (<strong>1 point</strong>).",
    "Clone this repository to your local machine and work inside it.",
    "Create a new HTML file, called <strong>index.html</strong>, which has only one &lt;h1&gt; tag with \"Hello, World!\" message (<strong>1 point</strong>).",
    "Create a new JavaScript file, called <strong>main.js</strong>, which must contain your program (assignment) described above (<strong>1 point</strong>).",
    "Link this <strong>main.js</strong> file to your <strong>index.html</strong> file (Note: place your script at the end of the <strong>body</strong> section).",
    "Write a JavaScript program in <strong>main.js</strong> to make your <strong>index.html</strong> look identical to this HTML file (<strong>5 points</strong>).",
    "After you finish your work, submit it to the Github (<strong>2 points</strong>)."
]
var ul2 = document.createElement("ul")

createCont(text2, ul2)
document.body.appendChild(ul2)

var hr2 = document.createElement("hr")
document.body.appendChild(hr2)
console.log(document)
