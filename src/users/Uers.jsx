import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Axios from 'axios'
import Alerts from '../Page404/AlertComp/Alert'
import 'sweetalert2/src/sweetalert2.scss'
import axios from 'axios';


const Users = () => {

    const navg = useNavigate();
    const [Users, setUsers] = useState([]);
    const [MainUsers, setMainUsers] = useState([]);
    const [UsersError, setUsersError] = useState([]);
    const [UsersSearch, setUsersSearch] = useState(false);
    const [FetchNumber, setFetchNumber] = useState(true);
    const SeachInpurt = useRef();

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success p-2 mx-2',
            cancelButton: 'btn btn-danger p-2 mx-2'
        },
        buttonsStyling: false
    })

    const HandelDelete = (itemid) => {


        swalWithBootstrapButtons.fire({
            title: '  آیا مطمعن هستید؟ ',
            text: "! امکان بازگشت اطلاعات وجود ندارد ",
            icon: 'warning',
            showCancelButton: true,
            showCloseButton: true,
            confirmButtonText: ' بله ',
            cancelButtonText: 'لغو عملیات ',
            reverseButtons: false
        }).then((result) => {
            if (result.isConfirmed) {
                axios(
                    {
                        method: "DELETE",
                        url: `https://jsonplaceholder.typicode.com/users/${itemid}`
                    }
                ).then(res => {
                    if (res.status == 200) {
                        let newUsers = Users.filter(u => { return u.id != itemid })
                        setUsers(newUsers)
                        swalWithBootstrapButtons.fire(
                            ' حذف شد ',
                            '  ! کاربر مورد نظر  ',
                            'success'
                        )
                    } else {
                        throw (res);
                    }
                }).catch((error) => {
                    swalWithBootstrapButtons.fire(
                        '  مشکلی پیش آمده ',
                        ' ! اینترنت شما قطع است',
                        'question'
                    )
                    setFetchNumber(true);
                    setUsers([]);
                    setUsersError(error);
                });

            } else if (

                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    '! عملیات لغو گردید ',
                    '',
                    'error'
                )
            }
        })

    }


    const FetchData = async () => {
        try {
            const res = await Axios.get("https://jsonplaceholder.typicode.com/users");
            if (res.status == 200) {
                setUsers(res.data)
                setMainUsers(res.data)
                setFetchNumber(false);
                setUsersError(false);

            } else {
                throw (res)
            }
        } catch (err) {
            setFetchNumber(false);
            setUsersError(err);

        }
    }


    const handelSearch = (e) => {
        // console.log(e.target.value);
        setUsers(MainUsers.filter((u) => {
            return (
                u.name.includes(e.target.value)
            )
        }));
        console.log(Users.length);
        if (Users.length == 0) {
            setUsersSearch(true)
        } else {
            setUsersSearch(false)

        }

    }

    const resatSearch = () => {
        SeachInpurt.current.value = "";
        setUsersSearch(false)
        setUsers(MainUsers);
    }


    useEffect(() => {
        if (FetchNumber) {
            FetchData();
        }
    }, [])


    return (
        <div className=" BoxTiels Dashboard rounded-3 px-4 unload">

            <div className='row  '>

                <div className='col-12'>
                    {/* <!-- header in user panel  --> */}
                    <div className=" d-flex-beatwean align-items-center align-content-center p-0 m-0 ">

                        <div className="IconSet pointer effect pt-0">
                            <a href="/Pages/AdminPanel.html" className="">
                                <span className="bi-box-arrow-left font7 bold items"></span>
                            </a>
                        </div>

                        <h3 className="font6 p-0 m-0 Fvazir mb-0">
                            مدیریت کاربران
                        </h3>

                    </div>
                </div>

                <div className='col-12'>
                    {/* <!-- searching in user panel  --> */}
                    <div className="row pt-3  d-flex justify-content-between ">

                        <Link to="/users/CrudUser" className="btn btn-dark font3  col-2 col-md-1 " state={{ a: 10, b: 12 }}>
                            <i className="bi bi-plus font5 text-white"></i>
                        </Link>

                        <div className="form-group col-9 col-md-6 col-lg-5 p-0"><input type="text"
                            className="form-control shadow" placeholder="جستجو" dir="rtl" onChange={handelSearch} ref={SeachInpurt} /></div>
                    </div>
                </div>
            </div>




            {/* <!-- table in user panel  --> */}
            <div className='row'>
                {
                    Users.length ? (<div className="table-responsive no-scroll mt-4 p-0 col-12">
                        <table className="table table-width-mobile" dir="rtl">
                            <thead className="thead-dark ">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">نام</th>
                                    <th scope="col">نام کاربری</th>
                                    <th scope="col">ایمیل</th>
                                    <th scope="col">عملیات</th>
                                </tr>
                            </thead>
                            <tbody className="bg-light">

                                {
                                    Users.map((user) => {
                                        return (<tr key={user.id}>
                                            <th scope="row">{user.id}</th>
                                            <td> {user.name}</td>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>
                                            <td className="text-center">

                                                <b className="bi bi-pen font5 text-success mx-2 pointer p-1"
                                                    onClick={() => {

                                                        return (
                                                            navg(`/users/CrudUser/${user.id}`)
                                                        )

                                                    }}></b>

                                                <b className="bi bi-trash-fill font5 text-danger mx-2 pointer p-1" onClick={() => { HandelDelete(user.id) }}></b>
                                            </td>
                                        </tr>)
                                    })
                                }


                            </tbody>
                        </table>
                    </div>) : UsersError.code == "ERR_NETWORK" ? (
                        <Alerts Error="In" method={FetchData} />
                    ) :

                        (
                            UsersSearch ? <Alerts Error="Search" Origin={resatSearch} /> : (
                                <>
                                    <Alerts />
                                </>
                            )

                        )



                }
            </div>
        </div>
    )
}

export default Users; 