import GetData from "../helpers/GetData.js";
let URL = "http://localhost:3000/users"

let form = document.getElementById('form')


form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let email = document.getElementById('email').value;
  
    let data = await GetData(URL);
  
    data.forEach(user => {
      const { email: emailUser } = user;
  
      if (emailUser == email) {
        let dataUser = data.find(item => item.email == emailUser);
        sessionStorage.setItem('infoUser', JSON.stringify(dataUser));
        form.reset();
        window.location.href = '../index.html'
      }
    })
  
  })