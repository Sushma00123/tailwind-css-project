import React from 'react'
import OverView from './overView'
import Qualification from './qualification'
import FieldOfExp from './fieldOfExp'
import AreaOfExpertise from './areaOfExpertise'

function DetailsSection({ doctorsDet }) {
  return (
    <div className='mt-10 text-justify md:p-4'>
      <OverView doctorsDet={doctorsDet} />
      <Qualification doctorsDet={doctorsDet} />
      <FieldOfExp doctorsDet={doctorsDet} />
      <AreaOfExpertise />
    </div>
  )
}

export default DetailsSection