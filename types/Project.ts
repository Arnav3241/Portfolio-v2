import { PortableTextBlock } from "sanity";

export type Project = {
    title: string;
    slug: string;
    author: string;
    authorImg: string;
    publishedAt: string;
    type: string;
    typeImg: string;
    image: string;
    imageAlt: string;
    typeSlug: string;
    GitRepoURL: string;
    HostedURL: string;
    body: PortableTextBlock[];
    _id: string;
    _createdAt: string;
}