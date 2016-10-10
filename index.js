const dict = require('define-word').define;
const pixie = require('pixie');

function define(bot, config) {
  config = config[define.name] || {};
  const format = config.format || '```{{word}} | {{partofspeech}}\n\t{{definition}}```';
  const unknown = config.unknown || 'No definitions found for the word `{{query}}`';

  return function run(message, args) {
    if (!args.length) {
      return message.reply('Invalid arguments');
    }

    const query = args.join(' ').trim();
    const word = dict(query);
    const definitions = word.definitions;
    let words = [];
    const max = config.max === 'all' ? definitions.length : config.max || 1;

    for (let i = 0; i < (max > definitions.length ? definitions.length : max); i++) {
      const definition = definitions[i];
      words.push(definition);
    }

    words = words.map(def => pixie.render(format, {
      word: query,
      partofspeech: word.type,
      definition: def.trim()
    })).join('\n');

    if (!words) return message.reply(pixie.render(unknown, {query}));

    message.channel.sendMessage(words, {split: true});
  }
}

define.command = 'define';
define.usage = 'define <word>';

module.exports = define;
