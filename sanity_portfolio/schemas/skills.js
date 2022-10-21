export default {
    name: 'skills',
    title: 'Skills',
    type: 'document',
    fields: [
        {
            name: 'skillname',
            title: 'Skill Name',
            type: 'string'
        },
        {
            name: 'bgcolor',
            title: 'Bg Color',
            type: 'string'
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