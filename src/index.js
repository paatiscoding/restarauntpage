import {loadHeader} from './header.js'
import {loadMenu} from './menu.js'
import {loadHome} from './home.js'
import {loadContact} from './contact.js'

loadHeader();
loadHome();

const home = document.querySelector(".home");
const menu = document.querySelector(".menu");
const contact = document.querySelector(".contact");
home.addEventListener('click', loadHome);
menu.addEventListener('click', loadMenu);
contact.addEventListener('click', loadContact);

//loadMenu();

