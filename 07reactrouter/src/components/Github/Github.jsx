// import { useState, useEffect } from "react";
import React from 'react';
import { useLoaderData } from "react-router-dom";

function Github(){
    const data = useLoaderData()
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/prateekmishra1303')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])

 return(
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            Github followers: {data?.followers}
            <div>
            <img src = {data?.avatar_url} alt="Git picture" width = {300}/>
        </div>
        </div>
    );
}


export default Github

export const githubInfoLoader = async() => {
    const response = await fetch ('https://api.github.com/users/prateekmishra1303')
    return response.json()
}