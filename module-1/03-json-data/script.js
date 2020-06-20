const ISS_API_URL = 'https://api.wheretheiss.at/v1/satellites/25544'

async function getISS () {
  const response = await fetch(ISS_API_URL)
  const data = await response.json()
  const { latitude, longitude } = data
  lat.textContent = latitude
  lon.textContent = longitude
}

getISS()
