import React from 'react'

function UserPage({employees}) {
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Positon</th>
                    </tr>
            </thead>
            <tbody>
                {employees.map((employee) => (
                    <tr key={employee.id}>
                        <td>{employee.name}</td>
                        <td>{employee.lastname}</td>
                        <td>{employee.position}</td>
                    </tr>
        ))}
      </tbody>
        </table>
    </div>
  )
}

export default UserPage