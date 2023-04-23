
import { useSession } from "next-auth/react"
import HomePage from "../pages/HomePage"
import RestrictedAccessPage from "../pages/RestrictedAccessPage"
const Home = () => {
    // const { data: session, status } = useSession();

    
    // if (status === "authenticated") {
        if(true){
        return <HomePage/>
      }
      return <RestrictedAccessPage/>
}

export default Home;