const URL = "https://api.aviationstack.com/v1/airlines?access_key=b38a9f4fca8d19527c8c7ece16c97126"

fetch(URL)

.then(respuesta=> respuesta.json() )

.then(monedas => {

    document.getElementById('lista').innerHTML += `<li>Dolar = ${data.date_founded} </li>  </li>`;

})