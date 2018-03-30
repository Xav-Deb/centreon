import React, { Component } from 'react'
import HostObject from './HostObject'
import {connect} from "react-redux"
import {getHosts} from "../../webservices/hostApi"

class HostObjectContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      anchorEl: null,
    }
  }
  componentDidMount = () =>  {
    this.props.getHosts()
  }

  handleOpen = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }


  render = () => {
    const {host} = this.props
    const { anchorEl } = this.state
    const open = !!anchorEl
    return (
      <HostObject
        handleClose={this.handleClose}
        handleOpen={this.handleOpen}
        open={open}
        anchorEl={anchorEl}
        object='host'
        down={host.down ? host.down : 0}
        unreachable={host.unreachable ? host.unreachable : 0}
        ok={host.ok ? host.ok : 0}
        pending={host.pending ? host.pending : 0}
        total={host.total}
        url={host.url}
        key='host'/>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    host: store.host,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getHosts: () => {
      return dispatch(getHosts())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HostObjectContainer)