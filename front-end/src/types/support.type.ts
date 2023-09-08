export interface SupportType {
  map(arg0: (item: any) => JSX.Element): import('react').ReactNode
  id: number
  attributes: {
    label: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    q_and_as: {
      data: []
    }
    image: {
      data: ImageData
    }
  }
}

interface ImageData {
  id: number
  attributes: {
    name: string
    alternativeText: string | null
    caption: string | null
    width: number
    height: number
    formats: any | null
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl: string | null
    provider: string
    provider_metadata: any | null
    createdAt: string
    updatedAt: string
  }
}
