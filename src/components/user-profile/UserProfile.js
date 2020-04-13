import React, {Component} from 'react'
import WithData from '../../with-data'

const UserProfile =({data, name, email}) => {
    return (
        <div className="container">
            <h1>{name}</h1>
            <h2>{email}</h2>
            Posts :
            {
                data.map(post => (
                      <div className="post" key={post.id}>
                          <h1>{post.title}</h1>
                          <p>{post.body}</p>
                      </div>
                ))
            }
        </div>
    )
}

// return with Higher order component
export default WithData(UserProfile, 'https://jsonplaceholder.typicode.com/posts');