//Function to link open the next div
const onClick = (divId, linkId) => {
    let showDiv = document.getElementById(divId);
    let link = document.getElementById(linkId);

    link.addEventListener("click", function () {
        showDiv.style.display = "block";
    }); 
}

onClick("div1", "link1");

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



//Does not work :(
// function to copy the snippet of code
// function copySnippet (codeSnippetId, copyButtonId) {
//     let codeSnippet = document.getElementById(codeSnippetId).innerHTML
//     let copyButton = document.getElementById(copyButtonId)

//     copyButton.addEventListener("click", function() {
//         codeSnippet.select()
//         document.execCommand("copy")
//     })
// }

// copySnippet ("codeSnippet1", "copySnippet1");


//Scroll into view
// let div2 = document.getElementById("div2");
// div2.addEventListener("click", function() {
//     div2.scrollIntoView()
// });
