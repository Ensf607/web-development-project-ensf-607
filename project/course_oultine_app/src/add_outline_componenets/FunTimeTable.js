import React, { useState,useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});





export default function BasicTable(props) {

  const [count, setCount] = useState(2);
  const classes = useStyles();
  
  const [section,setSection]=useState([{id:1,SectionNum:"",Days:"",Time:"",Location:""}])


 


  const editSection=(id,SectionNum,Days,Time,Location)=>{
    let indx = section.findIndex((row) => row.id === id)
    let newSection=section
    
    if(SectionNum!=="")
    newSection[indx].SectionNum=SectionNum
    if(Days!=="")
    newSection[indx].Days=Days
    if(Time!=="")
    newSection[indx].Time=Time
    if(Location!=="")
    newSection[indx].Location=Location
    
  
    setSection(newSection)
    //setRows(newRows)
   
  }
  
useEffect (()=>{
  if(props.save){
    let temp=[]
    for (let i=0;i<section.length;i++){
      temp.push({courseID:props.courseID,SectionNum:section[i].SectionNum,Days:section[i].Days,Time:section[i].Time,Location:section[i].Location})
    
  }
 
  props.setTimeTable(temp)

  props.setSave(false)
  
}
},[props.save])

  


  const removeRow = (id) => {
    let newRows = section.filter((row) => row.id !== id)
    
   
    setSection(newRows)
  }
  

  const addRow = () => {
    // console.log(...rows)

    let newRows = section
    setCount(count+1)
    //console.log(newRows)
   


    newRows.push({ id: count,SectionNum:"",Days:"",Time:"",Location:"" })
    setSection(newRows)
   // console.log(rows)
  }


  





  return (
    <>

    <div>
    Update the timetable information below. In the "Day(s) of the Week" column, 
    use M,T,W,R,F,S,U as the codes for Monday - Sunday (e.g., MWF). In the 
    "Time" column, specify the time range in 24 hour MDT (Calgary time) format (e.g., 13:00-13:50).
    </div><br/>


      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <colgroup>
            <col width="10%" />
            <col width="30%" />
            <col width="30%" />
            <col width="20%" />
            <col width="10%" />
            

          </colgroup>
          <TableHead>
            <TableRow>
              <TableCell>Section</TableCell>
              <TableCell align="right">Days</TableCell>
              <TableCell align="right">Time</TableCell>
              <TableCell align="right">Location</TableCell>
              <TableCell align="right"></TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            
            {section.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">

                <TextField id="standard-basic"  
                inputProps={{style: { textAlign: 'center' }}}
                 onChange ={(e)=>{ editSection(row.id,e.target.value,"","","")}}
                 />

                </TableCell>
                <TableCell align="right"><TextField id="standard-basic" fullWidth={true} onChange={(e)=>{ editSection(row.id,"",e.target.value,"","")}
                } /></TableCell>
                <TableCell align="right"><TextField id="standard-basic" fullWidth={true} onChange={(e)=>{ editSection(row.id,"","",e.target.value,"")}
                } /></TableCell>
                <TableCell align="right"><TextField id="standard-basic" fullWidth={true} onChange={(e)=>{ editSection(row.id,"","","",e.target.value)}
                } /></TableCell>

                <div className={classes.root}>
                    <br/>
                    <DeleteIcon  onClick={()=> removeRow(row.id)} />

                    
                </div>

              </TableRow>
            ))}
          </TableBody>
        </Table>
        <br />
        <Button variant="contained" color="primary" onClick={()=>{
          addRow()
        }}> +</Button>
      </TableContainer>
      

     
    </>
  );
}