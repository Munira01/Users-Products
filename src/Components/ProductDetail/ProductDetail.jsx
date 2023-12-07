import React, { Component } from 'react'
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ProductDetail = () => {

    const fetchTodos = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        return response.data;
    };

    const { data, isLoading, isError } = useQuery({ queryKey: ['todos'], queryFn: fetchTodos });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error loading products.</div>;
    }

    const { id } = useParams();
    const todos = data.filter((obj) => obj.userId === parseInt(id));

    return (
        <div>
            <a href="/" style={{fontSize:"20px"}}><h1>Home</h1></a>
            <p>UserId is: {id}</p>
            <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                <TableContainer component={Paper} sx={{width:"80%"}}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{fontSize:"20px"}}><strong>ID number</strong></TableCell>
                          <TableCell sx={{fontSize:"20px"}}><strong>Title</strong></TableCell>
                          <TableCell sx={{fontSize:"20px"}}><strong>Completed?</strong></TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {todos.map((todo) => (
                          <TableRow
                            key={todo.id}
                          >
                            <TableCell scope="row">
                              {todo.id}
                            </TableCell>
                            <TableCell>{todo.title}</TableCell>
                            <TableCell>{String(todo.completed)}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                {/* {todos.map((todo) => (
                    
                    <div key={todo.id} className="user-card">
                        <h2>{todo.title}</h2>
                        <p>{todo.completed}</p>
                    </div>
                ))} */}
            </div>
        </div>
    );
}


export default ProductDetail;