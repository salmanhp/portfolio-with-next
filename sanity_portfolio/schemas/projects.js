export default {
    name: 'projects',
    title: 'Projects',
    type: 'document',
    fields: [
        {
            name: 'projectname',
            title: 'Project Name',
            type: 'string'
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags'
            }
        },
        {
            name: 'sourcecode',
            title: 'Source Code',
            type: 'string'
        },
        {
            name: 'deploylink',
            title: 'Deploy Link',
            type: 'string'
        },
        {
            name: 'category',
            title: 'Category',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                list: [
                    { title: 'Web App', value: 'Web App' },
                    { title: 'Mobile App', value: 'Mobile App' },
                    { title: 'Python', value: 'Python' },
                ]
            }
        },
        {
            name: 'imgUrl',
            title: 'ImgUrl',
            type: 'image',
            options: {
                hotspot: true,
            },
        },

    ]
}

