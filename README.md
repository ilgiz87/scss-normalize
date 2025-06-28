# 🎨 SCSS Normalize Starter Kit


## 🚀 Особенности

- **Адаптивный дизайн** - Функции `clamp()` для плавного масштабирования
- **Автоматизация** - NPM скрипты для компиляции и оптимизации
- **CSS переменные** - Использование CSS Custom Properties для гибкости

## 📦 Установка


# Установка зависимостей
npm install
```

### Отслеживание изменений
```bash
npm run watch
```

### Полная сборка (компиляция + оптимизация)
```bash
npm run build
```

### Очистка скомпилированных файлов
```bash
npm run clean
```

## 🏗️ Структура проекта

```
scss-normalize/
├── 📁 styles/                    # Стили проекта
│   ├── main.scss                 # Главный SCSS файл
│   ├── main.css                  # Скомпилированный CSS
│   └── 📁 scss/                  # SCSS файлы
│       ├── _variables.scss       # Переменные
│       ├── _fonts.scss           # Настройки шрифтов
│       ├── _root.scss            # CSS переменные
│       ├── _shame.scss           # Эксперименты и костыли
│       ├── 📁 abstracts/         # Абстракции
│       │   ├── _normalize.scss   # Нормализация
│       │   └── ...
│       ├── 📁 components/        # Компоненты
│       │   ├── _buttons.scss     # Стили кнопок
│       │   └── _utils.scss       # Утилиты
│       └── 📁 layout/            # Макеты
│           └── 📁 basicLayouts/  # Базовые макеты
│               ├── _01-page.scss # Страница
│               ├── _02-header.scss # Шапка
│               ├── _03-main.scss # Основной контент
│               └── _04-footer.scss # Подвал
├── 📁 scripts/                   # JavaScript файлы
│   └── main.js                   # Основной JS файл
├── 📁 fonts/                     # Шрифты
├── 📁 .vscode/                   # Настройки VS Code
├── index.html                    # Главная страница
├── package.json                  # Зависимости и скрипты
├── .prettierrc                   # Конфигурация Prettier
├── .editorconfig                 # Настройки редактора
├── postcss.config.js             # Конфигурация PostCSS
└── README.md                     # Документация
```

## 🎨 Переменные

Основные переменные находятся в `styles/scss/_variables.scss`:

```scss
// Базовые настройки
$BASE_FONT_SIZE: 16;
$VIEWPORT-MAX: 1440;
$VIEWPORT-MIN: 360;

// Цвета
$body-text-color: #121212;
$body-bg-color: #fefefe;

// Шрифты
$body-font-family: 'Onest';
$heading-font-family: 'Druk-Cyr';
```

## 🔧 NPM скрипты

| Скрипт | Описание |
|--------|----------|
| `compile` | Компиляция SCSS в CSS |
| `watch:compile` | Отслеживание изменений в SCSS |
| `combine-media` | Объединение медиазапросов |
| `minify` | Минификация CSS |
| `watch` | Запуск отслеживания изменений |
| `build` | Полная сборка проекта |
| `clean` | Очистка скомпилированных файлов |
| `lint` | Проверка SCSS файлов |
