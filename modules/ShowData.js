export const ShowData = (data, contenedor) => {
  contenedor.innerHTML = "";

  data.map((prenda) => {
    const { img1, img2, img3, Description, price, Title, id } = prenda;

    contenedor.innerHTML += `
        
        <div class="col-3 mt-5" id="card">
        <div>
          <a routerLink="#">
            <img
              src="${img1}"
              class="img-fluid"
              alt="product-name"
              loading="lazy"
            />
          </a>
        </div>
        <div class="pt-2 product-data-list">
          <h3 class="product-name fw-bold">
            ${Title}
          </h3>
        </div>
        <div class="product-data-list">
          <span class="fw-bold product-price">$${price}</span>
        </div>
        <div class="product-data-list mt-2">
        <button class="btn btn-danger me-2" id="${id}">Delete</button>
        <button class="btn btn-warning text-white px-4" id="${id}">Show Detail</button>
      </div> 
    </div>
        `;
  });
};



export const ShowData2 = ((data, contenedor)=>{
  contenedor.innerHTML = "";

  data.map((prenda) => {
    const { img1, img2, img3, Description, price, Title, id } = prenda;

    contenedor.innerHTML += `
        
    
    <div class="col-4 text-center">
      <img src="${img1}" alt="product" class="img-fluid" />
      <h4 class="fw-bold mt-2">${Title}</h4>
      <h5 class="fw-bold">${price}</h5>
    </div>
 
        `;
  });
})

export const ShowData3 = (data, contenedor) => {
  contenedor.innerHTML = "";

  data.map((prenda) => {
    const { img1, img2, img3, img4, Description, price, Title, id } = prenda;

    contenedor.innerHTML += `
    <div class="col-2">
    <div class="d-flex flex-column align-items-end">
      <img
        src="${img1}"
        alt="product front model"
        class="w-25 mb-2 active"
      />
      <img
        src="${img2}"
        alt="product back model"
        class="w-25 mb-2"
      />
      <img
        src="${img3}"
        alt="product front"
        class="w-25 mb-2"
      />
      <img src="${img4}" alt="product back" class="w-25" />
    </div>
  </div>
  <div class="col-5">
    <img
      src="${img1}"
      alt="product"
      loading="lazy"
      class="img-fluid"
    />
  </div>
  <div class="col-4 p-3">
    <div class="product-data">
      <h2 class="fw-bold mb-4">${Title}</h2>
    </div>
    <div class="product-data">
      <h3 class="mb-1">$ ${price}</h3>
    </div>
    <div class="product-data-size">
      <h5 class="fw-bold d-flex white-50 mb-2">Size</h5>
      <button class="size active">S</button>
      <button class="size">M</button>
      <button class="size">L</button>
      <button class="size">XL</button><button class="size">XXL</button>
    </div>
    <button class="btn btn-dark w-100 text-uppercase fw-bold mb-2" id="AddToCart">
      add to cart
    </button>
    <button class="btn btn-primary w-100 text-uppercase fw-bold">
      buy it now
    </button>
    <p class="pt-3">
      ${Description}
    </p>
    <a href="#" class="text-dark">Click for Sizing</a>
  </div>
        `;
  });
};

