function setup () {
  noCanvas()
  let lat
  let lon

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

  if ('geolocation' in navigator) {
    console.log('Yeah! Geolocation is available!')

    navigator.geolocation.getCurrentPosition(async position => {
      const latitude = position.coords.latitude
      const longitude = position.coords.longitude

      document.getElementById('latitude').textContent = latitude.toFixed(4)
      document.getElementById('longitude').textContent = longitude.toFixed(4)

      const data = { latitude, longitude }
      const options = {
        method: 'POST',
        header: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }

      const response = await fetch('/api', options)
      const json = await response.json()
      console.log(json)
    })
  } else {
    console.log('Looks like geolocation is not available')
  }
}
