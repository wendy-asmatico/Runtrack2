// Toutes les images
const image1 = document.getElementById("arc1");
const image2 = document.getElementById("arc2");
const image3 = document.getElementById("arc3");
const image4 = document.getElementById("arc4");
const image5 = document.getElementById("arc5");
const image6 = document.getElementById("arc6");

const images = [image1, image2, image3, image4, image5, image6];

const button = document.getElementById("melanger");
const container = document.getElementById("container");

// Mélange
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

// Affichage
function afficherImages() {
    container.innerHTML = "";
    images.forEach(img => {
        container.appendChild(img.parentElement);
    });
}

button.addEventListener("click", () => {
    shuffle(images);
    afficherImages();
});


// ---------------------------
// DRAG & DROP MULTI-ELEMENT
// ---------------------------

let draggedItem = null;

const dragItems = document.querySelectorAll('.dragElement');
const dropZones = document.querySelectorAll('.dropZone');

// Rendre draggable chaque élément
dragItems.forEach(item => {
    item.addEventListener("dragstart", () => {
        draggedItem = item;
        item.classList.add("beingDragged");
    });

    item.addEventListener("dragend", () => {
        item.classList.remove("beingDragged");
        draggedItem = null;
    });
});

// DropZones acceptent plusieurs items + réorganisation
dropZones.forEach(zone => {
    zone.addEventListener("dragover", e => {
        e.preventDefault();

        const afterElement = getDragAfterElement(zone, e.clientY);

        if (!afterElement) {
            zone.appendChild(draggedItem);
        } else {
            zone.insertBefore(draggedItem, afterElement);
        }
    });

    zone.addEventListener("dragenter", () => {
        zone.classList.add("hoverOver");
    });

    zone.addEventListener("dragleave", () => {
        zone.classList.remove("hoverOver");
    });
});


// Trouve l'élément juste après la position du curseur
function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.dragElement:not(.beingDragged)')];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;

        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}
