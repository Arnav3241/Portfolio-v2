"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Gist from "super-react-gist"

export default function Home() {
  return (
    <React.Fragment>
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started editing on: &nbsp;
          <code className="font-mono font-bold"><Link href={"/admin"}>Admin Page</Link></code>
        </p>
        <div>
          <p>Just a demo.</p>
          <Gist url='https://gist.github.com/Arnav3241/ab26aa8721450decc7d3cc676a85d5e5'  />
          <br />
        </div>
    </React.Fragment>
  )
}
