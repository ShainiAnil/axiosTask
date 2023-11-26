import React from 'react'

export const UserList = ({users, setUsers}) => {
   const deleteUser = (id) =>{
    setUsers(users.filter(user=>(user.id !== id)))
   }
  return (
    <div className='users-list'>
        <ul>
            <li><h3>Users List</h3></li>
        {users.map(user =>(<li key={user.id}>{user.username}
        <span className='delete' onClick={()=>deleteUser(user.id)}>&#10006;</span>
        </li>)
        )}
        </ul>
        
        
    </div>
  )
}

