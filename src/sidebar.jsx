import React, { forwardRef } from "react";
import { ReactDOM } from "react";
import { NavLink } from "react-router-dom";

const SideBar = React.forwardRef((props,ref) => {

    return (
        <div className="col-5 col-md-3 col-lg-2  gigamenu" ref={ref}>
            <div className="RightGigiMenu h-sm-auto">
                {/* <!-- text head  --> */}
                <div className="d-none d-md-block">
                    <h1 className="h3 FSarbaz">پنل <span className="span-head">ادمین</span></h1>

                </div>


                {/* <!-- Avatar  --> */}
                <div className="AvatarFix">
                    <div className="w-50 ">
                        <img src='/Images/Avatar.jpg' className="img-respansive rounded-circle"
                            alt="" />
                    </div>
                    <div className="w-100 text-center pt-2">
                        <p className="font2">ابوالفضل کاربخش</p>
                    </div>
                </div>

                {/* <!-- buttons  --> */}
                <div className="AvatarFix sizeBtn pt-2 pb-2" >

                    <NavLink to="/"
                        className={`nav btn  btnRightNav IconSet effect   activeBtn`} role="button"
                        aria-pressed="false" onClick={props.close}>
                        <span className="font2 items w-75">داشبورد</span> <span
                            className="bi-house-fill ct font4 bold items"></span>
                    </NavLink>

                    <NavLink to="/Users" className="nav btn  btnRightNav IconSet effect activeBtn  "
                        role="button" aria-pressed="false" onClick={props.close}>
                        <span className="font2 w-75 items">کاربران </span> <span
                            className="bi-people-fill font4 ct bold items"></span>
                    </NavLink>

                    <NavLink to="/posts" className="nav btn  btnRightNav IconSet effect activeBtn  "
                        role="button" aria-pressed="false" onClick={props.close}>
                        <span className="font2 w-75 items">پست ها </span> <span
                            className="bi-postcard font4 ct bold items"></span>
                    </NavLink>
 
                    <NavLink to="/gallery" className="nav btn  btnRightNav IconSet effect activeBtn  "
                        role="button" aria-pressed="false" onClick={props.close}>
                        <span className="font2 w-75 items"> گالری</span> <span
                            className="bi-image font4 ct bold items"></span>
                    </NavLink>

                    <NavLink to="/Todo" className="nav btn  btnRightNav IconSet effect activeBtn  "
                        role="button" ariapressed="false" onClick={props.close}>
                        <span className="font2 w-75 items">کارها </span> <span
                            className="bi-person-workspace font4 ct bold items"></span>
                    </NavLink>



                </div>
                {/* <!-- exit btn  --> */}
                <div className="IconSet d-block d-md-none cl-gray pointer effect mt-3" onClick={props.method}>
                    <span className="bi-box-arrow-right font4 bold"></span><span className="font2">خروج</span>
                </div>

            </div>
        </div>
    )})

export default SideBar ;