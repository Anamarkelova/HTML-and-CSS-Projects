// This array stores the file names of all gallery images.
var images = [
    "Beach.jpg",
    "Mountain.jpg",
    "City.jpg",
    "Forest.jpg"
];

// This variable keeps track of which image is currently displayed.
var currentImage = 0;

// This function opens the lightbox and displays the selected image.
function openLightbox(imageNumber) {
    currentImage = imageNumber;

    document.getElementById("lightbox").style.display = "block";

    document.getElementById("lightbox-image").src = images[currentImage];
}

// This function closes the lightbox.
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

// This function changes the image when the previous or next arrow is clicked.
function changeImage(direction) {
    currentImage = currentImage + direction;

    // If we go past the last image, return to the first image.
    if (currentImage >= images.length) {
        currentImage = 0;
    }

    // If we go before the first image, go to the last image.
    if (currentImage < 0) {
        currentImage = images.length - 1;
    }

    document.getElementById("lightbox-image").src = images[currentImage];
}