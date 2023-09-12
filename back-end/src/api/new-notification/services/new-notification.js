'use strict';

/**
 * new-notification service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::new-notification.new-notification');
