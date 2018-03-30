import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserProfile from './UserProfile'
import { getUser } from "../../webservices/userApi"
import 'moment-timezone'
import Moment from 'moment'

class UserProfileContrainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      anchorEl: null,
      logoutUrl: 'index.php?disconnect=1',
      initial: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      const initial = this.parseUsername(nextProps.user.fullname)
      this.setDate(nextProps.user.timezone, nextProps.user.locale)
      this.setState({
        initial: initial
      })
    }
  }

  componentDidMount = () =>  {
    this.props.getUser()
  }

  parseUsername = username => {
   return username.split(" ").reduce((acc, value, index) => {

     if (index <= 1) {
       acc += value.substr(0,1).toUpperCase()
     }
     return acc
    },'')
  }

  setDate = (tz, locale) => {
    Moment.locale(locale)
    //console.log(Moment().tz(tz))
    //console.log(Moment().format('LT'))
    //Moment().format('LL')
  }

  handleOpen = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  render () {

    const { user } = this.props
    const { anchorEl, initial } = this.state
    const open = Boolean(anchorEl)

    return (
      <UserProfile
        handleClose={this.handleClose}
        handleOpen={this.handleOpen}
        initial={initial}
        open={open}
        user={user}
        anchorEl={anchorEl}
      />
    )
  }
}

const mapStateToProps = (store) => {
  return {
    user: store.user.data,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => {
      return dispatch(getUser())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileContrainer)