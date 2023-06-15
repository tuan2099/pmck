'use strict';

/**
 * learning-progress service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::learning-progress.learning-progress');
