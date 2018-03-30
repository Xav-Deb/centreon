import axios from "axios"
import { requestServices, requestServicesSuccess, requestServicesFail } from '../Header/Actions/serviceActions'

const serviceUrl = 'http://10.30.2.106/centreon/api/service.json'

export function getServices() {
  return (dispatch) => {
    dispatch(requestServices())

    return axios.get(
      serviceUrl
    )
      .then(
        res => {
          dispatch(requestServicesSuccess(res))
        }
      )
      .catch(
        err => {
          dispatch(requestServicesFail(err))
        }
      )
  }
}