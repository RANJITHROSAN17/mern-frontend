'use client'
import {useSession,signIn,signOut} from "next-auth/react";
import { UserCard } from "../components/UserCard";

export default function Login(){
    const {data : session } = useSession();

    if (session){
        return(
            <>
            <button onClick={()=>signOut()} type ="button" className="btn btn-primary">
            Sign Out of Google
            </button>
            <UserCard user={session?.user}/>
            </>
        )
    }else {
        return(
            <>
            <button onClick={()=>signIn()} type ="button" className="btn btn-primary">
            Sign In with Google
            </button>
            </>
        )

    }

}