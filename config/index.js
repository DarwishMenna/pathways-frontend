import merge from 'lodash.merge';
import url from 'url';

const default_config = {
    api: {}
};

const build_config = require(`./${__BUILD.CONFIG}.default.js`);

const custom_config = {
    api: __CONFIG.API_URL ? url.parse(__CONFIG.API_URL) : undefined
}

module.exports = merge({}, default_config, build_config, custom_config);
