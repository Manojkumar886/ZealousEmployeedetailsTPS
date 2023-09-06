import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react';
import { getting } from './Employeedetails';
import { Registration } from './RegistrationForm';

export const Viewpage=()=>
{
    const[temparray,setTemparray]=useState([]);
    const[createview,setCreateview]=useState(false);

    const setavalue=()=>
    {
        setTemparray(getting)
    }

    useEffect(()=>
    {
        setavalue()
    })

   
    return(
        <>
            <div className='row justify-content-center'>
                <div className='table-responsive-md'>
                    {
                        (createview)?
                        <>
                        <Registration/>
                        <button className='btn btn-outline-secondary'
                        onClick={
                            ()=>
                            {
                                setCreateview(false)
                            }
                        }
                        >
                            Back
                        </button>
                        </>
                        :
                        <button className='btn ' style={{backgroundColor:'papayawhip'}}
                        onClick={()=>
                        {
                            setCreateview(true)
                        }}
                        >
                            RegistrationForm
                        </button>
                    }
                    <table className='col-lg-8 col-md-10 col-sm-12 table table-striped table-primary table-hover'>
                        <thead>
                            <tr>
                                <th>Employee Id</th>
                                <th>Employee Name</th>
                                <th>Employee Username</th>
                                <th>Employee Password</th>
                                <th>Employee Designation</th>
                                <th>Employeee Experience</th>
                                <th>Employeee Salary</th>
                            </tr>
                        </thead>
                        <tbody>
                           {
                            temparray.map((data)=>
                            (
                                <>
                                <tr>
                                    <td>{data.empId}</td>
                                    <td>{data.empName}</td>
                                    <td>{data.empUsername}</td>
                                    <td>{data.empPassword}</td>
                                    <td>{data.empDesignation}</td>
                                    <td>{data.empExperience}</td>
                                    <td>{data.empSalary}</td>    
                                </tr>
                                </>     
                             ))
                             }
                        </tbody>

                    </table>
                </div>
                
            </div>
        </>
    );
}