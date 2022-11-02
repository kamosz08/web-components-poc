const model = {
  cart: {
    count: 0,
  },
  activeProduct: {
    img: 'assets/2021.webp',
    name: 'Nike 2021',
  }
};

const productImage = document.querySelector('product-image');
const productList = document.querySelector('product-list');


productImage.src = model.activeProduct.img;

productList.addEventListener('selectProduct', ({ detail: { name, img }}) => {
  if(name===model.activeProduct.name){
    alert('This product is already chosen');
    return;
  }
  model.activeProduct.img = img;
  model.activeProduct.name = name;

  productImage.src = model.activeProduct.img;
});
