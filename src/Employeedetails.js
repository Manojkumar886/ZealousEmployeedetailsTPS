let Zealousempdetails=[
    {
        "empId":1,
        "empName":"Pavithra",
        "empUsername":"Pavi123",
        "empPassword":"Pavi",
        "empDesignation":"Java Stack Developer",
        "empExperience":1,
        "empSalary":2.8
    },
    {
        "empId":2,
        "empName":"Manojkumar",
        "empUsername":"MaddyMano123",
        "empPassword":"Maddy@123",
        "empDesignation":"Java Trainer",
        "empExperience":2,
        "empSalary":2.8

    },
    {
        "empId":3,
        "empName":"Tamilarasan",
        "empUsername":"Tamilenglish",
        "empPassword":"TamilBharat",
        "empDesignation":"Software Tester",
        "empExperience":2,
        "empSalary":4
    }
]
export const create=(obj)=>
{
    Zealousempdetails.push(obj);
}

export const getting=()=>
{
    return Zealousempdetails;
}

export const read=(index)=>
{
    return Zealousempdetails[index];
    // zealousempdetails[2];
}


export const fetchExact=(name)=>
{
    const temp=Zealousempdetails.filter((get)=>
    {
        return get.empName===name;
    })
    return temp[0];
}

export const replacevalues=(data,index)=>
{
    Zealousempdetails[index]=data;
}

export const deleting=(ind)=>
{
    let say=prompt(" please tell us your value are delete yes/no")

    if(say==='yes')
    {
        Zealousempdetails=Zealousempdetails.filter((data,index)=>
        {
            return index!==ind;
        })
        return Zealousempdetails;
    }
    else if (say==='no')
    {
        alert(" your value is not deleted")
        return Zealousempdetails;
    }
    else
    {
        alert(" Nothing permanent")
    }
}
