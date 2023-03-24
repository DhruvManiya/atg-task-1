import React, { useState } from 'react'

const FollowButton = () => {

    const [follow, setFollow] = useState('Follow')

  return (
    <div className={`py-1 lg:px-4 px-3 lg:text-[1rem] text-[0.9rem] rounded-2xl cursor-pointer ${follow === 'Followed' ? 'bg-black text-primary' : 'text-black bg-gray-200'}`} onClick={() => follow ==='Follow' ? setFollow('Followed') : setFollow('Follow')}>{follow}</div>
  )
}

export default FollowButton