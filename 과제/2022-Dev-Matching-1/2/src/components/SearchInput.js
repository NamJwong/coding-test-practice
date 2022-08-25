export default function SearchInput({ $target, initialState, onChange }) {
  this.$element = document.createElement('form');
  this.$element.className = 'SearchInput';
  this.state = initialState;

  $target.appendChild(this.$element);

  this.render = () => {
    this.$element.innerHTML = `<input class="SearchInput__input" placeholder="프로그램 언어를 입력하세요." value="${this.state.keyword}" />`;
  };

  this.render();

  this.$element.addEventListener('keyup', (e) => {
    onChange(e.target.value);
  });
}
