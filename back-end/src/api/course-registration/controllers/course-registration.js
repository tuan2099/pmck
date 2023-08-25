"use strict";

/**
 * course-registration controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::course-registration.course-registration",
  ({ strapi }) => ({
    async checkCourseRegisted(ctx) {
      try {
        const { courseID, userID } = ctx.query;
        const datas = await strapi
          .query("api::course-registration.course-registration")
          .findOne({
            where: { user: userID },
            populate: {
              courses: true,
              user: true,
            },
          });
        if (datas) {
          const isRegisted = datas.courses.find(
            (item) => item.id.toString() === courseID
          );
          ctx.body = { isRegisted: Boolean(isRegisted) };
        } else {
          ctx.body = { isRegisted: false };
        }
      } catch (error) {
        ctx.body = "err";
      }
    },
  })
);
