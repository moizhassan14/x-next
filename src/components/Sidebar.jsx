"use client";
import React, { useState, useEffect } from 'react'; 
import Link from 'next/link';
import { FaXTwitter } from 'react-icons/fa6';
import { HiHome } from 'react-icons/hi';
import { UserAuth } from "../app/context/AuthContext";

export default function Sidebar() {
  const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.error("Sign-in failed:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error("Sign-out failed:", error);
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50)); 
      setLoading(false);
    };
    checkAuthentication();
  }, []);
  console.log("user-->",user);

  return (
    <div className="flex flex-col gap-4 p-3">
      <Link href="/" passHref>
        <FaXTwitter className="cursor-pointer p-3 hover:bg-gray-100 rounded-full transition-all duration-200 w-16 h-16" />
      </Link>

      {/* Home Icon Link */}
      <Link href="/" passHref>
        <div className="flex items-center p-3 hover:bg-gray-100 rounded-full transition-all duration-200 gap-2 w-fit">
          <HiHome className="w-7 h-7" />
          <span className="font-bold hidden xl:inline">Home</span>
        </div>
      </Link>

      {!loading && !user ? (
        <button
          className='bg-blue-400 text-white rounded-full hover:brightness-95 transition-all duration-200 w-48 h-9 shadow-md hidden xl:inline font-semibold'
          onClick={handleSignIn}
        >
          Sign In
        </button>
      ) : (
        <button
          className='bg-blue-400 text-white rounded-full hover:brightness-95 transition-all duration-200 w-48 h-9 shadow-md hidden xl:inline font-semibold'
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      )}
    </div>
  );
}