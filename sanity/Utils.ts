import { createClient, groq } from 'next-sanity';

export async function getProjects() {
    const client = createClient({
        projectId: "omhgxsgj",
        dataset: "production",
        apiVersion: "2021-10-21",
        useCdn: false,
    })

    return client.fetch(
        groq`*[_type == "project"]{
            title,
            "slug": slug.current,
            "author": author->name,
            "authorImg": author->image.asset->url,
            publishedAt,
            "type": projectType->title,
            "typeImg": projectType->image.asset->url,
            "image": image.asset->url,
            "imageAlt": image->alt,
            "typeSlug": projectType->slug.current,
            GitRepoURL,
            HostedURL,
            body,
            _id,
            _createdAt,
        }`,
    )
}