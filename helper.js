function run_id(code_id, result_id) {
    const code = document.getElementById(code_id);
    const result = document.getElementById(result_id);
    result.innerText = Z3.solve(code.value)
}

window.onload = function () {

    // Grab all pre elements and replace them with textarea button results combo
    var examples = document.getElementsByTagName("pre");
    console.log(examples)
    examples = Array.from(examples)
    for (let code of examples) {
        let div = document.createElement("div");

        let ta = document.createElement("textarea");
        let result = document.createElement("code");

        let button = document.createElement("button");
        let br = document.createElement("br");

        ta.style.width = "100%";
        ta.innerHTML = code.textContent.replace(/\r?\n/g, '\r\n');
        //code.parentNode.replaceChild(ta, code);
        button.innerText = "Solve"
        button.onclick = () => {
            let res = Z3.solve(ta.value);
            console.log(res)
            result.innerText = res;
        }
        div.appendChild(ta);
        div.appendChild(button);
        div.appendChild(br);
        div.appendChild(result);
        code.parentNode.replaceChild(div, code);
    }

    // destroy aref that do nothing now
    var badlinks = document.getElementsByTagName('a');
    for (var i = 0; i < badlinks.length; i++) {
        link = badlinks[i]
        if (link.innerHTML == "load in editor") {
            link.innerHTML = ""
            //link.remove()

        }
    }

    // resize rows of all textarea to fits code 
    var inputs = document.getElementsByTagName('textarea');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].rows = inputs[i].value.split(/\r\n|\r|\n/).length - 1
    }

}