# Toastr
Display non-blocking notifications
```js
this.$toastr.s('Validation success', 'Success!')
this.$toastr.w('Validation warning', 'Warning!')
this.$toastr.i('Validation info', 'Info!')
this.$toastr.e('Validation errors', 'Error!')
```

It is possible to pass in extra parameters.
```js
this.$toastr.e({
  msg: 'Your message',
  timeout: 10000, // set to 0 for infinit
  closeOnHover: true,
  position: 'toast-top-right',
  progressbar: false,
  preventDuplicates: true
}, 'Title!')
```