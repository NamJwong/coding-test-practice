import Component from './components/base/Component.js';
import SearchInput from './components/SearchInput.js';
import Suggestion from './components/Suggestion.js';
import { $ } from './utils/DOM.js';

export default class App extends Component {
  setup() {
    this.state = {
      suggestionList: [],
    };
  }

  template() {
    //new 컴포넌트명 하고 템플릿 불러오면 안되나?
    return `
      <div class="SelectedLanguage"></div>
      <form class="SearchInput"></form>
      <div class="Suggestion"></div>
    `;
  }

  setSuggestionList() {
    console.log(this);
    // useState 마냥 this.state에 아예 이 형태를 묶어놓으면 좋을 듯
    if (typeof arguments[0] === 'function')
      this.setState({
        suggestionList: arguments[0](this.state.suggestionList),
      });
    else this.setState({ suggestionList: arguments[0] });
  }

  onChangeInput(newState) {
    // 얘는 안됨 왜?
    console.log(this.setSuggestionList);
    this.setSuggestionList(newState);
  }

  mounted() {
    // new SelectedLanguage($('.SelectedLanguage'), {
    //   searchWord: this.state.searchWord,
    // });
    new SearchInput($('.SearchInput'), {
      suggestionList: this.state.suggestionList,
      onChange: this.setSuggestionList.bind(this),
    });
    new Suggestion($('.Suggestion'), {
      suggestionList: this.state.suggestionList,
    });
  }
}
