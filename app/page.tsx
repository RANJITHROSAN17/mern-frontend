
// import { useSession } from "next-auth/react"
import HomePage from "./components/HomePage"
import RestrictedAccessPage from "./components/RestrictedAccessPage"
import "../styles/globals.css"
const Home = () => {
    // const { data: session, status } = useSession();

    
    // if (status === "authenticated") {
        if(true){
        return <HomePage/>
      }
      return <RestrictedAccessPage/>
}

export default Home;