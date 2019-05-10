const path = require('path');
const Bundler = require('parcel-bundler');

// run the build for the specified bundle
(async function bundleAssets() {
  const lessPath = path.join(__dirname, 'less/style.less');
  console.log(lessPath);
  const bundler = new Bundler(lessPath, {
    outDir: path.join(__dirname, './'),
    watch: false,
    minify: true,
  });
  await bundler.bundle();
})();
