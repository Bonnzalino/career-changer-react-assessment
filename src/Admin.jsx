import React , {useState} from 'react'
import './table.css'
import Create from './Create'

const AdminPage = ({ employees, setEmployees }) => {
  const handleDelete = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };
  
    return (
    <div>
        <Create setEmployees={setEmployees} employees={employees}/>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Positon</th>
                    <th>Action</th>
                  </tr>
            </thead>
            <tbody>
                {employees.map((employee) => (
                    <tr key={employee.id}>
                        <td>{employee.name}</td>
                        <td>{employee.lastname}</td>
                        <td>{employee.position}</td>
                        <td>
                            <button className="delete" type='button' onClick={() => handleDelete(employee.id)}>Delete</button>
                        </td>
                    </tr>
        ))}
          </tbody>
      </table>
    </div>
  )
}

export default AdminPage