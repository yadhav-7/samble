
function btnclick(num){
        document.getElementById("output").value+=num
}

function AC(){
    document.getElementById("output").value=""
}

function equelbtn(){
    var text=document.getElementById("output").value
    var result=eval(text)
    document.getElementById("output").value=result
}
