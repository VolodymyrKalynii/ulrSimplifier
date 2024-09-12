'use client'
import React, { useState } from 'react';
import { Form } from '@/ui/Form';

export const UrlSimplifier = () => {
    const [shortenUrl, setShortenUrl] = useState<string>('');

    const handldeSetShortenUrl = (url: string) => {
        setShortenUrl(url)
    }

    return (
        <div>
            <Form setShortenUrl={handldeSetShortenUrl}/>
            <div>
                {shortenUrl && <a href={shortenUrl}>Go to shortUrl</a>}  
            </div>
        </div>
    );
}