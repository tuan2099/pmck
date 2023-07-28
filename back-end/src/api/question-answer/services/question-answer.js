'use strict';

/**
 * question-answer service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::question-answer.question-answer');
