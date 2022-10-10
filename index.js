
const setDarkTheme = () => {

    let icon = document.getElementById("icon");
    
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "./img/sun.png";
        icon.style.border = "2px solid #f8a805";
        icon.style.title = "Switch to normal mode"
    } else {
        icon.src = "./img/moon.jpg";
        icon.style.border = "2px solid black";
        icon.style.title = "Switch to dark mode"
    }
}