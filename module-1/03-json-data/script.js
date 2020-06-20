const ISS_API_URL = 'https://api.wheretheiss.at/v1/satellites/25544'
let firstTime = true

// Making map and tiles
const mymap = L.map('issMap').setView([0, 0], 1)
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
const tiles = L.tileLayer(tileUrl, { attribution })
tiles.addTo(mymap)

// Making a marker with a custom icon
const issIcon = L.icon({
  iconUrl: 'iss200.png',
  iconSize: [50, 32],
  iconAnchor: [25, 16]
})
const marker = L.marker([0, 0], { icon: issIcon }).addTo(mymap)

async function getISS () {
  const response = await fetch(ISS_API_URL)
  const data = await response.json()
  const { latitude, longitude } = data

  marker.setLatLng([latitude, longitude])

  if (firstTime) {
    mymap.setView([latitude, longitude], 2.5)
    firstTime = false
  }

  lat.textContent = latitude.toFixed(2) + '°'
  lon.textContent = longitude.toFixed(2) + '°'
}

getISS()

setInterval(getISS, 3000)
