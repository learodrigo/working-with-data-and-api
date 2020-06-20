if ('geolocation' in navigator) {
  console.log('Yeah! Geolocation is available!')

  navigator.geolocation.getCurrentPosition(async position => {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude

    document.getElementById('latitude').textContent = latitude
    document.getElementById('longitude').textContent = longitude

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
