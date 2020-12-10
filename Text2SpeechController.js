({
    playTextSpeech : function(cmp, evt, hlp) {
        var userInputText= cmp.find('UserInput').get('v.value');
        var userInputPitch= cmp.find('pitchRangeInput').get('v.value');
        var userInputRate= cmp.find('rateRangeInput').get('v.value');
        var userInputVol= cmp.find('volRangeInput').get('v.value');
        if(!userInputText || !userInputPitch || !userInputRate || !userInputVol)
        {
            cmp.set('v.showreqMsg',true);
            chkValid= false;
        }
        else{
            cmp.set('v.showreqMsg',false);
            chkValid= true;
        }
        if(chkValid){
            if('speechSynthesis' in window)
            {
                var speech = new window.SpeechSynthesisUtterance(userInputText);
                speech.lang = 'en-US';
                speech.volume= userInputVol;
                speech.pitch= userInputPitch;
                speech.rate= userInputRate;
                window.speechSynthesis.speak(speech);   
            }           
            else
            {
                alert('speechSynthesis not supported');
            }
        }
    },
})