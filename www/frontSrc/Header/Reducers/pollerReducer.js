import {
  REQUEST_POLLERS,
  REQUEST_POLLERS_SUCCESS,
  REQUEST_POLLERS_FAIL,
} from '../Actions/pollerActions'

export default function pollerReducer (state = {},action) {
  switch (action.type) {
    case REQUEST_POLLERS:
      return {
        ...state,
        dataFetched: false,
      }
    case REQUEST_POLLERS_SUCCESS:
      return {
        ...state,
        ...action.data,
        database: {
          ...action.data.database,
          critical: {
            total: action.data.database.critical,
            message: 'All database poller updates are not active'
          },
          ['warning']: {
            total: action.data.database.warning,
            message: 'Some database poller updates are not active'
          },
        },
        stability: {
          ...action.data.stability,
          critical: {
            total: action.data.stability.critical,
            message: 'Pollers are not running'
          },
          warning: {
            total: action.data.stability.warning,
            message: 'Some Pollers are not running'
          },
        },
        latency: {
          ...action.data.latency,
          critical: {
            total: action.data.latency.critical,
            message: 'Latency is strongly detected'
          },
          warning: {
            total: action.data.latency.warning,
            message: 'Latency is detected'
          },
        },
        dataFetched: true,
      }
    default:
      return state
  }
}