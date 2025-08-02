"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const shorten = () => {
    const [url, seturl] = useState()
    const [shorturl, setshorturl] = useState()
    const [generated, setGenerated] = useState("")
    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setGenerated(`${process.env.NEXT_PUBLIC_BASE_URL}/${shorturl}`)
                seturl("")
                setshorturl("")
                console.log(result)
                alert(result.message)
            })
            .catch((error) => console.error(error));
    }


    return (
        <div className='mx-auto max-w-lg bg-green-200 my-16 p-8 rounded-lg flex flex-col gap-4'>
            <h1 className='font-bold text-2xl '>Generate your Short URLs</h1>
            <div className='flex flex-col gap-2'>
                <input type="text"
                    value={url}
                    className='px-4 py-2  bg-amber-50  focus:outline-green-500 rounded-md'
                    placeholder='Enter your URL'
                    onChange={e => { seturl(e.target.value) }} />
                <input type="text"
                    value={shorturl}
                    className='px-4 py-2 bg-amber-50 focus:outline-green-500 rounded-md'
                    placeholder='Enter your prefered short URL Text' onChange={e => { setshorturl(e.target.value) }} />
                <button onClick={generate} className='bg-green-700 rounded-xl text-green-50 hover:bg-green-600 p-3 py-1 my-5 font-bold cursor-pointer shadow-lg'>Gererate</button>
            </div>
            {generated && <> <span className='font-bold text-lg '>Your Link </span> <code> <Link target="_black" href={generated}>{generated}</Link> 
            </code></>}
        </div>
    )
}

export default shorten