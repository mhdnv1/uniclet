let category = "all";
let salesProducts = document.querySelector(".sales-products");
let salesProductsGoods = document.querySelector(
  ".sales-products-goods__to__order"
);

// get products
const getAllProducts = () => {
  const url = `http://localhost:3000/orders${
    category === "all" ? "" : "?category=" + category
  }`;
  fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Ошибка: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      salesProducts.innerHTML = "";
      data.map((item) => {
        salesProducts.innerHTML += `
            <div class="sales-product">
                        <p class="sales-product__id">${item.id}</p>
                        <p class="sales-product__id__user">${item.id_user}</p>
                        <div class="sales-product__time__block">
                            <p class="sales-product__data">${item.data}</p>
                            <p class="sales-product__time">${item.time}</p>
                        </div>
                        <p class="sales-product__status">${item.status}</p>
                        <div class="sales-product__product">
                            <p class="sales-product__count">${item.count}</p>
                            <p class="sales-product__title">
                             Кухня “Традиция” 
                                <span>Арт. 896523</span> 
                                <span>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333M10 2H14M14 2V6M14 2L6.66667 9.33333" stroke="#447981" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>                                        
                                </span>
                            </p>
                        </div>
                        <p class="sales-product__price">${item.price}</p>
                        <div class="sales-product__author">
                            <p class="sales-product__user">Анна Спиридон...</p>
                            <p class="sales-product__rating">
                                <span>
                                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.79948 0.898423C6.81703 0.859706 6.84537 0.826867 6.8811 0.803835C6.91683 0.780803 6.95844 0.768555 7.00095 0.768555C7.04346 0.768555 7.08507 0.780803 7.1208 0.803835C7.15653 0.826867 7.18487 0.859706 7.20242 0.898423L8.79376 4.40033C8.80955 4.43496 8.83401 4.46494 8.86477 4.48735C8.89553 4.50977 8.93156 4.52387 8.96937 4.52829L12.8041 4.98364C12.9974 5.0061 13.0696 5.24909 12.9198 5.37365L10.0543 7.74909C10.0234 7.77484 10.0001 7.80854 9.98688 7.84656C9.97368 7.88458 9.97111 7.92548 9.97944 7.96485L10.801 11.9657C10.8098 12.0081 10.806 12.0521 10.79 12.0924C10.774 12.1326 10.7465 12.1673 10.711 12.1921C10.6755 12.2168 10.6335 12.2307 10.5902 12.2318C10.5469 12.2329 10.5042 12.2213 10.4675 12.1984L7.11666 10.1204C7.08162 10.0987 7.04118 10.0871 6.99993 10.0871C6.95867 10.0871 6.91824 10.0987 6.8832 10.1204L3.53376 12.1984C3.497 12.2213 3.45432 12.2329 3.41103 12.2318C3.36774 12.2307 3.32573 12.2168 3.29022 12.1921C3.25471 12.1673 3.22725 12.1326 3.21126 12.0924C3.19526 12.0521 3.19143 12.0081 3.20024 11.9657L4.02178 7.96485C4.0299 7.92552 4.02715 7.88472 4.01384 7.84683C4.00053 7.80894 3.97716 7.77538 3.94623 7.74977L1.08072 5.37433C1.04715 5.34672 1.02245 5.30983 1.00971 5.26827C0.996972 5.22671 0.996763 5.18232 1.00911 5.14064C1.02145 5.09896 1.0458 5.06184 1.07912 5.03392C1.11243 5.00599 1.15324 4.98851 1.19643 4.98364L5.03117 4.52829C5.06898 4.52387 5.105 4.50977 5.13577 4.48735C5.16653 4.46494 5.19099 4.43496 5.20678 4.40033L6.7988 0.898423H6.79948Z" fill="#FFCC00" stroke="#FFCC00" stroke-linejoin="round"/>
                                        </svg>                                        
                                </span>
                                4.4
                            </p>
                            <p class="sales-product__id__product">ID:898989 
                                <span>
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.3335 10.5002H2.66683C2.31321 10.5002 1.97407 10.3597 1.72402 10.1096C1.47397 9.85959 1.3335 9.52045 1.3335 9.16683V3.16683C1.3335 2.81321 1.47397 2.47407 1.72402 2.22402C1.97407 1.97397 2.31321 1.8335 2.66683 1.8335H8.66683C9.02045 1.8335 9.35959 1.97397 9.60964 2.22402C9.85969 2.47407 10.0002 2.81321 10.0002 3.16683V3.8335M7.3335 6.50016H13.3335C14.0699 6.50016 14.6668 7.09712 14.6668 7.8335V13.8335C14.6668 14.5699 14.0699 15.1668 13.3335 15.1668H7.3335C6.59712 15.1668 6.00016 14.5699 6.00016 13.8335V7.8335C6.00016 7.09712 6.59712 6.50016 7.3335 6.50016Z" stroke="#757575" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>                                        
                                </span>
                            </p>
                            <button>В чат
                                  <span>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.3335 6.00016H10.6668M10.6668 6.00016L6.00016 1.3335M10.6668 6.00016L6.00016 10.6668" stroke="#1B1D1A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        
                                </span>
                            </button>
                        </div>
                        <p class="sales-product__address">${item.address}</p>
                        <p class="sales-product__punkt">${item.punkt}</p>
                        <p class="sales-product__price">${item.punkt_price}</p>
                        <p class="sales-product__punkt_status">${item.punkt_status}</p>
                    </div>
        `;
        console.log(item);
      });
    })
    .catch((err) => console.log(err));
};

