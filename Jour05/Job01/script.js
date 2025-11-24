const mobile = window.matchMedia("(max-width: 480px)");
const tablet = window.matchMedia("(max-width: 824px)");
const ordi = window.matchMedia("(max-width: 1400px)");
const style = document.getElementById('monCSS');

mobile.addEventListener("change", (e) => {
    if (e.matches) { 
        style.href="style2.css";
    };
});

tablet.addEventListener("change", (e) => {
    if (e.matches) { 
        style.href="style3.css";
    };
});

ordi.addEventListener("change", (e) => {
    if (e.matches) { 
        style.href="style4.css";
    };
});