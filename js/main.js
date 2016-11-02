var a, b, result;


function setValues() {

a = Number(document.getElementById("a").value);
b = Number(document.getElementById("b").value);
    
}

function plus() {
    
    setValues();
    result = a+ b;
    
    alert("THE RESULT IS" +" "+ result);
    
}

function minus() {
    
    setValues();
    result = a- b;
    
    alert("THE RESULT IS" +" "+ result);
    
}

function krat() {
    
    setValues();
    result = a* b;
    
    alert("THE RESULT IS" +" "+ result);
    
}

function deljeno() {
    
    setValues();
    result = a/ b;
    
    alert("THE RESULT IS" +" "+ result);
    
}