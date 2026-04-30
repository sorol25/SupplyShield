require('dotenv').config();
const app = require('./app');
function show(router, prefix = '') {
  if (!router || !router.stack) return;
  router.stack.forEach((layer, i) => {
    const route = layer.route;
    const methods = route ? Object.keys(route.methods).join(',') : '';
    console.log(prefix + i, layer.name, 'path=' + layer.path, 'regexp=' + layer.regexp, 'methods=' + methods, 'hasStack=' + !!(layer.handle && layer.handle.stack));
    if (layer.handle && layer.handle.stack) {
      show(layer.handle, prefix + i + '.');
    }
  });
}
console.log('app.router exists', !!app.router);
show(app.router);
