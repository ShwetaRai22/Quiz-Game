const quesBox = document.getElementById("questionBox");
const optionsBox = document.getElementById("optionBox");
const mainBox = document.getElementById("container");
const navOpt= document.getElementById("navOpt");
const def=document.getElementById("def");
const progress=document.getElementById("progress");
const progressBar=document.getElementById("progressBar");
const questions = [
    {
        id: 1,
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlink Text Management Language",
            "Home Tool Markup Language"
        ],
        answer: "Hyper Text Markup Language"
    },

    {
        id: 2,
        question: "Which tag is used to create the largest heading in HTML?",
        options: [
            "<h6>",
            "<heading>",
            "<h1>",
            "<head>"
        ],
        answer: "<h1>"
    },

    {
        id: 3,
        question: "Which HTML tag is used to create a paragraph?",
        options: [
            "<para>",
            "<p>",
            "<paragraph>",
            "<text>"
        ],
        answer: "<p>"
    },

    {
        id: 4,
        question: "Which tag is used to create a hyperlink?",
        options: [
            "<link>",
            "<href>",
            "<a>",
            "<url>"
        ],
        answer: "<a>"
    },

    {
        id: 5,
        question: "Which attribute specifies the destination of a hyperlink?",
        options: [
            "src",
            "href",
            "link",
            "url"
        ],
        answer: "href"
    },

    {
        id: 6,
        question: "Which tag is used to display an image?",
        options: [
            "<image>",
            "<img>",
            "<pic>",
            "<src>"
        ],
        answer: "<img>"
    },

    {
        id: 7,
        question: "Which attribute provides alternative text for an image?",
        options: [
            "src",
            "title",
            "alt",
            "text"
        ],
        answer: "alt"
    },

    {
        id: 8,
        question: "Which tag is used to create an unordered list?",
        options: [
            "<ol>",
            "<list>",
            "<ul>",
            "<li>"
        ],
        answer: "<ul>"
    },

    {
        id: 9,
        question: "Which tag represents an individual item in a list?",
        options: [
            "<item>",
            "<li>",
            "<list-item>",
            "<ul>"
        ],
        answer: "<li>"
    },

    {
        id: 10,
        question: "Which tag is used to create an ordered list?",
        options: [
            "<ul>",
            "<ol>",
            "<order>",
            "<list>"
        ],
        answer: "<ol>"
    },

    {
        id: 11,
        question: "Which HTML element is used to create a form?",
        options: [
            "<input>",
            "<form>",
            "<fieldset>",
            "<data>"
        ],
        answer: "<form>"
    },

    {
        id: 12,
        question: "Which input type is used for entering an email address?",
        options: [
            "text",
            "mail",
            "email",
            "address"
        ],
        answer: "email"
    },

    {
        id: 13,
        question: "Which input type is used for selecting a single option from multiple choices?",
        options: [
            "checkbox",
            "radio",
            "select",
            "option"
        ],
        answer: "radio"
    },

    {
        id: 14,
        question: "Which input type allows the user to select multiple independent options?",
        options: [
            "radio",
            "multiple",
            "checkbox",
            "select"
        ],
        answer: "checkbox"
    },

    {
        id: 15,
        question: "Which HTML tag is used to create a button?",
        options: [
            "<btn>",
            "<button>",
            "<click>",
            "<input-button>"
        ],
        answer: "<button>"
    },

    {
        id: 16,
        question: "Which HTML tag is used to define a table row?",
        options: [
            "<td>",
            "<th>",
            "<tr>",
            "<row>"
        ],
        answer: "<tr>"
    },

    {
        id: 17,
        question: "Which tag is used to define a table header cell?",
        options: [
            "<thead>",
            "<th>",
            "<header>",
            "<td>"
        ],
        answer: "<th>"
    },

    {
        id: 18,
        question: "Which tag is used to define a table data cell?",
        options: [
            "<data>",
            "<cell>",
            "<td>",
            "<tr>"
        ],
        answer: "<td>"
    },

    {
        id: 19,
        question: "Which HTML element is used to define navigation links?",
        options: [
            "<navigation>",
            "<nav>",
            "<links>",
            "<menu>"
        ],
        answer: "<nav>"
    },

    {
        id: 20,
        question: "Which semantic HTML element represents the main content of a page?",
        options: [
            "<content>",
            "<main>",
            "<body-content>",
            "<section>"
        ],
        answer: "<main>"
    },

    {
        id: 21,
        question: "Which tag is used to define a footer?",
        options: [
            "<bottom>",
            "<footer>",
            "<foot>",
            "<end>"
        ],
        answer: "<footer>"
    },

    {
        id: 22,
        question: "Which HTML element represents an independent piece of content?",
        options: [
            "<article>",
            "<content>",
            "<independent>",
            "<post>"
        ],
        answer: "<article>"
    },

    {
        id: 23,
        question: "Which HTML tag is used to define a section of content?",
        options: [
            "<part>",
            "<section>",
            "<division>",
            "<area>"
        ],
        answer: "<section>"
    },

    {
        id: 24,
        question: "Which declaration is used at the beginning of an HTML5 document?",
        options: [
            "<html5>",
            "<doctype html>",
            "<!DOCTYPE html>",
            "<document html>"
        ],
        answer: "<!DOCTYPE html>"
    },

    {
        id: 25,
        question: "Which HTML tag is used to define metadata about a document?",
        options: [
            "<meta>",
            "<data>",
            "<info>",
            "<metadata>"
        ],
        answer: "<meta>"
    },

    {
        id: 26,
        question: "Where is the title of an HTML document specified?",
        options: [
            "<header>",
            "<head>",
            "<title>",
            "<body>"
        ],
        answer: "<title>"
    },

    {
        id: 27,
        question: "Which tag is used to create a line break?",
        options: [
            "<break>",
            "<lb>",
            "<br>",
            "<newline>"
        ],
        answer: "<br>"
    },

    {
        id: 28,
        question: "Which HTML element is commonly used as a generic block-level container?",
        options: [
            "<span>",
            "<container>",
            "<div>",
            "<block>"
        ],
        answer: "<div>"
    },

    {
        id: 29,
        question: "Which HTML element is commonly used as a generic inline container?",
        options: [
            "<inline>",
            "<span>",
            "<div>",
            "<text>"
        ],
        answer: "<span>"
    },

    {
        id: 30,
        question: "Which attribute is used to uniquely identify an HTML element?",
        options: [
            "class",
            "id",
            "name",
            "key"
        ],
        answer: "id"
    },

    {
        id: 31,
        question: "Which attribute can be used to assign the same identifier to multiple elements for styling?",
        options: [
            "id",
            "class",
            "group",
            "style"
        ],
        answer: "class"
    },

    {
        id: 32,
        question: "Which HTML tag is used to create a dropdown list?",
        options: [
            "<dropdown>",
            "<list>",
            "<select>",
            "<option>"
        ],
        answer: "<select>"
    },

    {
        id: 33,
        question: "Which tag defines an option inside a dropdown list?",
        options: [
            "<choice>",
            "<option>",
            "<select-option>",
            "<item>"
        ],
        answer: "<option>"
    },

    {
        id: 34,
        question: "Which HTML attribute makes an input field mandatory?",
        options: [
            "mandatory",
            "required",
            "must",
            "validate"
        ],
        answer: "required"
    },

    // ==================== CSS ====================

    {
        id: 35,
        question: "What does CSS stand for?",
        options: [
            "Computer Style Sheets",
            "Cascading Style Sheets",
            "Creative Style System",
            "Colorful Style Sheets"
        ],
        answer: "Cascading Style Sheets"
    },

    {
        id: 36,
        question: "Which HTML tag is commonly used to link an external CSS file?",
        options: [
            "<css>",
            "<style>",
            "<link>",
            "<stylesheet>"
        ],
        answer: "<link>"
    },

    {
        id: 37,
        question: "Which CSS property changes the text color?",
        options: [
            "font-color",
            "text-color",
            "color",
            "foreground"
        ],
        answer: "color"
    },

    {
        id: 38,
        question: "Which CSS property changes the background color?",
        options: [
            "bgcolor",
            "background-color",
            "background",
            "color-background"
        ],
        answer: "background-color"
    },

    {
        id: 39,
        question: "Which CSS property changes the font size?",
        options: [
            "text-size",
            "font-size",
            "size",
            "font-height"
        ],
        answer: "font-size"
    },

    {
        id: 40,
        question: "Which CSS property makes text bold?",
        options: [
            "font-weight",
            "text-bold",
            "font-style",
            "bold"
        ],
        answer: "font-weight"
    },

    {
        id: 41,
        question: "Which CSS property is used to change the font family?",
        options: [
            "font-family",
            "font-type",
            "text-family",
            "typeface"
        ],
        answer: "font-family"
    },

    {
        id: 42,
        question: "Which CSS property is used to center-align text?",
        options: [
            "align-text",
            "text-align",
            "font-align",
            "align"
        ],
        answer: "text-align"
    },

    {
        id: 43,
        question: "Which CSS property controls the space inside an element's border?",
        options: [
            "margin",
            "padding",
            "spacing",
            "border-space"
        ],
        answer: "padding"
    },

    {
        id: 44,
        question: "Which CSS property controls the space outside an element's border?",
        options: [
            "padding",
            "margin",
            "outside-space",
            "spacing"
        ],
        answer: "margin"
    },

    {
        id: 45,
        question: "Which CSS property is used to add a border around an element?",
        options: [
            "outline",
            "border",
            "edge",
            "box-border"
        ],
        answer: "border"
    },

    {
        id: 46,
        question: "Which CSS property is used to make an element a flex container?",
        options: [
            "position: flex",
            "display: flex",
            "flex: display",
            "layout: flex"
        ],
        answer: "display: flex"
    },

    {
        id: 47,
        question: "Which CSS property controls the direction of flex items?",
        options: [
            "flex-direction",
            "direction",
            "flex-flow-direction",
            "item-direction"
        ],
        answer: "flex-direction"
    },

    {
        id: 48,
        question: "Which property aligns flex items along the main axis?",
        options: [
            "align-items",
            "justify-content",
            "align-content",
            "place-items"
        ],
        answer: "justify-content"
    },

    {
        id: 49,
        question: "Which property aligns flex items along the cross axis?",
        options: [
            "justify-content",
            "align-items",
            "flex-align",
            "cross-align"
        ],
        answer: "align-items"
    },

    {
        id: 50,
        question: "Which CSS property allows flex items to move onto multiple lines?",
        options: [
            "flex-wrap",
            "flex-lines",
            "wrap-items",
            "line-wrap"
        ],
        answer: "flex-wrap"
    },

    {
        id: 51,
        question: "Which CSS display value creates a grid container?",
        options: [
            "display: table",
            "display: grid",
            "grid: display",
            "display: box"
        ],
        answer: "display: grid"
    },

    {
        id: 52,
        question: "Which CSS property defines columns in CSS Grid?",
        options: [
            "grid-columns",
            "grid-template-columns",
            "columns-grid",
            "grid-column-layout"
        ],
        answer: "grid-template-columns"
    },

    {
        id: 53,
        question: "Which CSS property defines rows in CSS Grid?",
        options: [
            "grid-template-rows",
            "grid-rows",
            "rows-template",
            "grid-row-layout"
        ],
        answer: "grid-template-rows"
    },

    {
        id: 54,
        question: "Which CSS property controls the space between grid or flex items?",
        options: [
            "spacing",
            "gap",
            "item-space",
            "space-between"
        ],
        answer: "gap"
    },

    {
        id: 55,
        question: "Which CSS position value keeps an element fixed relative to the viewport?",
        options: [
            "absolute",
            "relative",
            "fixed",
            "sticky"
        ],
        answer: "fixed"
    },

    {
        id: 56,
        question: "Which CSS position value positions an element relative to its nearest positioned ancestor?",
        options: [
            "fixed",
            "absolute",
            "relative",
            "static"
        ],
        answer: "absolute"
    },

    {
        id: 57,
        question: "Which CSS position value allows an element to remain in its normal flow while being offset?",
        options: [
            "relative",
            "absolute",
            "fixed",
            "static"
        ],
        answer: "relative"
    },

    {
        id: 58,
        question: "Which CSS property controls which element appears on top when elements overlap?",
        options: [
            "stack",
            "z-index",
            "layer",
            "position-index"
        ],
        answer: "z-index"
    },

    {
        id: 59,
        question: "Which pseudo-class is used when the mouse pointer is over an element?",
        options: [
            ":active",
            ":focus",
            ":hover",
            ":visited"
        ],
        answer: ":hover"
    },

    {
        id: 60,
        question: "Which pseudo-class is commonly used when an input element is selected?",
        options: [
            ":hover",
            ":focus",
            ":checked",
            ":select"
        ],
        answer: ":focus"
    },

    {
        id: 61,
        question: "Which CSS property is used to round the corners of an element?",
        options: [
            "corner-radius",
            "border-radius",
            "radius",
            "box-radius"
        ],
        answer: "border-radius"
    },

    {
        id: 62,
        question: "Which CSS property is used to add a shadow around an element?",
        options: [
            "element-shadow",
            "box-shadow",
            "shadow",
            "border-shadow"
        ],
        answer: "box-shadow"
    },

    {
        id: 63,
        question: "Which CSS property is used to control an element's transparency?",
        options: [
            "transparent",
            "opacity",
            "visibility",
            "alpha"
        ],
        answer: "opacity"
    },

    {
        id: 64,
        question: "Which CSS property controls what happens when content overflows an element?",
        options: [
            "overflow",
            "content-flow",
            "over-content",
            "flow"
        ],
        answer: "overflow"
    },

    {
        id: 65,
        question: "Which CSS unit is relative to the root element's font size?",
        options: [
            "em",
            "rem",
            "px",
            "vh"
        ],
        answer: "rem"
    },

    {
        id: 66,
        question: "Which CSS unit is relative to the viewport width?",
        options: [
            "vh",
            "vw",
            "em",
            "rem"
        ],
        answer: "vw"
    },

    {
        id: 67,
        question: "Which CSS unit is relative to the viewport height?",
        options: [
            "vh",
            "vw",
            "em",
            "percent"
        ],
        answer: "vh"
    },

    {
        id: 68,
        question: "Which CSS rule is used to create responsive designs for different screen sizes?",
        options: [
            "@responsive",
            "@media",
            "@screen",
            "@device"
        ],
        answer: "@media"
    },

    // ==================== JAVASCRIPT ====================

    {
        id: 69,
        question: "What is JavaScript primarily used for on web pages?",
        options: [
            "Creating database tables",
            "Adding interactivity and dynamic behavior",
            "Styling HTML elements",
            "Creating only page structure"
        ],
        answer: "Adding interactivity and dynamic behavior"
    },

    {
        id: 70,
        question: "Which keyword can be used to declare a block-scoped variable that can be reassigned?",
        options: [
            "var",
            "let",
            "const",
            "define"
        ],
        answer: "let"
    },

    {
        id: 71,
        question: "Which keyword is used to declare a variable whose binding cannot be reassigned?",
        options: [
            "let",
            "var",
            "const",
            "static"
        ],
        answer: "const"
    },

    {
        id: 72,
        question: "Which keyword was traditionally used to declare variables in JavaScript?",
        options: [
            "variable",
            "var",
            "let",
            "declare"
        ],
        answer: "var"
    },

    {
        id: 73,
        question: "Which operator is used for strict equality comparison?",
        options: [
            "==",
            "=",
            "===",
            "!=="
        ],
        answer: "==="
    },

    {
        id: 74,
        question: "Which operator is used for strict inequality comparison?",
        options: [
            "!=",
            "!==",
            "<>",
            "not="
        ],
        answer: "!=="
    },

    {
        id: 75,
        question: "Which symbol is used for a single-line comment in JavaScript?",
        options: [
            "<!--",
            "//",
            "##",
            "**"
        ],
        answer: "//"
    },

    {
        id: 76,
        question: "Which data type represents true or false values?",
        options: [
            "String",
            "Number",
            "Boolean",
            "Object"
        ],
        answer: "Boolean"
    },

    {
        id: 77,
        question: "Which data type is used to store text in JavaScript?",
        options: [
            "Text",
            "String",
            "Character",
            "Word"
        ],
        answer: "String"
    },

    {
        id: 78,
        question: "Which data type is used to represent numeric values?",
        options: [
            "Number",
            "Integer",
            "Numeric",
            "Float"
        ],
        answer: "Number"
    },

    {
        id: 79,
        question: "Which JavaScript value represents the intentional absence of an object value?",
        options: [
            "undefined",
            "empty",
            "null",
            "none"
        ],
        answer: "null"
    },

    {
        id: 80,
        question: "Which value is automatically assigned to a declared variable that has not been given a value?",
        options: [
            "null",
            "undefined",
            "empty",
            "NaN"
        ],
        answer: "undefined"
    },

    {
        id: 81,
        question: "Which method is used to print information to the browser console?",
        options: [
            "print()",
            "console.log()",
            "display()",
            "log.console()"
        ],
        answer: "console.log()"
    },

    {
        id: 82,
        question: "Which method converts a string containing JSON into a JavaScript object?",
        options: [
            "JSON.parse()",
            "JSON.convert()",
            "JSON.object()",
            "JSON.read()"
        ],
        answer: "JSON.parse()"
    },

    {
        id: 83,
        question: "Which method converts a JavaScript object into a JSON string?",
        options: [
            "JSON.convert()",
            "JSON.stringify()",
            "JSON.parse()",
            "JSON.toString()"
        ],
        answer: "JSON.stringify()"
    },

    {
        id: 84,
        question: "Which method adds an element to the end of an array?",
        options: [
            "push()",
            "add()",
            "append()",
            "insert()"
        ],
        answer: "push()"
    },

    {
        id: 85,
        question: "Which method removes the last element from an array?",
        options: [
            "delete()",
            "remove()",
            "pop()",
            "shift()"
        ],
        answer: "pop()"
    },

    {
        id: 86,
        question: "Which method removes the first element from an array?",
        options: [
            "pop()",
            "shift()",
            "removeFirst()",
            "deleteFirst()"
        ],
        answer: "shift()"
    },

    {
        id: 87,
        question: "Which method adds an element to the beginning of an array?",
        options: [
            "push()",
            "addFirst()",
            "unshift()",
            "prepend()"
        ],
        answer: "unshift()"
    },

    {
        id: 88,
        question: "Which array method creates a new array containing elements that satisfy a condition?",
        options: [
            "map()",
            "filter()",
            "find()",
            "reduce()"
        ],
        answer: "filter()"
    },

    {
        id: 89,
        question: "Which array method executes a function once for each element?",
        options: [
            "forEach()",
            "each()",
            "loop()",
            "iterate()"
        ],
        answer: "forEach()"
    },

    {
        id: 90,
        question: "Which array method creates a new array by transforming every element?",
        options: [
            "filter()",
            "map()",
            "forEach()",
            "change()"
        ],
        answer: "map()"
    },

    {
        id: 91,
        question: "Which method is commonly used to find the first element that satisfies a condition?",
        options: [
            "search()",
            "find()",
            "filter()",
            "locate()"
        ],
        answer: "find()"
    },

    {
        id: 92,
        question: "Which DOM method selects an element using its ID?",
        options: [
            "document.query()",
            "document.getElementById()",
            "document.selectId()",
            "document.getId()"
        ],
        answer: "document.getElementById()"
    },

    {
        id: 93,
        question: "Which DOM method can select an element using a CSS selector?",
        options: [
            "document.querySelector()",
            "document.getSelector()",
            "document.selectCSS()",
            "document.findSelector()"
        ],
        answer: "document.querySelector()"
    },

    {
        id: 94,
        question: "Which property is commonly used to change the text content of an element?",
        options: [
            "textContent",
            "textValue",
            "innerTextContent",
            "contentText"
        ],
        answer: "textContent"
    },

    {
        id: 95,
        question: "Which method is used to create a new HTML element using JavaScript?",
        options: [
            "document.newElement()",
            "document.createElement()",
            "document.addElement()",
            "document.makeElement()"
        ],
        answer: "document.createElement()"
    },

    {
        id: 96,
        question: "Which method is used to attach an event handler to an element?",
        options: [
            "addEventListener()",
            "addEvent()",
            "attachEventListener()",
            "eventListener()"
        ],
        answer: "addEventListener()"
    },

    {
        id: 97,
        question: "Which event occurs when a user clicks an element?",
        options: [
            "hover",
            "change",
            "click",
            "press"
        ],
        answer: "click"
    },

    {
        id: 98,
        question: "Which event is commonly used when a form is submitted?",
        options: [
            "send",
            "submit",
            "formSubmit",
            "enter"
        ],
        answer: "submit"
    },

    {
        id: 99,
        question: "Which browser storage mechanism stores data as key-value pairs and persists after the browser is closed?",
        options: [
            "sessionStorage",
            "localStorage",
            "browserMemory",
            "cookieStorage"
        ],
        answer: "localStorage"
    },

    {
        id: 100,
        question: "Which JavaScript function generates a pseudo-random number between 0 and 1?",
        options: [
            "Math.random()",
            "Math.number()",
            "Random.generate()",
            "Math.randomNumber()"
        ],
        answer: "Math.random()"
    }

];
let quesnum= document.createElement('h3');
const qnum=document.getElementById("qnum");
qnum.append(quesnum);
let quizQuestion = [];
let selectedIndex = [];
let userAnswers = {};
isFinish = false;

