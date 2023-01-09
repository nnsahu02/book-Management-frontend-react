import React from 'react'

const Home = ({token}) => {
  const logout = ({token}) => {
    localStorage.removeItem('data' , token);
  };
  return (
    <><div>Hey ! Welcome to home page
     
      </div>
      <div><button className='text-center bg-primary text-white' onClick={logout ({token})}>Logout</button></div>
      </>

  )
}

export default Home