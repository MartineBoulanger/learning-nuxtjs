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

