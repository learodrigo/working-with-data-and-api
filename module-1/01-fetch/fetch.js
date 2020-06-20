console.log('About to fetch a rainbow')

async function catchRainbow () {
  const response = await fetch('rainbow.jpg')
  const blob = await response.blob()
  document.getElementById('rainbow').src = URL.createObjectURL(blob)
}

catchRainbow()
.then(response => {
  console.log('Image is loadad on the DOM')
})
.catch(e => {
  console.error(e)
})
