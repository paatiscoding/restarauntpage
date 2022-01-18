import { loadHeader } from "./header";

export function loadMenu() {
    const content = document.querySelector('#content');
    content.innerHTML = "<div id=\"container\"></div>";
    loadHeader();
    const menu = document.createElement('div');
    menu.setAttribute('class', 'menu');
    menu.innerHTML = "<section><table><caption><strong>Menu</strong></caption><tr><th>Picture</th><th>Name</th><th>Price</th></tr><tr><td><img src='../dist/assets/img/ramen1.jpg'></td><td>Shoyu Ramen</td><td>$14.99</td></tr><tr><td><img src='../dist/assets/img/ramen2.jpg'></td><td>Chashu Ramen</td><td>$16.99</td></tr></table></section>";
    content.append(menu);
}