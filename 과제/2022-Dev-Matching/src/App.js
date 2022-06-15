import Component from './components/base/Component.js';
import SearchInput from './components/SearchInput.js';
import Suggestion from './components/Suggestion.js';
import { $ } from './utils/DOM.js';

export default class App extends Component {
  setup() {
    this.state = {
      suggestionList: [],
      searchWord: '',
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
    // useState 마냥 this.state에 아예 이 형태를 묶어놓으면 좋을 듯
    if (typeof arguments[0] === 'function')
      this.setState({
        suggestionList: arguments[0](this.state.suggestionList),
        ...this.state,
      });
    else this.setState({ suggestionList: arguments[0], ...this.state });
  }

  setSearchWord() {
    // useState 마냥 this.state에 아예 이 형태를 묶어놓으면 좋을 듯
    console.log('dmdld', arguments[0]);
    if (typeof arguments[0] === 'function')
      this.setState({
        searchWord: arguments[0](this.state.searchWord),
        ...this.state,
      });
    else this.setState({ searchWord: arguments[0], ...this.state });
  }

  onChangeInput(suggestionList, searchWord) {
    // 얘를 쓰는게 낫나?
    this.setState({ suggestionList: suggestionList, searchWord: searchWord });
    // this.setSuggestionList(suggestionList);
    // this.setSearchWord(searchWord);
  }

  mounted() {
    // new SelectedLanguage($('.SelectedLanguage'), {
    //   searchWord: this.state.searchWord,
    // });
    new SearchInput($('.SearchInput'), {
      onChange: this.onChangeInput.bind(this),
      searchWord: this.state.searchWord,
    });
    new Suggestion($('.Suggestion'), {
      suggestionList: this.state.suggestionList,
    });
  }
}
