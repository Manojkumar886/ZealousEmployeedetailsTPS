import { useEffect, useState } from "react"
import { read } from "./Employeedetails"


export const Reading=(position)=>
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

        const Callreadmethod=()=>
        {
            setUservalues(read(position.ind))
        }

        useEffect(()=>
        {
            Callreadmethod()
        })
        return(
            <>
                <div className="container text-center mt-3">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-8 col-sm-12">
                            <div className="bg-info">
                                <h1>FindBYID (One User value)</h1>
                                <tr>
                                    <td>Employee ID:<span className="ms-5">{uservalues.empId}</span></td>
                                </tr>
                                <tr>
                                    <td>Employee NAME:<span className="ms-5">{uservalues.empName}</span></td>
                                </tr>
                                <tr>
                                    <td>Employee USERNAME:<span className="ms-5">{uservalues.empUsername}</span></td>
                                </tr>
                                <tr>
                                    <td>Employee PASSWORD:<span className="ms-5">{uservalues.empPassword}</span></td>
                                   
                                </tr>
                                <tr>
                                    <td>Employee DESIGNATION:<span className="ms-5">{uservalues.empDesignation}</span></td>
                                   
                                </tr>
                                <tr>
                                    <td>Employee EXPERIENCE:<span className="ms-5">{uservalues.empExperience}</span></td>
                                </tr>
                                <tr>
                                <td>Employee SALARY:<span className="ms-5">{uservalues.empSalary}</span></td>
                                </tr>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
}