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
    <li>Delete the branch remotely: <code>git push --delete https://github.com/carlomigueldy/carlomigueldy gh-pages</code></li>
    <li>Delete the branch locally: <code>git branch -D gh-pages</code></li>
    <li>Else,</li>
    <li>Create new branch with 'gh-pages' as its name: <code>git checkout -b gh-pages</code></li>
    <li>Create a file: <code>touch vue.config.js</code></li>
    <li>Open .gitignore file, then uncomment '/dist'</li>
    <li>Write: <code>module.exports = { publicPath: '/' } </code></li>
    <li><code>npm run build</code></li>
    <li><code>git add dist && git commit -m "Initial dist subtree commit"</code></li>
    <li><code>git subtree push --prefix dist origin gh-pages</code></li>
</ul>