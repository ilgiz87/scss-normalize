# SCSS Normalize

Современный стартовый комплект для веб-разработки с использованием SCSS, основанный на адаптации стилей CSS для нормализации от [Александра Ламкова](https://github.com/aleksanderlamkov).

## 🚀 Особенности

- **Современная архитектура**: Следует принципам 7-1 pattern SCSS
- **Адаптивный дизайн**: Функции `clamp()` для плавного масштабирования
- **Доступность**: Поддержка `prefers-reduced-motion`, `visually-hidden` и других accessibility features
- **Автоматизация**: NPM скрипты для компиляции и оптимизации
- **CSS переменные**: Использование CSS Custom Properties для гибкости

## 📦 Установка

```bash
npm install
```

## 🛠️ Использование

### Компиляция SCSS в CSS
```bash
npm run compile
```

### Отслеживание изменений
```bash
npm run watch
```

### Полная сборка (компиляция + оптимизация)
```bash
npm run build
```

## 🎯 Основные функции

### 1. Функция `toRem()`
Преобразует пиксели в rem единицы:
```scss
font-size: toRem(16); // 1rem
```

### 2. Функция `clamp1()`
Создает плавное масштабирование с вычисляемым предпочтительным значением:
```scss
font-size: clamp1(16, 24); // clamp(1rem, calc(0.5rem + 0.56vw), 1.5rem)
```

### 3. Функция `clamp2()`
Создает clamp с фиксированным предпочтительным значением в vw:
```scss
font-size: clamp2(16, 24); // clamp(1rem, 1.67vw, 1.5rem)
```

## 🏗️ Структура проекта

```
📦
├─ .gitignore
├─ .vscode
│  └─ settings.json
├─ LICENSE
├─ README.md
├─ css
│  └─ style.css
├─ index.html
├─ package-lock.json
├─ package.json
├─ postcss.config.js
└─ scss
   ├─ _root.scss
   ├─ _shame.scss
   ├─ _variables.scss
   ├─ abstracts
   │  ├─ _functions.scss
   │  ├─ _index.scss
   │  ├─ _mixins.scss
   │  ├─ _normalize.scss
   │  └─ _placeholders.scss
   ├─ components
   │  ├─ _buttons.scss
   │  └─ _utils.scss
   ├─ layout
   │  └─ basicLayouts
   │    ├─ _01-page.scss
   │    ├─ _02-header.scss
   │    ├─ _03-main.scss
   │    └─ _04-footer.scss
   └─ style.scss
```

## 🎨 Переменные

Основные переменные находятся в `_variables.scss`:

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

## 📱 Адаптивность

Проект использует современные CSS функции для адаптивности:

- `clamp()` для плавного масштабирования
- `dvh` для корректной высоты на мобильных устройствах
- CSS Grid для гибких макетов

## ♿ Доступность

Включены функции для улучшения доступности:

- Поддержка `prefers-reduced-motion`
- Плейсхолдер `visually-hidden`
- Правильная структура заголовков
- Фокусные состояния для интерактивных элементов

## 🤝 Вклад в проект

1. Форкните репозиторий
2. Создайте ветку для новой функции
3. Внесите изменения
4. Создайте Pull Request

## 📄 Лицензия

ISC License

## 👨‍💻 Автор

**ILGIZ KHUZHAHMETOV**

---

*Основано на css-normalize от [Александра Ламкова](https://github.com/aleksanderlamkov)*
