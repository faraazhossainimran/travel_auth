import { useContext } from "react"
import NavBar from "../Shared/NavBar/NavBar"
import { AuthContext } from "../../providers/AuthProviders"

const Home = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <NavBar></NavBar>
            this is home
            {user && <p>User is logged in now</p>}
        </div>
    )
}

export default Home