for (let i = 0; i < 15; i++) {
    let index = Math.floor(Math.random() * questions.length);
    while (selectedIndex.includes(index)) {
        index = Math.floor(Math.random() * questions.length);
    }
    selectedIndex.push(index);
    quizQuestion[i] = questions[selectedIndex[i]];
}
let currentQuestionIndex = 0;
const startBut = document.createElement('button');
startBut.className="navigate";
startBut.id="Start";
startBut.textContent = "Start";
mainBox.append(startBut);

function displayQues(currentQuestionIndex) {
    let progress = ((currentQuestionIndex + 1) / 15) * 100;
    progressBar.style.width = progress + "%";
    quesnum.textContent=`Question ${currentQuestionIndex+1} of 15`;
    
    quesBox.textContent = quizQuestion[currentQuestionIndex].question;

    optionsBox.innerHTML = "";

    quizQuestion[currentQuestionIndex].options.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option;
        optionsBox.append(btn);
         if (userAnswers[quizQuestion[currentQuestionIndex].id] === option) {
        btn.classList.add("selected");
    }
        btn.addEventListener('click',(e)=>{
            optionsBox.querySelectorAll("button").forEach(button => {
        button.classList.remove("selected");
    });
            e.target.classList.add("selected");
            let selectedAns= e.target.textContent;
            userAnswers[quizQuestion[currentQuestionIndex].id] = selectedAns;
           
        })
    });
}

