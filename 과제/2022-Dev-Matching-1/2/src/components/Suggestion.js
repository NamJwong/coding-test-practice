export default function Suggestion({ $target, initialState }) {
  this.$element = document.createElement('div');
  this.$element.className = 'Suggestion';
  $target.appendChild(this.$element);

  this.state = { selectedIndex: 0, items: initialState.items };

  this.setState = (nextState) => {
    this.state = { ...this.state, ...nextState };
    this.render();
  };

  this.render = () => {
    const { items = [], selectedIndex } = this.state; // items 초기화 할 필요가 없어보임.
    if (items.length > 0) {
      this.$element.style.display = 'block';
      this.$element.innerHTML = `
				<ul>
					${items
            .map(
              (item, index) => `
						<li class="${
              index === selectedIndex ? 'Suggestion__item--selected' : ''
            }" data-index="${index}">${item}</li>
					`
            )
            .join(' ')}
				</ul>
			`;
    } else {
      this.$element.style.display = 'none';
      this.$element.innerHTML = '';
    }
  };

  this.render();

  window.addEventListener('keyup', (e) => {
    if (this.state.items.length > 0) {
      const { selectedIndex } = this.state;
      const lastIndex = this.state.items.length - 1;
      const NAVIGATION_KEYS = { UP: 'ArrowUp', DOWN: 'ArrowDown' };
      let nextIndex;

      if (e.key === NAVIGATION_KEYS.UP)
        nextIndex = selectedIndex === 0 ? lastIndex : selectedIndex - 1;
      else if (e.key === NAVIGATION_KEYS.DOWN)
        nextIndex = selectedIndex === lastIndex ? 0 : selectedIndex + 1;

      this.setState({ ...this.state, selectedIndex: nextIndex });
    }
  });
}
