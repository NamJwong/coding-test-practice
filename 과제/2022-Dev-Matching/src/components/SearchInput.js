import Component from './base/Component.js';
import { $, on } from '../utils/DOM.js';

export default class SearchInput extends Component {
  template() {
    return `<input class="SearchInput__input" type="text" placeholder="프로그램 언어를 입력하세요.">`;
  }

  setEvent() {
    const { onChange, suggestionList } = this.props;
    this.addEvent('change', '.SearchInput__input', async () => {
      fetch(
        `https://wr4a6p937i.execute-api.ap-northeast-2.amazonaws.com/dev/languages?keyword=${
          $('.SearchInput__input').value
        }`,
        { method: 'GET' }
      )
        .then((response) => response.json())
        .then((data) => {
          onChange(data);
          console.log(suggestionList);
        });
    });
    // on(this.$target, 'change', async function async() {
    //   // api 함수 만들기
    //   const response = await fetch(
    //     `https://wr4a6p937i.execute-api.ap-northeast-2.amazonaws.com/dev/languages?keyword=${
    //       $('.SearchInput__input').value
    //     }`,
    //     { method: 'GET' }
    //   );
    //   onChange(response.json());
    // });
  }
}
