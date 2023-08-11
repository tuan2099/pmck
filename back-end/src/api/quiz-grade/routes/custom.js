module.exports = {
  routes: [
    {
      method: "GET",
      path: "/check-quiz-completed",
      handler: "quiz-grade.checkQuizzCompleted",
      config: {
        auth: false,
      },
    },
  ],
};
