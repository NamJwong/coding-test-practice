import Component from './base/Component.js';
import { $, on } from '../utils/DOM.js';

export default class SearchInput extends Component {
  template() {
    return `<input class="SearchInput__input" type="text" placeholder="프로그램 언어를 입력하세요.">`;
  }

  setEvent() {
    const { onChange } = this.props;
    this.addEvent('change', '.SearchInput__input', async () => {
      // api 함수 만들기
      fetch(
        `https://wr4a6p937i.execute-api.ap-northeast-2.amazonaws.com/dev/languages?keyword=${
          $('.SearchInput__input').value
        }`,
        { method: 'GET' }
      )
        .then((response) => response.json())
        .then((data) => {
          onChange(data);
        });
    });
  }
}
