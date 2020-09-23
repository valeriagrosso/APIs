boton = document.querySelector("#boton");
imagen = document.querySelector("#imagen");

async function mostarIMG() {
  response = await axios.get(
    "https://api.nasa.gov/planetary/apod?api_key=qdqZhBAacQ1iI4pipO19BHvl6EQI9bRgCLFKJ2xX"
  );
  console.log(response);
  imagen.src = response.data.url;
}
boton.onclick = mostarIMG;