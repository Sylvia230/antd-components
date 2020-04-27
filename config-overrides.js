const { override, fixBabelImports, addLessLoader, addBabelPlugins,useEslintRc,addDecoratorsLegacy} = require('customize-cra');

module.exports = override(
  ...addBabelPlugins([
    'import',
    { libraryName: 'antd-compontents', libraryDirectory: 'es', style: true },
    'antd-compontents',
  ]),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
    ecoratorsLegacy: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#f5821f' },
  }),
  addDecoratorsLegacy(),
  useEslintRc(),
);
