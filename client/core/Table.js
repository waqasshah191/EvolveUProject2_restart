import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TabackgroundImg from './../assets/images/world-back2.jpg';


const useStyles = makeStyles({
  root:{
    backgroundImage:`url(${TabackgroundImg})`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed'
  },
  table: {textAlign:'left'},
  media: { maxWidth:60}
});

export default function BasicTable() {

  const [rows, setRows] = useState([]);
  
    useEffect(() => {
      const getinfo = async () => {
        let response = await fetch('/api/posts/all');
        let data = await response.json();
        console.log("Data found", data[3])
        setRows(data);
      };
      getinfo();
    }, []);

  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Category</TableCell>
            <TableCell>Post</TableCell>
            <TableCell>Thumbs Up</TableCell>
            <TableCell>Thumbs Down</TableCell>
            <TableCell>Photo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell>{row.category}</TableCell>
              <TableCell>{row.text}</TableCell>
              <TableCell>{row.likes.length}</TableCell>
              <TableCell>{row.dislikes.length}</TableCell>
              <TableCell>{row.photo && <img className={classes.media} src={'/api/posts/photo/' + row._id}/>}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table> 
    </TableContainer> 
  );
}