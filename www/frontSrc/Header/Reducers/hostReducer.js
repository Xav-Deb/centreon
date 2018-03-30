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
          url: './main.php?p=20202&o=h&search=',
          ['down']: {
            ...action.data['down'],
            classe: 'error',
            url: './main.php?p=20202&o=h_down&search='
          },
          ['unreachable']: {
            ...action.data['unreachable'],
            classe: 'unreachable',
            url: './main.php?p=20202&o=h_unreachable&search='
          },
          ['ok']: {
            total: action.data.ok,
            classe: 'success',
            url: './main.php?p=20202&o=h_up&search='
          },
          ['pending']: {
            total: action.data.pending,
            classe: 'pending',
            url: './main.php?p=20202&o=h_pending&search='
          },
        }
    default:
      return state
  }
}