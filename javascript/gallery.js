let data = [];

fetch('../json/galleryImgs.json')
  .then(response => response.json())
  .then(fetchedData => {
    data = fetchedData;
    console.log('Fetched gallery data:', data);

    const mainGalleryContainer = document.getElementById('galleryContainer');
    if (!mainGalleryContainer) {
      console.error('Main gallery container not found!');
      return;
    }

    data.forEach((gallery) => {
      const galleryContainer = document.createElement('div');
      galleryContainer.classList.add('gallery-container');
      galleryContainer.classList.add('gallery-container' + gallery.key);
      galleryContainer.id = 'gallery-container' + gallery.key;

      const heading = document.createElement('h2');
      heading.textContent = gallery.heading;
      galleryContainer.appendChild(heading);

      const description = document.createElement('p');
      description.textContent = gallery.caption;
      galleryContainer.appendChild(description);

      const imagesContainer = document.createElement('div');
      imagesContainer.classList.add('imagesContainer');

      const images = gallery.imgArr;
      const altTexts = gallery.imgAlt;

      let imageGroup = document.createElement('div');
      imageGroup.classList.add('image-group');

      images.forEach((imgSrc, imgIndex) => {
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = altTexts[imgIndex] || `Image ${imgIndex + 1}`;
        img.classList.add('individualImgs');

        img.onerror = () => {
          img.src = '/images/placeholder.jpg';
          img.alt = 'Image not available';
        };

        imageGroup.appendChild(img);

        if ((imgIndex + 1) % 2 === 0) {
          imagesContainer.appendChild(imageGroup);
          imageGroup = document.createElement('div');
          imageGroup.classList.add('image-group');
        }
      });

      if (imageGroup.children.length > 0) {
        imagesContainer.appendChild(imageGroup);
      }

      galleryContainer.appendChild(imagesContainer);
      mainGalleryContainer.appendChild(galleryContainer);
    });
  })
  .catch(error => {
    console.error('Error loading gallery data:', error);
  });
