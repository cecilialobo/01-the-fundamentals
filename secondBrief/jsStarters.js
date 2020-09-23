//Makes the links open the next div
// let showDiv1 = document.querySelector("#div1")
// let link1 = document.getElementById("link1")

// link1.addEventListener("click", function () {
//     showDiv1.style.display = "block";
// });

// //Function to apply the code to all the divs
const onClick = (divId, linkId) => {
    let showDiv = document.getElementById(divId);
    let link = document.getElementById(linkId);

    link.addEventListener("click", function () {
        showDiv.style.display = "block";
    }); 
}

onClick("div1", "link1");

//Identify the code snippet
// const buttonToCheck = document.querySelector("#checkCode1");
// buttonToCheck.addEventListener("click", function getInputValue(){
//     // Selecting the input element and get its value 
//     let inputVal = document.querySelector("#input1").value;
//     let showDiv = document.querySelector("#div2")
//     if (inputVal == 'console.log ("Hello, World!")') {
//         showDiv.style.display = "block"   
//     }
// });

//Function to apply code snippet identifier to all divs
function checkCode (buttonId, codeSnippetId, showId, inputId) {
    let buttonToCheck = document.getElementById(buttonId)
    buttonToCheck.addEventListener("click", function getInputValue() {
        
        let codeSnippet = document.getElementById(codeSnippetId).innerHTML
        let show = document.getElementById(showId)
        let inputVal = document.getElementById(inputId).value;
        if (inputVal == codeSnippet) {
            eval(codeSnippet)
            show.style.display = "block"
        }
    })
}

checkCode ("checkCode1", "codeSnippet1", "p1", "input1");

onClick("div2", "link2");

checkCode ("checkCode2", "codeSnippet2", "div3", "input2");

checkCode ("checkCode3", "codeSnippet3", "div4", "input3");

onClick ("div5", "link3");

onClick ("div6", "link4");


// function to copy the snippet of code
// function copySnippet (codeSnippetId, copySnippetId) {
//     let codeSnippet = document.getElementById(codeSnippetId).innerHTML
//     let copySnippet = document.getElementById(copySnippetId)

//     copySnippet.addEventListener("click", function() {
//         codeSnippet.select()
//         document.execCommand("copy")
//     })
// }

// copySnippet ("codeSnippet1", "copySnippet1");


function myFunction() {
    let copySnippet = document.getElementById("copySnippet1")
    let copyText = document.getElementById("codeSnippet1");

    copySnippet.addEventListener ("click", function() {
        copyText.select();
        document.execCommand("copy");
    })
}

myFunction();


//Does not work :(
// let div2 = document.getElementById("div2");
// div2.addEventListener("click", function() {
//     div2.scrollIntoView()
// });
