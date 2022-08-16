const navbars=document.querySelectorAll(".navbar li");
const contents=document.querySelectorAll(".contents div");
navbars.forEach(tab => {
    tab.addEventListener("click",function(){
    document.querySelector(".col-1.active").classList.remove("active");
    tab.classList.add("active")
        contents.forEach(content => {
            if(content.getAttribute("data-content")==tab.getAttribute("data-target")){
                content.classList.remove("d-none");
            }else{
                content.classList.add("d-none")
            }
        });
    })
});