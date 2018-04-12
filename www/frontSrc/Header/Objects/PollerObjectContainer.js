import React, { Component } from 'react'
import { CircularProgress } from 'material-ui/Progress'
import PollerObject from './PollerObject'
import {connect} from "react-redux"
import {getPollers} from "../../webservices/pollerApi"

class PollerObjectContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      anchorEl: null,
    }
  }

  componentDidMount = () =>  {
    this.props.getPollers()
  }

  handleOpen = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  setPollerState = (database, latency, stability) => {

    const pollerState = {
      color: '#88B917',
      className: '',
    }

    if (database.critical > 0 || latency.critical > 0 || stability.critical > 0) {
      pollerState.color = '#E00B3D'
      pollerState.className = 'errorNotif'
    } else if (database.warning > 0 || latency.warning > 0 || stability.warning > 0) {
      pollerState.color = '#FF9A13'
      pollerState.className = 'warningNotif'
    }

    return pollerState
  }

  render = () => {
    const { anchorEl } = this.state
    const open = !!anchorEl
    const { database, latency, stability, total, dataFetched } = this.props.poller

    if (dataFetched) {
      const {color, className } = this.setPollerState(stability, database, latency)
      return (
        <PollerObject
          handleClose={this.handleClose}
          handleOpen={this.handleOpen}
          open={open}
          anchorEl={anchorEl}
          iconColor={color}
          className={className}
          database={database}
          latency={latency}
          stability={stability}
          total={total}
        />
      )
    } else {
      return <CircularProgress size={30} style={{ color: '#D1D2D4' }}/>
    }
  }
}

const mapStateToProps = (store) => {
  return {
    poller: store.poller,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPollers: () => {
      return dispatch(getPollers())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PollerObjectContainer)