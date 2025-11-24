const mobile = window.matchMedia("(max-width: 480px)");
const tablet = window.matchMedia("(max-width: 824px)");
const ordi = window.matchMedia("(max-width: 1400px)");
const body = document.getElementById('body');

mobile.addEventListener("change", (e) => {
    if (e.matches) { 
        body.style.backgroundColor= "#ffffff";
    };
});

tablet.addEventListener("change", (e) => {
    if (e.matches) { 
        body.style.backgroundColor = "#275fa0";
    };
});

ordi.addEventListener("change", (e) => {
    if (e.matches) { 
        body.style.backgroundColor = "#ffca4b";
    };
});