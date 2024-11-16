
export default function validationinfo(values){
    let error={};
    let letters=/^[A-Za-z]+$/;
    let letters1 = /^([A-zÀ-ž\s])+$/;
    if(!values.Uname)
    {
    error.Uname="Name Required";

    }
    
    else if(!values.Uname.match(letters1))
      {
        error.Uname="Name must only string";
      }

    else if(!values.email)
    {
        error.email="Email Required";
    }
    else if(!values.email.includes("@"))
    {
        error.email="Email Invalid";
    }
    else if(!values.email.includes(".com"))
    {
        // console.log(values.email.includes("nu.edu.pk"))
        error.email="Email .com is Invalid";
    }
    else if(!values.loc)
    {
        error.loc="Location must Filled";
    }
    else if(!values.loc.match(letters1))
    {
        error.loc="Location must only string";
    }
    else if(values.loc.length<6)
    {
        error.loc="no city has length less than 6"; 
    }
    else if(!values.password)
    {
        error.password="Password Required"; 
    }
    else if(!values.Cpassword)
    {
        error.Cpassword="Password Required"; 
    }
    else if(values.password.length<6)
    {
        error.password="Password Must Greater than Length 6"; 
    }

    else if(values.Cpassword.length<6)
    {
        error.Cpassword="Password Must Greater than Length 6"; 
    }
    else if (values.password!==values.Cpassword)
    {
        error.Cpassword="Password Does not Match"; 
    }
     else if(!values.type)
     {
        error.type="Type Required"
     }
   
    return error;
}