import React from 'react'
import WithData from '../../with-data'

const UserList  = ({data, name, email}) =>  {
    return (
        <div className='container user-list'>
            <h1> Users List </h1>
            {data.map(user => (
            <div className='post' key={user.id}>
                <h1> {user.name} </h1>
                <h2> {user.email} </h2>
            </div>
            ))}
        </div>
    )
}

// return with Higher order component
export default WithData(UserList, 'https://jsonplaceholder.typicode.com/users')