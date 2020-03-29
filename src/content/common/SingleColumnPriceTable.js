import { html } from 'https://unpkg.com/htm/preact/standalone.module.js';

const TableRow = props => html`
<tr>
  <td>${props.title}</td>
  <td class="w3-right-align">
    ${typeof props.price === 'number' ? `$${props.price}` : props.price}
  </td>
</tr>
`;

const SinglePriceTable = props => html`
<div class="w3-col l6 s12">
  <div class="card card-shadow ">
    <div class="card-header w3-center flyer-color">
      <h3>${props.title}</h3>
    </div>
    <div class="card-body flyer-design ">
      <table class="w3-table  w3-border-0">
        ${props.items.map(it => html`<${TableRow} ...${it} />`)}
      </table>
    </div>
  </div>
</div>
`;

export default SinglePriceTable;
