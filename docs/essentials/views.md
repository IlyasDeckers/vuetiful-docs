# Views

## Introduction
Views are essentially logical groupings of pages, routes, and components that your application will use. This way it is easy to extract certain views to npm packages and reuse them in other projects.

## Creating views
In order to make the process of creating views as hassle free as possible, you can generate them on the fly whenever needed. When we run the following command we create a new view.
```bash
npm run new view

? Name: Posts
? Folder: posts
? Blocks: <script>, <template>, <style>

Loaded templates: _templates
       added: src/app/posts/Posts.vue
      inject: src/app/index.js
      inject: src/app/index.js
       added: src/app/posts/index.js
```
In `Posts.vue` we could display a collection of posts on a website. But maybe we would like to display the details of a post. In order to do this, you can run the `new view` command again, specify a component name and use the `posts` folder. This will register the component and its routes in your application.

```bash
npm run new view

? Name: Detail
? Folder: posts
? Blocks: <script>, <template>

Loaded templates: _templates
      inject: src/app/posts/index.js
      inject: src/app/posts/index.js
       added: src/app/posts/Detail.vue
      inject: src/app/index.js
      inject: src/app/index.js
     skipped: src/app/posts/index.js
```
