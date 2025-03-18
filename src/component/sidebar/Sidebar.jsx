import React, { useState } from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

const Sidebar = () => {

const[value,setValue]=useState([100,60000])
const[value2,setValue2]=useState(0)

  return (
    <div>
        <div className='sidebar'>
            <div className="filterBox">
                <h6>PRODUCT CATEGORIES</h6>
                <div className='scroll'>
                <ul>
                    <li>
                    <FormControlLabel className='w-100 custom-checkbox' control={<Checkbox defaultnotChecked />} label="Spare Parts" />
                    </li>
                    <li>
                    <FormControlLabel className='w-100 custom-checkbox' control={<Checkbox defaultnotChecked />} label="Beverages" />
                    </li>
                    <li>
                    <FormControlLabel className='w-100 custom-checkbox' control={<Checkbox defaultnotChecked />} label="Comics" />
                    </li>
                    <li>
                    <FormControlLabel className='w-100 custom-checkbox' control={<Checkbox defaultnotChecked />} label="Packaged Foods" />
                    </li>
                    <li>
                    <FormControlLabel className='w-100 custom-checkbox' control={<Checkbox defaultnotChecked />} label="Kitchen Appliances" />
                    </li>
                    <li>
                    <FormControlLabel className='w-100 custom-checkbox' control={<Checkbox defaultnotChecked />} label="Beauty Care" />
                    </li>
                    <li>
                    <FormControlLabel className='w-100 custom-checkbox' control={<Checkbox defaultnotChecked />} label="Footwear" />
                    </li>
                    <li>
                    <FormControlLabel className='w-100 custom-checkbox' control={<Checkbox defaultnotChecked />} label="Toys & Games" />
                    </li>
                    <li>
                    <FormControlLabel className='w-100 custom-checkbox' control={<Checkbox defaultnotChecked />} label="Grocery & Food" />
                    </li>
                </ul>
     
    </div>
            </div>

            <div className="filterBox">
                <h6>FILTERING PRICE</h6>
                <RangeSlider value={value} onInput={setValue} min={100} max={60000} step={5} />
                <div className=" d-flex justify-content-between pt-2 pb-2 priceRange">
                    <span>From: <strong className='text-success'> Rs: {value[0]} </strong> </span>
                    <span className=''>From: <strong className='text-success'> Rs: {value[1]} </strong> </span>

                </div>
                </div>

        </div>
      
    </div>
  )
}

export default Sidebar
