const textareaE1 = document.getElementById("textarea");
const totalCounterE1 = document.getElementById("total-counter");
const remainingCounterE1 = document.getElementById("remaining-counter");
textareaE1.addEventListener("input", ()=>{
    upadateCounter();
})
upadateCounter()
function upadateCounter(){
    totalCounterE1.innerText = textareaE1.value.length;
    remainingCounterE1.innerText = textareaE1.getAttribute("maxlength") - textareaE1.value.length;
}
