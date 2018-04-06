import {
  REQUEST_HOSTS,
  REQUEST_HOSTS_SUCCESS,
  REQUEST_HOSTS_FAIL,
} from '../Actions/hostActions'

export default function hostReducer (state = {},action) {
  switch (action.type) {
    case REQUEST_HOSTS:
      return {
        ...state
      }
    case REQUEST_HOSTS_SUCCESS:
      return {
        ...state,
          ...action.data,
          ['latency']: {
            ...action.data['latency'],
            classe: 'NotificationWarning',
          },
          ['stability']: {
            ...action.data['stability'],
            classe: 'NotificationError',
          },
          ['database']: {
            ...action.data['database'],
            classe: 'NotificationWarning',
          },
        }
    default:
      return state
  }
}