export const
/** @type {import('./$types').PageLoad} */
    load = async ({ params }) => {
        // console.log(host)
        const
            response = await fetch(`${host}/recipes`),
            recipes = JSON.parse(await response.text());

        return {
            post: {
                title: recipes
            }
        }
    }