import { Grid } from 'semantic-ui-react'

import ListItem from '../list/ListItems';
import SearchComponent from './search.js';


function HomeGrid() {

  return (
    <>
      <Grid>

          <Grid.Column width={5}>
          </Grid.Column>

          <Grid.Column centered width={6}>
            <SearchComponent/>
            <ListItem />
          </Grid.Column>

          <Grid.Column width={10}>
          </Grid.Column>

      </Grid>
    </>
  )
}


export default HomeGrid;