import "./contact.scss";

const Contact = () => {
  const contact = document.createElement("div");
  contact.classList.add("contact");
  contact.dataset.id = "contact";

  const contactHeading = document.createElement("h2");
  contactHeading.classList.add("contact-heading");
  contactHeading.textContent = "Contact Us";

  const contactDetails = document.createElement("div");
  contactDetails.classList.add("contact-details");

  const location = document.createElement("p");
  location.classList.add("contact-location");
  location.textContent = "Location: Unknown St, Unknown City, 000 Unknown";

  const phone = document.createElement("p");
  phone.classList.add("contact-phone");
  phone.textContent = "Phone: 000-000-0000";

  const email = document.createElement("p");
  email.classList.add("contact-email");
  email.textContent = "Email: burgfraiz@burgandfraiz.com";

  contactDetails.appendChild(location);
  contactDetails.appendChild(phone);
  contactDetails.appendChild(email);
  contact.appendChild(contactHeading);
  contact.appendChild(contactDetails);

  return contact;
};

export { Contact };
