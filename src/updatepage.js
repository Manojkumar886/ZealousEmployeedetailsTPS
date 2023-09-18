import { useState } from "react";
import { replacevalues } from "./Employeedetails";

export const Updating=(name)=>
{   
    const [pos,setPos]=useState(name.who)
    const[uservalues,setUservalues]=useState({
        "empId":name.mention.empId, 
        "empName":name.mention.empName,
        "empUsername":name.mention.empUsername,
        "empPassword":name.mention.empPassword,
        "empDesignation":name.mention.empDesignation,
        "empExperience":name.mention.empExperience,
        "empSalary":name.mention.empSalary
        })

    const setavalue=(temp)=>
    {
        const{name,value}=temp.target

        setUservalues((getting)=>
        {
            return{
                ...getting,//Spread
                [name]:value
            }   
        })
    }

    const Update=()=>
    {
        replacevalues(uservalues,pos)
        alert(" your values updated successfully");
    }
    const cancel=()=>
    {
        alert(" not updated ")
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
                            <button className='btn btn-outline-success col-5' onClick={Update}>Update</button>
                            <button className='btn btn-outline-danger col-5 ms-3' onClick={cancel}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}