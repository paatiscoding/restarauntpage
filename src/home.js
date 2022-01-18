import { loadHeader } from "./header";

export function loadHome(){
    const content = document.querySelector('#content');
    content.innerHTML = "<div id=\"container\"></div>";
    loadHeader();
    const home = document.createElement('div');
    home.setAttribute('class', 'hero');
    home.innerHTML = "<section><img src='../dist/assets/img/ramen3.jpg'></section>";
    content.append(home);
}