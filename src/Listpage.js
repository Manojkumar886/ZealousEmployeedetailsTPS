import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react';
import { getting } from './Employeedetails';
import { Registration } from './RegistrationForm';
import { Reading } from './Readpage';

export const Viewpage=()=>
{
    const[temparray,setTemparray]=useState([]);
    const[createview,setCreateview]=useState(false);
    const[readview,setReadview]=useState(false);
    const[pos,setPos]=useState(0);

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
                        (readview)?
                        <>
                        <Reading ind={pos} />
                        <button className='btn btn-outline-secondary'
                        onClick={()=>
                        {
                            setReadview(false)
                        }}>
                            Back
                        </button>
                        </>
                        :
                        <>
                        <button className='btn ' style={{backgroundColor:'papayawhip'}}
                        onClick={()=>
                        {
                            setCreateview(true)
                        }}
                        >
                            RegistrationForm
                        </button>
                         <table className='col-lg-8 col-md-10 col-sm-12 table table-striped table-dark table-hover'>
                         <thead>
                             <tr>
                                 <th>Employee Id</th>
                                 <th>Employee Name</th>
                                 <th>Employee Username</th>
                                 <th>Employee Password</th>
                                 <th>Employee Designation</th>
                                 <th>Employeee Experience</th>
                                 <th>Employeee Salary</th>
                                 <th>Employee Actions</th>
                             </tr>
                         </thead>
                         <tbody>
                            {
                             temparray.map((data,index)=>
                             (
                                 <>
                                 <tr style={{backgroundColor:''}}>
                                     <td>
                                     <button className='btn btn-outline-warning'
                                         onClick={()=>
                                         {
                                             setPos(index)
                                             setReadview(true)
                                         }}>{data.empId}</button>
                                     </td>
                                     <td>{data.empName}</td>
                                     <td>{data.empUsername}</td>
                                     <td>{data.empPassword}</td>
                                     <td>{data.empDesignation}</td>
                                     <td>{data.empExperience}</td>
                                     <td>{data.empSalary}</td>   
                                     <td>
                                         
                                         <button className='btn btn-outline-success ms-1 '>Update</button>
                                         <button className='btn btn-outline-danger mt-1'>Delete</button>
                                     </td> 
                                 </tr>
                                 </>     
                              ))
                              }
                         </tbody>
 
                     </table>
                        </>
                    }
                   
                </div>
                
            </div>
        </>
    );
}