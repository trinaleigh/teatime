import React from 'react'
import Reset from '../containers/Reset'

const AllTeas = () => (
  <div id="tea-box">
    <Reset name="green" steepTime="180"/>
    <Reset name="black" steepTime="300"/>
    <Reset name="white" steepTime="60"/>
  </div>
)

export default AllTeas