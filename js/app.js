let containerImages = document.getElementById('container-images-js');

function createImage(images) {
  for (let i = 0; i < images.length; i++) {
    var image = document.createElement('img');
    image.setAttribute('src', 'assets/images/' + images[i]);
    image.classList.add('img-thumbnail', 'image-small');
    containerImages.appendChild(image);
  }
}

createImage(images);