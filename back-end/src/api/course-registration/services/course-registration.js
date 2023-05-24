'use strict';

/**
 * course-registration service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::course-registration.course-registration');
