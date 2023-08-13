import React from 'react';
import ReactDOM from 'react-dom';

const Todos = () => {
    return (

            <div className=" BoxTiels Todo rounded-3 px-4 unload">

                {/* <!-- header in user panel  --> */}
                <div className=" d-flex-beatwean align-items-center align-content-center">
                    <div className="IconSet pointer effect pt-0">
                        <a href="/Pages/AdminPanel.html" >
                            <span className="bi-box-arrow-left font7 bold items"></span>
                        </a>
                    </div>
                    <h3 className="font6 pl-2 Fvazir mb-0">
                        مدیریت کارها
                    </h3>
                </div>

                {/* <!-- searching in user panel  --> */}
                <div className="row pt-3  d-flex justify-content-between">
                    <div className="btn btn-success col-2 col-md-1">
                        <i className="bi bi-plus font5"></i>
                    </div>

                    <div className="form-group col-10 col-md-6 col-lg-4 "><input type="text"
                        className="form-control shadow" placeholder="جستجو" dir="rtl" /></div>


                </div>


            </div>
        
    )
}
export default Todos ; 