progress.style.opacity=0;
startBut.addEventListener('click', () => {
    startBut.remove();
    progress.style.opacity=1;
    displayQues(currentQuestionIndex);

    const nextBut = document.createElement('button');
    nextBut.className="navigate";
    nextBut.textContent = "Next";

    nextBut.addEventListener('click', () => {
      
        if(isFinish)
        {
            def.style.opacity=0;
            prevBut.textContent="Restart";
            calculateScore();
            return;
        }
        
        currentQuestionIndex++;
          if(currentQuestionIndex>14)
        {
            currentQuestionIndex=currentQuestionIndex-1;
        }
        displayQues(currentQuestionIndex);

        if(currentQuestionIndex===14){
            nextBut.textContent="Finish";
            isFinish = true;
        }
         
       
    })

    const prevBut = document.createElement('button');
    prevBut.className="navigate";
    prevBut.textContent = "Back";

    prevBut.addEventListener('click', () => {
        if(currentQuestionIndex>0){
        currentQuestionIndex--;
        displayQues(currentQuestionIndex);
        }
        if(isFinish){
            resultBox.style.opacity=0;
            def.style.opacity=1;
             userAnswers = {}; 
            currentQuestionIndex=0;
            displayQues(currentQuestionIndex);
            prevBut.textContent="Back";
             nextBut.textContent="Next";
            isFinish=false;
        }
    })
    navOpt.append(prevBut, nextBut);
})
 
const resultBox=document.createElement('div');
            resultBox.id="resultBox";
function calculateScore(){
    isFinish=true;
    let score=0;
    for(let id in userAnswers)
    {
        let uans= userAnswers[id];
        for(let index = 0; index < quizQuestion.length; index++)
        {
            if(id == quizQuestion[index].id)
            {
                let correctans= quizQuestion[index].answer;
                if(uans===correctans){
                    score++;
                }
            }
        }
    }
    resultBox.textContent=`Your total score is ${score} out of 15`;
    resultBox.style.opacity=1;
    const msg =document.createElement('p');
    msg.id="msg";
    if(score<=0){
msg.textContent="Try Once More You can do it";
    }
    else if(score<7){
    msg.textContent="Keep it up! You are doing Great";
    }
    else{
        msg.textContent="Hurray! You got";
    }
    resultBox.append(msg);
mainBox.append(resultBox);
    
}

