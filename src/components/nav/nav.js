import "./nav.scss";

const Nav = () => {
  const nav = document.createElement("nav");
  nav.classList.add("nav");

  const navList = document.createElement("ul");
  navList.classList.add("nav-list");

  const menu = document.createElement("li");
  menu.textContent = "Menu";
  const contact = document.createElement("li");
  contact.textContent = "Contact";
  const aboutUs = document.createElement("li");
  aboutUs.textContent = "About Us";

  navList.appendChild(menu);
  navList.appendChild(contact);
  navList.appendChild(aboutUs);

  nav.appendChild(navList);

  return nav;
};

export { Nav };
