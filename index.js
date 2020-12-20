
function clickHandler(){
     var url="https://api.funtranslations.com/translate/minion.json?text="+inputarea.value;
    // var url="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text="+inputarea.value;
    fetch(url).then(response=>response.json()).then(json=>{
        outputarea.innerText=json.contents.translated;

    })


}

var heading=document.querySelector('h1');
var inputarea=document.querySelector('#input');
var outputarea=document.querySelector('#output');
var btn=document.querySelector("button");

btn.addEventListener("click",clickHandler);
