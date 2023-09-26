import { isUndefined, omitBy } from 'lodash'
import useQueryParams from './useQueryParams'
export interface ConfigParams {
  populate?: string
  sort?: string
  fields?: string
  filters?: any
  locale?: string
}

export default function useQueryConfig() {
  const queryParams = useQueryParams()
  const queryConfig: ConfigParams = omitBy(
    {
      sort: queryParams.sort,
      fields: queryParams.fields,
      filters: queryParams.filters,
      locale: queryParams.locale,
      populate: queryParams.populate || '*'
    },
    isUndefined
  )

  return queryConfig
}
