import { useState } from 'react';
import Layout from './Layout';
import './home.css'
import UserPage from './User';
import AdminPage from './Admin';

const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: 'mocklastname',
    position: "Manager"
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer"
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer"
  },
]


const Home = () => {

  const [section, setSection] = useState("React - Assessment");  {/* Change Section */}

  const [status, setStatus] = useState();  

  const [employees, setEmployees] = useState(mockEmployees);

  const handleAdminClick =() => {
    setSection("Home - Admin Sector");
    setStatus("Admin")
  }

  const handleUserClick =() => {
    setSection("Home - User Sector");
    setStatus("User")
  }

  let content = null;
  if (status === "Admin") {
    content = <AdminPage employees={employees} setEmployees={setEmployees}/>;
  } else if (status === "User") {
    content = <UserPage employees={employees} />;
  } else {
    content = <div></div>;
  }


  return (
    <Layout>
      <div className='home'>
        <h1>Generation Thailand</h1>
        <h1> {section} </h1>
        <button className="selectsector" onClick={handleUserClick}>User Home Sector</button>
        <button className="selectsector" onClick={handleAdminClick}>Admin Home Sector</button>
      </div>
      {content}
    </Layout>
  )
}


export default Home