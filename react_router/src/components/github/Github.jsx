import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data,setdata] = useState([])
    // useEffect(() =>{
    //     fetch('https://api.github.com/users/rupaksamantainbox')
    //     .then(response => response.json())
    //     .then(data =>{
    //         console.log(data);
    //         setdata(data)
    //     })
    // },[])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        Github Folowers:{data.followers}
        <img className='text-center' src={data.avatar_url} alt="" />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}