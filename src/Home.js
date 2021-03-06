import { html, Component } from 'https://unpkg.com/htm/preact/standalone.module.js';

import {
    Nav,
    Slider,
    Header
} from './ui.js';

import Pick5 from './content/pick5/Pick5.js';
import pick5_data from './content/pick5/data.js';
import seafood_data from './content/pick5/seafood_data.js';
import deli_data from './content/pick5/deli_data.js';
import poultry_data from './content/poultry/data.js';
import pork_data from './content/poultry/pork-data.js';
import priceByTheCase_data from './content/priceByTheCase/data.js';
import usdaBeefSpecial from './content/priceByTheCase/beef-data.js';
import SingleColumnPriceTable from './content/common/SingleColumnPriceTable.js';
import TwoColumnPriceTable from './content/common/TwoColumnPriceTable.js';
import SingleColumnList from './content/common/SingleColumnList.js';
import TwoColumnList from './content/common/TwoColumnList.js';

class Home extends Component {
    render() {
        return html`
            <div>
                <${Nav} />
                <${Slider} />
                <${Header} />
                <${Pick5} ...${pick5_data}/>
                <div class="w3-content">
                    <div class="w3-row-padding card-deck">
                        <${SingleColumnPriceTable} ...${priceByTheCase_data} />
                        <${TwoColumnPriceTable} ...${poultry_data} />
                    </div>
                </div>
                <div class="w3-content">
                    <div class="w3-row-padding card-deck">
                        <${SingleColumnPriceTable} ...${usdaBeefSpecial} />
                        <${TwoColumnPriceTable}  ...${pork_data} />
                    </div>
                </div>
                <div class="w3-content">
                    <${TwoColumnList} ...${seafood_data} title="Visit Our Seafood Market" img="blue-crab.jpg" />
                    <${TwoColumnList} ...${deli_data} title="Deli Package" img="deli.jpg" />
                </div>
            </div>
        `;
    }
}

export default Home;
