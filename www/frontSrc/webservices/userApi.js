import axios from 'axios'
import { requestUser, requestUserSuccess, requestUserFail } from '../Header/Actions/userActions'

const userUrl = 'http://10.30.2.106/centreon/api/user.json'

export function getUser() {
  return (dispatch) => {
    dispatch(requestUser())

    return axios.get(
      userUrl
    )
      .then(
        res => {
          dispatch(requestUserSuccess(res))
        }
      )
      .catch(
        err => {
          dispatch(requestUserFail(err))
        }
      )
  }
}



export function getHosts() {
  return (dispatch) => {
    dispatch(requestHosts())

    return axios.get(
      userUrl
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