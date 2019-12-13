import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";

/**
 * `BioMygeneInfo`
 *
 * @customElement
 * @polymer
 * @demo
 *
 */
class BioMygeneInfo extends PolymerElement {
  static get properties() {
    return {
      properties: {
        data: { type: Object },
        title: { type: String }
      }
    };
  }

  static get template() {
    return html`
      <template>
        <span>{{data}}</span>
        <table>
          <template is="dom-if" if="{{title}}">
            <caption>
              {{title}}
            </caption>
          </template>

          <template is="dom-if" if="{{data != null && data.symbol !=  null}}">
            <tr>
              <td>Symbol:</td>
              <td>{{data.symbol}}</td>
            </tr>
          </template>
        </table>
      </template>
    `;
  }

  /**
   * Instance of the element is created/upgraded. Use: initializing state,
   * set up event listeners, create shadow dom.
   * @constructor
   */
  constructor() {
    super();
  }

  /**
   * Use for one-time configuration of your component after local
   * DOM is initialized.
   */
  ready() {
    super.ready();
  }
}

customElements.define("bio-mygene-info", BioMygeneInfo);
