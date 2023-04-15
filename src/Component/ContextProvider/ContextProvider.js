import React, { useState } from 'react'
import { createContext } from 'react'

const AppContext = createContext()

const ContextProvider = (props) => {

  // const [CGPA, setCGPA] = useState({
  //   table1: 0,
  //   table2: 0,
  //   table3: 0,
  //   table4: 0,
  //   table5: 0,
  //   table6: 0,
  //   table7: 0,
  //   table8: 0,
  //   table9: 0,
  // });
  
  const [CGPA, SETCGPA] = useState(0)
  const [CGP, SETCGP] = useState(0)
  const [tableNo, setTableNo] = useState(1)
  const [department, setDepartment] = useState(0);
  const[totalCGPA,setTotalCGPA]=useState(0)

  let gradePointArray = [];
const [summaryRow,setSummaryRow]=useState([])
const [summaryLevel,setSummaryLevel]=useState(100)
const [summarySemester,setSummarySemester]=useState('')
const[showOption,setShowOption]=useState(true)
  return (
    <div>
      <AppContext.Provider value={{summaryLevel,showOption,setShowOption, summarySemester,setSummaryLevel,setSummarySemester,setTotalCGPA,totalCGPA,CGP,SETCGP,CGPA,setSummaryRow,summaryRow, gradePointArray, tableNo, setTableNo, SETCGPA, CGPA, department, setDepartment }}>
        {props.children}
      </AppContext.Provider>
    </div>
  )
}

export { ContextProvider, AppContext }
