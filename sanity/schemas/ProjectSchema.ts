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
          name: 'author',
          title: 'Author',
          type: 'reference',
          to: {type: 'author'},
        },
        {
          name: 'publishedAt',
          title: 'Published at',
          type: 'datetime',
        },
        {
          name: 'projectType',
          title: 'Project Type',
          type: 'reference',
          to: {type: 'projectType'},
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