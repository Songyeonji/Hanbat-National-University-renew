function myFunction() {
    let elem = document.querySelectorAll(".drop-down");

    elem.forEach(element=>{
        element.addEventListener("click", e =>{
            console.log(e.target.innerHTML);
        });
    })
}

myFunction();