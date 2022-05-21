import GetData from "../helpers/GetData.js";
import { ShowData } from "../modules/ShowData.js";
import { ShowData2 } from "../modules/ShowData.js";
import PostData from "../helpers/PostData.js";

let AddToCart = document.getElementById("AddToCart");
let pintar = document.querySelector("#pintar");
let URL = "http://localhost:3000/prendas";
const addCart = document.getElementById('add-article')
const closeCart = document.getElementById('closeCart')

const newProduct = document.getElementById("formulario");


AddToCart.addEventListener('click', async (e) => {
    e.preventDefault();
    let data = await GetData(URL)
    const dataf = data.filter(element => element.id === 5)
    console.log(data)
    sessionStorage.setItem("data", JSON.stringify(dataf))
})



const contenedor = document.getElementById('pintar')

document.addEventListener('DOMContentLoaded', async () => {
    let data = await GetData(URL)
    console.log(data)

    ShowData2(data, contenedor)
})




newProduct.addEventListener('submit', async (e) => {
    e.preventDefault(e);
    let imageUno = document.getElementById('validationServer01').value;
    let imageDos = document.getElementById('validationServer02').value;
    let imageTres = document.getElementById('validationServer03').value;
    let descripcion = document.getElementById('validationServer05').value;
    let titulo = document.getElementById('validationServer04').value;
    let nuevo = {
        id: crypto.randomUUID() ,
        Title: titulo,
        Description: descripcion,
        price: 80.00,
        img2: imageDos,
        img3: imageTres,
        img1: imageUno,
        img4: "https://res.cloudinary.com/duddljshu/image/upload/v1653085297/Rectangle_4_1_fmqqie.png"

    }

    await axios.post(URL, nuevo)


})

const containerInfo = document.getElementById('product-info')

/* cart */
addCart.addEventListener('click', () => {
    document.getElementById("modalCar").style.visibility = "visible";
})

closeCart.addEventListener('click', () => {
    document.getElementById("modalCar").style.visibility = "hidden";
})
