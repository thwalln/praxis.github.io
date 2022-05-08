function initMap() {
  const farchant = { lat: 47.5287349, lng: 11.111717 }

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: farchant,
  })
  const marker = new google.maps.Marker({
    position: farchant,
    map: map,
  })
}

window.initMap = initMap

const hamburger = document.querySelector('.hamburger')
hamburger.addEventListener('click', () => {
  console.log('hello')
})
