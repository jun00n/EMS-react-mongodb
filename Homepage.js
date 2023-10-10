import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Collapse, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';



function Homepage() {

     //state to store
     const [employees, setEmployees] = useState([])

     //api call for backend
     const fetchEmployees = async () => {
          try {
               const result = await axios.get('http://localhost:8000/getEmployees');
               setEmployees(result.data.message); // Assuming the employee data is in result.data
          }
          catch (error) {
               console.error("Axios Error:", error);
          }
     }
     console.log(employees);
     //these fetch data has to come in use effect
     useEffect(() => {
          fetchEmployees()
     }, [])//now these data has to be stored in a state so impoet usestate and create setemp




     return (
          <div>
               <div className='ms-3 mt-3 '>
                    <Row>
                         <Col lg={4}>
                              <img src="./em7.jpeg" alt="" height={350} width={500} style={{ borderRadius: 60 }} />
                         </Col>
                         <Col lg={8}>
                              <h1 style={{ marginLeft: 100 }}>What is EMS ?</h1>
                              <h1 style={{ marginRight: 400 }}><i class="fa-solid fa-quote-left"></i></h1>
                              <div style={{ width: 500, height: 110, marginLeft: 200 }}>
                                   <h4>In order to build a rewarding employee experience, you need to understand what matters most to your people.<br /><br /> -Julie Bevacqua</h4>
                              </div> <br />
                              <h1 style={{ marginLeft: 550 }}><i class="fa-solid fa-quote-right"></i></h1>
                         </Col>
                    </Row>
               </div>

               <div className='p-3'>
                    <div >
                         <h3 style={{ display: 'inline' }}>List of Employee</h3>
                         <Link to={'/add'} style={{ textDecoration: 'none' }}>
                              <Button size='lg' className='p-1 bg-white' style={{ display: 'inline', marginLeft: 700 }}>
                                   Add New Employee</Button>
                         </Link>
                    </div>
                    <table className='table striped border w-100 mt-4 bg-light' style={{ borderCollapse: Collapse }}>
                         <tr style={{ border: '2px solid' }}>
                              <th>#</th>
                              <th>Employee ID</th>
                              <th>Name</th>
                              <th>Department</th>
                              <th>Salary(Rs)</th>
                              <th>Experience</th>
                              <th>Actions</th>
                         </tr>
                         <tbody>

                              {/* to take each data/element from an array we use map...js code inside return=>use{} */}
                              {
                                   employees?.map((employee, index) => (
                                        <tr>
                                             <td>{index}</td>
                                             <td> {employee.id}</td>
                                             <td> {employee.name}</td>
                                             <td> {employee.department} </td>
                                             <td> {employee.salary}</td>
                                             <td> {employee.experience}</td>

                                             <td>
                                                  <Link to={ `/edit/${employee.id}`} style={{ textDecoration: 'none' }}><Button size='md' className='p-2 ms-2'>Edit</Button></Link>
                                                  <Link to={ `/delete/${employee.id}`}style={{ textDecoration: 'none' }}><Button size='md' className='p-2 ms-2'>Delete</Button></Link>
                                                  <Link to={ `/view/${employee.id}`} style={{ textDecoration: 'none' }}><Button size='md' className='p-2 ms-2'>View</Button></Link>
                                             </td>
                                        </tr>
                                   )
                                   )
                              }
                         </tbody>
                    </table>
               </div>
          </div>

     )
}
export default Homepage