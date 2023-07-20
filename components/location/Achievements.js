import Image from 'next/image'
import React from 'react'

const achivementsData = [
  {
    text: '1st hospital in India to do successful Kidney Tumour Surgery extended through heart',

  },
  {
    text: '1st hospital in Rajasthan to have a COVID Triage with Blue, White, Red zones',

  },
  {
    text: 'Record of Highest weight loss surgery (269kg) in Rajasthan',

  },
  {
    text: '1st hospital in Rajasthan to get Emerald Certificate in Emergency  ',

  },
  {
    text: '1st in Rajasthan to get Hybrid Cath Lab',

  },
  {
    text: '3rd in India to get Hybrid Cath Lab',

  },
  {
    text: 'Introduced 1st Cath Lab in Sawai Madhopur',

  },
  {
    text: 'Highest number of V-MAT Radiation Cancer treatment in Rajasthan',

  },
]

function Achievements() {
  return (
    <div className='bg-gray-900 py-10'>
      <h2 className='text-yellow-500 text-3xl font-bold text-center'>Achievements</h2>
      <div>
        <div className='container mt-6'>
          <div className='grid sm:grid-cols-4 gap-6 '>
            {achivementsData.map((items, i) => (
              <div key={i} className='flex flex-col justify-center items-center gap-2 sm:gap-4'>
                <Image src='/images/dashicons_awards(1).svg' width={32} height={32} className='mt-5' alt='' />
                <p className='text-center text-gray-400 text-sm'>{items?.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievements;
