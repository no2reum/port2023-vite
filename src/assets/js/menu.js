export function menu() {
    const headerToggle = document.getElementById("headerToggle"); /* getelementid-철자틀려서 js가 제대로 작동하지 않았음(헤더만들기 중) */
    const headerNav = document.querySelector(".header__nav");

    if(headerToggle){
        headerToggle.addEventListener("click", () => {
        headerNav.classList.toggle("show");

       headerToggle.getAttribute("aria-expanded")  === "true" 
       ? headerToggle.setAttribute("aria-expanded", "false") 
       : headerToggle.setAttribute("aria-expanded", "true")
    });
    }
}