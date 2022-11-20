import '../css/Logindetails.css'

const LogValidate = (values) => {


let errors = {}



    if(!values.email){
        errors.email = "email is required"
    }
    else if(!/\$+@\$+\.\$+/.test(values.email)){
        errors.email = "email is Invalid"
    }
    if(!values.password){
        errors.password = "password is required"
    }else if(values.password.length < 5){
        errors.password = "password must be more than 4 characters"
    }else if (values.password.length > 11){
        errors.password = "password cannot exceed more than 10 characters"
    }

    return errors

}


export default LogValidate