getAllProducts();

// get products goods to order
let modalAddOrder = document.querySelector(".modal-add-order");
let modalEdit = document.querySelector(".modal-add-edit");

let filterTab = document.querySelector(".filter-tab");
let filterBtn = document.querySelector('#filter-btn')

let modalClose = document.querySelector(".modal-close");
let modalCloseEdit = document.querySelector(".modal-close-edit");

function closeModal() {
  modalAddOrder.classList.add("hide");
  modalAddOrder.classList.remove("show");
  document.body.style.overflow = "";
}
function closeModalEdit() {
  modalEdit.classList.add("hide");
  modalEdit.classList.remove("show");
  document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeModal);
modalCloseEdit.addEventListener("click", closeModalEdit);

filterBtn.addEventListener('click' , ()=>{
  filterTab.classList.add("show");
  filterTab.classList.remove("hide");
})

const getAllProductsGoods = () => {
  const url = `http://localhost:3000/goods-to-order${
    category === "all" ? "" : "?category=" + category
  }`;
  fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Ошибка: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      salesProductsGoods.innerHTML = "";
      data.map((item) => {
        salesProductsGoods.innerHTML += `
            <div class="sales-product">
                        <p class="sales-product__id">${item.id}</p>
                        <p class="sales-product__id__user">${item.id_user}</p>
                        <div class="sales-product__time__block">
                            <p class="sales-product__data">${item.data}</p>
                            <p class="sales-product__time">${item.time}</p>
                        </div>
                        <p class="sales-product__status">${item.status}</p>
                        <div class="sales-product__product">
                            <p class="sales-product__count">${item.count}</p>
                            <p class="sales-product__title">
                             Кухня “Традиция” 
                                <span>Арт. 896523</span> 
                                <span>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333M10 2H14M14 2V6M14 2L6.66667 9.33333" stroke="#447981" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>                                        
                                </span>
                            </p>
                        </div>
                        <p class="sales-product__price">${item.price}</p>
                        <div class="sales-product__author">
                            <p class="sales-product__user">Анна Спиридон...</p>
                            <p class="sales-product__rating">
                                <span>
                                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.79948 0.898423C6.81703 0.859706 6.84537 0.826867 6.8811 0.803835C6.91683 0.780803 6.95844 0.768555 7.00095 0.768555C7.04346 0.768555 7.08507 0.780803 7.1208 0.803835C7.15653 0.826867 7.18487 0.859706 7.20242 0.898423L8.79376 4.40033C8.80955 4.43496 8.83401 4.46494 8.86477 4.48735C8.89553 4.50977 8.93156 4.52387 8.96937 4.52829L12.8041 4.98364C12.9974 5.0061 13.0696 5.24909 12.9198 5.37365L10.0543 7.74909C10.0234 7.77484 10.0001 7.80854 9.98688 7.84656C9.97368 7.88458 9.97111 7.92548 9.97944 7.96485L10.801 11.9657C10.8098 12.0081 10.806 12.0521 10.79 12.0924C10.774 12.1326 10.7465 12.1673 10.711 12.1921C10.6755 12.2168 10.6335 12.2307 10.5902 12.2318C10.5469 12.2329 10.5042 12.2213 10.4675 12.1984L7.11666 10.1204C7.08162 10.0987 7.04118 10.0871 6.99993 10.0871C6.95867 10.0871 6.91824 10.0987 6.8832 10.1204L3.53376 12.1984C3.497 12.2213 3.45432 12.2329 3.41103 12.2318C3.36774 12.2307 3.32573 12.2168 3.29022 12.1921C3.25471 12.1673 3.22725 12.1326 3.21126 12.0924C3.19526 12.0521 3.19143 12.0081 3.20024 11.9657L4.02178 7.96485C4.0299 7.92552 4.02715 7.88472 4.01384 7.84683C4.00053 7.80894 3.97716 7.77538 3.94623 7.74977L1.08072 5.37433C1.04715 5.34672 1.02245 5.30983 1.00971 5.26827C0.996972 5.22671 0.996763 5.18232 1.00911 5.14064C1.02145 5.09896 1.0458 5.06184 1.07912 5.03392C1.11243 5.00599 1.15324 4.98851 1.19643 4.98364L5.03117 4.52829C5.06898 4.52387 5.105 4.50977 5.13577 4.48735C5.16653 4.46494 5.19099 4.43496 5.20678 4.40033L6.7988 0.898423H6.79948Z" fill="#FFCC00" stroke="#FFCC00" stroke-linejoin="round"/>
                                        </svg>                                        
                                </span>
                                4.4
                            </p>
                            <p class="sales-product__id__product">ID:898989 
                                <span>
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.3335 10.5002H2.66683C2.31321 10.5002 1.97407 10.3597 1.72402 10.1096C1.47397 9.85959 1.3335 9.52045 1.3335 9.16683V3.16683C1.3335 2.81321 1.47397 2.47407 1.72402 2.22402C1.97407 1.97397 2.31321 1.8335 2.66683 1.8335H8.66683C9.02045 1.8335 9.35959 1.97397 9.60964 2.22402C9.85969 2.47407 10.0002 2.81321 10.0002 3.16683V3.8335M7.3335 6.50016H13.3335C14.0699 6.50016 14.6668 7.09712 14.6668 7.8335V13.8335C14.6668 14.5699 14.0699 15.1668 13.3335 15.1668H7.3335C6.59712 15.1668 6.00016 14.5699 6.00016 13.8335V7.8335C6.00016 7.09712 6.59712 6.50016 7.3335 6.50016Z" stroke="#757575" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>                                        
                                </span>
                            </p>
                            <button>В чат
                                  <span>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.3335 6.00016H10.6668M10.6668 6.00016L6.00016 1.3335M10.6668 6.00016L6.00016 10.6668" stroke="#1B1D1A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        
                                </span>
                            </button>
                        </div>
                        <p class="sales-product__address">${item.address}</p>
                        <p class="sales-product__punkt">${item.punkt}</p>
                        <p class="sales-product__price">${item.punkt_price}</p>
                        <p class="sales-product__punkt_status">${item.punkt_status}</p>
                    </div>
        `;
        // modal add order
        let punkt_status = document.querySelectorAll(
          ".sales-product__punkt_status"
        );
        Array.from(punkt_status).forEach((item) => {
          if (item.textContent === "Создать заказ") {
            item.addEventListener("click", () => {
              modalAddOrder.classList.add("show");
              modalAddOrder.classList.remove("hide");
              document.body.style.overflow = "hidden";
            });
          }
          else if (item.textContent === "Редактировать") {
            item.addEventListener("click", () => {
              modalEdit.classList.add("show");
              modalEdit.classList.remove("hide");
              document.body.style.overflow = "hidden";
            });
          }
        });

      });
    })
    .catch((err) => console.log(err));
};

