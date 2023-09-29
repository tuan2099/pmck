import { isUndefined, omitBy } from 'lodash'
import useQueryParams from './useQueryParams'

export interface ConfigParams {
  populate?: string
  sort?: string
  fields?: string
  filters?: any
  locale?: string
  pagination?: {
    pageSize?: number
    page?: number
    limit?: number
  }
}
// JSON.parse('{' + queryParams.filters + '}')
export default function useQueryConfig() {
  const queryParams = useQueryParams()
  const queryConfig: ConfigParams = omitBy(
    {
      sort: queryParams.sort,
      fields: queryParams.fields,
      filters: queryParams.filters === undefined || null ? {} : JSON.parse(queryParams.filters),
      locale: queryParams.locale,
      populate: queryParams.populate || '*',
      pagination: {
        pageSize: queryParams.pageSize,
        page: queryParams.page,
        limit: queryParams.limit
      }
    },
    isUndefined
  )

  return queryConfig
}
