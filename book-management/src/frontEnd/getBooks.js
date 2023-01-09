import React , {useState , useEffect} from 'react'


const GetBook = () => {
    const[getData , setGetData] = useState([])
    console.log(getData)
    const getBook = async()=>{
    const response = await fetch('http://localhost:5000/books')
    const data = await response.json()
    console.log(data.data)
    setGetData(data.data)
    }
    useEffect(()=>{
        getBook()
    },[])
  
  return (
   <> <div className="container">
    <div className="row">
    {
    getData.map((x)=>{
        return (
          <>
          <div className='col-md-4 p-3'>
          <div>{x.title}</div>
            <div>{x.category}</div>
            <div>{x.excerpt}</div>
            <div>{x.userId}</div>
            <hr></hr>
          </div>
          </> 
        )
    })
   }
    </div>
   </div>
   </>
  )
}

export default GetBook