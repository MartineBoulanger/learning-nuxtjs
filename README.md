# Master Nuxt.js

Code from the course Master Nuxt.js on Udemy

## It's free!! Grab it while you can!

You can clone this repo or fork it if you want, or just use it for looking up things when you're doing the Master Nuxt.js course on Udemy. The teacher from the course has the code available on his GitHub as well, but you will notice that his code is out of date now. Nuxt2 had several updates already and soon Nuxt3 will be out. Hopefully my code can help you solving your issues that you will get (and believe me you will, and you will get frustrated), I just want to help you out with this, taking somewhat of your frustrations away and especially helping you not to waste too much time on looking stuff up instead of following the course.

### Environment Variables

You need to make a the file .env in the root folder from your project.
But I made a .env.sample file wherein I've written the environment variable keys already.
You can either copy this file or rename it to .env and then put in the values of your own BD/weather API token.

### Other notes

I haven't made a vuetify.js file in the plugins folder because this is not needed.
When you create a nuxt app, and you choose for Vuetify, the option vuetify will appear in the nuxt.config.js.
You don't have to make a plugin for this.
I did make a server folder with an index.js file, though I've been writing this a little differently because I had problems with getting it to work properly when I followed the teacher's lesson about this. Also, now, with the newer version of Nuxt, I don't even think you have to make a server file. Should you decide to make a server file, then don't forget to change the scripts in the package.json file:

```
"scripts": {
  "dev": "cross-env NODE_ENV=development nodemon server/index.js --watch server",
  "build": "nuxt build",
  "start": "cross-env NODE_ENV=production node server/index.js",
}
```

Also, don't forget to install express, should you choose for the server file.
This is because it won't install expres by default and you can't choose it either when creating the app.

```
yarn add express
```

And install nodemon if you're making the server file:

```
yarn add nodemon
```

# nuxt-app

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
