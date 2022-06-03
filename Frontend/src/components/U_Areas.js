import React, { Component } from 'react'
import axios from 'axios';
import res from '../../public/res.png';

export default class Areas extends Component {
  constructor(props){
    super(props);

    this.state={
      areas:[]
    };
  }

  componentDidMount(){
    this.retriveAreas();
  }

retriveAreas(){
  axios.get("http://localhost:8000/areas").then(res=>{
    if(res.data.success){
      this.setState({
        areas:res.data.existingAreas
      });
      console.log(this.state.areas)
    }
  });
}




filterData(areas,searchKey){
  const result = areas.filter((area) =>
  area.Area.toLowerCase().includes(searchKey)||
  area.Topics.toLowerCase().includes(searchKey)
  )

  this.setState({areas:result})
}

handleSearchArea = (e) =>{
  const searchKey = e.currentTarget.value;

  axios.get("http://localhost:8000/areas").then(res=>{
    if(res.data.success){
      this.filterData(res.data.existingAreas,searchKey)
    }
  });
}


  render() {
    return (
      
      <div>
<div>
          
<nav className="navbar navbar-light navbar-expand-md bg-dark navigation-clean-search">
        <div><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link "href="/groupreg" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Group Registration</a></li>
                  
                    <li className="nav-item"><a className="nav-link" href="/groups" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Registered Groups</a></li>
                    <li className="nav-item"><a className="nav-link" href="/ViewAreas" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Research Areas and Topics</a></li>
                   
                    <li className="nav-item"><a className="nav-link" href="/EvaluationResult" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Panel Evaluations Results</a></li>
                    
                    <li className="nav-item"><a className="nav-link" href="/STDdownloads" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Documents and templates</a></li>
                    
                    <li className="nav-item"><a className="nav-link" href="/SubmitNavbar" style={{fontsize:'15px',color:'rgb(255,255,255)'}}>Documents Submission page</a></li>
                    
                  
                    
                    <li><a className="btn btn-warning"  href="/" style={{height:"40px",width:"100px", marginTop:"8px", marginLeft:"800px"}}>Log Out</a></li>
                   
                  
                </ul>
                
                
            </div>
        </div>
    </nav>
            </div>
  
        <div className='container'>
          <br/>
        
          <div style={{height:'130px', width:'100%', backgroundColor:"#080523", marginTop:'-20px'}}>
                    <br/>
                    <h2 style={{color:'white', textAlign:'center'}}><img src={res} class="mx-auto" alt="" width="130" height="100"/>Research Areas and related topics</h2>
                   <br/>
          </div>

        
        <br/>
            <br/>
          {/* {this.state.travelors.map(travelors=>(
            <div>
                <p>{travelors.Name}</p>
                <p>{travelors.NIC}</p>
                <p>{travelors.Phone}</p>
                <p>{travelors.Email}</p>
                <p>{travelors.type}</p>
                <p>{travelors.date}</p>
              </div>
          ))} */}
          <p><b>Step 4 : You can search for the research areas you wish to do the project here. Once you select a topic for your project you can select supervisors for the project or you can proceed by registering your topic.</b></p>
          <br/>
           <div className="col-lg-9 mt-2 mb-2">
              <input
              className="form-control"
              type="search"
              placeholder="Search for research areas and find topics"
              name="searchQuery"
              onChange={this.handleSearchArea}>
              </input>
              <br/>
              
              <a className="btn btn-primary" href = "/SupervisorList" style = {{textDecoration:'none'}} >View supervisors List</a>&nbsp;&nbsp;&nbsp;
              <a className="btn btn-secondary" href = "/topicReg" style = {{textDecoration:'none'}} >Register Topic</a>&nbsp;&nbsp;&nbsp;
            </div>
      <table className='table'>

          <thead>
          <tr>
          <th scope='col'>No.</th>
          <th scope='col'>Research Area</th>
          <th scope='col'>Topics</th>
       
          

          </tr>

          </thead>
          <tbody>

          {this.state.areas.map((areas,index)=>(
            <tr>
              <th scope='row'>{index+1}</th>
              <td>{areas.Area}</td>
              <td>{areas.Topics}</td>
           
              <td>
             

              </td>


            </tr>
            
          ))}

          </tbody>

          

      </table>
      
      </div>

      
      </div>
    )
  }
}
