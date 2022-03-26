import { Content } from '../content/content';
import './container.scss';

const Container = () => {
  const container = document.createElement("div");
  container.classList.add("container");

  container.appendChild(Content())

  return container;
}

export { Container };