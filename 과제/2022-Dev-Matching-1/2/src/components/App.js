import { getLanguagesByKeyword } from '../api.js';
import SearchInput from './SearchInput.js';
import SelectedLanguages from './SelectedLanguages.js';
import Suggestion from './Suggestion.js';

export default function App({ $target }) {
  this.state = {
    searchedLanguages: [],
    selectedLanguages: [],
  };

  // keyword가 달라질 때에만 실행됨. 따라서 suggestion을 초기화 함. 이 내용을 좀 더 명시적으로 나타내도록 리팩토링 해야 할 듯
  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState,
    };
    suggestion.setState({
      selectedIndex: 0,
      items: this.state.searchedLanguages,
    });
    selectedLanguages.setState({
      selectedLanguages: this.state.selectedLanguages,
    });
  };

  const selectedLanguages = new SelectedLanguages({
    $target,
    initialState: { selectedLanguages: [] },
  });

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
    onSelect: (language) => {
      alert(language);

      const nextSelectedLanguages = [...this.state.selectedLanguages];

      const index = this.state.selectedLanguages.findIndex(
        (selectedLanguage) => selectedLanguage === language
      );

      if (index > -1) nextSelectedLanguages.splice(index, 1);

      nextSelectedLanguages.push(language);

      this.setState({
        ...this.state,
        selectedLanguages: nextSelectedLanguages,
      });
    },
  });
}
