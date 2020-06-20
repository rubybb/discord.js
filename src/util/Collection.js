'use strict';

const BaseCollection = require('@discordjs/collection');
const Util = require('./Util');

class Collection extends BaseCollection {
  
  constructor (options = {}) {
    super(options.cacheOptions);
  }
  
  toJSON() {
    return this.map(e => (typeof e.toJSON === 'function' ? e.toJSON() : Util.flatten(e)));
  }
}

module.exports = Collection;

/**
 * @external Collection
 * @see {@link https://discord.js.org/#/docs/collection/master/class/Collection}
 */
