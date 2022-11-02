const productListTemplate = document.createElement('template');
productListTemplate.innerHTML = `
<style>
.product-list {
  background: lightblue;
  padding: 1em;
  border: 1px solid blue;
}
</style>
<div class="product-list">
  
</div>`;

const products = [
  {
    name: 'Nike 270',
    img: 'assets/270.jpeg',
  },
  {
    name: 'Nike 2021',
    img: 'assets/2021.webp',
  },
  {
    name: 'Nike 2090',
    img: 'assets/2090.webp',
  }
];

class ProductList extends HTMLElement {
  static get observedAttributes() {
    return ['products'];
  }

  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild( productListTemplate.content.cloneNode(true));

    products.forEach(product=>{
      const button = document.createElement('button');
      button.addEventListener('click',()=>{
        this.dispatchEvent(new CustomEvent('selectProduct', {
          detail: product
        }))
      });
      button.innerText = product.name;
      this.shadowRoot.querySelector('.product-list').appendChild(button);
    })
  }
}

window.customElements.define('product-list', ProductList);