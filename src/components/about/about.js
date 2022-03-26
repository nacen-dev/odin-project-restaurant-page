import "./about.scss";

const About = () => {
  const about = document.createElement("div");
  about.classList.add("about");
  about.dataset.id = "about";

  const aboutHeading = document.createElement("h2");
  aboutHeading.classList.add("about-heading");
  aboutHeading.textContent = "About Us";

  const aboutFirstParagraph = document.createElement("p");
  aboutFirstParagraph.classList.add("about-text-content");
  aboutFirstParagraph.textContent = `Burg & Fraiz is a burger restaurant that produces one of the best cheeseburgers and fries in the world. 
  We started an idea and we worked on it and eventually produced the burger that you are waiting for. 
  
  . `;

  const aboutSecondParagraph = document.createElement("p");
  aboutSecondParagraph.classList.add("about-text-content");
  aboutSecondParagraph.textContent = `Burg & Fraiz produces fresh and clean food, we are certified with safety and quality making sure what you eat is safe and delicious`;

  about.appendChild(aboutHeading);
  about.appendChild(aboutFirstParagraph);
  about.appendChild(aboutSecondParagraph);

  return about;
};

export { About };
