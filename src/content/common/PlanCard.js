import { html } from 'https://unpkg.com/htm/preact/standalone.module.js';

const PlanCard = props => html`
        <div class="w3-col l3 s12">
            <div class="card w3-center card-shadow">
                <div class="card-header flyer-color w3-border-0">
                    <h4>${props.plan.title}</h4>
                </div>
                <div class="card-body">
                    <div class="top-corner"></div>
                    ${props.plan.items.map(it => html`<p>${it}</p>`)}
                    <p class="w3-center w3-padding">
                        <span class="w3-badge w3-padding  w3-red w3-animate-zoom"><b>$${props.plan.discount}</b></span>
                    </p>
                </div>
                <div class="card-footer w3-center w3-text-red">${props.plan.bonus}</div>
            </div>
        </div>
    `;

const _PlanCard = ({ item }) => html`
        <div class="w3-col l3 s12">
            <div class="card w3-center card-shadow">
                <div class="card-header flyer-color w3-border-0">
                    <h4>Plan No. ${item}</h4>
                </div>
                <div class="card-body">
                    <div class="top-corner"></div>
                    <p>2lb Ground Beef</p>
                    <p>2lb Ground Beef</p>
                    <p>2lb Ground Beef</p>
                    <p>2lb Ground Beef</p>
                    <p>2lb Ground Beef</p>
                    <p>2lb Ground Beef</p>
                    <p>2lb Ground Beef</p>
                    <p>2lb Ground Beef</p>
                    <p>2lb Ground Beef</p>
                    <p class="w3-center w3-padding">
                        <span class="w3-medium w3-opacity"><del>$39.99</del></span>
                        <span class="w3-badge w3-padding  w3-red w3-animate-zoom"><b>$29.99</b></span>
                    </p>
                </div>
                <div class="card-footer w3-center w3-text-red">Free 2 Liter Soda</div>
            </div>
        </div>
    `;

export default PlanCard;
