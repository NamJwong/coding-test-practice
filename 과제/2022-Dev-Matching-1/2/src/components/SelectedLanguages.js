const MAX_DISPLAY_COUNT = 5;

// SelectedItems라는 이름으로 바꾼 뒤 좀 더 확실히 관심사의 분리를 할 수 있는 방법이 있을지
export default function SelectedLanguages({ $target, initialState }) {
  this.$element = document.createElement('div');
  this.$element.className = 'SelectedLanguage';
  this.state = initialState;

  $target.appendChild(this.$element);

  this.setState = (nextState) => {
    this.state = nextState;

    if (this.state.selectedLanguages.length > MAX_DISPLAY_COUNT) {
      const startPosition =
        this.state.selectedLanguages.length - MAX_DISPLAY_COUNT;
      this.state.selectedLanguages = this.state.selectedLanguages.slice(
        startPosition,
        MAX_DISPLAY_COUNT + startPosition
      );
    }
    this.render();
  };

  this.render = () => {
    this.$element.innerHTML = `
			<ul>
				${this.state.selectedLanguages
          .map(
            (item) => `
					<li>${item}</li>
				`
          )
          .join(' ')}
			</ul>
		`;
  };

  this.render();
}
