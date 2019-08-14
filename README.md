# carlomigueldy

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### How I Deploy 
My reference from <a href="https://medium.com/@Roli_Dori/deploy-vue-cli-3-project-to-github-pages-ebeda0705fbd">Medium</a> 
<ul>
    <li>If there is an existing gh-pages branch, delete it locally and remotely.</li>
    <li>git push --delete https://github.com/carlomigueldy/carlomigueldy gh-pages</li>
    <li>git branch -D gh-pages</li>
    <li>Else,</li>
    <li>git checkout -b gh-pages</li>
    <li>touch vue.config.js</li>
    <li><code>module.exports = { publicPath: '/' } </code></li>
    <li>npm run build</li>
    <li>git add dist && git commit -m "Initial dist subtree commit"</li>
    <li>git subtree push --prefix dist origin gh-pages</li>
</ul>