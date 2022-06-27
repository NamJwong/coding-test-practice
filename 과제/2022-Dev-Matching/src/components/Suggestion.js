import Component from './base/Component.js';

export default class Suggestion extends Component {
  template() {
    return `
      <ul>
        ${this.props.suggestionList
          .map((suggestion) => `<li>${suggestion}</li>`)
          .join(' ')}
      </ul>
    `;
  }
}
