import { html, Component } from 'https://unpkg.com/htm/preact/standalone.module.js';

import {
    Nav,
    Slider,
    Header
} from './ui.js';

import Pick5 from './content/pick5/Pick5.js';
import ByTheCase from './content/priceByTheCase/ByTheCase.js';
import Poultry from './content/poultry/Poultry.js';

class App extends Component {
    render() {
        return html`
            <div>
                <${Nav} />
                <${Slider} />
                <${Header} />
                <${Pick5} />
                <div class="w3-content">
                    <div class="w3-row-padding card-deck">
                        <${ByTheCase} />
                        <${Poultry} />
                    </div>
                </div>
            </div>
        `;
    }
}

export default App;