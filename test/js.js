const UNSPLASH_ACCESS_KEY = 'MImurnXwLTRAsPsmQgQj9BWZC68w37YvcZ4z4Z7-2HY';
const photoElement = document.querySelector('.photo-img');
const photographerElement = document.querySelector('.photographer');
const likeCounterElement = document.querySelector('.like-counter');
const likeButton = document.querySelector('.like-button');

async function fetchRandomPhoto() {
  try {
    const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${UNSPLASH_ACCESS_KEY}`);
    const data = await response.json();
    photoElement.src = data.urls.regular;
    photographerElement.textContent = `Photographer: ${data.user.name}`;

    const currentPhoto = {
      url: data.urls.regular,
      photographer: data.user.name
    };
    localStorage.setItem('currentPhoto', JSON.stringify(currentPhoto));

    let likes = localStorage.getItem('likes') || 0;
    likeCounterElement.textContent = `Likes: ${likes}`;
  } catch (error) {
    console.error('Error fetching random photo:', error);
  }
}

function incrementLike() {
  let likes = localStorage.getItem('likes') || 0;
  likes++;
  localStorage.setItem('likes', likes);
  likeCounterElement.textContent = `Likes: ${likes}`;
}

likeButton.addEventListener('click', incrementLike);

window.onload = () => {
  fetchRandomPhoto();

  const savedPhoto = localStorage.getItem('currentPhoto');
  if (savedPhoto) {
    const photo = JSON.parse(savedPhoto);
    photoElement.src = photo.url;
    photographerElement.textContent = `Photographer: ${photo.photographer}`;
  }

  let likes = localStorage.getItem('likes') || 0;
  likeCounterElement.textContent = `Likes: ${likes}`;
};
