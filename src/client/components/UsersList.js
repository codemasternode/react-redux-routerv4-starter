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

export default connect(mapStateToProps, { fetchUsers })(UsersList)