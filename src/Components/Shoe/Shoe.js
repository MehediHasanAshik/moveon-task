import React, { useContext, useState } from 'react';
import { ShoeContext } from '../../Context/ShoeContext';
import ShoeColor from '../ShoeColor/ShoeColor';
import ShoeSize from '../ShoeSize/ShoeSize';
import './Shoe.css'

const Shoe = ({ skus, props1, val }) => {

    const [shoeSizes, setShoeSizes] = useState([]);
    const [shoeColor, setShoeColor] = useState('');

    const { shoes, dispatch } = useContext(ShoeContext);

    const handleAvailabeShoe = (val) => {
        let availableCodes = [];
        setShoeSizes([]);
        setShoeColor('');
        skus?.filter((sk, index) => {
            if (sk?.props[0] === val?.id) { // code = 691
                availableCodes.push({ code: sk?.props[0], index });
            }
        })

        let availableSizes = [];
        skus?.filter((sk, index) => {
            const found = availableCodes?.find(ac => ac.index === index);
            if (found) {
                const shoe = props1[1]?.values?.find(s => s.id === sk?.props[1]);
                availableSizes.push(shoe?.name);
            }
        });
        dispatch({
            type: 'SET_SHOE',
            payload: {
                sizes: availableSizes,
                color: val.title
            }
        });
        setShoeColor(val.title)
        setShoeSizes(availableSizes)
    }

    return (
        <div>
            <div>
                <div className='shoe-color'>
                    {/* {shoeColor && <ShoeColor color={shoeColor} />} */}
                    <img onClick={() => handleAvailabeShoe(val)} src={val.image} alt="" />
                </div>
                {/* {shoeSizes && <ShoeSize sizes={shoeSizes} />} */}
            </div>
        </div>
    );
};

export default Shoe;