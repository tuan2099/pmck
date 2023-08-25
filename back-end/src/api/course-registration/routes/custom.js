module.exports = {
  routes: [
    {
      method: "GET",
      path: "/check-course-registed",
      handler: "course-registration.checkCourseRegisted",
      config: {
        auth: false,
      },
    },
  ],
};
