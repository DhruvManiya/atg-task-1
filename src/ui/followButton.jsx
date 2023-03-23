import React, { useState } from 'react'

const FollowButton = () => {

    const [follow, setFollow] = useState('Follow')

  return (
    <div className={`py-1 px-4 rounded-2xl cursor-pointer ${follow === 'Followed' ? 'bg-black text-primary' : 'text-black bg-gray-200'}`} onClick={() => follow ==='Follow' ? setFollow('Followed') : setFollow('Follow')}>{follow}</div>
  )
}

export default FollowButton