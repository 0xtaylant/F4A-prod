"use client";

import { IoMdClose} from "react-icons/io" 
import React, { useEffect, useState } from "react";
import { StringMappingType } from "typescript";


import Modal from "@/components/Modal";
import AuthModal from "@/components/AuthModal";



const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, [])

    if(!isMounted) {
        return null
    }
    
    return (
        
        <>
            <AuthModal/>
        </>

    );
}

export default ModalProvider;