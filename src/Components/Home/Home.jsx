import React, { Component } from 'react'
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';


const Home = () => {

  const fetchUsers = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
  };

  const { data, isLoading, isError } = useQuery({ queryKey: ['users'], queryFn: fetchUsers });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading products.</div>;
  }

  return (
    <div>
      <Typography sx={{ fontSize: 40 }} color="text.secondary" gutterBottom>
        <a href="">Home</a>
      </Typography>
      <Grid container spacing={2}>
          {data.map((user) => (
            <Grid item xs={4}>
              <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <a key={user.id} href={`user/${user.id}`} style = {{textDecoration:"none"}} ><div className="user-card">
                      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom><h2>{user.name}</h2></Typography>
                      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom><p>{user.email}</p></Typography>
                    </div></a>
                  </CardContent>
              </Card>
            </Grid>
          ))} 
      </Grid>
    </div>
    
  );
}

export default Home;
