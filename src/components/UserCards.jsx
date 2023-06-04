import React from 'react'
import Card from './Card'
import Users from '../assets/users.json';


function createCard(user){
    return <Card 
        key={user.id}
        name={user.firstName + " " + user.lastName}
        hello={user.id}
        role={user.role}
        email={user.email}
        address={user.street + ', ' + user.city + ", " + user.state + " " + user.zip}
        phone={user.phone}
        created={user.createdAt}
        lastLog={user.lastLoggedIn} 
    />
}

const UserProfiles = () => {
  return (
  <div>
    {/* incase Users is undfined doesnt return error */}
    {Users && Users.map(createCard)}
  </div>
  )
}

export default UserProfiles