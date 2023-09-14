export type NewsType = {
  id: number
  attributes: {
    title: string
    description: string
    content: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    banner_new: {
      data: {
        id: number
        attributes: {
          name: string
          width: number
          height: number
          url: string
          // Add more banner attributes as needed
        }
      }[]
    }
    new_categories: {
      data: {
        id: number
        attributes: {
          createdAt: string
          updatedAt: string
          publishedAt: string
          category_name: string
        }
      }[]
    }
    new_tags: {
      data: {
        id: number
        attributes: {
          createdAt: string
          updatedAt: string
          publishedAt: string
          tag_name: string
        }
      }[]
    }
  }
}
