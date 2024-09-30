const map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let marker = null; 
let formContainer = document.getElementById('form-container');
let formName = document.getElementById('name');
let formDescription = document.getElementById('description');
let formCoordinates = document.getElementById('coordinates');

function updateForm(latlng) {
    formCoordinates.value = `Lat: ${latlng.lat.toFixed(5)}, Lng: ${latlng.lng.toFixed(5)}`;
}

map.on('dblclick', function(e) {
    if (marker) {
        map.removeLayer(marker); 
    }

    marker = L.marker([e.latlng.lat, e.latlng.lng], { draggable: true }).addTo(map)
        .bindPopup("Wprowadź nazwę i opis miejsca")
        .openPopup();

    formContainer.style.display = 'block';
    formName.value = ''; 
    formDescription.value = '';
    updateForm(e.latlng); 

    marker.on('dragend', function(event) {
        let newPos = event.target.getLatLng();
        updateForm(newPos);
    });
});

document.getElementById('place-form').addEventListener('input', function() {
    if (marker) {
        let name = formName.value || 'Brak nazwy';
        let description = formDescription.value || 'Brak opisu';
        marker.bindPopup(`<b>${name}</b><br>${description}`).openPopup();
    }
});
