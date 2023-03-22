import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { AppContext } from '../ContextProvider/ContextProvider';
import data from '../Data/Data'; // assuming the data is stored in a file named data.js
import TableBody from './TableBody';
import TableHead from './TableHead';

function Table({department,setDepartment,semester}) {
  const {level,setLevel}=useContext(AppContext)
  // console.log("ffffffff");

  // console.log(level);
  // console.log(semester);
  // console.log(department);
 
  // console.log("ffffffff");
    const tableData = data.map((item, index) => ({
        ...item,
        serial: index + 1,
      }));
      const [gpa, setGpa] = useState(0);

      const [scores, setScores] = useState({
        score1: '',
        score2: '',
        score3: '',
        score4: '',
        score5: '',
        score6: '',
        score7: '',
        score8: '',
        score9: '',
      });
      
   
      
      // const calculateGradePoint=()=>{
      //   gp.scores
      // }
      // calculateGradePoint()

      // console.log(gp);
   


      const calculateLetterGrade = (score) => {
        if (score >= 70) {
          return 'A';
        } else if (score >= 60) {
          return 'B';
        } else if (score >= 50) {
          return 'C';
        } else if (score >= 45) {
          return 'D';
        } else if (score >= 40) {
          return 'E';
        } else {
          return 'F';
        }
       
      };

    //   calculatePercentage(100)
      
      const calculateGP = (score) => {
        // const totalScore = scores.reduce((acc, cur) => acc + parseInt(cur), 0);
        // const averageScore = totalScore / scores.length;
        // console.log(averageScore);
        // let gpa;
        if (score >= 70) {
        return 5.0;
        } else if (score >= 60) {
           return 4.0;
        } else if (score >= 50) {
          return 3.0;
        } else if (score >= 45) {
          return 2.0;
        } else if (score >= 40) {
          return 1.0;
        } else {
          return 0.0;
        }
        // return gpa;
      };

      const calculateAndUpdateGPA = () => {
        const calculatedGPA = calculateGP(
          scores.score1,
          scores.score2,
          scores.score3,
          scores.score4,
          scores.score5,
          scores.score6,
          scores.score7,
          scores.score8,
          scores.score9
        );
        setGpa(calculatedGPA);
      };
      // console.log(scores);
        


        //GRADE POINT FIGURES
      const [GPs, setGps] = useState([]);
     

      const handleChange = (event,index) => {

        //THE CALCULATION FOR THE GRADE POINT OF ALL COURSES
        
        const { name, value } = event.target;
        setScores({ ...scores, [name]: value });
       
        const newNumbers = [...GPs];
        newNumbers[index] = Number(event.target.value);
        setGps(newNumbers);
        // console.log(scores);
  
      
        calculateAndUpdateGPA();
      };

   
    
  return (
    <>
    <div className="-mx-4  sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              
              
               <div className="inline-block min-w-full shadow rounded-lg ">
    <table className="min-w-full leading-normal ">
      <TableHead/>
      <TableBody 
      department={department}
      setDepartment={setDepartment}
      
      semester={semester}
   
      tableData={tableData}
      scores={scores}
      handleChange={handleChange}
      calculateGP={calculateGP}
      calculateLetterGrade={calculateLetterGrade}
      />
    </table>
    </div>
    </div>
    </>
  );
}

export default Table;