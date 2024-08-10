'use client'
import React from "react";
import Image from "next/image";
import { SignUp } from "@clerk/nextjs";
import signup from '../../../../../public/sign-up.jpg';
import logo from '../../../../../public/PennyWiseLogo.png'

export default function SignupPage() {
  return (
    <div>
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section className="relative flex h-full items-center justify-center bg-gray-900 lg:col-span-5 xl:col-span-6">
            <Image
              alt="Sign up image"
              src={signup}
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 h-full w-full object-cover opacity-80"
            />

            <div className="relative text-center p-8 lg:text-left lg:p-12">
              <a className="block text-white" href="/PennyWise">
                <span className="sr-only">Home</span>
                <Image
                  src={logo}
                  alt="Logo"
                  width={56} // Set width for the logo
                  height={32} // Set height for the logo
                />
              </a>

              <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Welcome to <strong className="font-extrabold text-[rgb(76,222,161)]">PennyWise</strong> !
              </h2>

              <p className="mt-4 leading-relaxed text-white/90">
                Want some money to spare?
                Get on with a <span className="text-[rgb(76,222,161)]">well-organized</span> and <span className="text-[rgb(76,222,161)]">finance-wise</span> life with your financial tracking assistant, PennyWise!
              </p>
            </div>
          </section>

          <main
            className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
          >
            <SignUp />
          </main>
        </div>
      </section>
    </div>
  )
}
