import React, { useState } from 'react';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
const UsersAdd = () => {
    const Params = useParams(null);
    const Navigate = useNavigate();
    const [StateEditForm, setStateEditForm] = useState(true);
    const [data, setData] = useState({
        name: "",
        username: "",
        email: "",
        address: {
            street: "",
            city: "",
            suite: "",
            zipcode: ""
        }
    })

    const handelAdduser = (e) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success p-2 mx-2',
                cancelButton: 'btn btn-danger p-2 mx-2'
            },
            buttonsStyling: false
        })
        e.preventDefault();

        if(!Params.Id){
            axios.post("https://jsonplaceholder.typicode.com/users", data).then(
                swalWithBootstrapButtons.fire(
                    '  افزوده شد ',
                    '  ! کاربر مورد نظر  ',
                    'success'
                ),
                Navigate(-1)
                
            ).catch(() => {
                swalWithBootstrapButtons.fire(
                    '  مشکلی پیش آمده ',
                    ' ! اینترنت شما قطع است',
                    'question'
                ) 
                Navigate(-1)
    
            })
        }else{
            axios.put(`https://jsonplaceholder.typicode.com/users/${Params.Id}`, data).then(
                (res)=>{
                    swalWithBootstrapButtons.fire(
                        '   ویرایش شد ',
                        '  ! کاربر مورد نظر  ',
                        'success'
                    )
                    Navigate(-1)
                    console.log(res)
                }
            ).catch(() => {
                swalWithBootstrapButtons.fire(
                    '  مشکلی پیش آمده ',
                    ' ! اینترنت شما قطع است',
                    'question'
                ) 
                Navigate(-1)
    
            }) 
        }
    }

    useEffect(() => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success p-2 mx-2',
                cancelButton: 'btn btn-danger p-2 mx-2'
            },
            buttonsStyling: false
        })

        if (Params.Id) {
            if(StateEditForm){
                axios.get(`https://jsonplaceholder.typicode.com/users/${Params.Id}`).then(res => {
                    setData({
                        name: res.data.name,
                        username: res.data.username,
                        email: res.data.email,
                        address: {
                            street: res.data.address.street,
                            city: res.data.address.city,
                            suite: res.data.address.suite,
                            zipcode: res.data.address.zipcode
                        }
                    })
                    setStateEditForm(false);

                }).catch(() => {
                    swalWithBootstrapButtons.fire(
                        '  مشکلی پیش آمده ',
                        ' ! اینترنت شما قطع است',
                        'question'
                    )
                    setTimeout(() => {
                        return (
                            Navigate(-1)
                        )
                    }, 2000);
        
                })
               }
        }

    })

    return (
        <form action="" onSubmit={handelAdduser}>
            <div className=" BoxTiels Dashboard rounded-3 px-4 unload">

                {/* <!-- header in user panel  --> */}
                <div className=" d-flex-beatwean align-items-center align-content-center p-0 m-0">
                    <div className="IconSet pointer effect pt-0">

                        <span className="bi-box-arrow-left font7 bold items" onClick={() => {
                            return (
                                Navigate(-1)
                            )
                        }}></span>

                    </div>
                    <h3 className="font6 p-0 m-0 Fvazir mb-0">
                        {Params.Id ? "ویرایش کاربر" : "افزودن کاربر"}
                    </h3>
                </div>
                <hr />
                {/* <!-- searching in user panel  --> */}
                <div className="row pt-3 d-flex align-items-center  justify-content-between" dir='rtl'>

                    <div className='col-12 col-lg-6 mb-2 px-3'>
                        <div className='row'>
                            <label className='col-4 mb-2 p-0 pt-lg-2 mt-1 mt-lg-0 '>نام و نام خانوادگی :  </label>

                            <div className="form-group col-8 p-0">
                                <input type="text"
                                    className="form-control shadow" dir="rtl" value={data.name} onChange={(e) => { setData({ ...data, name: e.target.value }) }} />
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-lg-6 mb-3 px-3'>
                        <div className='row d-flex justify-content-end '>
                            <label className='col-4 col-lg-3 mb-2 px-0 pt-2'>نام کاربری :  </label>

                            <div className="form-group col-8 p-0">
                                <input type="text"
                                    className="form-control shadow" dir="rtl" value={data.username} onChange={(e) => { setData({ ...data, username: e.target.value }) }} />
                            </div>
                        </div>
                    </div>




                    <div className='col-12 mb-3'>
                        <div className='row d-flex justify-content-center'>
                            <div className="form-group col-6 p-1  g-2 p-0">
                                <input type="text"
                                    className="form-control shadow" dir="rtl" placeholder='شهر' value={data.address.city} onChange={(e) => { setData({ ...data, address: { ...data.address, city: e.target.value } }) }} />
                            </div>
                            <div className="form-group col-6  p-1  g-2 p-0">
                                <input type="text"
                                    className="form-control shadow" dir="rtl" placeholder='خیابان' value={data.address.street} onChange={(e) => { setData({ ...data, address: { ...data.address, street: e.target.value } }) }} />
                            </div>
                            <div className="form-group col-6 p-1  g-2 p-0">
                                <input type="text"
                                    className="form-control shadow" dir="rtl" placeholder='ادامه آدرس' value={data.address.suite} onChange={(e) => { setData({ ...data, address: { ...data.address, suite: e.target.value } }) }} />
                            </div>
                            <div className="form-group col-6 p-1  g-2 p-0">
                                <input type="text"
                                    className="form-control shadow" dir="rtl" placeholder='کد پستی' value={data.address.zipcode} onChange={(e) => { setData({ ...data, address: { ...data.address, zipcode: e.target.value } }) }} />
                            </div>
                        </div>
                    </div>

                    <div className='col-12  mb-3  justify-content-center '>
                        <div className='row'>

                            <label className='col-12 mb-2 px-0 pt-lg-2'>  {Params.Id ? "ایمیل شما :" : "ایمیل یادت نره ( : "} </label>

                            <div className="form-group col-12 col-lg-5 p-0">
                                <div className="input-group mb-2">
                                    <div className="input-group-append ">
                                        <div className="input-group-text setInp">@</div>
                                    </div>
                                    <input type="text"
                                        className="form-control shadow left-radius" dir="rtl" value={data.email} onChange={(e) => { setData({ ...data, email: e.target.value }) }} />

                                </div>
                            </div>


                            <div className='col-12 col-lg-7 d-flex justify-content-end px-1 mt-3 mt-lg-0 '>
                                <button className='btn btn-dark px-3 py-2 font2' type='submit'>
                                    {Params.Id ? "ویرایش" : "ذخیره"}

                                </button>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </form>

    )
}

export default UsersAdd; 