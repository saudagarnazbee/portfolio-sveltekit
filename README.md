## My portfolio website :

- Github page : https://saudagarnazbee.github.io/portfolio-sveltekit/
- fly.io : https://nazrin.fly.dev/

# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm init svelte

# create a new project in my-app
npm init svelte my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

If you have prerendering with super secret ($env/dynamic/private = process.env):

```bash
SUPER_SECRET=xxx npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Deploy config

Configuration `svelte.config.js` file (using `adapter-static`):

- Deploy to `github page` example :

```js
const config = {
  kit: {
    adapter: adapterStatic({
      // add paths configuration here
      paths: {
          base: dev ? '' : '/portfolio-sveltekit'
      },
  }
};
```

- Deploy to `fly.io` example :

```js
const config = {
  kit: {
    adapter: adapterStatic({
      // remove paths configuration
      // paths: {
      //   base: dev ? '' : '/portfolio-sveltekit'
      // },
  }
};
```
