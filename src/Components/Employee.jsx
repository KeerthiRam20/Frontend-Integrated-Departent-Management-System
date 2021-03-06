import React,{Component} from "react";
import  EmployeeService  from "./Service/EmployeeService";


export default class Employee extends Component
{
    constructor(props){
        super(props)
        this.state =
        {
            userId:'',
            firstName:'',
            lastName:'',
            dob:'',
            email:''
        }
    }

    handleuserId=(event)=>
    {
        this.setState(
            {
                userId:event.target.value
            }
        )
    }

    handlefirstName=(event)=>
    {
        this.setState(
            {
                firstName:event.target.value
            }
        )
    }

    handlelastName=(event)=>
    {
        this.setState(
            {
                lastName:event.target.value
            }
        )
    }

    handledob=(event)=>
    {
        this.setState(
            {
                dob:event.target.value
            }
        )
    }

    handleemail=(event)=>
    {
        this.setState(
            {
                email:event.target.value
            }
        )
    }

    handleForSubmission=(event)=>
    {
        event.preventDefault()
        this.saveEmployee(this.state)
    }

    saveEmployee(employee)
    {
        EmployeeService.saveEmployee(employee).then(response=>
            {
                console.log(response)
            }).catch(error=>console.log(error))
    }

    render()
    {
        return (
            <div>
            <h2 className="text-info">Employee</h2>
            <hr/>
            <form className="form-wrapper" onSubmit={this.handleForSubmission}>
                <div className="name">
                    <label>User Id</label>
                    <input onChange={this.handleuserId} value={this.state.userId} className="form-control"/>
                    
                </div>

                <div className="name">
                    <label type="required">First Name</label>
                    <input onChange={this.handlefirstName} value={this.state.firstName} className="form-control"/>
                 
                </div>

                <div className="">
                    <label>Last Name</label>
                    <input onChange={this.handlelastName} value={this.state.lastName} className="form-control"/>
                    
                </div>

                <div className="form-group">
                    <label>DOB</label>
                    <input onChange={this.handledob} value={this.state.dob} className="form-control"/>
                </div>

                <div className="form-group">
                    <label>Email ID</label>
                    <input onChange={this.handleemail} value={this.state.email} className="form-control"/>
                 
                </div>
                <button className="btn btn-primary mt-2">Save</button>
            </form>
            </div>
        )
    }
}