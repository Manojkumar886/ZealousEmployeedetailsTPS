import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'


export let Registration=()=>
{
    const[uservalues,setUservalues]=useState({
        "empId":0,
        "empName":"",
        "empUsername":"",
        "empPassword":"",
        "empDesignation":"",
        "empExperience":0,
        "empSalary":0
        })

    const setavalue=(temp)=>
    {
        const{name,value}=temp.target

        setUservalues((getting)=>
        {
            return{
                ...getting,
                [name]:value
            }   
        })
    }
    // const setUservalues1=((temp1)=>
    // {
    //     const{name1,value1}=temp1.target

    //     setUservalues((adding)=>
    //     {
    //         return{
    //             ...adding,
    //             [name1]:value1
    //         }
    //     })
    // })

    const register=()=>
    {
        alert("Welcome to Zealouus Tech Corp (your values added successfully)"+JSON.stringify(uservalues))
    }
    const reject=()=>
    {
        alert(" your data is rejected....!")
    }
    return(
        <>
            <div className="container">
                <h1 className="text-center text-primary">ZealousEmployeedetails</h1>
                <div className="row justify-content-center">
                    <div className='col-lg-8 col-md-10 col-sm-12'>
                        <div className='form-group mt-2'>
                            <label className='form-label'>Employee Id</label>
                            <input 
                            name='empId'
                            placeholder='Enter your id' 
                            type='number'  
                            className='form-control'
                            value={uservalues.empId}
                            onChange={setavalue}
                            />
                        </div>
                        <div className='form-group'>
                            <label className='form-label'>Employee Name</label>
                            <input 
                            name='empName'
                            placeholder='Enter your fullname' 
                            type='text'  
                            className='form-control'
                            value={uservalues.empName}
                            onChange={setavalue}
                            />
                        </div>
                        <div className='form-group'>
                            <label className='form-label'>Employee Username</label>
                            <input 
                            name='empUsername'
                            placeholder='Enter your username' 
                            type='text'  
                            className='form-control'
                            value={uservalues.empUsername}
                            onChange={setavalue}
                            />
                        </div>
                        <div className='form-group'>
                            <label className='form-label'>Employee Password</label>
                            <input 
                            name='empPassword'
                            placeholder='Enter password' 
                            type='password'  
                            className='form-control'
                            value={uservalues.empPassword}
                            onChange={setavalue}
                            />
                        </div>
                        <div className='form-group'>
                            <label className='form-label'>Employee Designation</label>
                            <input 
                            name='empDesignation'
                            placeholder='Enter your role' 
                            type='text'  
                            className='form-control'
                            value={uservalues.empDesignation}
                            onChange={setavalue}
                            />
                        </div>
                        <div className='form-group'>
                            <label className='form-label'>Employee Experience</label>
                            <input 
                            name='empExperience'
                            placeholder='Enter your Experience' 
                            type='text'  
                            className='form-control'
                            value={uservalues.empExperience}
                            onChange={setavalue}
                            />
                        </div>
                        <div className='form-group'>
                            <label className='form-label'>Employee Salary(PerAnnum)</label>
                            <input 
                            name='empSalary'
                            placeholder='Enter your Salary' 
                            type='number'  
                            className='form-control'
                            value={uservalues.empSalary}
                            onChange={setavalue}
                            />
                        </div>
                        <div className='row justify-content-center mt-3'>
                            <button className='btn btn-outline-success col-5' onClick={register}>Register</button>
                            <button className='btn btn-outline-danger col-5 ms-3' onClick={reject}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}