export default {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            }
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            }
        },
        {
          name: 'GitRepoURL',
          title: 'Github Repository URL',
          type: 'string',
        },
        {
          name: 'HostedURL',
          title: 'Hosted Site URL',
          type: 'string',
        },
        {
          name: 'body',
          title: 'Body',
          type: 'blockContent',
        },
    ]
}