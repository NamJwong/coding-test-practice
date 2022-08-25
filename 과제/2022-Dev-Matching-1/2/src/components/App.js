import { getLanguagesByKeyword } from '../api.js';
import SearchInput from './SearchInput.js';
import Suggestion from './Suggestion.js';

export default function App({ $target }) {
  this.state = {
    searchedLanguages: [],
    selectedLanguages: [],
  };

  this.setState = (nextState) => {
    // keyword가 달라질 때에만 실행됨. 따라서 suggestion을 초기화 함. 이 내용을 좀 더 명시적으로 나타내도록 리팩토링 해야 할 듯
    this.state = {
      ...this.state,
      ...nextState,
    };
    suggestion.setState({
      selectedIndex: 0,
      items: this.state.searchedLanguages,
    });
  };

  const searchInput = new SearchInput({
    $target,
    initialState: { keyword: '' },
    onChange: async (keyword) => {
      if (keyword.length === 0) {
        this.setState({
          searchedLanguages: [],
        });
      } else {
        const languages = await getLanguagesByKeyword(keyword);
        this.setState({
          searchedLanguages: languages,
        });
      }
    },
  });

  const suggestion = new Suggestion({
    $target,
    initialState: {
      cursor: 0,
      items: [],
    },
  });
}
