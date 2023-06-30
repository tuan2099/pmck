export type CourseType = {
  banner_course: any
  price: number
  course_name: string
  id: number
  attributes: {
    author?: string
    banner_course: any
    course_description?: string
    course_name: string
    createdAt: string
    language: string
    price: number
    publishedAt: string
    rating: number
    short_description: string
    status_course?: number | string | null
    updatedAt: string
    course_categories: {
      data: { id: number; attributes: { name: string; title: string } }[]
    }
  }
}

export type CourseResponseType = {
  data: CourseType[]
  meta: {
    pagination: {
      page: number
      pageCount: number
      pageSize: number
      total: number
    }
  }
}
