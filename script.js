WA.sendChatMessage('Bonjour', 'Mr Bundle');

WA.onChatMessage((message => {
    if (message === 'bonjour') {
    	WA.sendChatMessage('Tu veux une pizza ?', 'Mr Bundle');
    	
    	WA.onChatMessage((message => {
    		if (message === 'oui') {
    			WA.sendChatMessage('Voila pour toi', 'Mr Bundle');
    			WA.openTab('https://www.dominos.fr/');
    		} else {
    			WA.sendChatMessage('T en pis !', 'Mr Bundle');
    		}
    	}))
    } else {
    	WA.sendChatMessage('Je ne comprend pas', 'Mr Bundle');
    }
}));

WA.onEnterZone('myZone', () => {
	WA.openPopup("poo", 'David tu dois faire les maquettes', [{
		label: "Ok",
		className: "primary",
		callback: (popup) => {
			popup.close();
		}
	}])
})
