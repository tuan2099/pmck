"use strict";

/**
 * quiz-grade controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::quiz-grade.quiz-grade",
  ({ strapi }) => ({
    async checkQuizzCompleted(ctx) {
      try {
        const { quizID, userID } = ctx.query;
        const datas = await strapi
          .query("api::quiz-grade.quiz-grade")
          .findMany({
            where: { quiz: quizID },
            populate: {
              users_permissions_user: true,
              quiz: true,
            },
          });
        if (datas) {
          const quiz = datas.find(
            (item) => item.users_permissions_user?.id.toString() === userID
          );
          ctx.body = { isCompleted: Boolean(quiz), gr: quiz.gr };
        } else {
          ctx.body = {
            isCompleted: false,
          };
        }
      } catch (error) {
        ctx.body = "err";
      }
    },
  })
);
