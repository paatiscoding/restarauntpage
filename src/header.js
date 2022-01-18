import {loadMenu} from './menu.js'
import {loadHome} from './home.js'
import {loadContact} from './contact.js'

export function loadHeader () {
    const content = document.querySelector('#content');
    const header =  document.createElement('div');
    header.innerHTML = "<header><h1>Tetsuuya Ramen</h1><h2>東京で最高のラーメンレストランへようこそ。世界最高のラーメンシェフの本拠地。</h2><nav><ul><li class=\"home\">Home</li><li class=\"menu\">Menu</li><li class=\"contact\">Contact</li></ul></nav></header>";
    content.append(header);
    const home = document.querySelector(".home");
    const menu = document.querySelector(".menu");
    const contact = document.querySelector(".contact");
    home.addEventListener('click', loadHome);
    menu.addEventListener('click', loadMenu);
    contact.addEventListener('click', loadContact);
    
    
}


