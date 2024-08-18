import React from 'react';

const TechCard = ([key, IconComponent]) => {
    return (
        <div className='flex flex-col space-y-2'>
            {IconComponent}
            <h3 className='text-xl font-bold '>{key}</h3>
        </div>
    );
}

export default TechCard;
