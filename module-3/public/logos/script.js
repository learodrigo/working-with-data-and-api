async function getData () {
  const response = await fetch('/api')
  const data = await response.json()

  for (const item of data) {
    const root = document.createElement('div')
    root.classList.add('list')
    const mood = document.createElement('div')
    mood.classList.add('mood')
    const geo = document.createElement('div')
    geo.classList.add('geo')
    const date = document.createElement('div')
    date.classList.add('date')
    const imag = document.createElement('img')
    imag.classList.add('image')

    mood.textContent = `mood: ${item.moody}`
    geo.textContent = `Geolocation - Lat ${item.lat.toFixed(2)}° Lon ${item.lon.toFixed(2)}°`
    const dateString = new Date(item.timestamp).toLocaleString()
    date.textContent = dateString
    imag.src = item.image64
    img.alt = 'Random text'

    root.append(mood, geo, date, item.image64 ? imag : '')
    document.body.append(root)
  }
}

getData()
