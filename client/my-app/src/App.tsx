import React, { useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlineMail } from "react-icons/ai";
import {MDBInput}  from "mdbreact";
import { FiEdit2 } from "react-icons/fi";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import { generate } from "shortid/index";
import $ from "jquery"

interface Users {
  id: string;
  firstName: string;
  lastName: string;
  Email: string;
}
const TablePage = () => {
  const [arr, setarr] = useState<Users[]>([
  ]);
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [index,setIndex]=useState<number>()
const [rows,totalrows]=useState(1)
  console.log(arr);
const $tableID = $('#table');
const handleDelete=(id:string)=>{
const nextarr=arr.filter(tem=> tem.id!=id)
setarr(nextarr)
 
}
const handleUpdate=(ind:any)=>{  
let newArr=[...arr]
newArr[ind]={
  id:generate(),
  firstName: firstName,
  lastName: lastName,
  Email: email
} as Users
setarr(newArr)
}
  const handleInputChange = (e : any) => {
    console.log(e.target.name, e.target.value);
    switch(e.target.name) { 
    case "firstName": 
      setFirstName(e.target.value);
      break;
    case "lastName":
      setLastName(e.target.value);
      break;
    case "email":
      setEmail(e.target.value);
      break;
    default: 
      break;
       
    
  }
  }
  return (
    <>
      <h1
        className="container"
        style={{ textAlign: "center", marginTop: "2rem" }}
      >
        Register Your users
      </h1>
      <div className="container" id="table">
              <MDBInput
                name="firstName"
                label="first Name"
                icon="user"
                value={firstName}
                onChange={handleInputChange}
              />
              <MDBInput
                label="lastName"
                icon="user"
                name="lastName"
                value={lastName}
                onChange={handleInputChange}
              />
              <MDBInput
                label="Email"
                icon="envelope-open"
                name = "email"
                value={email}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-12 text-center">
              <button
                onClick={() => {
                  setarr((currentpeople) => 
                    ([
                      ...currentpeople,
                      {
                        id: generate(),
                        firstName: firstName,
                        lastName: lastName,
                        Email: email
                      } as Users
                     
                    ]));
                    totalrows(rows+1)
                }}
                type="button"
                className="btn btn-primary"
                style={{ marginTop: "1rem" }}
              >
                Primary
              </button>
            </div>
           <h1 style={{ marginTop: "3rem", textAlign: "center" }}>
              List of registered Users
            </h1>
            <div  id="table">
            <MDBTable
              bordered
              hover
              responsive
              striped
              style={{ marginTop: "2rem" }}
              id="tbUser"
              className="container text-center"
            >
              <MDBTableHead>
                <tr className="bg-primary">
                  <th>#</th>
                  <th>First</th>
                  <th>Last</th>
                  <th>Email</th>
                  <th>Edit</th>
                  <th>delete</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                
      {arr.map((p, index) => {
        return (
          <>
           
           <tr>
                  <td>{p.id}</td>
                  <td>{p.firstName}</td>
                  <td>{p.lastName}</td>
                  <td>{p.Email}</td>
                  <td>
                    <button data-toggle="modal" onClick={()=>setIndex(index)} data-target="#exampleModal">
                      <FiEdit2 />
                    </button>
                  </td>
                  <td>
                    <span>
                      <button onClick={()=>handleDelete(p.id)} className="btnDelete">
                        <AiOutlineDelete />
                      </button>
                    </span>
                  </td>
                </tr>
            
          </>
        );
      })}
              </MDBTableBody>

            </MDBTable>
            </div>
            <div className="modal fade" id="exampleModal" tabIndex={-1}role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Edit your Data</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <MDBInput
                name="firstName"
                label="first Name"
                icon="user"
                value={firstName}
                onChange={handleInputChange}
              />
 <MDBInput
                label="lastName"
                icon="user"
                name="lastName"
                value={lastName}
                onChange={handleInputChange}
              />
              <MDBInput
                label="Email"
                icon="envelope-open"
                name = "email"
                value={email}
                onChange={handleInputChange}

              />
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" >Close</button>
        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={()=>handleUpdate(index)}>Save changes</button>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default TablePage;
