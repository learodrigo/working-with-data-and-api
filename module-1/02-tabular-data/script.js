async function getData () {
  const xs = []
  const ys = []

  const response = await fetch('ZonAnn.Ts+dSST.csv')
  const data = await response.text()

  const table = data.split('\n').slice(1)

  table.forEach(row => {
    const cols = row.split(',')
    const year = cols[0]
    xs.push(year)
    const temp = cols[1]
    // We add the temperature difference
    // for more reference, check
    // https://earthobservatory.nasa.gov/world-of-change/global-temperatures
    ys.push(parseFloat(temp) + 14)
  })

  return {xs, ys}
}

async function chartIt () {
  const data = await getData()
  const ctx = document.getElementById('chart').getContext('2d');

  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.xs,
      datasets: [{
        label: 'Combined Land-Surface Air and Sea-Surface Water temperature in °C',
        data: data.ys,
        fill: false,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            callback: (value, index, values) => value + '°'
          }
        }]
      }
    }
  })
}

chartIt()
