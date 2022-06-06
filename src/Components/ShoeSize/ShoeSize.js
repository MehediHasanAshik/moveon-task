import React from 'react';
import './ShoeSize.css'

const ShoeSize = ({ sizes }) => {
    return (

        <div>
            {sizes && <>
                {/* <h3>Availabe Size</h3> */}
                {sizes?.map(shoe =>
                    <div className='size-cart'>
                        <h4>{shoe}</h4>
                    </div>)}
            </>}
        </div>

    );
};

export default ShoeSize;