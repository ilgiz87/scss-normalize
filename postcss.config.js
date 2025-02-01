module.exports = {
  plugins: [
    require('postcss-preset-env')({
      stage: 1, // Уровень экспериментальных функций (0-4)
      browsers: ['last 3 versions', '> 1%', 'not dead'], // Поддерживаемые браузеры
    }),
    require('postcss-combine-media-query')(), // Объединение медиазапросов
    require('cssnano')({
      preset: 'default', // Минификация CSS
    }),
  ],
};