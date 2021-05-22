## Pokedex GraphQL Site

1.  **Welome**

    This is a simple site using GatsbyJS that consumes a GraphQL endpoint to display a list of Pokemon. The list can be filtered by name and each entry in the list can be opened to get more detail around the specific Pokemon.

    The documentation for the tech and detail around any choices can be found below.

    [Live Demo](https://pokedex.davidvanzyl.io)

2.  **Start developing.**

    Navigate into the root directory and start it up.

    ```shell
    cd pokedex/
    yarn install
    npm run develop
    ```

    Your site is now running at http://localhost:8000!

    To build the site, navigate into the root directory and run:

    ```shell
    cd pokedex/
    npm run build
    ```

3.  **Built With**

    - [Gatsby](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [graphql-pokeapi](https://graphql-pokemon2.vercel.app)

      Using GraphQL over Rest here means all required data is passed directly into the page context object in a single request, where property relationships are clearly defined in the request without the need for data manipulation leaving the overall method of fetching more scalable and easier to understand.

    - [React-Virtualized](https://github.com/bvaughn/react-virtualized)

      Since the site is static all data is fetched at build time and so is held in memory regardless. Pagination might be superior here if that were not the case since only the items which were visable would need to be held in memory and loaded. By using a virtual list, we stil only render what is visable but make the navigation of the list seamless.

      One consideration here is that of course not all the list items and so not all the page links would render which would affect page crawlers/SEO. It's possible to detect crawls with userAgent and deliver a full render of the list.

### Author

[David van Zyl](https://github.com/davidvanzyl)
