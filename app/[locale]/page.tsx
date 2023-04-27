
// import { useSession } from "next-auth/react"
import HomePage from "@/components/Shared/HomePage"
import RestrictedAccessPage from "@/components/Shared/RestrictedAccessPage"
import "@/styles/globals.css"
const Home = () => {
    // const { data: session, status } = useSession();

    
    // if (status === "authenticated") {
        if(true){
        return <HomePage/>
      }
      return <RestrictedAccessPage/>
}

export default Home;