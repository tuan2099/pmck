'use strict';

/**
 * course-level service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::course-level.course-level');
