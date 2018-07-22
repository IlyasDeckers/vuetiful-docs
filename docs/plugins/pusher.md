# Pusher
If you have enabled pusher in your environment you can subscribe to channels and listen for events. Inside your components, you just need to access the $pusher object.

```js
// Subscribe to a channel
const channel = this.$pusher.subscribe('my-channel')

// Listen for an event
channel.bind('my-event', async event => {
  console.log(event)
})

// Unsubscribe
this.$pusher.unsubscribe('my-channel');
```