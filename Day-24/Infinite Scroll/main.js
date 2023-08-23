const container = document.querySelector('#container');

const URL = 'https://dog.ceo/api/breeds/image/random';

// get the images
async function loadImages(numImages = 24) {
    try {
        for (let i = 0; i < numImages; i++) {

            const response = await fetch(URL);
            const data = await response.json();

            const img = document.createElement('img');
            img.src = data.message;
            container.appendChild(img);
        }
    } catch (error) {
        console.error('Error loading images:', error);
    }
}

// Initial loading of images
loadImages();

// Listen for scroll event and load more images if we reach the bottom of the window
window.addEventListener('scroll', async () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const totalHeight = document.documentElement.scrollHeight;

    if (scrollPosition + windowHeight >= totalHeight) {
        await loadImages();
    }
});
loadImages();
