import React from "react";
import { currentUser } from '@clerk/nextjs/server';
import { UserButton } from "@clerk/nextjs";

export const Dashboard = async () => {
    const user = await currentUser();

    return (
        <section
            className="relative bg-[url('https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=1770&q=80')] bg-cover bg-center bg-no-repeat h-screen"
        >
            <div className="absolute top-4 right-4">
                <UserButton
                    className="p-2 bg-white rounded-full shadow-md ring-1 ring-gray-300"
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/50 to-transparent"></div>

            <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                <div className="max-w-xl text-left">
                    <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
                        Want some money to <span className="block text-[rgb(76,222,161)]">spare?</span>
                        You've got <strong className="block font-extrabold text-[rgb(76,222,161)] text-4xl sm:text-6xl mt-4">PennyWise. </strong>
                    </h1>

                    <p className="mt-4 max-w-lg text-white sm:text-xl">
                        Get on with a well-organized and finance-wise life with your financial tracking assistant, PennyWise!
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        
                        <a
                            href={user ? "/PennyWise/dashboard" : "/PennyWise/sign-in"}
                            className="block w-full rounded bg-[rgb(76,222,161)] px-12 py-3 text-sm font-medium text-gray-900 shadow hover:bg-[rgb(76,222,161,0.8)] focus:outline-none focus:ring active:bg-[rgb(76,222,161)] sm:w-auto"
                        >
                            Get Started
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
