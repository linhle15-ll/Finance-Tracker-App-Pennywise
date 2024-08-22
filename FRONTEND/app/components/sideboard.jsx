// global.css
import React from "react"
import { usePathname } from 'next/navigation'
import Image from "next/image"
import Link from "next/link"
import logo from '../../public/PennyWiseLogo.png'
import { menuItems } from "../utils/menuItems"

import { 
    UserButton,  
    SignedOut,
    RedirectToSignIn,
} from "@clerk/nextjs";
import { useUser } from "@clerk/clerk-react";

const Sideboard = () => {
    const pathname = usePathname()
    const isNotDashboard = pathname !== '/dashboard'
    
    const { isSignedIn, user } = useUser();
    
    if (!isSignedIn) return <RedirectToSignIn />;
    
    return (
        <div className="font-poppins flex flex-col p-3 gap-12 mt-4 mb-5">
            <div className = "flex flex-row gap-5"> 
                <a href = {isNotDashboard ? "/dashboard" : "/"}  className="bg-white h-12 w-12 rounded-[100%]"> <Image src={logo} alt="PennyWise logo" /> </a>

                <div> 
                    <a href = {isNotDashboard ? "/dashboard" : "/"} className = "text-h7 font-900"> PennyWise </a> 
                    <div className = "font-poppins text-h8 font-500"> Hello, <br /> {user.firstName}!</div>
                </div>
            </div>
            <div className = "flex flex-col gap-2.5 relative text-h9 font-600">
                {menuItems.map((item) => {
                    return (
                        <Link key={item.id} className = "flex gap-2.5 cursor-pointer text-xl pt-3 pb-3 pl-2.5 hover:border-l-4 hover:border-mintGreen hover:bg-lightMintGreen transition-all duration-300 ease-in-out" href = {item.link}
                        > 
                            {item.icon}
                            {item.title}
                        </Link> 
                    )
                })}
            </div>
          
            <div className = "flex flex-row items-center gap-5"> 
                <UserButton /> <span className = "font-600 text-h9"> {user.fullName} </span>
            </div>
            
            <SignedOut>
                <RedirectToSignIn />
            </SignedOut>
        </div>
    )
}

export default Sideboard;