export default {
    name: 'abouts',
    title: 'Abouts',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'namedesc',
            title: 'Name Description',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        {
            name: 'yearsofexperience',
            title: 'Years of Experience',
            type: 'string'
        },
        {
            name: 'completedprojects',
            title: 'Completed Projects',
            type: 'string'
        },
        {
            name: 'companiesworked',
            title: 'Companies Worked',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },

    ]
}