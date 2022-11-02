const template = document.createElement('template');
template.innerHTML = `
<style>
.product-image {
  background: #ebebef;
  padding: 1em;
  border: 1px solid black;
}
</style>
<div class="product-image">
  <img style="height: 300px"></img>
</div>`;

class ProductImage extends HTMLElement {
  static get observedAttributes() {
    return ['src'];
  }

  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    console.log(this);
  }

  get src() {
    return this.getAttribute('src');
  }
  
  set src(val) {
    this.setAttribute('src', val);
  }

  attributeChangedCallback(src, oldvalue, newvalue) {
    if (src === 'src') {
      this.shadowRoot.querySelector('img').src = newvalue;
    }
  }
}

window.customElements.define('product-image', ProductImage);