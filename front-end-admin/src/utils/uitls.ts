import { ErrorResponse } from 'src/types/utils.type'
import axios, { AxiosError } from 'axios'
// import config from 'src/constant/config'
import HttpStatusCode from 'src/constant/httpStatusCode.enum' // lấy từ constant

export function isAxiosError<T>(error: unknown): error is AxiosError<T> {
  // eslint-disable-next-line import/no-named-as-default-member
  return axios.isAxiosError(error)
}

// check lỗi 422
export function isAxiosUnprocessableEntityError<FormError>(error: unknown): error is AxiosError<FormError> {
  return isAxiosError(error) && error.response?.status === HttpStatusCode.UnprocessableEntity
}

// format số

export function formartCurrency(currency: number) {
  return new Intl.NumberFormat('de-DE').format(currency)
}

//

const removeSpecialCharater = (str: string) =>
  // eslint-disable-next-line no-useless-escape
  str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, '')
// name & id for course card
export const generateNameId = ({ name, id }: { name: string; id: number }) => {
  return removeSpecialCharater(name).replace(/\s/g, '-') + `-i-${id}`
}

export const getIdFromNameId = (nameId: string) => {
  const arr = nameId.split('-i-')
  return arr[arr.length - 1]
}

// get total second in link youtube
