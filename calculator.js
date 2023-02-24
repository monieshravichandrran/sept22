function entry(value) {
    const result = document.getElementById("result");
    if(value=="="){
        const answer = eval(result.value);
        console.log("Result is :", answer);
        result.value = answer;
        return;
    }
    if(value=="x"){
        result.value += "*";
        return;
    }
    console.log(value,"button is clicked");
    result.value += value;
}