'use strict';

/**
 * question-multianswer service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::question-multianswer.question-multianswer');
