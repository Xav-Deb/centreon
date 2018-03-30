import axios from "axios"
import { requestHosts, requestHostsSuccess, requestHostsFail } from '../Header/Actions/hostActions'

const hostUrl = 'http://10.30.2.106/centreon/api/host.json'

export function getHosts() {
  return (dispatch) => {
    dispatch(requestHosts())

    return axios.get(
      hostUrl
    )
      .then(
        res => {
          dispatch(requestHostsSuccess(res))
        }
      )
      .catch(
        err => {
          dispatch(requestHostsFail(err))
        }
      )
  }
}