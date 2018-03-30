import React, { Component } from 'react'
import ServiceObject from './ServiceObject'
import {connect} from "react-redux"
import {getServices} from "../../webservices/serviceApi"

class ServiceObjectContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      anchorEl: null,
    }
  }
  componentDidMount = () =>  {
    this.props.getServices()
  }

  handleOpen = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  render = () => {
    const {service} = this.props
    const { anchorEl } = this.state
    const open = !!anchorEl
    return (
      <ServiceObject
        handleClose={this.handleClose}
        handleOpen={this.handleOpen}
        open={open}
        anchorEl={anchorEl}
        object='service'
        critical={service.critical ? service.critical : 0}
        warning={service.warning ? service.warning : 0}
        unknown={service.unknown ? service.unknown : 0}
        ok={service.ok ? service.ok : 0}
        pending={service.pending ? service.pending : false}
        total={service.total}
        url={service.url}
        key='service'/>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    service: store.service,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getServices: () => {
      return dispatch(getServices())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServiceObjectContainer)