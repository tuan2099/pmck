'use strict';

/**
 * new-tag service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::new-tag.new-tag');
