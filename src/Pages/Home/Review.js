import React from 'react';

import "./Review.css";
import { HiStar } from "react-icons/hi";

const Review = (props) => {
    const {review} = props;
    const{description,rating} = review
    return (
        <div className='col-lg-4 py-5 mt-3  shadow-sm rounded'>
            <p>{description}</p>
            <p className='fw-bold'>Rating : <span>{rating}</span></p>
            <HiStar className='review-icon'></HiStar>
            <HiStar className='review-icon'></HiStar>
            <HiStar className='review-icon'></HiStar>
            <HiStar className='review-icon'></HiStar>
            <HiStar className='review-icon'></HiStar>
           
        </div>
    );
};

export default Review;