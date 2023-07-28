'use strict';

/**
 * quiz-grade service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::quiz-grade.quiz-grade');
