'use strict';

/**
 * list-course service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::list-course.list-course');
