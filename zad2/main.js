const API_KEY = 'INiMb9VvT5GC5UnjiIB1tcueAIgnkCjJeeXZXFVK54I';
const BASE_URL = 'https://api.unsplash.com/search/photos';

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const gallery = document.getElementById('gallery');

async function searchPhotos(query) {
  const url = `${BASE_URL}?query=${query}&client_id=${API_KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayPhotos(data.results);
  } catch (error) {
    console.error('Błąd pobierania zdjęć:', error);
  }
}

function displayPhotos(photos) {
  gallery.innerHTML = ''; 
  if (photos.length === 0) {
    gallery.innerHTML = '<p>Brak wyników dla podanego zapytania.</p>';
  } else {
    photos.forEach(photo => {
      const imgElement = document.createElement('img');
      imgElement.src = photo.urls.regular;
      imgElement.alt = photo.alt_description;
      gallery.appendChild(imgElement);
    });
  }
}

searchButton.addEventListener('click', () => {
  const query = searchInput.value;
  if (query) {
    searchPhotos(query);
  }
});

searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const query = searchInput.value;
    if (query) {
      searchPhotos(query);
    }
  }
});
