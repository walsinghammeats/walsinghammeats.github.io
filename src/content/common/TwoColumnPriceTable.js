import { html } from 'https://unpkg.com/htm/preact/standalone.module.js';

const TableRow = props => html`
<tr>
  <td>${props.title}</td>
  <td class="w3-right-align">
    ${typeof props.five === 'number' ? `$${props.five}` : '........'}
  </td>
  <td class="w3-right-align">
    ${typeof props.ten === 'number' ? `$${props.ten}` : '........'}
  </td>
</tr>
`;

const TwoPriceTable = props => html`
<div class="w3-col l6 s12">
  <div class="card card-shadow ">
    <div class="card-header w3-center flyer-color">
      <h3>${props.title}</h3>
    </div>
    <div class="card-body flyer-design ">
      <table class="w3-table w3-hoverable">
        <tr>
          <th></th>
          <th class="w3-right-align">5 lbs</th>
          <th class="w3-right-align">10 lbs</th>
        </tr>
        ${props.items.map(it => html`<${TableRow} ...${it} />`)}
      </table>
    </div>
  </div>
</div>
`;

export default TwoPriceTable;