getAllProductsGoods();

//
let getCategory = document.querySelectorAll(".sales-top__link");
let getGoods_to_order = document.querySelectorAll(".goods_to_order");

Array.from(getCategory).forEach((link) => {
  link.addEventListener("click", () => {
    if (link.classList.contains("active")) {
      link.classList.remove("active");
    } else {
      link.classList.add("active");
    }
  });
});

// sort category
Array.from(getCategory).map((item) =>
  item.addEventListener("click", () => {
    if (item.textContent == "Новые") {
      category = "new";
    } else if (item.textContent == "В доставке") {
      category = "delivery";
    } else if (item.textContent == "Завершенные") {
      category = "completed";
    } else if (item.textContent == "Возвраты и обмены") {
      category = "returns";
    } else if (item.textContent == "Все") {
      category = "all";
    }
    getAllProducts();
  })
);

// sort getGoods_to_order
Array.from(getGoods_to_order).map((item) =>
  item.addEventListener("click", () => {
    if (item.textContent == "Заявки") {
      category = "applications";
    } else if (item.textContent == "Новые заказы") {
      category = "newapplications";
    } else if (item.textContent == "В доставке") {
      category = "delivery";
    } else if (item.textContent == "Завершенные") {
      category = "completed";
    } else if (item.textContent == "Возвраты и обмены") {
      category = "returns";
    } else if (item.textContent == "Все") {
      category = "all";
    }
    getAllProductsGoods();
  })
);


// tabs
function openTab(event, tabName) {
  // Скрыть все табы
  const tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach(content => {
      content.classList.remove('active');
  });

  // Удалить активный класс у всех кнопок
  const tabButtons = document.querySelectorAll('.tab-button');
  tabButtons.forEach(button => {
      button.classList.remove('active');
  });

  // Показать текущий таб и добавить активный класс к кнопке
  document.getElementById(tabName).classList.add('active');
  event.currentTarget.classList.add('active');
}


window.onclick = function(event) {
  if (event.target === filterBtn) {
      closeModalFilter();
  }
};

function closeModalFilter() {
  filterTab.classList.add("hide");
  filterTab.classList.remove("show");
}