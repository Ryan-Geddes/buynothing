// import React, {useState, useEffect, useContext} from 'react';
// import {useDispatch, useSelector } from 'react-redux';
import { Grid } from 'semantic-ui-react'

import ListItem from '../list/ListItems';
import SearchComponent from './search.js';


function HomeGrid() {

  return (
    <>
      <Grid>
          <Grid.Row>
          </Grid.Row>
          {/* LEFT COLUMN */}
          <Grid.Column width={5} style={{border: "3px solid pink", height: "100%"}}>
          </Grid.Column>

          {/* CENTER COLUMN */}
          <Grid.Column centered width={7} style={{border: "3px solid orange", height: "100%"}}>

            <SearchComponent/>
            <ListItem />

          </Grid.Column>

          {/* RIGHT COLUMN */}
          <Grid.Column width={4} style={{border: "3px solid yellow", height: "100%"}} >
          </Grid.Column>

      </Grid>
    </>
  )
}


export default HomeGrid;