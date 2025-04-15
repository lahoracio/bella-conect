const gallery = document.getElementById('gallery');

const images = [
    './img/img1.jpg',
    './img/img2.jpg',
    './img/img3.jpg',
    './img/img4.jpg',
    './img/img5.jpg',
    './img/img6.jpg',
    './img/img7.jpg',
    './img/img8.jpg',
    './img/img9.jpg',
    './img/img10.jpg',
    './img/img11.jpg',
    './img/img12.jpg',
    './img/img13.jpg',
    './img/img14.jpg',
    './img/img15.jpg',
    './img/img16.jpg',
    './img/img17.jpg',
    './img/img18.jpg'
    
];

images.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    gallery.appendChild(img);
});