import {
  REQUEST_SERVICES,
  REQUEST_SERVICES_SUCCESS,
  REQUEST_SERVICES_FAIL,
} from '../Actions/serviceActions'

export default function serviceReducer (state = {}, action) {
  switch (action.type) {
    case REQUEST_SERVICES:
      return {
        ...state
      }
    case REQUEST_SERVICES_SUCCESS:
      return {
        ...state,
        ...action.data,
        url: './main.php?p=20201&o=svc&search=',
        ['critical']: {
          ...action.data['critical'],
          classe: 'error',
          url: './main.php?p=20201&o=svc_critical&search='
        },
        ['warning']: {
          ...action.data['warning'],
          classe: 'warning',
          url: './main.php?p=20201&o=svc_warning&search='
        },
        ['unknown']: {
          ...action.data['unknown'],
          classe: 'unknown',
          url: './main.php?p=20201&o=svc_unknown&search='
        },
        ['ok']: {
          total: action.data.ok,
          classe: 'success',
          url: './main.php?p=20201&o=svc_ok&search='
        },
        ['pending']: {
          total: action.data.pending,
          classe: 'pending',
          url: './main.php?p=20201&o=svc_pending&search='
        },
      }
    default:
      return state
  }
}