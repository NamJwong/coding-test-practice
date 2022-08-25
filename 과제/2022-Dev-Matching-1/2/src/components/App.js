import { getLanguagesByKeyword } from '../api.js';
import SearchInput from './SearchInput.js';

export default function App({ $target }) {
  this.state = {
    searchedLanguageList: [],
    selectedLanguageList: [],
  };

  const searchInput = new SearchInput({
    $target,
    initialState: { keyword: '' },
    onChange: async (keyword) => {
      const languages = await getLanguagesByKeyword(keyword);
    },
  });
}
