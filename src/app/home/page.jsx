"use client"
import axios from 'axios';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useState, useEffect } from "react";
import Nav from "../components/nav/Nav";
import Card from "../components/card";
//import { RiHeartLine,RiHeartFill } from "react-icons/ri";
//<RiHeartLine /> <RiHeartFill />


export default function Home() { 
  


  return (
    <div>
      <Nav/>
      <div>
        <Card />
      </div>
    </div>
);
};

//
