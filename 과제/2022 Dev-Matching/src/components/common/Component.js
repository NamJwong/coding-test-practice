export default class Component {
  _target;
  _props;
  _state;
  constructor(target, props) {
    this._target = target;
    this._props = props;
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
    this._target.innerHTML = this.template();
    this.mounted();
  }
  setEvent() {}
  setState(newState) {
    this._state = { ...this._state, ...newState }; //스프레드 연산자 궁금증: newState가 undefined면 그냥 깔끔하게 무시?
    this.render();
  }
  addEvent(eventType, selector, callback) {
    const children = [...this._target.querySelectorAll(selector)];
    const isTarget = (target) =>
      children.includes(target) || target.closest(selector);
    this._target.addEventListener(eventType, (event) => {
      if (!isTarget(event.target)) return false;
      callback(event);
    });
  }
}
