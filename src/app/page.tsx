import Link from 'next/link'
import React from 'react'
import { getProjects } from '../../sanity/Utils'
import { Project } from '../../types/Project'
import Image from 'next/image'
import { PortableText } from "@portabletext/react"


export default async function Home() {
  const Projects = await getProjects()
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
        <br />
        <br />
        <h1 className='px-10'>Here are some projects:</h1>
        <br />
        <div className="px-10">
          {Projects.map((project: Project) => (
            <div className="" key={project._id}>
              <h1 className="text-4xl">
                {project.title}<br />
                {/* <Image src={project.image} width={500} height={500} alt={project.title} /> */}
              </h1>
              <PortableText value={project.body} />
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  )
}

