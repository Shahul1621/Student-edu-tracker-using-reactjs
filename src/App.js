import logo from './component/Hindusthan.jpg';
import './App.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PiStudentBold } from "react-icons/pi";
import { FaMoneyCheck } from "react-icons/fa";
import { PiSealPercentFill } from "react-icons/pi";
import { GiJigsawBox } from "react-icons/gi";
import { LuSheet } from "react-icons/lu";
import { PiStudentDuotone } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdOutlineSportsKabaddi } from "react-icons/md";
import { useState } from 'react';
import { BsFileEarmarkSpreadsheetFill } from "react-icons/bs";
import { SiClubhouse } from "react-icons/si";
import { SiGoogleclassroom } from "react-icons/si";
import { MdContactMail } from "react-icons/md";
import { FaHandHoldingMedical } from "react-icons/fa6";

function App() {
  const [regularStudents, setRegularStudents] = useState(8);
    const [remedialStudents, setRemedialStudents] = useState(13);
    const [inPaidClubs, setInPaidClubs] = useState(0);

       function increaseRegularStudet(){
        setRegularStudents(regularStudents + 1);
       }

       function increaseRemedial(){
        setRemedialStudents(remedialStudents + 1);
       }
       function increaseInPaidClubs(){
        setInPaidClubs(inPaidClubs + 1);
        }

  return (

      <div className="main">
        <div className="navbar">
          <img src={logo}></img>
          <br /><br />
          <PiStudentBold />
          <h2>Student Management</h2>
          <FaMoneyCheck />
          <h2>Financial Management</h2>
          <PiSealPercentFill />
          <h2>Quality control</h2>
          <GiJigsawBox />
          <h2>Report Delivery</h2>
          <LuSheet />
          <h2>Attendance</h2>
        </div>
        <div className='content'>
          <div className='header'>
          <h1>Student Tracking Management</h1>
          </div>
          <div className='profile'>
            <div className='profile-left' onMouseEnter={()=> increaseRegularStudet()}>
            <PiStudentDuotone />
              <h3>Regular Student</h3>
              <p>{regularStudents}</p>
            </div>
            <div className='profile-center'onMouseEnter={()=> increaseRemedial()} >
            <FaChalkboardTeacher />
              <h3>Remedial Student</h3>
              <p>{remedialStudents}</p>
            </div>
            <div className='profile-right'  onMouseEnter={()=> increaseInPaidClubs()} >
            <MdOutlineSportsKabaddi />
              <h3>In paid clubs</h3>
              <p>{inPaidClubs}</p>
            </div>
          </div>
          <br /> <br />
          <h1>Menus</h1>
          <div className='menu'>
            <div className='c1'>
            <h2><PiStudentBold /></h2>
            <a>Regular Enrollment</a>
            </div>
            <div className='c2'>
            <h2><FaChalkboardTeacher /></h2>
            <a>Remedial Enrollment</a>
            </div>
            <div className='c3'>
            <h2><SiClubhouse /></h2>
            <a>Club Management</a>
            </div>
            <div className='c4'>
            <h2><SiGoogleclassroom /></h2>
            <a>Class Room Management</a>
            </div>
            <div className='c5'>
            <h2><MdContactMail /></h2>
            <a>SMS / Mail</a>
            </div>
            <div className='c6'>
           <h2> <BsFileEarmarkSpreadsheetFill /></h2>
            <a>Attendance</a>
            </div>
            <div className='c7'>
           <h2><FaHandHoldingMedical /></h2>
            <a>Clinic Details</a>
            </div>
          </div>
        </div>
      </div>

  );
}

export default App;
