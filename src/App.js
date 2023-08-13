import React, { useEffect, useRef } from "react";
import { ReactDOM } from "react";
import Main from "./main";
import SideBar from "./sidebar";

import { Route , BrowserRouter , Routes } from 'react-router-dom';
import "../src/Assets/AdminPanel.css"
import "../src/Assets/Library/bootstrap.css"
import "../src/Assets/Library/bootstrap-icons.css"

function App() {

    const Tag = useRef(null);
    const TagFotherGiga = useRef(null);

    const GigaMenu = () => {
        if (Tag.current.style.cssText == "width: 100% !important;") {

            Tag.current.classList.toggle("width-100");
            TagFotherGiga.current.classList.toggle("width-100");
            document.querySelector("body").classList.toggle("overFlowNone");

        } else {
            Tag.current.classList.toggle("width-100");
            TagFotherGiga.current.classList.toggle("width-100");
            document.querySelector("body").classList.toggle("overFlowNone");
        }
    }

    const GigiClose = () => {
        Tag.current.classList.remove("width-100");
        TagFotherGiga.current.classList.remove("width-100");
        document.querySelector("body").classList.remove("overFlowNone");
    }




    return (
        <BrowserRouter >
            <>
                {/* <!-- giga open dark--> */}
                <div className="GigaMenuFother animatinLoad" ref={TagFotherGiga} onClick={GigaMenu}></div>


                <div className="panelMobilTopNav col-12  d-md-none overflow-hidden animatinLoad">
                    <div >
                        <span className="IconSet bi-filter-left activeBtn font9 bold p-3 rounded effect" onClick={GigaMenu}></span>
                    </div>

                    {/* <!-- text head  --> */}
                    <div>
                        <h1 className="h3 FSarbaz">پنل <span className="span-head">ادمین</span></h1>
                    </div>


                </div>

                <div className=" container-xl  CenterBox animatinLoad">

                    <div className="PanelCenter row m-0">
                        <Main />

                        <SideBar ref={Tag} method={GigaMenu} close={GigiClose} />
                    </div>
                </div>
            </>
        </BrowserRouter>

    );
}

export default App;
