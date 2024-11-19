import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

function Portfolio() {
  const [jobs, setJobs] = useState([]);

  // useEffect(() => {
  //   fetch("http://127.0.0.1:5555/jobs")
  //     .then((r) => r.json())
  //     .then(setJobs);
  // }, []);

  return (
    <div  className="animate-swipeUp" style={{ display: "flex", justifyContent: "center", padding: "10px" }}>
      <div  style={{
        height: "auto",
        marginBottom: "20px",
        marginTop: "10px",
        
      }}>
        <div 
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          marginBottom: "40px",
          width: "100%",
          
          padding: "10px", // Adjust padding for smaller screens
        }}
        >
          <Typography variant="h5">
            <strong>
              LIST OF ALL JOBS
            </strong>
            <hr class="border-t-2 border-red-700  mb-2" style={{ width: "20%", margin: "15px auto" }} />
          </Typography>
        </div>

        <TableContainer component={Paper} style={{ width: "100%", overflowX: "auto" }}>
          <Table style={{ minWidth: "500px" }}>
            <TableHead>
              <TableRow  >
                <TableCell ><u>Job ID</u></TableCell>
                <TableCell><u>Job Title</u></TableCell>
                <TableCell><u>Description</u></TableCell>
                <TableCell><u>Completion Status</u></TableCell>
                <TableCell>Requirements</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {jobs.map((job) => (
                <TableRow key={job.id}>
                  <TableCell>{job.id}</TableCell>
                  <TableCell>{job.title}</TableCell>
                  <TableCell>{job.level}</TableCell>
                  <TableCell>{job.description}</TableCell>
                  <TableCell>{job.requirements}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <br />
      </div>
    </div>
  );
}

export default Portfolio;
