import React from "react";
import Link from "next/link";

export default function AddNew () {
    return (
        <Link 
        className="border-dashed flex justify-center items-center border-4 border-black rounded-lg my-4 mx-4 size-80" 
        href="/AddPost">
           Add New
        </Link>
    );
}