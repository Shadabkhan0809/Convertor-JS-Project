const from=document.getElementById("from")
console.log(from)
const to=document.getElementById("to")
const inputNumber=document.getElementById("input-number")
const resultBox=document.getElementById("result-box")

document.getElementById("convert").addEventListener("click",()=>{
 
    let fromValue=from.value
    let toValue=to.value
    let inputValue=inputNumber.value

    let result = convertBase(fromValue,toValue,inputValue)
    resultBox.innerText = result
})


function convertBase(fromBase,toBase,num){
    let d=parseInt(num,fromBase) //  convert num into base 10 
    let res=d.toString(toBase)   // convert base10 to require base 
    return res;
}

document.getElementById("swap").addEventListener("click",()=>{
    let temp = from.value
    from.value = to.value
    to.value = temp
})