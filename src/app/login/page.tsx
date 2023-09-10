"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import {axios} from "axios"; 

export default function LoginPage(){
    const [user, setUser] = React.useState({
        email: "",
        password: ""
    })

    const onLogin = async () => {

    }
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Login</h1>

            <hr />
            <label htmlFor="email">email</label>
            <input 
            className="p-1 border border-gray-300"
            type="text" 
            value={user.email}
            id="email" 
            placeholder="email" 
            onChange={(e) => setUser({...user, email: e.target.value})}
            />

            <hr />
            <label htmlFor="password">password</label>
            <input 
            className="p-1 border border-gray-300"
            type="password" 
            value={user.password}
            id="password" 
            placeholder="password" 
            onChange={(e) => setUser({...user, password: e.target.value})}
            />

            <hr />
            <button 
            className="p-1 border border-gray-400 rounded-lg my-4 focus:outline-none focus:border-gray-600" 
            onClick={onLogin}>
                Lohin
            </button>
            <Link href="/signup"
            className="">
                   Visit Sign Up Page
            </Link>

        </div>
    )
}