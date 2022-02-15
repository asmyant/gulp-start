// Части bootstrap 5
import 'bootstrap/js/dist/tab';
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/collapse';

// Кастомные модули
import quantity from "./modules/quantity";

/**
 * Основной файл для скрипов
 */
$(document).ready(() => {
  /**
   * Плагины
   */
  svg4everybody(); // Спрайт svg иконок

  /**
   * Кастомные модули
   */
  quantity(); // Количество
})
