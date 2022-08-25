import { getLanguagesByKeyword } from '../api.js';
import SearchInput from './SearchInput.js';
import Suggestion from './Suggestion.js';

export default function App({ $target }) {
  this.state = {
    searchedLanguages: [],
    selectedLanguages: [],
  };

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState,
    };
    suggestion.setState({
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
        console.log(this);
        this.setState({
          searchedLanguages: languages,
        });
      }
    },
  });

  const suggestion = new Suggestion({
    $target,
    initialState: {
      items: [],
    },
  });
}
