import Login from "./login/Login.jsx";
import CreateUser from "./CreateUser.jsx";

const Home = () => {
  return ( 
    <>
      <div className="flex flex-col justify-center h-screen space-y-6 bg-slate-300">
        <Login/>
        <CreateUser/>
      </div>
    </>
   );
}

export default Home;