import http from 'src/utils/https'
export const URL_SLIDER_IMAGE = '/slider-images?populate=*'

const sliderApi = {
  getSlider() {
    return http.get(URL_SLIDER_IMAGE)
  }
}

export default sliderApi
