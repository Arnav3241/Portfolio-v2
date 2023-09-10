"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// @ts-ignore
import Gist from "super-react-gist"

export default function Home() {
  return (
    <React.Fragment>
        <p className="flex w-full justify-center border-b h-[10vh] text-xl items-center">
          Get started editing on: &nbsp;
          <code className="font-mono font-bold"><Link href={"/admin"}>Admin Page</Link></code>
        </p>
          <br />
          <br />
          <br />
          <br />
        <div className='mx-[10vw]' >
          <p>Just a demo.</p>
          <Gist 
                className='gist'
                url='https://gist.github.com/Arnav3241/ab26aa8721450decc7d3cc676a85d5e5' 
                LoadingComponent={() => <div>Waiting for Gist...</div>} 
                />
          <br />
          <br />
        </div>
    </React.Fragment>
  )
}
