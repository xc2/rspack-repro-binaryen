
const url = require('url').fileURLToPath(new URL('./', import.meta.url));

console.log('I\'m not worker!', url);
