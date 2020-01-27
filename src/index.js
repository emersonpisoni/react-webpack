import cow from "./cow";
import icon from './img/icon.png'
import "./css/main.css";
import './sass/main.scss'

const message = "is great";
document.querySelector("#box").innerText = cow.say(
  `Webpack with Babel ${message}!`
);

document.querySelector('#icon').innerHTML = `<img src="${icon}" />`
