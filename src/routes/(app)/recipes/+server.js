// import { host } from '../../../../config.js'

export const
    GET = () => new Response(JSON.stringify([
        {
            name: 'Мясные',
            href: '/recipes/meets',
            src: `${host}/images/recipes/1.png`
        },
        {
            name: 'Салаты',
            href: '/recipes/salads',
            src: `${host}/images/recipes/2.png`
        },
        {
            name: 'Гайды',
            href: '/recipes/guides',
            src: `${host}/images/recipes/3.png`
        },
        {
            name: 'Мастер класс',
            href: '/recipes/masterclass',
            src: `${host}/images/recipes/4.png`
        },
    ]), { status: 200 });