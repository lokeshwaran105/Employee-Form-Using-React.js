import { useState } from "react"

function App() {

  const [data, setData] = useState({
    fname: "",
    mlast: "",
    lname: "",
    dob: null,
    
  })

  const handleChange = (e) => {
    set
  }



  return(
    <div className="container border border-secondary p-5">
      <h4 className="text-center fw-bolder">Employee Form</h4>
      <form className="row mb-4 mb-4">
        <div className="col-4">
          <label className="form-label fw-bolder mb-0 fw-bold mb-0 fw-bold mb-0">First Name</label>
          <input type="text" onChange={(e) => {handleChange(e.target.value)}} placeholder="Enter Your First Name" className="form-control" style={{width:"100%"}} required/>
        </div>
        <div className="col-4">
          <label className="form-label fw-bold mb-0">Middle Name
          </label>
            <input type="text" placeholder="Enter Your Middle Name" className="form-control"/>
        </div>
        <div className="col-4">
          <label className="form-label fw-bold mb-0">Last Name
          </label>
            <input type="text" placeholder="Enter Your Last Name" className="form-control" required/>
        </div>
      </form>

      <div className="row mb-4">
        <div className="col-4">
          <label className="form-label fw-bold mb-0">Birth Date</label>
          <input type="date" placeholder="Enter Your First Name" className="form-control" required/>
        </div>
        <div className="col-4">
          <label className="form-label fw-bold mb-0">Email
          </label>
            <input type="email" placeholder="Enter Your Mail" className="form-control" required/>
        </div>
        <div className="col-4">
          <label className="form-label fw-bold mb-0">Phone Number
          </label>
            <input type="number" placeholder="Enter Your Phone Number" className="form-control" required/>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-4">
          <label className="form-label fw-bold mb-0">Select Gender</label>
          <select className="form-select" required>
            <option>Select...</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <div className="col-4">
          <label className="form-label fw-bold mb-0">Start Time
          </label>
            <input type="time" className="form-control" required/>
        </div>
        <div className="col-4">
          <label className="form-label fw-bold mb-0">End Number
          </label>
            <input type="time" className="form-control" required/>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-4">
          <label className="form-label fw-bold mb-0">Job Position</label>
          <input type="text" placeholder="Enter Job Position" className="form-control" required/>
        </div>
        <div className="col-4">
          <label className="form-label fw-bold mb-0">Select Teams
          </label>
          <select className="form-select" required>
            <option>Select...</option>
            <option>Staff</option>
            <option>Manager</option>
            <option>Team leader</option>
          </select>
        </div>
        <div className="col-4">
          <label className="form-label fw-bold mb-0">Select Designation
          </label>
          <select className="form-select" required>
            <option>Select...</option>
            <option>Staff</option>
            <option>Manager</option>
            <option>Team leader</option>
          </select>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-4">
          <label className="form-label fw-bold mb-0">Billable Hours</label>
          <input type="text" placeholder="Enter the billable hours" className="form-control" required/>
        </div>
        <div className="col-4">
          <label className="form-label fw-bold mb-0 mx-2">Is Billable</label>
          <input type="checkbox" placeholder="Enter Your First Name" required/>
        </div>
      </div>

      <div className="row">
        <div className="col-12 text-center">
          <button className="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  )
}


export default App;