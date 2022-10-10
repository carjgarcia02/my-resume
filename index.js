
const setDarkTheme = () => {

    let icon = document.getElementById("icon");
    
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "./img/sun.png";
    } else {
        icon.src = "./img/moon.jpg";
    }
}