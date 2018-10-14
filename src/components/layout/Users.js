import React, { Component } from 'react'
import User from './User'
import UniqueId from 'react-html-id'



class Users extends Component {

  constructor() {
    super()
    UniqueId.enableUniqueIds(this)
    this.state = {
      users: [
        { id: this.nextUniqueId(), name: 'Bob', age: 30 },
        { id: this.nextUniqueId(), name: 'Jim', age: 44 },
        { id: this.nextUniqueId(), name: 'Roy', age: 20 }
      ]
    }
  }



  deleteUser = (index, e) => {
    const users = Object.assign([], this.state.users)
    users.splice(index, 1)
    this.setState({ users: users })
  }

  changeUserName = (id, e) => {
    const index = this.state.users.findIndex((user) => {
      return user.id === id
    })
    const user = Object.assign({}, this.state.users[index])
    user.name = e.target.value
    const users = Object.assign([], this.state.users)
    users[index] = user
    this.setState({ users: users })
  }


  render() {
    return (
      <div >
        <ul>
          {
            this.state.users.map((user, index) => {
              return (<User age={user.age}
                key={user.id} delEvent={this.deleteUser.bind(this, index)}
                changeEvent={this.changeUserName.bind(this, user.id)}
              >

                {user.name}</User>)
            })
          }
        </ul>
      </div>
    )
  }
}

export default Users









