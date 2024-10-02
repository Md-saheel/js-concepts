import { name, age } from './export.js';
import pass from './export.js';
import * as exports1 from './export.js';

document.querySelector(
  '.target'
).innerHTML = `${name},${age},${pass},${exports1.name},${exports1.age},${exports1.default},`;
