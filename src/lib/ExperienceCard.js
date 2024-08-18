import React from 'react';

const ExperienceCard = () => {
    return (
        <div className='flex flex-col space-y-4 justify-center items-start w-full'>
            <div className='w-full'>
                <p className='text-lg text-gray-800 font-bold float-start'>Data Analytics Intern</p>
                <p className='text-base text-gray-600 font-bold float-end'>Duration: 2 months</p>
            </div>
            <div className='w-full'>
                <p className='text-lg text-gray-600 font-bold float-start'>Edulyt India | Delhi</p>
                <p className='text-base text-gray-600 float-end'>May-2023 July-2023</p>
            </div>
            <ul className='list-inside list-disc space-y-3'>
                <li>
                    Conducted comprehensive analysis of credit card data, extracting valuable insights, identifying purchasing patterns,
                    and formulating strategic product recommendations
                </li>
                <li>
                    Implemented SQL queries to effectively enhance customer retention by around 15%, contributing to a notable
                    increase in annual revenue by about $500k
                </li>
                <li>
                    Actively analyzed and managed customer credit card data, optimizing discount criteria.
                </li>

            </ul>
                
        </div>
    );
}

export default ExperienceCard;
