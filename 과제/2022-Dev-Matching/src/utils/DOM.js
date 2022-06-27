export const $ = (selector, scope = document) => {
  if (!selector) throw 'no selector';

  return scope.querySelector(selector);
};

export const $$ = (selector, scope = document) => {
  if (!selector) throw 'no selector';

  return Array.from(scope.querySelectorAll(selector));
};

export const on = (target, eventName, handler) => {
  target.addEventListener(eventName, handler);
};
