import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, Route } from "react-router-dom";
import CreateWorkout from "./CreateWorkout";
import FeaturedInfo from "./featuredInfo";
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';import { deleteWorkout } from "../store";

/**
 * COMPONENT
 */
export const Home = (props) => {
  const { username, workouts, deleteWorkout } = props;
  // useEffect(()=>{
  //   console.log('>>>>>',props)
  // })
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'title',
      headerName: 'Title',
      width: 150,
      editable: true,
    },
    {
      field: 'html',
      headerName: 'html',
      width: 150,
      editable: true,
    },
    {
      field: 'saveData',
      headerName: 'JSON Data',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'createdAt',
      headerName: 'Date',
      description: 'This column has a value getter and is not sortable.',
      sortable: true,
      width: 160,
      valueGetter: (params) =>
        `${params.row.createdAt}`,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/workout/${params.row.id}`}>
              <button className="emailListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="emailListDelete"
              onClick={() => deleteWorkout(params.row)}
            />
          </>
        );
      },
    },
  ];
  const rows = workouts;
  return (
    <div className="home">
      <FeaturedInfo workouts = {workouts}/>
      
      <Route component= { CreateWorkout } />
      <h3>Welcome, {username}</h3>
      <h4>You have {workouts.length} workouts stored</h4>
      <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  console.log(state);
  return {
    username: state.auth.username,
    workouts: state.workoutsSlice,
  };
};

const mapDispatch = (dispatch) => {
  return {
    deleteWorkout: (workout) => dispatch(deleteWorkout(workout)),
  };
};

export default connect(mapState, mapDispatch)(Home);
