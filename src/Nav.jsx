import { Link ,Outlet,useNavigate} from "react-router-dom"


function Nav() {

    const navigate = useNavigate()


    function rootHandle() {
      navigate("/landing")
    }
  
    function dashboardHandle() {
      navigate("/dashboard")
    }

  return (
    <div>
    <Link to={"/"} >Landing</Link>
    <Link to={"/dashboard"}>Dashboard</Link>
    <button onClick={dashboardHandle}>Dahboard</button>
    <button onClick={rootHandle}>Landing</button>

    <Outlet />
  </div>
  )
}

export default Nav