import React from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'

class UsersList extends React.Component {
    componentDidMount() {
        this.props.fetchUsers()
    }

    renderUsers() {
        return this.props.users.map((user, key) => {
            return <li key={key}>{user.name}</li>
        })
    }

    render() {
        return (
            <div>
                List of users:
                <ul>
                    {this.renderUsers()}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = ({ users }) => {
    return { users }
}

const loadData = (store) => {
    return store.dispatch(fetchUsers())
}

export default {
    component: connect(mapStateToProps, { fetchUsers })(UsersList),
    loadData
}