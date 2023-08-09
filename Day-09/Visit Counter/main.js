const Count  = document.getElementsByClassName("website-counter")[0]
const Button = document.getElementById("reset");
let visitCount = localStorage.getItem("page_view")


// Check if page_view entry is present

if(visitCount){

    visitCount = Number(visitCount) + 1;
    localStorage.setItem("page_view",visitCount)

} else{
    visitCount =0;
    localStorage.setItem("page_view",0)
}
Count.innerHTML = visitCount;

// Adding onClick event listener

Button.addEventListener("click", () => {
    visitCount =1;
    localStorage.setItem("page_view",0)
   

});




