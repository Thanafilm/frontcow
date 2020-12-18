import React ,{useState}from 'react'
import {Form,Button} from 'react-bootstrap'
import axios from 'axios'
function Login() {
  const userData ={
      email : '',
      password : ''
  }
  const [Data , setData] = useState(userData)
  
    
    const handleSubmit = e =>{ 
        e.preventDefault();
        axios.post('http://localhost:8000/login',{email : Data.email , password : Data.password})
        .then(res=>{
            console.log(res.data,'login success');
            localStorage.setItem('FBIdToken', `Bearer ${res.data.token}`);
            this.props.history.push('/');
        })
        .catch(err=>{
            console.log('login Fails');
        })

    }
     
    return (
        <div className = "Login">
            <h2>ลงชื่อเข้าใช้</h2>
            <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"  onChange = {e => setData({...Data,email : e.target.value})}/>

            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"  onChange = {e => setData({...Data,password : e.target.value})}/>
            </Form.Group>
           
            <Button variant="primary" type="submit" onClick = {handleSubmit}>
                Submit
            </Button>
            </Form>
        </div>
    )
}

export default Login
