let button = '.js-quantity__btn';
let input = '.js-quantity__input';
let container = '.js-quantity';

/**
 * Минус один
 * @param $button - jQuery элемент кнопки
 */
const remove = ($button) => {
  let $input = $button.closest(container).find(input);
  let value = Number($input.val());

  if (value > 1) {
    $input.val(value - 1);
  }
}

/**
 * Плюс один
 * @param $button - jQuery элемент кнопки
 */
const add = ($button) => {
  let $input = $button.closest(container).find(input);
  let value = Number($input.val());

  $input.val(value + 1);
}

/**
 * Старт
 */
export default () => {
  $(button).click((e) => {
    let $this = $(e.currentTarget);
    $this.data('action') === 'add' ?
        add($this) :
        remove($this);
  });
}
