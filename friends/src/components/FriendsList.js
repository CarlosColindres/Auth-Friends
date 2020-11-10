import React, {useState, useEffect} from 'react'
import Friend from './Friend'
import {fetchAxios} from '../utils'
import AddFriend from './AddFriend'

const FriendsList = () => {
    const [friends, setFriends] = useState([])
    useEffect(() => {
        fetchAxios()
            .get('/friends')
            .then(res => setFriends(res.data))
    }, [])
    return (
        <div>
            {friends.map(friend => <Friend key={friend.id} friend={friend}/>)}
            <AddFriend setFriends={setFriends}/>
        </div>
    )
}

export default FriendsList
