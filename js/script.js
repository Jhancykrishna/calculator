function displaybox(num){
    inpt.value+=num;
}
function evaluateexp(){

    let result=eval(inpt.value)
    inpt.value=result
}
function clearbox(){
    inpt.value=" "
} 
function backspace(){
    inpt.value=inpt.value.slice(0,-1)

}  