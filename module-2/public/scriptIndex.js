function setup () {
  noCanvas()
  let lat
  let lon

  if ('geolocation' in navigator) {
    console.log('Yeah! Geolocation is available!')

    navigator.geolocation.getCurrentPosition(async position => {
      const latitude = position.coords.latitude
      const longitude = position.coords.longitude

      document.getElementById('latitude').textContent = latitude.toFixed(4)
      document.getElementById('longitude').textContent = longitude.toFixed(4)
    })
  } else {
    console.log('Looks like geolocation is not available')
  }

  const button = document.getElementById('submitButton')
  button.addEventListener('click', async event => {
    const mood = document.getElementById('mood')

    if (!mood.value) {
      mood.classList.add('error')
      return
    }

    mood.classList.remove('error')
    const moody = mood.value
    mood.value = ''

    lat = Number(document.getElementById('latitude').innerHTML)
    lon = Number(document.getElementById('longitude').innerHTML)

    const data = { lat, lon, moody }
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }

    const response = await fetch('/api', options)
    const json = await response.json()
    console.log(json)
  })
}
