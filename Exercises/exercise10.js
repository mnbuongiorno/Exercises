const container = document.querySelector(".flex-container");

function createKey(name, model, price) {
  const imagePath = "key.png";
  img = `<img class='key-img 'src='${imagePath}'>`;
  name = `<h2>${name}</h2>`;
  model = `<h3>${model}</h3>`;
  price = `<p>Price: $ ${price}</p>`;
  return [img, name, model, price];
}

const key = createKey("Key 1", "model A", "5");

let documentFragment = document.createDocumentFragment();

for (let i = 0; i <= 20; i++) {
  let randomModel = Math.round(Math.random() * 10000);
  let randomPrice = Math.round(Math.random() * 10 + 30);
  let key = createKey(`Key ${i}`, `Model ${randomModel}`, randomPrice);
  let div = document.createElement("DIV");
  div.addEventListener("click",()=>{changeHidden(randomModel)});
  div.tabIndex = i;
  div.classList.add(`item-${i}`, 'flex-item');
  div.innerHTML = key[0] + key[1] + key[2] + key[3];
  documentFragment.appendChild(div);
}

container.innerHTML = "";
container.appendChild(documentFragment);
