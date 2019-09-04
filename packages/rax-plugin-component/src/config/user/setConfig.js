const _ = require('lodash');
const defaultConfig = require('./default.config');

module.exports = (config, context, target) => {
  const { userConfig } = context;

  const supportConfig = _.pick(userConfig, Object.keys(_.omit(defaultConfig, ['devWatchLib', 'devOutputDir', 'outputDir'])));

  _.forEach(supportConfig, (value, key) => {
    const setKey = require(`./keys/${key}`);
    setKey(config, context, value, target);
  });
};
