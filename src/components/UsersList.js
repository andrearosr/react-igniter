import React from 'react'

const UsersList = ({
  data,
}) => {
  return (
    <div className="users-list">
      {data && data.map(user =>
        (
          <div className="user-item" key={user.id}>
            <div className="user-title">
              <p>{user.name}</p>
            </div>
          </div>
        ))}
    </div>
  )
}

export default UsersList
