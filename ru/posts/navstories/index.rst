.. title: navstories
.. slug: navstories
.. date: 2017-06-06 08:46:16 UTC+03:00
.. tags:
.. category:
.. link:
.. description:
.. type: text

Добавьте все истории в указанные местоположения в панель навигации.

::

  To install, run nikola plugin -i navstories

Этот очень простой плагин выводит все истории на панель навигации.

Началось как доказательство концепции ConfigPlugin. По запросу в списке рассылки.

Изменено для отображения истории / страниц в иерархическую структуру в меню
Основанный на структуре permalink (по умолчанию для структуры каталогов
Сообщений).

Этот плагин генерирует меню и один уровень подменю (дальнейшие подвыборы отображаются в подменю первого уровня).
ПРЕДУПРЕЖДЕНИЕ. Поддержка подменю зависит от темы.

Записи меню, вставленные навигаторами, вставляются после записей из ``NAVIGATION_LINKS``. Записи, перечисленные в NAVIGATION_LINKS_POST_NAVSTORIES, вставляются после записей в Navstories. Формат NAVIGATION_LINKS_POST_NAVSTORIES идентичен NAVIGATION_LINKS. Чтобы включить рассказы в меню, постоянная ссылка на историю должна начинаться с одной из строк, перечисленных в NAVSTORIES_PATHS, другие истории должны игнорироваться этим подключением. Сортировка и отображение имен в меню можно контролировать для записей верхнего уровня через NAVSTORIES_MAPPING. ::

  # Paths (permalink) that should be processed by navstories plugin (path starting with /<variable>/, <variable> can contain /, e.g.: stories/b
  NAVSTORIES_PATHS = {
  DEFAULT_LANG: (
      'pages',
      'stories',
    ),
  }
  # Mapping "Toplevel in permalink" to "Visible text"
  # The order is as listed here, entries not listed here are included in the end, with the top level of the permalink as text
  NAVSTORIES_MAPPING = {
    DEFAULT_LANG: (
      # example (remove initial #):
      #("b", "Boo"),
      #("f", "Foo"),
    ),
  }
  # Indention for each level deeper in a submenu, than the highest level in that submenu, the submenu is flat, so it is only the menu text there are indented
  NAVSTORIES_SUBMENU_INDENTION = '* '
  # Static menu after dynamic navstories menu entries
  # Format just as NAVIGATION_LINKS, but content included after  navstories entries
  NAVIGATION_LINKS_POST_NAVSTORIES = {
    DEFAULT_LANG: (
    ),
  }

Чтобы исключить один пункт из меню, мы добавим следующие метаданные:

 ``.. hidefromnav: yes`` к ``story``.
