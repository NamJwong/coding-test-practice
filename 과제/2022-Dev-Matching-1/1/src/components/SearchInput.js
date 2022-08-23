import Component from './base/Component.js';
import { $, on } from '../utils/DOM.js';

export default class SearchInput extends Component {
  template() {
    console.log('te', this.props.searchWord);
    return `<input class="SearchInput__input" type="text" placeholder="프로그램 언어를 입력하세요." autofocus value="${this.props.searchWord}">`;
  }

  setEvent() {
    const { onChange } = this.props;
    this.addEvent('input', '.SearchInput__input', async (e) => {
      if (!$('.SearchInput__input').value) return;
      // api 함수 만들기
      fetch(
        `https://wr4a6p937i.execute-api.ap-northeast-2.amazonaws.com/dev/languages?keyword=${
          $('.SearchInput__input').value
        }`,
        { method: 'GET' }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(e.target);
          console.log('dds', e.target.value);
          onChange(data, e.target.value);
          console.log('dd', e.target.value);
          console.log('d', this.props.searchWord);
        });
    });
  }

  mounted() {
    $('.SearchInput__input').value = '';
    $('.SearchInput__input').focus();
    $('.SearchInput__input').value = this.props.searchWord;
  }
}
