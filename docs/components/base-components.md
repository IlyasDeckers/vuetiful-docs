# Base components
## Cards
The card component is registered globaly, the style can be edited in `src/assets/scss/_cards.scss`.
```vue
<card title="Card Example">
  <template slot="card-header">
    test
  </template>
  body
  <template slot="card-footer">
    footer
  </template>
</card>
```
## Font Awesome

Font Awesome is registered globally in the icon component, this component takes two props. `icon` and `size`. If you have fa pro enabled, the behaviour of the component remains exactly the same.

```vue
// Solid library
<fa-icon :icon="['fas', 'user']" size="lg" />

// Regular library
<fa-icon :icon="['far', 'user']" size="lg" />

// Light library (pro only)
<fa-icon :icon="['fal', 'user']" size="lg" />

// Brands library
<fa-icon :icon="['fab', 'github']" size="lg" />
```