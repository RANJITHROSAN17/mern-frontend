'use client'
import { useSession, signIn, signOut } from "next-auth/react"
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

import {FaGoogle} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import { TemplateContext } from "next/dist/shared/lib/app-router-context";
import { url } from "inspector";


export default function Component() {
  const { data: session } = useSession()

  return (
    <div className="grid w-full h-screen bg-no-repeat bg-cover" style={{gridTemplateColumns:'4fr 1fr 1fr' ,backgroundImage:"url(/mern-frontend/background.svg)"} }>
    <div></div>
  <Card className="justify-center bg-white px-8 rounded-none" color="transparent" shadow={false} style={{height: '100%'}}>
  <Typography variant="h4" color="blue-gray">
    Log In
  </Typography>
  <Typography color="gray" className="mt-1 font-normal">
    Enter your details to log in.
  </Typography>
  <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
    <div className="mb-4 flex flex-col gap-6">
      <Input size="lg" label="Email" />
      <Input type="password" size="lg" label="Password" />
    </div>
  
    <Button className="mt-6" color="indigo" fullWidth>
      LogIn
    </Button>
    <view ></view>
    <div className="grid grid-cols-2">
      <Button className="my-2 mx-1 flex items-center"  onClick={() => signIn("google")}><FaGoogle color="white" size="25px"></FaGoogle>Log In With Google</Button>
      <Button color="gray" className="my-2 mx-1 flex items-center" onClick={() => signIn("github")}><FaGithub size="25px"></FaGithub>Log In With Github</Button>
    </div>
    <Typography color="171515" className="mt-4 text-center font-normal">
      Don't have an account?{" "}
      <a
        href="#"
        className="font-medium text-blue-500 transition-colors hover:text-blue-700"
      >
        Sign up
      </a>
    </Typography>
  </form>
</Card>
<div></div>

  </div>
  
  )
}