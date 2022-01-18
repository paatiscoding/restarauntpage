import { loadHeader } from "./header";

export function loadContact() {
    const content = document.querySelector('#content');
    content.innerHTML = "<div id=\"container\"></div>";
    loadHeader();
    const contact = document.createElement('div');
    contact.setAttribute('class', 'menu');
    contact.innerHTML = "<section><h1>Contact Us</h1><p>To book, cancel, or amend a reservation, please send a direct email to info@tetsuuyasramen or call us on 9702 5555</p><h4>For all media enquiries, please call our restaraunt number</h4></section>";
    content.append(contact);
}