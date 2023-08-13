import React, { useState } from "react";
import { Route, Routes , Navigate} from "react-router-dom";
import Galleys from "./gallery/Galleys";
import Posts from "./posts/Posts";
import Todos from "./todos/Todos";
import Uers from "./users/Uers";
import UsersAdd from "./users/CrudUser";
import Page404 from "./Page404/Page404";

function Main() {

  const [IsUser,SetIsUser] = useState(true);

  return (
    <>
      <div className="col-12 col-md-9 col-lg-10 mainContent px-2" style={{ overflow: 'auto' }}>

        <div className=" mio unload">

          <Routes>

            {/* <Route path="/" element={IsUser ? <Navigate replace to={"/Users"} /> : <Navigate replace to={"/posts"} />} /> */}
            <Route path="/users" element={<Uers />} />
            <Route path="/users/CrudUser" element={<UsersAdd />} >
              <Route path=":Id" />
            </Route>
            <Route path="/gallery" element={<Galleys />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/Todo" element={<Todos />} />
            <Route path="*"  element={<Page404 />} />
            
          </Routes>

        </div>
      </div>
    </>
  );


}

export default Main;
