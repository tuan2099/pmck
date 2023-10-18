import { CourseResponseType } from 'src/types/course.type'
import http from 'src/utils/https'
import { ConfigParams } from 'src/hooks/useQueryConfig'

const COURSE_URL = '/courses?'
const LIST_COURSE_URL = 'list-courses?populate[courses][populate][0]=banner_course'
const CATEGORY_COURSE = '/course-lists?'
const COURSE_LEVEL = '/course-levels?'
const courseApi = {
  getListcourse() {
    return http.get(LIST_COURSE_URL)
  },
  getCourse(params: ConfigParams) {
    return http.get<CourseResponseType>(COURSE_URL, { params })
  },
  getDetailCourse(id: string) {
    return http.get(
      `/courses/${id}?populate[0]=banner_course&populate[1]=chapters.lesson_items&populate[2]=chapters.quizzes&populate[3]=chapters.certificate`
    )
  },
  registerCourse(body: { users?: number; courses: number; isRegistrationCourse: boolean }) {
    return http.post(`/course-registrations`, {
      data: body
    })
  },
  registerCoursess() {
    return http.get(`/course-registrations?populate=*`)
  },
  updateCourseRegisted({ id, data }: { id: string | number | any; data: any }) {
    return http.put(
      `/course-registrations/${id}?populate=*`,
      { data },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      }
    )
  },
  createCourseRegisted(data: any) {
    return http.post(
      '/course-registrations',
      { data },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      }
    )
  },
  getCourseCategories() {
    return http.get('/course-categories')
  },
  getQuizDetail(id: string | number) {
    return http.get(
      `/quizzes/${id}?populate[0]=questions.question_media&populate=questions.question_answers.answers_media`
    )
  },
  checkQuizComplete({ quizID, userID }: { quizID: string | number; userID: string | number }) {
    return http.get(`/check-quiz-completed?quizID=${quizID}&userID=${userID}`)
  },
  postQuizGrade(data: { users_permissions_user: number; quiz: number; gr: number }) {
    return http.post('/quiz-grades', { data })
  },
  getQuizGrade() {
    return http.get('/quiz-grades?populate=*')
  },
  getCourseList(params: ConfigParams) {
    return http.get(CATEGORY_COURSE, { params })
  },
  getCourseLevel(params: ConfigParams) {
    return http.get(COURSE_LEVEL, { params })
  },
  getCertificate(id: any) {
    return http.get(`/certificates/${id}?populate=*`)
  }
}

export default courseApi
