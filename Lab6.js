async function createMap() {
    var map = L.map('map').setView([getRandomInRange(30,35,3), getRandomInRange(-90,-100,3)], 3);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    coordinate1 = [getRandomInRange(30,35,3), getRandomInRange(-90,-100,3)]
    coordinate2 = [getRandomInRange(30,35,3), getRandomInRange(-90,-100,3)]
    coordinate3 = [getRandomInRange(30,35,3), getRandomInRange(-90,-100,3)]

    var marker1 = L.marker(coordinate1).addTo(map);
    var marker2 = L.marker(coordinate2).addTo(map);
    var marker3 = L.marker(coordinate3).addTo(map);
    
    document.getElementById('marker1la').innerHTML = coordinate1[0]
    document.getElementById('marker1lo').innerHTML = coordinate1[1]
    document.getElementById('marker2la').innerHTML = coordinate2[0]
    document.getElementById('marker2lo').innerHTML = coordinate2[1]
    document.getElementById('marker3la').innerHTML = coordinate3[0]
    document.getElementById('marker3lo').innerHTML = coordinate3[1]

    show = getData()
    console.log(show)

    
       
        
        
        
    
   
    

   

  

   
}


async function getData() {

    show = await fetch('https://api-bdc.io/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en')
        .then((res) => res.json());

    console.log(show);
    document.getElementById('locality1').innerHTML = show.locality

        

}



        



function getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
    // .toFixed() returns string, so ' * 1' is a trick to convert to number
    }

window.onload = createMap;