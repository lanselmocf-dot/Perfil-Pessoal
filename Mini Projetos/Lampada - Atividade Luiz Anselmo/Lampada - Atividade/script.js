var lamp = document.getElementById('lamp');
var b = new Boolean(false);

lamp.addEventListener("click", function(){
    if (b == false) {
    lamp.src="assets/lamp_on.png";
    lamp.alt="Lâmpada acesa"
    document.body.style.background = "radial-gradient(circle, white 8%, yellow 100%)"
    b = true;
    }
    else
    {
    lamp.src="assets/lamp_off.png";
    lamp.alt="Lâmpada apagada"
    document.body.style.background = "radial-gradient(circle, white 8%, black 100%)"
    b=false;
    }
})

