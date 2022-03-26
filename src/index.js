import "./style.scss";
import { Nav, navTabSwitch } from "./components/nav/nav";
import { Container } from "./components/container/container";


document.body.appendChild(Nav());
document.body.appendChild(Container());

navTabSwitch();