function renderSocials (data) {
    // input validation
    
    
    // logiclet 
    HTML = '';

    for (let i=0; i <=data.length; i++) {
        const item = data[i];
        HTML+= `a href="${item.link}" target="_balnk" class="fa fa-facebook" aria-hidden="true"></a>`
    }

}