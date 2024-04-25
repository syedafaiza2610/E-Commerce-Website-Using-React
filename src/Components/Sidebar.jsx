import React from 'react'
import Milk from '../Assets/milk.jpg'
import Cloth from '../Assets/cloth.jpg'
import Pet from '../Assets/pet.jpg'
import Bake from '../Assets/bake.jpg'
import Fruit from '../Assets/fruits.jpg'
import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material'
import Banner2 from "../Assets/beautyslider.jpg"
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { Link } from 'react-router-dom'
import { useState , useEffect } from 'react'

function Sidebar( props ) {
    const [totalLength, setTotalLength] = useState([]);
    var catLength = 0;
    var lengthArr = [];
    useEffect(() => {
        props.data.length !== 0 &&
        props.data.map((item, index) => {
                item.items.length !== 0 &&
                    item.items.map((item_) => {
                        catLength += item_.products.length
                    })
                lengthArr.push(catLength)
                catLength = 0;
            })

        const list = lengthArr.filter((item, index) => lengthArr.indexOf(item) === index);
        setTotalLength(list)


    }, []);
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    function valuetext(value) {
        return `${value}°C`;
    }
    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (

        <>
            <div className="Sidebar">
                <div className="card border-0 shadow">
                    <h3>Category</h3>
                    <div className="catlist">
                    {
                            props.data.length !== 0 && props.data.map((item, index) => {
                                return (
                                    <Link to={`/cat/${item.cat_name.toLowerCase()}`}>
                                        <div className='catitem d-flex align-items-center'>
                                            <span className='img'><img src={item.image} width={30} /></span>
                                            <h4 className='mb-0 ml-3 mr-5 pl-3 text-capitalize'>{item.cat_name}</h4>
                                            <span className='d-flex align-items-center justify-content-center rounded-circle ml-auto'>
                                            {totalLength[index]}</span>
                                        </div>
                                    </Link>
                                )
                            })

                        }


                    </div>

                </div>
                <div className="card border-0 shadow">
                    <h3>Fill by Price</h3>
                    <Slider
                        getAriaLabel={() => 'Temperature range'}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        color="error"
                        min={0}
                        step={1}
                        max={1000}
                    />
                    <div className="d-flex pt-2 pb-2 priceRange">
                        <span>From: <strong className='text'>${value[0]}</strong></span>
                        <span className='range'>From: <strong className='text'>${value[1]}</strong></span>

                    </div>
                    <div className="filters">
                        <h5>Color</h5>
                        <ul className='mb-0'>
                            <li><Checkbox {...label} color='error' /> Red (56)</li>
                            <li>  <Checkbox {...label} color='error' /> Green (78)</li>
                            <li>  <Checkbox {...label} color='error' /> Blue (54)</li>
                            <li><Checkbox {...label} color='error' /> Yellow (60)</li>
                            <li>  <Checkbox {...label} color='error' /> Black (72)</li>
                            <li>  <Checkbox {...label} color='error' /> Pink (41)</li>
                        </ul>

                    </div>
                    <div className="filters">
                        <h5>Items Condition</h5>
                        <ul>
                            <li><Checkbox {...label} color='error' /> New (1506)</li>
                            <li>  <Checkbox {...label} color='error' /> Used (130)</li>
                            <li>  <Checkbox {...label} color='error' /> Refurbished (54)</li>
                            <li><Checkbox {...label} color='error' /> New (1506)</li>
                            <li>  <Checkbox {...label} color='error' /> Used (130)</li>
                            <li>  <Checkbox {...label} color='error' /> Refurbished (54)</li>

                        </ul>

                    </div>
                    <div className="d-flex">
                        <Button className='btnfilter'><FilterAltOutlinedIcon /> Filter</Button>
                    </div>
                </div>
                <br />
                <img src={Banner2} className='w-100' />
            </div>
        </>

    )
}

export default Sidebar