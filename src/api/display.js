import apiUrl from '../apiConfig'
import axios from 'axios'

export const getDisplay = user => {
  return axios({
    url: `${apiUrl}/my-course`,
    method: 'GET'
  })
}

export const getOne = id => {
  return axios({
    url: `${apiUrl}/mycourse/${id}`,
    method: 'GET'
  })
}
