const body = document.getElementById("body");
const sections = document.querySelectorAll("section");

const mobile = window.matchMedia("(max-width: 480px)");
const tablet = window.matchMedia("(max-width: 824px)");
const desktop = window.matchMedia("(min-width: 825px)");

// --- Fonctions ---
function handleMobile(e) {
    if (e.matches) {
        body.style.flexDirection = "column";
    }
}

function handleTablet(e) {
    if (e.matches) {
        body.style.flexDirection = "row wrap";
    }
}

mobile.addEventListener("change", handleMobile);
tablet.addEventListener("change", handleTablet);

// --- Check initial ---
handleMobile(mobile);
handleTablet(tablet);