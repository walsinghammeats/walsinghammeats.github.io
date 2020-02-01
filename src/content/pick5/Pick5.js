import { html } from 'https://unpkg.com/htm/preact/standalone.module.js';

const Pick5 = props => html`
  <section class="hot-flyer">
    <div class="w3-container">
      <div class="w3-half">
        <div class="w3-card hot-1 ">
          <div class=" w3-center w3-padding-large">
            <h4><strong>${props.title}</strong></h1>
          </div>
          <div class="w3-container w3-medium">
            <p class="w3-center w3-padding">
              <span class="w3-medium w3-opacity"><del>$${props.price}</del></span>
              <span class="w3-badge w3-padding w3-large w3-red w3-animate-zoom"><b>$${props.discountPrice}</b></span>
            </p>
            <div class="w3-row-padding">
              <div class="w3-col l6 s12">
              ${props.items.filter((it, idx) => idx % 2 === 0).map(d => html`<p>${d}</p>`)}
              </div>
              <div class="w3-col l6 s12">
              ${props.items.filter((it, idx) => idx % 2 === 1).map(d => html`<p>${d}</p>`)}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w3-half">
        <img class="w3-image" src="img/meat1.jpg" />
      </div>
    </div>
  </section>`;

export default Pick5;