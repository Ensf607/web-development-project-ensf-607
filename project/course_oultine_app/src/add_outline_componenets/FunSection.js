import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BasicTable(props) {
  const [count, setCount] = useState(2);
  const classes = useStyles();

  const [outcomes, setOutcomes] = useState([{ id: 1, outcome: "" }]);

  const [attributeRows, setAttributeRows] = useState([
    { id: 1, attribute: "", instructionLevel: "" },
  ]);

 const editAttribute =(id,attribute,instructionLvl)=>{
  let indx = attributeRows.findIndex((row) => row.id === id)
  let newAttributes=attributeRows
  if(attribute!=="")
  newAttributes[indx].attribute=attribute
  if(instructionLvl!=="")
  newAttributes[indx].instructionLevel=instructionLvl
  setAttributeRows(newAttributes)
  
 }
 

  const editOutcomes = (id, outcome) => {
    let indx = outcomes.findIndex((row) => row.id === id);
    let newOutcomes = outcomes;

    newOutcomes[indx].outcome = outcome;

    setOutcomes(newOutcomes);
    //setRows(newRows)
   // console.log(outcomes)
  }
  /*
useEffect (()=>{
  if(props.save){
   
    let temp=[]
    for (let i=0;i<outcomes.length;i++){
      temp.push({CourseID:props.courseID,OutcomeNum:outcomes[i].id,Description:outcomes[i].outcome,GraduateAttribute:attributeRows[i].attribute,InstructionLvl:attributeRows[i].InstructionLvl})
    
  }
  setCount(1)
  props.setOutcome(temp)
  
  props.setSave(false)
}
})*/

     

  const removeRow = (id) => {
    let newRows = outcomes.filter((row) => row.id !== id);
    let newAttributeRows = attributeRows.filter((row) => row.id !== id);
    for (let i = 0; i < newRows.length; i++) {
      if (newRows[i].id > id) {
        newRows[i].id = newRows[i].id - 1;
        newAttributeRows[i].id = newAttributeRows[i].id - 1;
      }
    }
    setAttributeRows(newAttributeRows);
    setOutcomes(newRows);
  };

  const addRow = () => {
    // console.log(...rows)

    let newRows = outcomes;
    setCount(count + 1);
    console.log(newRows);
    let newAttributeRows = attributeRows;
    newAttributeRows.push({
      id: attributeRows.length + 1,
      attribute: "",
      instructionLevel: "",
    });
    setAttributeRows(newAttributeRows);

    newRows.push({ id: outcomes.length + 1, outcome: "" });
    setOutcomes(newRows);
    // console.log(rows)
  };

  function mathContentElementOptions() {
    return (
      <Select native onChange={(e) => {}}>
        <option aria-label="None" value={""} />
        <option value="DiffCalc">DiffCalc</option>
        <option value="DiffEq">DiffEq</option>
        <option value="Discrete">Discrete</option>
        <option value="IntCalc">IntCalc</option>
        <option value="LinAlg">LinAlg</option>
        <option value="NMeths">NMeths</option>
        <option value="Prob">Prob</option>
        <option value="Stats">Stats</option>
      </Select>
    );
  }

  function naturalScienceElementOptions() {
    return (
      <Select native onChange={(e) => {}}>
        <option aria-label="None" value={""} />
        <option value="Chem">Chem</option>
        <option value="Earth">Earth</option>
        <option value="Life">Life</option>
        <option value="Phys">Phys</option>
      </Select>
    );
  }

  function complementaryOptions() {
    return (
      <Select native onChange={(e) => {}}>
        <option aria-label="None" value={""} />
        <option value="EngEcon">EngEcon</option>
        <option value="H&S">H&S</option>
        <option value="HumSS">HumSS</option>
        <option value="Impacts">Impacts</option>
        <option value="OWComm">OWComm</option>
        <option value="PEthics">PEthics</option>
      </Select>
    );
  }

  return (
    <>
    <div className="pt-2 pb-2" align="right">
            <Button variant="outlined" color="secondary">
              <SaveIcon />
            </Button>
          </div>
     
      <br />
      <Typography variant="h5">Course Section Information</Typography>

      <br />

      <div>
        Ensure that the number of sections and hours per week are updated. You
        may leave the "Number of Students Per Supervisor" column for lecture
        blank.
      </div>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table 2">
          <colgroup>
            <col width="20%" />
            <col width="30%" />
            <col width="30%" />
          </colgroup>
          <TableHead>
            <TableRow>
            <TableCell>Type</TableCell>
              <TableCell>Number of Sections</TableCell>
              <TableCell align="right">Hours Per Week</TableCell>
              <TableCell align="right">Number of Students Per Supervisor</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

          <TableRow key={"Lecture"}>
              <TableCell component="th" scope="row">
                <TextField
                  id="standard-basic"
                  inputProps={{ style: { textAlign: "center" } }}
                  value={"Lecture"}
                  readOnly={true}
                />
              </TableCell>
              <TableCell align="right">
                <TextField
                  inputProps={{ style: { textAlign: "center" } }}
                />
              </TableCell>
              <TableCell align="right">
                <TextField
                  inputProps={{ style: { textAlign: "center" } }}
                />
              </TableCell>
              <TableCell component="th" scope="row">
                <TextField
                  id="standard-basic"
                  inputProps={{ style: { textAlign: "center" } }}
                />
              </TableCell>
            </TableRow>


            <TableRow key={"Tutorial"}>
              <TableCell component="th" scope="row">
                <TextField
                  id="standard-basic"
                  inputProps={{ style: { textAlign: "center" } }}
                  value={"Tutorial"}
                  readOnly={true}
                />
              </TableCell>
              <TableCell align="right">
                <TextField
                  inputProps={{ style: { textAlign: "center" } }}
                />
              </TableCell>
              <TableCell align="right">
                <TextField
                  inputProps={{ style: { textAlign: "center" } }}
                />
              </TableCell>
              <TableCell component="th" scope="row">
                <TextField
                  id="standard-basic"
                  inputProps={{ style: { textAlign: "center" } }}
                />
              </TableCell>
            </TableRow>


            <TableRow key={"Lab"}>
              <TableCell component="th" scope="row">
                <TextField
                  id="standard-basic"
                  inputProps={{ style: { textAlign: "center" } }}
                  value={"Lab"}
                  readOnly={true}
                />
              </TableCell>
              <TableCell align="right">
                <TextField
                  inputProps={{ style: { textAlign: "center" } }}
                />
              </TableCell>
              <TableCell align="right">
                <TextField
                  inputProps={{ style: { textAlign: "center" } }}
                />
              </TableCell>
              <TableCell component="th" scope="row">
                <TextField
                  id="standard-basic"
                  inputProps={{ style: { textAlign: "center" } }}
                />
              </TableCell>
            </TableRow>


          </TableBody>
        </Table>
        <br />
      </TableContainer>


      
    </>
  );
}