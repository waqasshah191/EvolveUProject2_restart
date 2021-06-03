import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { PermMedia, ThumbUp, ThumbDown } from '@material-ui/icons';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import TabackgroundImg from './../assets/images/world-back2.jpg';


const useStyles = makeStyles({
  root: {
    backgroundImage: `url(${TabackgroundImg})`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    padding: '5%',
    boxSizing: 'border-box'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  categoryText: {
    textAlign: 'center',
  },
  table: { textAlign: 'left' },
  media: { maxWidth: 60 }
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
            <TableCell><PermMedia /></TableCell>
            <TableCell className={classes.title}>Category</TableCell>
            <TableCell className={classes.title}>Post</TableCell>
            <TableCell><ThumbUp /></TableCell>
            <TableCell><ThumbDown /></TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell>{row.photo && <img className={classes.media} src={'/api/posts/photo/' + row._id} />}</TableCell>
              <TableCell className={classes.categoryText}>{row.category}</TableCell>
              <TableCell>{row.text.length > 150 ? row.text.substr(0, 150) + '...' : row.text}</TableCell>
              <TableCell>{row.likes.length}</TableCell>
              <TableCell>{row.dislikes.length}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}