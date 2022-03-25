import "./nav.scss";

const Nav = () => {
  const nav = document.createElement("nav");
  nav.classList.add("nav");

  const navList = document.createElement("ul");
  navList.classList.add("nav-list");

  const menu = document.createElement("li");
  menu.textContent = "Menu";
  menu.dataset.id = "menu";
  menu.classList.add("nav-list-item");
  const contact = document.createElement("li");
  contact.textContent = "Contact";
  contact.dataset.id = "contact";
  contact.classList.add("nav-list-item");
  const about = document.createElement("li");
  about.textContent = "About Us";
  about.dataset.id = "about"
  about.classList.add("nav-list-item");

  navList.appendChild(menu);
  navList.appendChild(contact);
  navList.appendChild(about);

  nav.appendChild(navList);

  return nav;
};

const navTabSwitch = () => {
  const navItems = document.querySelectorAll(".nav-list-item");

  navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
      const content = document.querySelector(".content");
      
      if (content.hasChildNodes()) {
        let childNodes = content.childNodes;
        for (let i = 0; i < childNodes.length; i++) {
          if (childNodes[i].dataset.id !== navItem.dataset.id) {
            childNodes[i].classList.add("hidden"); 
          } else {
            childNodes[i].classList.remove("hidden");
          }
        }
      }
    });
  });
};

export { Nav, navTabSwitch };
