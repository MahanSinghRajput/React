import React, { useEffect, useState } from 'react'

function Github() {
  const [data,setData] = useState([])
  useEffect(()=>{
    fetch('https://api.github.com/users/MahanSinghRajput')
    .then(response => response.json())
    .then(data => {setData(data)})
  },[])
  return (
    <div>Github followers: {data.followers}
    <img src = {data.avatar_url} alt = "Git pic" width = {300} />
    </div>
  )
}

export default Github