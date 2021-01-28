// import React, {useState, useEffect, useContext} from 'react';
import { useSelector } from 'react-redux';

import {Grid, Pagination} from 'semantic-ui-react'
import ListCard from './listcard.js'


function ListItems (){

  let listings = useSelector(state => state.listings)

  const PaginationExampleShorthand = () => (
    <Pagination
      defaultActivePage={1}
      firstItem={null}
      lastItem={null}
      pointing
      secondary
      totalPages={3}
    />
  )

  return(
    <Grid>
      <Grid.Row columns={1}>
        <Grid.Column textAlign="center" width="12" style={{
          margin : "auto"
          }}verticalAlign>

          {
            listings.map(item => {
              return (
                <ListCard item={item} />
              )
            })
          }
  
        </Grid.Column>
      </Grid.Row>
     
      {/* TODO: THIS SHOULD PROBALBY GO IN A FOOTER? OR IN A DIV? PROBABLY NOT IN THE GRID, RESEARCH */}
      <PaginationExampleShorthand />
    </Grid>
  
  );
}

export default ListItems
