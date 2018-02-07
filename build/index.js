'use strict';

const fs = require('fs');
const rules = {};
const categories = [];

const files = fs.readdirSync('./node_modules/eslint/lib/rules');

files.forEach(file => {
  if (file.match(/\.js/)) {
    const { meta } = require(`../node_modules/eslint/lib/rules/${ file }`);
    const { category } = meta.docs;
    const categoryUrl = category.toLowerCase().replace(' ', '-');
    const ruleUrl = file.toLowerCase().replace(' ', '-').replace('.js', '');
    const index = categories.findIndex(c => c.name === category);

    if (index < 0) {
      categories.push({ url: categoryUrl, name: category, count: 1 });
    } else {
      categories.map(cat => cat.name === category ? {
        ...cat,
        count: cat.count++,
      } : cat);
    }

    if (!rules[categoryUrl]) rules[categoryUrl] = {};
    rules[categoryUrl][ruleUrl] = {
      categoryUrl,
      ruleUrl,
      ...meta,
    };
  }
});

fs.writeFileSync('./generated/rules.json', JSON.stringify(rules));
fs.writeFileSync('./generated/categories.json', JSON.stringify(categories));
