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
