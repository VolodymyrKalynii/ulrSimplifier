"use client"
import React from 'react';
import { useParams } from 'next/navigation';

const Page = () => {
    const params = useParams()
 
    return (
        <div>Here is your long url: {params.slug}</div>
    )
};

export default Page;