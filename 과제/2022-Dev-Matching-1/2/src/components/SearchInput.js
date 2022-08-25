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
    const ACTION_IGNORE_KEYS = [
      'Enter',
      'ArrowUp',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
    ]; // 어떤 기준들로 이 키들을 무시하려고 하는지 잘 모르겠음. 아예 input 내용이 바뀔 때에만 onChange를 실행했으면 좋겠음.
    if (!ACTION_IGNORE_KEYS.includes(e.key)) onChange(e.target.value);
  });
}
