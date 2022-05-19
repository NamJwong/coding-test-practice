import Component from './base/Component.js';

export default class Suggestion extends Component {
  template() {
    console.log('why', this.props.suggestionList);
    return `
      <ul>
        ${this.props.suggestionList
          .map((suggestion) => `<li>${suggestion}</li>`)
          .join(' ')}
      </ul>
    `;
  }

  setEvent() {
    // const { filterItem } = this.$props;
    // // this.addEvent('click', '.filterBtn', ({ target }) => {
    // //   filterItem(Number(target.dataset.isFilter));
    // // });
  }
}
