export default class Component {
  $target;
  props;
  state;
  constructor($target, props) {
    this.$target = $target;
    this.props = props;
    this.setup();
    this.setEvent();
    this.render();
  }
  setup() {}
  mounted() {} // 여기에 useEffect?
  template() {
    return '';
  }
  render() {
    this.$target.innerHTML = this.template();
    this.mounted();
  }
  setEvent() {}
  setState(newState) {
    this.state = { ...this.state, ...newState }; //스프레드 연산자 궁금증: newState가 undefined면 그냥 깔끔하게 무시?
    this.render();
  }
  addEvent(eventType, selector, callback) {
    const children = [...this.$target.querySelectorAll(selector)];
    const isTarget = ($target) =>
      children.includes($target) || $target.closest(selector);
    this.$target.addEventListener(eventType, (event) => {
      if (isTarget(event.target)) callback(event);
    });
  }
}
