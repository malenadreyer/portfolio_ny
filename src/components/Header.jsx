"use client";
import Link from "next/link";
import React, { useState } from "react";

function Header() {


  return (
    <header className="p-6 bg-[#FEFEF2] text-[#343067] justify-items-center z-1">
      <nav className="flex justify-between items-center">
        
        <div className="flex space-x-6 items-center">
          <Link href="/" className="hover:text-gray-400 font-camelia">
            Frontpage
          </Link>
      
            <Link href="/projects" className="hover:text-gray-400 font-camelia">
              Project
        </Link>
<Link href="/aboutme" className="hover:text-gray-400 font-camelia">
              About me
              </Link>
              <Link href="/aboutme" className="hover:text-gray-400 font-camelia">
              Pinterest
              </Link>
            
    
          </div>
      </nav>
    </header>
  );
}

export default Header;
