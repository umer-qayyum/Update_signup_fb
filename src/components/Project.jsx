import React,{useState} from "react";
import '../App.css';
function Project() {
   const [name,setName]=useState("")
   const [email,setEmail]=useState("")
   const [paswd,setPaswd]=useState("")
   const [number,setNumber]=useState("")
   function updateName(e){
    setName(e?.target?.value)
    
    
   }
   function updateEmail(e){
    setEmail(e?.target?.value)
    
   }
   function updatePaswd(e){
    setPaswd(e?.target?.value)
}
   function updateNumber(e){
    setNumber(e?.target?.value)
    
   }
   function store(){
    const Name=name;
    console.log(Name)
    localStorage.setItem('Name', JSON.stringify(Name));
    const Email=email;
    localStorage.setItem('Email', JSON.stringify(Email));
    const Password=paswd;
    localStorage.setItem('Password', JSON.stringify(Password));
    const Number=number;
    localStorage.setItem('Number', JSON.stringify(Number));
   }
   



    return (
        <div className="container-fluid d-flex justify-content-center align-items-center  " style={{backgroundColor:"#F0F2F5",height:"100vh"}}>
            <div className="App container d-flex justify-content-center align-items-center" style={{padding:"30px 0px",backgroundColor:"#F0F2F5"}}>
                        <div className="row" style={{width:"90%"}}>
                           
                            <div className="col-lg-8 p-4">
                                <div className="box" style={{backgroundColor:"white",padding:"20px",textAlign:"center",borderRadius:"10px",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
                                    <form id="form" >
                                        <input id="name" onChange={(e)=>updateName(e)} type="text" className="form-control " placeholder="Name" style={{marginBottom:"20px" ,padding:"15px"}} required=""/>
                                        <input id="email" onChange={(e)=>updateEmail(e)}  type="text" className="form-control " placeholder="Email address or phone number"  style={{marginBottom:"20px",padding:"15px"}} required=""/>
                                        <input id="pswd" onChange={(e)=>updatePaswd(e)} type="password" className="form-control " placeholder="Password" style={{marginBottom:"20px" ,padding:"15px"}} required=""/>
                                    
                                        <input id="number" onChange={(e)=>updateNumber(e)} type="tel" className="form-control " placeholder="Phone no" style={{marginBottom:"20px" ,padding:"15px"}} required=""/>
                                    
                                    
                                        <hr style={{marginBottom:"30px"}} />
                                        <button style={{backgroundColor:"#42B72A",padding:"10px 20px"}} onClick={()=>store()}  className="btn btn-primary"><b>Sign up and update</b></button>
                                    </form>
                                                                      
                                </div>
                                <div className="link d-flex justify-content-center pt-4">
                                    <a style={{color:"black",textDecoration:"none",marginRight:"5px"}} href="#"  ><b>Create a Page</b></a>
                                    <p> for a celebrity, brand or business</p>
                                </div>
                            </div>
                            <div className="userdata col-lg-4 p-5 ">
                                <ul>
                                    <li>{JSON.parse(localStorage.getItem('Name'))}</li>
                                    <li>{JSON.parse(localStorage.getItem('Email'))}</li>
                                    <li>{JSON.parse(localStorage.getItem('Password'))}</li>
                                    <li>{JSON.parse(localStorage.getItem('Number'))}</li>
                                </ul>
                            </div>
                            
                        </div>
            </div>
        </div>
      
    );
  }
  export default Project;