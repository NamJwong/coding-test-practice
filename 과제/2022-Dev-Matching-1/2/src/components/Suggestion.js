export default function Suggestion({ $target, initialState }) {
  this.$element = document.createElement('div');
  this.$element.className = 'Suggestion';
  $target.appendChild(this.$element);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    const { items = [] } = this.state;
    if (items.length > 0) {
      this.$element.style.display = 'block';
      this.$element.innerHTML = `
				<ul>
					${items
            .map(
              (item, index) => `
						<li data-index="${index}">${item}</li>
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
}
