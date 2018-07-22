# Installation

## Configuration

### Environment
You can set your `API_URL` & `PUSHER` variables in the config folder. Edit the `dev.env.js` and `prod.env.dev`.
```js
 module.exports = {
  NODE_ENV: '"production"',
  API_URL: '"http://127.0.0.1:8000"',
  PUSHER: {
    ENABLED: false, // Set to true to use Pusher
    KEY: '"xxxxxx"',
    CLUSTER: '"xx"'
  },
  FA_PRO: false, // Set to true if you have a valid fa license
}
```
### Font Awesome Pro
Create a .npmrc file in the project root and add the following line with your license key.
```bash
@fortawesome:registry=https://npm.fontawesome.com/{{ your key }}
```
## Local development

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```

## Mobile development
WIP

This will initialize an Cordova project under the mobile folder. The build files of your Vue project will be linked to the webroot of the Cordova project.

> Disclaimer: This is still a WIP, a lot of manual intervention is needed on the cordova side.
```bash
# Init Cordova
npm run mobile

cd mobile

# Run Cordova
cordova run android
```
## Production
### Build
```js
npm run build
```
### Docker
```bash
# Build your project
npm run build

# Build the docker image
docker build -t vuetiful .

# Run the docker container
docker run -d -p 80:80 vuetiful
```