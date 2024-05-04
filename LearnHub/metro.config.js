const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(_dirname);
defaultConfig.resolver.assetExts.push('cjs');   

module.exports = defaultConfig;
