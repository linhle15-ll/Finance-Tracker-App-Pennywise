// global.css
import React from "react"
import { usePathname } from 'next/navigation'
import Image from "next/image"
import Link from "next/link"
import logo from '../../public/PennyWiseLogo.png'
import { Dashboard, Budget, Income, Expense} from "../utils/icons"
import { 
    UserButton,  
    SignedOut,
    RedirectToSignIn,
} from "@clerk/nextjs";
import { useUser } from "@clerk/clerk-react";

export const menuItems = [
    {
        id: 1,
        title: 'Dashboard',
        icon: Dashboard,
        link: '/PennyWise/dashboard'
    },
    {
        id: 2,
        title: 'Income',
        icon: Income,
        link: '/PennyWise/income'
    },
    {
        id: 3,
        title: 'Expense',
        icon: Expense,
        link: '/PennyWise/expense'
    },
    {
        id: 4,
        title: 'Budget',
        icon: Budget,
        link: '/PennyWise/budget'
    },
]

const Sideboard = () => {
    const pathname = usePathname()
    const isNotDashboard = pathname !== '/PennyWise/dashboard'
    
    const { isSignedIn, user } = useUser();
    
    if (!isSignedIn) return <RedirectToSignIn />;
    
    return (
        <div className="sideBoard">
            <div className = "logoContainer"> 
                <a href = {isNotDashboard ? "/PennyWise/dashboard" : "/PennyWise"}  className = "logo"> <Image src={logo} alt="PennyWise logo" /> </a>

                <div> 
                    <a href = {isNotDashboard ? "/PennyWise/dashboard" : "/PennyWise"} className = "PennyWise"> PennyWise </a> 
                    <div className = "hello"> Hello, <br /> {user.firstName}!</div>
                </div>
            </div>
            <div className = "memuItems">
                {menuItems.map((item) => {
                    return (
                        <Link key={item.id} className = "menuItem" href = {item.link}> 
                            {item.icon}
                            {item.title}
                        </Link>
                    )
                })}
            </div>
            <div style = {{display: "flex", flexDirection: "row", alignItems: "center", gap: "10px"}}> 
                <UserButton /> <span style = {{fontWeight: "600", fontSize: "20px"}}> {user.fullName} </span>
            </div>
            
            <SignedOut>
                <RedirectToSignIn />
            </SignedOut>
        </div>
    )
}

export default Sideboard;