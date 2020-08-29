import React, { useState, useEffect } from 'react';
import Users from './components/users/Users';
import Toggle from './components/toggle/Toggle';

export default function App() {
  const [users, setUsers] = useState([])
  const [showUsers, setShowUsers] = useState(false)

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(
        'https://randomuser.me/api/?seed=rush&nat=br&results=10'
      )
      const json = await res.json()
      setUsers(json.results)
    }
    fetchUsers()
  }, [])

  // async componentDidMount() {
  //   const res = await fetch(
  //     'https://randomuser.me/api/?seed=rush&nat=br&results=10'
  //   )
  //   const json = await res.json()

  //   this.setState({
  //     users: json.results,
  //   })
  // }

  const handleShowUsers = (isChecked) => {
    setShowUsers(isChecked)
    //this.setState({ showUsers: isChecked })
  }

  return (
    <div>
      <h3>React LifeCycle</h3>
      <Toggle
        description="Mostrar usúarios:"
        enabled={showUsers}
        onToggle={handleShowUsers}
      />
      <hr />
      {showUsers && <Users users={users} />}
    </div>
  )
}
