import "./menu.scss";
import cheeseBurger from "../../assets/burger.jpg";
import doubleCheeseBurger from "../../assets/double-cheese-burger.jpg";
import fries from "../../assets/fries.jpg";
import flavoredFries from "../../assets/flavored-fries.jpg";
import iceTea from "../../assets/ice-tea.jpg";

const Menu = () => {
  const menu = document.createElement("section");
  menu.classList.add("menu");
  menu.dataset.id = "menu";

  const menuTitle = document.createElement("h2");
  menuTitle.textContent = "Menu";
  menuTitle.classList.add("menu-title");

  const menuList = document.createElement("ul");

  const firstMenuItem = document.createElement("li");
  const firstMenuImage = document.createElement("img");
  firstMenuImage.src = cheeseBurger;
  firstMenuImage.alt = "Cheese Burger";
  firstMenuImage.classList.add("menu-item-image");

  const firstMenuText = document.createElement("div");
  const firstMenuItemName = document.createElement("p");

  firstMenuItemName.textContent = "Cheese Burger";
  firstMenuItemName.classList.add("menu-item-name");

  const firstMenuItemPrice = document.createElement("span");
  firstMenuItemPrice.textContent = "₱100";
  firstMenuItemPrice.classList.add("menu-item-price");

  const firstMenuItemDescription = document.createElement("p");
  firstMenuItemDescription.textContent = "Our best seller the classic cheese burger";

  const firstMenuItemPriceNameContainer = document.createElement("div");
  firstMenuItemPriceNameContainer.classList.add("menu-name-price-container");
  firstMenuItemPriceNameContainer.appendChild(firstMenuItemName);
  firstMenuItemPriceNameContainer.appendChild(firstMenuItemPrice);

  firstMenuText.appendChild(firstMenuItemPriceNameContainer);
  firstMenuText.appendChild(firstMenuItemDescription);
  firstMenuItem.appendChild(firstMenuImage);
  firstMenuItem.appendChild(firstMenuText);

  const secondMenuItem = document.createElement("li");
  const secondMenuImage = document.createElement("img");
  secondMenuImage.src = doubleCheeseBurger;
  secondMenuImage.alt = "Double Cheese Burger";
  secondMenuImage.classList.add("menu-item-image");

  const secondMenuText = document.createElement("div");
  const secondMenuItemName = document.createElement("p");

  secondMenuItemName.textContent = "Double Cheese Burger";
  secondMenuItemName.classList.add("menu-item-name");

  const secondMenuItemPrice = document.createElement("span");
  secondMenuItemPrice.textContent = "₱150";
  secondMenuItemPrice.classList.add("menu-item-price");

  const secondMenuItemDescription = document.createElement("p");
  secondMenuItemDescription.textContent =
    "What's better than one cheese burger? A double cheese burger";

  const secondMenuItemPriceNameContainer = document.createElement("div");
  secondMenuItemPriceNameContainer.classList.add("menu-name-price-container");
  secondMenuItemPriceNameContainer.appendChild(secondMenuItemName);
  secondMenuItemPriceNameContainer.appendChild(secondMenuItemPrice);

  secondMenuText.appendChild(secondMenuItemPriceNameContainer);
  secondMenuText.appendChild(secondMenuItemDescription);
  secondMenuItem.appendChild(secondMenuImage);
  secondMenuItem.appendChild(secondMenuText);

  menuList.appendChild(firstMenuItem);
  menuList.appendChild(secondMenuItem);

  const thirdMenuItem = document.createElement("li");
  const thirdMenuImage = document.createElement("img");
  thirdMenuImage.src = fries;
  thirdMenuImage.alt = "Fries";
  thirdMenuImage.classList.add("menu-item-image");

  const thirdMenuText = document.createElement("div");
  const thirdMenuItemName = document.createElement("p");

  thirdMenuItemName.textContent = "Fries";
  thirdMenuItemName.classList.add("menu-item-name");

  const thirdMenuItemPrice = document.createElement("span");
  thirdMenuItemPrice.textContent = "₱60";
  thirdMenuItemPrice.classList.add("menu-item-price");

  const thirdMenuItemDescription = document.createElement("p");
  thirdMenuItemDescription.textContent =
    "Best plain salted fries you will ever taste.";

  const thirdMenuItemPriceNameContainer = document.createElement("div");
  thirdMenuItemPriceNameContainer.classList.add("menu-name-price-container");
  thirdMenuItemPriceNameContainer.appendChild(thirdMenuItemName);
  thirdMenuItemPriceNameContainer.appendChild(thirdMenuItemPrice);

  thirdMenuText.appendChild(thirdMenuItemPriceNameContainer);
  thirdMenuText.appendChild(thirdMenuItemDescription);
  thirdMenuItem.appendChild(thirdMenuImage);
  thirdMenuItem.appendChild(thirdMenuText);

  const fourthMenuItem = document.createElement("li");
  const fourthMenuImage = document.createElement("img");
  fourthMenuImage.src = flavoredFries;
  fourthMenuImage.alt = "Flavored Fries";
  fourthMenuImage.classList.add("menu-item-image");

  const fourthMenuText = document.createElement("div");
  const fourthMenuItemName = document.createElement("p");

  fourthMenuItemName.textContent = "Flavored Fries";
  fourthMenuItemName.classList.add("menu-item-name");

  const fourthMenuItemPrice = document.createElement("span");
  fourthMenuItemPrice.textContent = "₱75";
  fourthMenuItemPrice.classList.add("menu-item-price");

  const fourthMenuItemDescription = document.createElement("p");
  fourthMenuItemDescription.textContent =
    "Tired of plain fries? Choose the flavored fries instead it comes in 3 flavors(barbecue, sour cream, cheese)";

  const fourthMenuItemPriceNameContainer = document.createElement("div");
  fourthMenuItemPriceNameContainer.classList.add("menu-name-price-container");
  fourthMenuItemPriceNameContainer.appendChild(fourthMenuItemName);
  fourthMenuItemPriceNameContainer.appendChild(fourthMenuItemPrice);

  fourthMenuText.appendChild(fourthMenuItemPriceNameContainer);
  fourthMenuText.appendChild(fourthMenuItemDescription);
  fourthMenuItem.appendChild(fourthMenuImage);
  fourthMenuItem.appendChild(fourthMenuText);

  const fifthMenuItem = document.createElement("li");
  const fifthMenuImage = document.createElement("img");
  fifthMenuImage.src = iceTea;
  fifthMenuImage.alt = "Ice Tea";
  fifthMenuImage.classList.add("menu-item-image");

  const fifthMenuText = document.createElement("div");
  const fifthMenuItemName = document.createElement("p");

  fifthMenuItemName.textContent = "Ice Tea";
  fifthMenuItemName.classList.add("menu-item-name");

  const fifthMenuItemPrice = document.createElement("span");
  fifthMenuItemPrice.textContent = "₱75";
  fifthMenuItemPrice.classList.add("menu-item-price");

  const fifthMenuItemDescription = document.createElement("p");
  fifthMenuItemDescription.textContent =
    "A refreshing drink to pair with our cheese burger blended ice tea";

  const fifthMenuItemPriceNameContainer = document.createElement("div");
  fifthMenuItemPriceNameContainer.classList.add("menu-name-price-container");
  fifthMenuItemPriceNameContainer.appendChild(fifthMenuItemName);
  fifthMenuItemPriceNameContainer.appendChild(fifthMenuItemPrice);

  fifthMenuText.appendChild(fifthMenuItemPriceNameContainer);
  fifthMenuText.appendChild(fifthMenuItemDescription);
  fifthMenuItem.appendChild(fifthMenuImage);
  fifthMenuItem.appendChild(fifthMenuText);

  menuList.appendChild(firstMenuItem);
  menuList.appendChild(secondMenuItem);
  menuList.appendChild(thirdMenuItem);
  menuList.appendChild(fourthMenuItem);
  menuList.appendChild(fifthMenuItem);
  menu.appendChild(menuTitle);
  menu.appendChild(menuList);

  return menu;
};

export { Menu };
