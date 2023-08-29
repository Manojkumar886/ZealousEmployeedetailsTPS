import 'bootstrap/dist/css/bootstrap.min.css'
import {useState} from 'react'

export let Usestateusingternary=()=>
{
    const[wish,setWish]=useState("nothing")

    const[display,setDisplay]=useState("")

    const[changes,setChanges]=useState({color:'white',backgroundColor:'black'})

    const ternaryOperator=()=>
    {
        (wish==="spring")?
        setChanges({color:'white',backgroundColor:'seagreen'}):
        (wish==="Rainy")?
        setChanges({color:'white',backgroundColor:'blue'}):
        (wish==='summer')?
        setChanges({color:'black',backgroundColor:'yellow',textShadow:'3px 5px 7px red'}):

        setChanges({color:'pink',backgroundColor:'orange'})

        setDisplay(wish)
    }

    const gettingvalue=(temp)=>
    {
        setWish(temp.target.value)
    }
    return(
        <>
            <input className='form-control' placeholder='tell us favoriate climate' onChange={gettingvalue}/>
            <button onClick={ternaryOperator} >Check me</button>
            <br/>
            <strong style={changes}>
                    {display}
            </strong>
         </>
    );
}