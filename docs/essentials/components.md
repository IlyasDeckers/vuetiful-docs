# components

## Base components
It is possible to register base components in your app under the `src/components` folder. Components prefixed with `_base-` will register globally automatically. This functionality is handled in `src/components/index.js`.
```js
// Registers base component globally
const requireComponent = require.context('.', false, /_base-[\w-]+\.vue$/)
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/_base/, '').replace(/\.\w+$/, ''))
  )

  Vue.component(componentName, componentConfig.default || componentConfig)
})
```
## Creating components
```bash
npm run new component
```
### Creating base components
When running the `new component` command you can prefix the component name with `base-`. This will register the base component globally as described [here](#base-components).
```bash
? Name: base-test
? Blocks: <script>

Loaded templates: _templates
  added: src/components/_base-test.vue
```
