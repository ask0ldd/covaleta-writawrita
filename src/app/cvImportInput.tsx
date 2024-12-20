'use client';

import { useRef } from "react";

export default function CVImportInput(){
    const fileInputRef = useRef<HTMLInputElement | null>(null)
    
    function handleUploadContainerClick(e : React.MouseEvent){
        e.preventDefault()
        e.stopPropagation()
        fileInputRef.current?.click()
    }

    return(
        <>
            <div onClick={handleUploadContainerClick}>aaa</div>
            <input ref={fileInputRef} type="file"></input>
        </>
    )
}