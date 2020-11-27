import { renderSocials }  from "./components/renderSocial/renderSocials.js";
import { renderSocials }  from "./components/renderSocial/socialsData.js";
import { renderClock } from "./components/clock/renderClock.js";



renderSocials('footer > .row', socialData);

renderClock('.clock');