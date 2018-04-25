import React, { Component } from 'react'
import { connect } from 'react-redux'
import UsersList from '../components/UsersList'
import UsersActions from '../redux/users_redux'

class LandingScreen extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    const { users } = this.props
    return (
      <div className="container">
        <UsersList data={users.list} />
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => {
  return {
    users,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => {
      dispatch(UsersActions.fetchUsers())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingScreen)
