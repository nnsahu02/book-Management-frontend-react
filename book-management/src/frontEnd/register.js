import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const Navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [pincode, setPincode] = useState('')
  const submitHandler = async (e) => {
    e.preventDefault()
    console.log(email, password)
    const formData = new FormData()
    formData.append('email', email)
    formData.append('password', password)
    formData.append('phone', phone)
    formData.append('title', title)
    formData.append('name', name)
    formData.append('address.street', street)
    formData.append('address.city', city)
    formData.append('address.pincode', pincode)
    const response = await axios.post('localhost:5000/register', formData)
    console.log(response)
    if (response.status === 404 || !response.data) {
      console.log('invalid credentilas')
    } else {
      // storing token in local storage
      //localStorage.setItem('data' , response.data.data)
      Navigate('/Login')
    }
    setEmail('')
    setPassword('')
    setPhone('')
    setTitle('')
    setName('')
    setStreet('')
    setCity('')
    setPincode('')
  }
  return (
    <>
      <div className="container"><div>
        <div className='row' >
          <div className='col-md-12'>
            <card className="card p-5 m-5"><form>
              <div>
                <input className='form-control w-full mb-3' type='text' name='title' required placeholder='title[Mr or Mrs , Miss)' value={title} onChange={(e) => setTitle(e.target.value)}></input>

                <input className='form-control w-full mb-3' type='text' name='name' required placeholder='name' value={name} onChange={(e) => setName(e.target.value)}></input>

                <input className='form-control w-full mb-3' type='tel' name='phone' required placeholder='phone' value={phone} onChange={(e) => setPhone(e.target.value)}></input>

                <input className='form-control w-full mb-3' type='email' name='email' required placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>

                <input className='form-control w-full mb-3' type='password' name='password' required placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>

                <input className='form-control w-full mb-3' type='text' name='street' required placeholder='street' value={street} onChange={(e) => setStreet(e.target.value)}></input>

                <input className='form-control w-full mb-3' type='text' name='city' required placeholder='city' value={city} onChange={(e) => setCity(e.target.value)}></input>

                <input className='form-control w-full mb-3' type='text' name='pincode' required placeholder='pincode' value={pincode} onChange={(e) => setPincode(e.target.value)}></input>

                <button type='submit' className='btn bg-primary text-white' onClick={submitHandler}>Register</button>
              </div>
            </form></card>
          </div>
          {/* <div className='col-md-6'>Sachin Patidar</div> */}
        </div>
      </div>
      </div>
    </>
  )
}

export default Register