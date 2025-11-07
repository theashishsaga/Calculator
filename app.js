function appendNumber(num){
    const display=document.getElementById('display');
    display.value+=num;
}
function clearDisplay(){
    const display=document.getElementById('display');
    display.value='';
}
function deleteLast(){
    const display=document.getElementById('display');
    display.value=display.value.slice(0,-1);
}
function calculateResult(){
    const display=document.getElementById('display');
    try {
    const result = eval(display.value);
    display.value = Number(result).toLocaleString('en-IN');
  } catch {
    display.value = 'Error';
  }
}