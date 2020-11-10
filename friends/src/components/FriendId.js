import React,{useState, useEffect} from 'react'
import {fetchAxios} from '../utils'

const FriendId = (props) => {
    
   
    const [friend, setFriend] = useState({})
    useEffect(() => {
        const { match: { params } } = props;
        fetchAxios().get(`/friends/${params.id}`)
        .then(res => setFriend(res.data))
    })
    const {name, age, email} = friend
    return (
        <div>
            <h1>{name}</h1>
            <h1>{age}</h1>
            <h1>{email}</h1>
        </div>
    )
}

export default FriendId
