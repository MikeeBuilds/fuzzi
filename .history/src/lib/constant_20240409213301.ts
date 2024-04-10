export const clients = [...new Array(10)].map((client, index) => ({
    href: `/${index + 1}.png`,
}))

export const products = [
    {
        title: 'Moonbeam',
        link: 'https://gomoonbean.com',
        thumbnail: '/p1.png',
    },
    {
        title: 'Cursor',
        link: 'https://cursor.so',
        thumbnail: '/p2.png',
    },
    {
        title: 'Rogue',
        link: 'https://userogue.com',
        thumbnail: '/p3.png',
    },
    {
        title: 'Editorai'
    }
]