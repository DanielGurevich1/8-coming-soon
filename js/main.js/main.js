import { renderSocials }  from "./components/renderSocial/renderSocials.js";
import { renderSocials }  from "./components/renderSocial/socialsData.js";

import { renderClock } from "./components/clock/renderClock.js";

import { renderProgressBar } from './components/renderProgressBar.js';


renderSocials('footer > .row', socialData);

renderClock('.clock');


renderProgressBar('web dev', 90);
renderProgressBar('web dez', 85);
renderProgressBar('web ux', 40);

