import { shoes } from "./product.js";
import { clothes } from "./product.js";
import { slide } from "./slide.js";

let searchProduct = document.getElementById("search");
let press = document.getElementById("press");
let containerProduct = document.getElementById("containerProduct");
let cart = document.getElementById("cart");
let cartOpen = document.getElementById("open");
let buySumBox = document.createElement("div");
let sum = document.createElement("h2");
let deleteBox = document.createElement("div");
let buy = document.createElement("button");
let sumBuy = document.createElement("div");
let deletecart = document.createElement("button");
let displayOff = document.getElementById("displayOff");
let newArr;
let vle;
let min = document.getElementById("min");
let max = document.getElementById("max");
let search = document.getElementById("searchh");
let antiSearch = document.getElementById("antiSearch");
let maxPriceArr = [];
let q = 0;
let maxPrice;
let searchArr = [];
max.value = "";
min.value = "";
newArr = [];

//apranqa stexcum
function createProduct(v) {
  v.map((item) => {
    let box = document.createElement("div");
    let p = document.createElement("p");
    let div = document.createElement("div");
    let img = document.createElement("img");
    let productName = document.createElement("h3");
    let price = document.createElement("p");
    let priceAfter = document.createElement("h4");
    let priceBefore = document.createElement("del");
    let buttonBox = document.createElement("div");
    let button = document.createElement("button");
    let buttonHeart = document.createElement("button");
    let buttonBasket = document.createElement("button");
    let eye = document.createElement("img");
    let zoom = document.createElement("div");
    let zoomphoto = document.createElement("img");
    let close = document.createElement("button");

    // css
    box.style.paddingRight = "1.3%";
    box.style.paddingLeft = "1.3%";

    div.style.position = item.css.product.style.position;
    div.style.display = item.css.product.style.display;
    div.style.flexDirection = item.css.product.style.flexDirection;
    div.style.justifyContent = item.css.product.style.justifyContent;
    div.style.alignItems = item.css.product.style.alignItems;
    div.style.transition = item.css.product.style.transition;
    div.style.height = item.css.product.style.height;
    div.style.backgroundColor = "rgb(245, 245, 245)";

    price.style.width = item.css.price.style.width;
    price.style.display = item.css.price.style.display;
    price.style.justifyContent = item.css.price.style.justifyContent;
    price.style.fontSize = item.css.price.style.fontSize;

    priceAfter.style.color = "green";

    box.style.height = "530px";

    buttonBox.style.width = item.css.buttonBox.style.width;
    buttonBox.style.display = item.css.buttonBox.style.display;
    buttonBox.style.justifyContent = item.css.buttonBox.style.justifyContent;

    button.style.height = item.css.button.style.height;
    button.style.width = item.css.button.style.width;
    button.style.fontSize = item.css.button.style.fontSize;
    button.style.fontWeight = item.css.button.style.fontWeight;
    button.style.backgroundColor = item.css.button.style.backgroundColor1;
    button.style.transition = item.css.button.style.transition;
    button.style.border = 'none'
    // button.style.marginBottom = '5px'
    buttonBasket.style;
    buttonHeart.style.fontSize = item.css.button.style.fontSize;
    buttonHeart.style.fontWeight = item.css.button.style.fontWeight;
    buttonHeart.style.backgroundColor = item.css.button.style.backgroundColor1;
    buttonHeart.style.transition = item.css.button.style.transition;
    buttonHeart.style.width = item.css.button.style.widthHeart;
    buttonHeart.style.display = item.css.button.style.display;
    buttonHeart.style.border = 'none'
    // buttonHeart.style.marginBottom = '5px'

    buttonBasket.style.fontSize = item.css.button.style.fontSize;
    buttonBasket.style.fontWeight = item.css.button.style.fontWeight;
    buttonBasket.style.backgroundColor = item.css.button.style.backgroundColor1;
    buttonBasket.style.transition = item.css.button.style.transition;
    buttonBasket.style.width = item.css.button.style.widthHeart;
    buttonBasket.style.display = item.css.button.style.display;
    buttonBasket.style.border = 'none'
    // buttonBasket.style.marginBottom = '5px'

    eye.style.width = item.css.icon.style.width;
    eye.style.height = item.css.icon.style.height;
    eye.style.position = item.css.icon.style.position;
    eye.style.zIndex = item.css.icon.style.zIndex;
    eye.style.top = item.css.icon.style.top;
    eye.style.opacity = item.css.icon.style.opacity;
    eye.style.transition = item.css.icon.style.transition;
    eye.src = "https://cdn-icons-png.flaticon.com/512/25/25186.png";
    eye.style.cursor = "pointer";

    zoom.style.width = "600px";
    zoom.style.height = "700px";
    zoom.style.position = "absolute";
    zoom.style.position = "fixed";
    zoom.style.top = "5%";
    zoom.style.left = "30%";
    zoom.style.zIndex = "900";
    zoom.style.backgroundColor = "black";
    zoom.style.display = "none";

    zoomphoto.style.width = "90%";
    zoomphoto.style.height = "90%";
    zoomphoto.style.paddingLeft = "5%";
    zoomphoto.style.paddingTop = "4%";

    close.style.backgroundColor = "white";
    close.style.color = "black";
    close.style.position = "absolute";
    close.style.top = "3%";
    close.style.right = "3%";
    close.style.width = "5%";
    close.style.height = "4%";

    img.style.width = "272px";
    img.style.height = "320px";

    zoomphoto.src = item.img;

    document.body.appendChild(zoom);
    zoom.appendChild(zoomphoto);
    zoom.appendChild(close);

    // html
    img.src = item.img;
    productName.innerHTML = item.name;
    button.innerHTML = item.btn;
    p.innerHTML = "&#9733;	&#9733;	&#9733;	&#9733; &#9734;";

    priceAfter.innerHTML = item.price + "$";
    priceBefore.innerHTML = item.beforePrice;
    buttonHeart.innerHTML = "&#10084;";
    buttonBasket.innerHTML = "&#10084;";
    close.innerHTML = "x";

    sum.innerText = "0$";

    //  function

    div.onmouseenter = () => {
      buttonBox.style.justifyContent = item.css.buttonBox.style.justifyContent1;
      buttonBasket.style.display = item.css.button.style.display1;
      buttonHeart.style.display = item.css.button.style.display1;
      eye.style.opacity = item.css.icon.style.opacity1;
      div.className = 'nocolor'
    // div.style.border = '0.5px solid black'

    };
    div.onmouseleave = () => {
      buttonBox.style.justifyContent = item.css.buttonBox.style.justifyContent;
      buttonBasket.style.display = item.css.button.style.display;
      buttonHeart.style.display = item.css.button.style.display;
      eye.style.opacity = item.css.icon.style.opacity;
      div.className = ''

    };
    vle = 0;

    async function getcart() {
      //000000000000000000000000000000000000000000000000000000000000000000
      // let data = await fetch('https://641863c729e7e36438e76a0f.mockapi.io/cart').then(res => res.json())
      // newArr = data

      let cart = document.getElementById("cart");
      cart.replaceChildren();
      newArr.length
        ? newArr.map((item) => {
            let div = document.createElement("div");
            let box = document.createElement("div");
            // let bigcart = document.getElementById('bigcart')
            let cartBox = document.createElement("div");
            let count = document.createElement("input");
            let del = document.createElement("button");
            let plus = document.createElement("button");
            let minus = document.createElement("button");
            let img = document.createElement("img");
            let close = document.getElementById("close");
            let price = document.createElement("p");

            //html

            plus.innerHTML = "+";
            minus.innerHTML = "-";
            del.innerHTML = "x";
            count.value = item.count;

            img.src = item.img;
            div.innerHTML = item.name;
            price.innerHTML = item.price * item.count + "$";
            deletecart.innerText = "Delete all produts";
            buy.innerText = "BUY";

            //css
            sum.style.display = "block";
            deleteBox.style.display = "block";
            buy.style.display = "block";
            deletecart.style.display = "block";
            sumBuy.style.display = "block";

            cart.style.display = "none";
            cart.style.display = "flex";
            cart.style.flexDirection = "column";
            cart.style.alignItems = "center";
            cart.style.justifyContent = "space-between";

            cart.style.cursor = "default";

            count.style.padding = "5px";
            count.style.width = "40px";

            cartBox.style.display = "flex";
            cartBox.style.padding = "3%";

            minus.style.padding =
              plus.style.padding =
              del.style.padding =
                "5px";
        
            div.style.display = "flex";
            div.style.alignItems = "center";
            div.style.height = "40px";
            img.style.width = "70px";
            img.style.height = "90px";
            box.style.padding = "3%";
            deletecart.style.width = "50%";
            deletecart.style.color = "red";
            deletecart.style.padding = '4px 12px 4px 12px'
            deletecart.className = "bheart heart";

            buy.className = "bheart heart";
            buy.style.color = "green";
            buy.style.padding = '4px 12px 4px 12px'

            buySumBox.style.display = "flex";
            buySumBox.style.flexDirection = "column";
            buySumBox.style.justifyContent = "space-between";
            buySumBox.style.height = "75px";
            buySumBox.style.width = "100%";

            deleteBox.style.width = "100%";
            deleteBox.style.height = "45px";
            deleteBox.style.display = "flex";
            deleteBox.style.alignItems = "center";
            deleteBox.style.justifyContent = "center";

            sumBuy.style.width = "100%";
            sumBuy.style.display = "flex";
            sumBuy.style.alignItems = "center";
            sumBuy.style.justifyContent = "space-around";
            sumBuy.style.border = "1px solid black";
            sumBuy.style.height = "35px";

            //function
            if (newArr.length === 5) {
              cart.style.height = "420px";
              cart.style.overflow = "auto";
            }

            plus.onclick = () => {
              item.count++;
              count.value = item.count;
              price.innerHTML = item.price * item.count + "$";

              vle = newArr.reduce(
                (accumliator, item) => accumliator + +item.count * +item.price,
                0
              );
              sum.innerHTML = vle + "$";
            };
            minus.onclick = () => {
              if (item.count === 1) {
                cart.removeChild(cartBox);
                newArr = newArr.filter((v) => item.id !== v.id ?? v);
              }
              if (newArr.length === 0) {
                cart.replaceChildren();
              }
              item.count--;
              count.value = item.count;
              price.innerHTML = item.price * item.count + "$";
              vle = newArr.reduce(
                (accumliator, item) => accumliator + item.count * item.price,
                0
              );
              sum.innerHTML = vle + "$";
            };

            deletecart.onclick = () => {
              cart.replaceChildren();
              newArr = [];
              cart.style.display = "none";
              cart.style.backgroundColor = "white";
            };
            del.onclick = () => {
              cart.removeChild(cartBox);
              newArr = newArr.filter((v) => item.id !== v.id ?? v);
              vle = newArr.reduce(
                (accumliator, item) => accumliator + item.count * item.price,
                0
              );
              sum.innerHTML = vle + "$";
              cart.style.display = "flex";
              cart.style.flexDirection = "column";
              cart.style.alignItems = "center";
              cart.style.justifyContent = "space-between";
              if (newArr.length === 0) {
                deleteBox.style.display = "none";
                buy.style.display = "none";
                deletecart.style.display = "none";
                sumBuy.style.display = "none";
                cart.style.display = "none";
                cart.style.backgroundColor = "white";
              }
            };

            cartOpen.onclick = () => {
              if (newArr.length !== 0) {
                vle = newArr.reduce(
                  (accumliator, item) =>
                    accumliator + +item.count * +item.price,
                  0
                );
                sum.innerHTML = vle + "$";

                cart.style.backgroundColor = "white";
                cart.style.display = "block";

                cart.style.display = "flex";
                cart.style.flexDirection = "column";
                cart.style.alignItems = "center";
                cart.style.justifyContent = "space-between";
              }
            };
            close.onclick = () => {
              cart.style.display = "none";
            };

            cartBox.appendChild(img);
            div.appendChild(plus);
            div.appendChild(count);
            div.appendChild(minus);
            div.appendChild(del);
            box.appendChild(div);
            box.appendChild(price);
            cartBox.appendChild(box);
            deleteBox.appendChild(deletecart);
            sumBuy.appendChild(sum);
            sumBuy.appendChild(buy);
            cart.appendChild(cartBox);
            buySumBox.appendChild(deleteBox);

            buySumBox.appendChild(sumBuy);
            cart.appendChild(buySumBox);
          })
        : alert('you have no any products in your cart');
    }

    button.onclick = () => {
      cart.style.backgroundColor = "white";
      let answerFind = newArr.find((v) => v.id === item.id);
      if (answerFind === undefined) {
        item.count = 1;
        newArr.push(item);
        fetch("https://641863c729e7e36438e76a0f.mockapi.io/cart"),
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(item),
          };

        getcart();
        cart.style.display = "none";
      } else {
        item.count++;
        console.log(item);
        getcart();
        cart.style.display = "none";
      }
      vle = newArr.reduce(
        (accumliator, item) => accumliator + +item.count * +item.price,
        0
      );
      sum.innerHTML = vle + "$";
    };
    button.onmouseenter = () => {
      button.style.backgroundColor = item.css.button.style.backgroundColor2;
      button.style.color = item.css.button.style.color1;
    };

    button.onmouseleave = () => {
      button.style.backgroundColor = item.css.button.style.backgroundColor1;
      button.style.color = item.css.button.style.color2;
    };

    buttonHeart.onmouseenter = () => {
      buttonHeart.style.backgroundColor =
        item.css.button.style.backgroundColor2;
      buttonHeart.style.color = item.css.button.style.color1;
    };

    buttonHeart.onmouseleave = () => {
      buttonHeart.style.backgroundColor =
        item.css.button.style.backgroundColor1;
      buttonHeart.style.color = item.css.button.style.color2;
    };

    buttonBasket.onmouseenter = () => {
      buttonBasket.style.backgroundColor =
        item.css.button.style.backgroundColor2;
      buttonBasket.style.color = item.css.button.style.color1;
    };

    buttonBasket.onmouseleave = () => {
      buttonBasket.style.backgroundColor =
        item.css.button.style.backgroundColor1;
      buttonBasket.style.color = item.css.button.style.color2;
    };

    eye.onclick = () => {
      zoomphoto.src = item.img;
      zoom.style.display = "block";
      zoom.style.zIndex = "999";
      displayOff.style.display = "block";
    };

    close.onclick = () => {
      zoom.style.display = "none";
      displayOff.style.display = "none";
    };

    // append
    div.appendChild(eye);
    div.appendChild(img);
    div.appendChild(productName);
    div.appendChild(p);
    price.appendChild(priceAfter);
    price.appendChild(priceBefore);
    div.appendChild(price);
    div.appendChild(button);
    buttonBox.appendChild(buttonHeart);
    buttonBox.appendChild(button);
    buttonBox.appendChild(buttonBasket);
    div.appendChild(buttonBox);
    box.appendChild(div);
    containerProduct.appendChild(box);
  });
}
createProduct(clothes);

