import { About } from "../about/about";
import { Contact } from "../contact/contact";
import { Menu } from "../menu/menu";

import "./content.scss";

const Content = () => {
  const content = document.createElement("div");
  content.classList.add('content');
  content.appendChild(Menu())
  const contact = Contact();
  contact.classList.add("hidden");
  content.appendChild(contact)
  const about = About()
  about.classList.add("hidden");
  content.appendChild(about)
  return content;
};

export { Content };
