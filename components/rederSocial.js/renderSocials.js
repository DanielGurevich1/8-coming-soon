/**
 * @param {String} selector Selektorius, kaip rasti norima VideoPlaybackQuality, 
 * @param {Array} data Duomenu masyvas su objektais, kurie reprezentioja social nuorodas
 */

function renderSocials(selector, data) {
    // input validation
    
    if (!isInputValid(selector, data)) {
        return false;
    }

    // logic 
    const socialDOM = document.querySelector(selector);
    if (!socialDOM) {
        console.error('ERROR: nerasta turinio generavimo vieta.');
        return false;
    }    
    
    // logiclet 
    let HTML = '';

    for (let i=0; i <=data.length; i++) {
        const item = data[i];

        if (!isValidSocialItem(item)) {
            continue;
        }

        HTML+= `a href="${item.link}" target="_balnk" class="fa fa-${item.icon}" aria-hidden="true"></a>`
    }

    //post logic validation
    if (HTML === '') {
        console.error('ERROR: nepavyko sugeneruoti social ikonu.');
        return false;
    }
    //return 
    socialDOM.innerHTML += HTML;
    return true;

}
export { renderSocials }