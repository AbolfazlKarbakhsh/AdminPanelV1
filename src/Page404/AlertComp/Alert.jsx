import React, { useEffect, useState } from 'react';
import './Alert.css'
import { Link } from 'react-router-dom';
const Alerts = (props) => {


    return (
        <>
            {
                props.Error == "In" ? (
                    <div className='loading d-block unload'>
                        <div className='font8 bad-icon'>
                            <div className="bi bi-wifi-off bad bad1"></div>
                            به اینترنت وصل نیستی</div>

                        <button className='btn  mt-4 font4 bg-dash p-2' onClick={props.method}>
                            تلاش مجدد
                        </button>

                    </div>

                ) : (
                    props.Error == "Search" ? (
                        <div className='loading d-block unload'>
                            <div className='font8 bad-icon'>
                                <div className="bi bi-search bad bad1 my-3"></div>
                                ! کاربر مورد نظر پیدا نشد </div>

                            <button className='btn  mt-4 font4 bg-dash p-2' onClick={props.Origin}>
                                تلاش مجدد
                            </button>

                        </div>
                    ) : (

                        <div className='loading  d-flex-center flex-column unload'>
                            <div className="loader bad my-4 mx-auto"></div>

                            <div className='font8 bad-icon'>
                                درحال دریافت اطلاعات </div>


                        </div>
                    )

                )
            }

        </>
    )
}

export default Alerts;

