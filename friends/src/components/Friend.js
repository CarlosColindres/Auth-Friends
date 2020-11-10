import React from 'react'

const Friend = ({friend}) => {
    const {name, age, email} = friend
    return (
        <div>
            <h1>{name}</h1>
            <h1>{age}</h1>
            <h1>{email}</h1>
        </div>
    )
}

export default Friend
