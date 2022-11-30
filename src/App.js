import React,{useState, useEffect} from 'react'
import { View } from './Components/View';

// getting the values of local storage
const getDatafromLS=()=>{
  const data = localStorage.getItem('books');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

export const App = () => {

  // main array of objects state || books state || books array of objects
  const [data, setData]=useState(getDatafromLS());

  // input field states
  const [first,setFirst]=useState('');
  const [middle,setMiddle]=useState('');
  const[last,setLast]=useState('');
  const[village,setVillage]=useState('');
  const[district,setDistrict]=useState('');
  const[state,setState]=useState('');
  const[pin,setPin]=useState('');
  const[catle,setCatle]=useState('');
  const[age,setAge]=useState('');
  const[milk,setMilk]=useState('');
  // form submit event
  const handleAddBookSubmit=(e)=>{
    e.preventDefault();
    // creating an object
    let book={
      first,
      middle,
      last,
      village,
      district,
      state,
      pin,
      catle,
      age,
      milk
    }
    setData([...data,book]);
    setFirst('');
    setMiddle('');
    setLast('');
    setVillage('');
    setDistrict('');
    setState('');
    setPin('');
    setCatle('');
    setAge('');
    setMilk('');
  }


  // saving data to local storage
  useEffect(()=>{
    localStorage.setItem('data',JSON.stringify(data));
  },[data])

  return (
    <div className='wrapper'>
      <h1 style={{display:"flex",justifyContent:"center"}}>Farmer Registration</h1>
      <p style={{display:"flex",justifyContent:"center"}}>Add Farmer Details</p>
      <div className='main'>

        <div className='form-container'>
          <form onSubmit={handleAddBookSubmit}>
            <label>First Name:</label>
            <input type="text" onChange={(e)=>setFirst(e.target.value)} value={first}></input>
            <br></br>
            <label>Middle Name:</label>
            <input type="text" onChange={(e)=>setMiddle(e.target.value)} value={middle}></input>
            <br></br>
            
            <label>Last Name:</label>
            <input type="text" onChange={(e)=>setLast(e.target.value)} value={last}></input>
            <br></br>
            <label>Village:</label>
            <input type="text" onChange={(e)=>setVillage(e.target.value)} value={village}></input>
            <br/>
            <label>District:</label>
            <input type="text" onChange={(e)=>setDistrict(e.target.value)} value={district}></input>
            <br/>
            <label>State:</label>
            <input type="text" onChange={(e)=>setState(e.target.value)} value={state}></input><br/>
            <label>Pin:</label>
            <input type="" onChange={(e)=>setPin(e.target.value)} value={pin}></input><br/>
            <label>Cattle:</label>
            <input type="" onChange={(e)=>setCatle(e.target.value)} value={catle}></input><br/>
            <label>Age:</label>
            <input type="" onChange={(e)=>setAge(e.target.value)} value={age}></input><br/>
            <label>Produced/Day:</label>
            <input type="" onChange={(e)=>setMilk(e.target.value)} value={milk}></input><br/>
            <button type="submit">
              ADD
            </button>
          </form>
        </div>

        <div className='container'>
          {data.length>0&&<>
            <div>
              <table border="1px">
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Middle Name</th>
                    <th>Last Name</th>
                    <th>Village</th>
                    <th>District</th>
                    <th>State</th>
                    <th>Pin</th>
                    <th>Cattle</th>
                    <th>Age</th>
                    <th>Produced/Day</th>
                  </tr>
                </thead>
                <tbody>
                  <View data={data}/>
                </tbody>
              </table>
            </div>
          </>}
          {data.length < 1 && <div>No Farmer yet to Added</div>}
        </div>

      </div>
    </div>
  )
}

export default App