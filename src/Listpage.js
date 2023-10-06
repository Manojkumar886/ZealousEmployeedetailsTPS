import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react';
import { deleting, fetchExact, getting } from './Employeedetails';
import { Registration } from './RegistrationForm';
import { Reading } from './Readpage';
import { Updating } from './updatepage';

export const Viewpage=()=>
{
    const[temparray,setTemparray]=useState([]);
    const[createview,setCreateview]=useState(false);
    const[readview,setReadview]=useState(false);
    const[pos,setPos]=useState(0);
    const[updateview,setUpdateview]=useState(false);
    const[object,setObject]=useState({})

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
                        (updateview)?
                        <>
                        <Updating who={pos} mention={object}/>
                        <button className='btn btn-outline-secondary'
                        onClick={()=>
                        {
                            setUpdateview(false)
                        }}>
                            BACK
                        </button>
                        </>
                        :
                        <>
                        <button className='btn ' style={{backgroundColor:'saddlebrown'}}
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
                                         
                                         <button className='btn btn-outline-success ms-1 '
                                         onClick={()=>
                                         {
                                            setUpdateview(true);
                                            setPos(index);
                                            const temp=fetchExact(data.empName);
                                            setObject(temp);
                                         }}>Update</button>
                                         <button className='btn btn-outline-danger mt-1'
                                         onClick={()=>
                                         {
                                            setTemparray(deleting(index));
                                         }}>Delete</button>
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