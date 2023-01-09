import React , {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const Navigate = useNavigate()
    const[email ,setEmail] = useState('')
    const[password , setPassword] = useState('')
    const  submitHandler = async (e)=>{
       e.preventDefault()
       console.log(email , password)
       const formData = new FormData()
       formData.append('email' , email)
       formData.append('password' , password)
       const response = await axios.post('http://localhost:5000/login' , formData)
       console.log(response)
       if(response.status===404 || !response.data ) {
        console.log('invalid user')
       }else {
     //   storing token in local storage
        localStorage.setItem('data' ,  JSON.stringify(response.data.data))
        Navigate('/')
       }
       setEmail('') 
       setPassword('') 
       }
  return (
    <>
    <div className="container"><div>
     <div className='row'>
      <div className='col-md-6'>
        <card className="card p-5 m-5"><form>
            <div>
                <input className='form-control w-full mb-5' type='email' name='email' required placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}>
                
                </input>
                <input className='form-control w-full mb-3' type='password' name='password' required placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}>
                
                </input>
                <button type='submit' className='btn bg-primary text-white' onClick={submitHandler}>Login</button>
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

export default Login