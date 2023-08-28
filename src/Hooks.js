import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import {useState} from 'react';

export let Usestatehook=()=>
{
    // const [getvalue,setvalue]=useState(initialized)

    const[color,setColor]=useState("yellow")

    const gettingvalue=()=>{
        alert("my favoriate color is "+color)
    }

    const setvalue=(temp)=>//temp variable getting a value in input
    {
        setColor(temp.target.value);
    }
    return(
        <>
        <div className='row justify-content-center'>
            <input className="form-control col-4" placeholder='please tell us your fav color' name={color} onChange={setvalue} />
            <button onClick={gettingvalue} className='btn btn-outline-success '>Show my fav color</button>
        </div>
        </>
    );
}


let Usestatehook2=()=>
{
    const[studentdetails,setStudentdetails]=useState({
        studentname:'Manojkumar',
        studentcity:"Namakkal",
        studentage:21,
        studentworkstatus:true
    })
    return(
        <>
        
        <ul>
            <li>my name is {studentdetails.studentname}</li>
            <li>my city name is{studentdetails.studentcity} </li>
        </ul>
        </>
    );
}

export {Usestatehook2}