//gnerov sortavoruma
function searchedProduct() {
  search.onclick = () => {
    cart.style.display = "none";
    vle = newArr.reduce(
      (accumliator, item) => accumliator + +item.count * +item.price,
      0
    );
    sum.innerHTML = vle + "$";

    if (min.value !== "" || max.value !== "") {
      antiSearch.style.display = "block";
      antiSearch.onclick = () => {
        containerProduct.replaceChildren();

        antiSearch.style.display = "none";
        if (searchProduct.value === "clothes") {
          createProduct(clothes);
        } else if (searchProduct.value === "shoes") {
          createProduct(shoes);
        } else if (searchProduct.value === "") {
          createProduct(shoes);
        }
        min.value = "";
        max.value = "";
        vle = 0;
        vle = newArr.reduce(
          (accumliator, item) => accumliator + +item.count * +item.price,
          0
        );
        sum.innerHTML = vle + "$";
      };
    }
    shoes.map((item) => {
      maxPriceArr[q] = +item.price;
      q++;
      // console.log(maxPrice);
      maxPrice = Math.max(...maxPriceArr);
    });

    containerProduct.replaceChildren();
    if (max.value === "") {
      max.value = maxPrice;
    }
    if (searchProduct.value === "clothes") {
      searchArr = clothes.filter(
        (item) => +item.price >= min.value && +item.price <= max.value
      );

      createProduct(searchArr);
    } else if (searchProduct.value === "shoes") {
      searchArr = shoes.filter(
        (item) => +item.price >= min.value && +item.price <= max.value
      );

      createProduct(searchArr);
    } else if (searchProduct.value === "") {
      searchArr = shoes.filter(
        (item) => +item.price >= min.value && +item.price <= max.value
      );

      createProduct(searchArr);
    }
  };
}
searchedProduct();

// hly vor menak shoes u clothes ova ashxatum (apranqnerna poxum)
function change() {
  // function change1() {
  //   if (searchProduct.value === "shoes") {
  //     containerProduct.replaceChildren();
  //     createProduct(shoes);
  //   } else if (searchProduct.value === "clothes") {
  //     containerProduct.replaceChildren();
  //     createProduct(clothes);
  //   } else {
  //     alert("There is no such a product please try once more");
  //   }
  // }  
  searchProduct.addEventListener("keypress", function (event) {
    if (searchProduct.value === "shoes") {
      containerProduct.replaceChildren();
      createProduct(shoes);
      cart.style.display = "none";
    } else if (searchProduct.value === "clothes") {
      containerProduct.replaceChildren();
      createProduct(clothes);
      cart.style.display = "none";
    } else {
      if (event.key === "Enter") {
        alert("There is no such a product please try once more");
      }
    }
  });
  // press.onclick = () => {
  //   change1();
  // };
}
change();
// slide();
