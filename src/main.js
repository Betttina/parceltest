const img = document.createElement('img');
document.body.append(img);

/* Skapa URL-objekt med en absolut URL baserad på import.meta.url */
const imgURL = new URL('../media/placeholder.png', import.meta.url);

console.log(imgURL.href);
img.src = imgURL.href;
