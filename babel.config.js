module.exports = (api) => {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          extensions: [
            '.ios.ts',
            '.android.ts',
            '.ts',
            '.ios.tsx',
            '.android.tsx',
            '.tsx',
            '.jsx',
            '.js',
            '.json',
          ],
          alias: {
            _App: './src/App',
            _assets: './src/assets',
            _api: './api',
            _components: './src/components',
            _hooks: './src/hooks',
            _layout: './src/layout',
            _screens: './src/screens',
            _stores: './src/stores',
            _routes: './src/routes',
            _themes: './src/themes',
            _templates: './src/templates',
            _utils: './src/utils',
          },
        },
      ],
    ],
  }
}
