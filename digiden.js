var LIGHT_MODE_ENABLED;

function setLightMode(onOff) {
    if(onOff !== LIGHT_MODE_ENABLED) {
        // if(LIGHT_MODE_ENABLED != undefined)
        //     document.body.style.transitionDuration = "0.5s";
            
        LIGHT_MODE_ENABLED = onOff;
        localStorage.setItem("LIGHT_MODE", LIGHT_MODE_ENABLED);

        if(LIGHT_MODE_ENABLED)
            document.body.classList.add("light_mode");

        else 
            document.body.classList.remove("light_mode");            
        
    }
}


document.addEventListener('DOMContentLoaded', function() {
    setLightMode(localStorage.getItem("LIGHT_MODE") != "false");    
});
