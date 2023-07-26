'use strict';

/**
 * new-category service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::new-category.new-category');
