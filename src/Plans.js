import { html, Component } from 'https://unpkg.com/htm/preact/standalone.module.js';

import {
    Nav,
    Slider,
    Header
} from './ui.js';

import PlanCard from './content/common/PlanCard.js';

import plan_data from './plans/data.js';

const buildCards = () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    return plan_data.map(it => html`<${PlanCard} plan=${it} />`);
};

class Home extends Component {
    render() {
        return html`
        <div>
            <${Nav} />
            <${Slider} />
            <${Header} />
            <section class="plan-sec">
                <div class="w3-content">
                    <div class="w3-row-padding card-deck">
                        ${buildCards()}
                    </div>
                </div>
            </section>
        </div>
        `;
    }
}

export default Home;