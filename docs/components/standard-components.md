# Other
## Buttons
There is a default styling available for buttons under `src/assets/scss/_buttons.scss` you can edit this to edit the style and behaviour of your buttons.
```vue
<button type="submit" class="btn btn-success">Success</button>
```

```scss
.btn {
  @apply .h-10 .rounded .px-4 .inline-flex .items-center .justify-center;
  transition: all 250ms;

  &:hover {
    @apply .shadow;
    transform: translateY(-3px);
  }
}

.btn-success {
  @apply .bg-green .text-white;

  &:hover {
    @apply bg-green-light;
  }
}

```