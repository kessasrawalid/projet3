var select= document.getElementById("select");
var textarea= document.getElementById("textarea");
var textarearesult= document.getElementById("textarearesult");


 function chiff(){
    if(select.value=="coder"){
        textarearesult.value=atob(textarea.value);
    }else if(select.value=="decoder"){
        textarearesult.value=btoa(textarea.value);
    }
}

select.addEventListener("change",()=>{
    chiff()
});


textarea.addEventListener("input",()=>{
    chiff();
});