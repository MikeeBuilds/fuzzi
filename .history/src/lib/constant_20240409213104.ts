export const clients = [...new Array(10)].map((client, index) => ({
    href: `/${index + 1}.png`,
}))

export const products = [
    {
        title: 'Moonbeam',
        link: 'https://gomoonbean.com',
        thumbnail: '/p1'
    }
]