import { html } from 'https://unpkg.com/htm/preact/standalone.module.js';

const Nav = () => html`
  <div class="w3-top">
    <div class="w3-bar w3-black w3-top w3-left-align w3-large">
      <a href="/" class="w3-bar-item w3-button w3-hover-white">Home</a>
      <a href="/plans.html" class="w3-bar-item w3-button w3-hover-white">Plans</a>
    </div>
  </div>`;

const Slider = () => html`
  <div class="slider">
    <div class="w3-content">
      <div class="slider-content">
        <h1 class="w3-text-white">Walsingham</h1>
        <h4 class="w3-text-white">Meat Market</h4>
        <h3 class="w3-text-white">
          We Accept EBT Food Stamps<br />
          Debit Card and Credit Card<br />
          Prices Subject to change according to market
        </h3>
      </div>
    </div>
  </div>`;

const Header = () => html`
  <section class="tag-sec">
    <div class="w3-content">
      <div class="w3-center">
        <h5>
          Store Hours:<br />
          Monday-Saturday 9:00 am to 7:00 pm<br />
          Sunday 9:00 am to 4:00 pm
        </h5>
        <h4 class="tag-address">11561 Walsingham Rd, Largo, Florida<br />
          <span class="w3-text-red">(727) 581-4455 </span></h4>
      </div>
      <div class="w3-row-padding">
        <div class="w3-col m4 s12">
          <div class="tag-card card-shadow">
            <img class="tag-img" src="img/fresh-meat.jpg" />
            <div class="tag-card-content">
              <h4> Fresh Meat </h4>
            </div>
          </div>
        </div>
        <div class="w3-col m4 s12">
          <div class="tag-card card-shadow">
            <img class="tag-img" src="img/fresh-greens.jpg" />
            <div class="tag-card-content">
              <h4> Fresh Greens</h4>
            </div>
          </div>
        </div>
        <div class="w3-col m4 s12">
          <div class="tag-card card-shadow">
            <img class="tag-img" src="img/we-deliver.jpg" />
            <div class="tag-card-content">
              <h4> We Deliver </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;

export {
  Nav,
  Slider,
  Header
};
