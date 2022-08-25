export default function Suggestion({ $target, initialState, onSelect }) {
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
      const KEYS = { UP: 'ArrowUp', DOWN: 'ArrowDown', ENTER: 'Enter' };
      let nextIndex;

      if (e.key === KEYS.UP)
        nextIndex = selectedIndex === 0 ? lastIndex : selectedIndex - 1;
      else if (e.key === KEYS.DOWN)
        nextIndex = selectedIndex === lastIndex ? 0 : selectedIndex + 1;
      else if (e.key === KEYS.ENTER)
        onSelect(this.state.items[this.state.selectedIndex]);

      this.setState({ ...this.state, selectedIndex: nextIndex });
    }
  });

  this.$element.addEventListener('click', (e) => {
    const $li = e.target.closest('li');
    if ($li) {
      const { index } = $li.dataset;
      try {
        onSelect(this.state.items[parseInt(index)]);
      } catch (e) {
        // 무슨 에러를 잡아주려고 한거지?
        alert('문제가 발생했습니다. 선택할 수 없습니다.');
      }
    }
  });
}
