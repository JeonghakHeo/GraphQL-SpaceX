import React from 'react'
import { gql, useQuery } from '@apollo/client'
import LaunchItem from './LaunchItem'
import MissionKey from './MissionKey'

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`

const Launches = () => {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY)
  return (
    <div>
      <h1 className='display-4 my-3'>Launches</h1>
      <MissionKey />
      {loading ? (
        <h4>loading..</h4>
      ) : error ? (
        console.log(error)
      ) : (
        data.launches.map((launch) => (
          <LaunchItem key={launch.flight_number} launch={launch} />
        ))
      )}
    </div>
  )
}

export default Launches
