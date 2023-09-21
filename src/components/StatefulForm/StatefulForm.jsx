import { useState } from "react";


const StatefulForm = () => {
    
    const [error,setError] = useState('');
    
    const handleSubmit = e =>{
        e.preventDefault();
        if(password.length <8){
            setError('Passwrd must be 8 characters or longer');
        }
        else{
            setError('');
            console.log(name,email,password);
        }
    }
    
    const [email,setEmail] = useState(null);
    const handleEmailChange = e =>{
        // console.log(e.target.value);
        setEmail(e.target.value);
    }
    const [password,setPassword] = useState(null);
    const handlePasswordChange =(e)=>{
        // console.log(e.target.value);
        setPassword(e.target.value);
    }

    // const [name,setName] = useState(null);
    // const [name,setName] = useState('');
    const [name,setName] = useState('Rodix Jony');
    const handleNameChange =(e)=>{
        // console.log(e.target.value);
        setName(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={handleNameChange} type="text" name="name" />
                <br />
                <input onChange={handleEmailChange} type="email" name="email" />
                <br />
                <input onChange={handlePasswordChange} type="password" name="password" required />
                <br />
                <input type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }
            </form>

        </div>
    );
};

export default StatefulForm;