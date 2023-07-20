import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'

const careerData = [
    {
        designation: 'Senior Specialist.Cardiology.MIMS Hospital',
        place: 'Malviya Nagar',
        exp: 'Experience: 3 Years',
        decription: 'Responsible for performing procedures like coronary and peripheral angiography and angioplasty, balloon valvotomy, permanent and temporary pacemaker implantation, cardiac synchronization therapy, aortic interventions. Conducting regular outpatient clinic..'
    },
    {
        designation: 'Senior Specialist.Cardiology.MIMS Hospital',
        place: 'Malviya Nagar',
        exp: 'Experience: 3 Years',
        decription: 'Responsible for performing procedures like coronary and peripheral angiography and angioplasty, balloon valvotomy, permanent and temporary pacemaker implantation, cardiac synchronization therapy, aortic interventions. Conducting regular outpatient clinic..'
    },
    {
        designation: 'Senior Specialist.Cardiology.MIMS Hospital',
        place: 'Malviya Nagar',
        exp: 'Experience: 3 Years',
        decription: 'Responsible for performing procedures like coronary and peripheral angiography and angioplasty, balloon valvotomy, permanent and temporary pacemaker implantation, cardiac synchronization therapy, aortic interventions. Conducting regular outpatient clinic..'
    },
    {
        designation: 'Senior Specialist.Cardiology.MIMS Hospital',
        place: 'Malviya Nagar',
        exp: 'Experience: 3 Years',
        decription: 'Responsible for performing procedures like coronary and peripheral angiography and angioplasty, balloon valvotomy, permanent and temporary pacemaker implantation, cardiac synchronization therapy, aortic interventions. Conducting regular outpatient clinic..'
    }
]

function Career() {
    return (
        <div>
            {
                careerData?.map((item, i) => (
                    <div key={i} className='mt-10 '>
                        <Card className='flex flex-col  sm:flex-row p-6 hover:bg-blue-900 transition-all ease-in-out duration-700 hover:cursor-pointer group'>
                            <div className='sm:w-10/12 flex flex-col justify-start'>
                                <CardTitle className='text-md group-hover:text-white'>{item?.designation}</CardTitle>
                                <div className='flex flex-row mt-2  gap-2'>
                                    <CardDescription className='group-hover:text-white'>{item?.place}</CardDescription>
                                    <CardDescription className='group-hover:text-white'>{item?.exp}</CardDescription>
                            </div>
                                <CardDescription className='mt-2 group-hover:text-gray-200'>{item?.decription}</CardDescription>
                            </div>
                            <div className='sm:mx-auto sm:my-auto mt-4 '>
                                <Button variant='outline' className='rounded-3xl w-32 border-blue-800 text-blue-800 h-9 group-hover:bg-blue-900 group-hover:text-white group-hover:border-gray-200 '>Apply</Button>
                            </div>
                            
                        </Card>
                    </div>
                ))
            }
            <div className='text-center mt-10'>
                <Button variant='outline' className='rounded-3xl w-32 h-9 border-blue-800 text-blue-800 hover:bg-blue-950 hover:text-gray-200'>Load More</Button>
            </div>
        </div>
    )
}

export default Career