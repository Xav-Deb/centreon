import React, { Component } from 'react'
import PollerObject from './PollerObject'
import {connect} from "react-redux"
//import {getPollers} from "../../webservices/pollerApi"

class PollerObjectContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      anchorEl: null,
    }
  }
  componentDidMount = () =>  {
    //this.props.getPollers()
  }

  handleOpen = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }


  render = () => {
    //const {host} = this.props
    const { anchorEl } = this.state
    const open = !!anchorEl
    return (
      <PollerObject
        handleClose={this.handleClose}
        handleOpen={this.handleOpen}
        open={open}
        anchorEl={anchorEl}
        object='poller'/>
    )
  }
}

/*const mapStateToProps = (store) => {
  return {
    host: store.host,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPollers: () => {
      return dispatch(getPollers())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HostObjectContainer)*/

export default PollerObjectContainer