import GetData from "../helpers/GetData.js";
import { ShowData } from "../modules/ShowData.js"
import DeleteData from "../helpers/DeleteData.js";

let URL = "http://localhost:3000/prendas"
const contenedor = document.getElementById('container-list')

document.addEventListener('DOMContentLoaded', async () => {
    let data = await GetData(URL)
    console.log(data)

    ShowData(data, contenedor)
})

/*  */

document.addEventListener("click",async(e)=>{
    let data = await GetData(URL)
    let idBtn= e.target.id
    const botonClass = e.target.classList.contains('btn-warning')
    if(botonClass){
    let buscar= data.find(art=>art.id==idBtn)
    localStorage.setItem("detalle",JSON.stringify(buscar) )
    window.location.href = '../mostrarDetalle.html'
}
}
    )



document.addEventListener("click", async (e) => {
    let data = await GetData(URL);
    const btnDelete = e.target.id;
    if (btnDelete) {
        const idData = data.find((prenda) => prenda.id == btnDelete);
        let URL_id = `${URL}/${idData.id}`;
        const dataDelete = await DeleteData(URL_id, idData);
        ShowData(data, contenedor);
    } else {
        return;
    }
});