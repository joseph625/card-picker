# Card Picker [![npm version](https://badge.fury.io/js/card-picker.svg)](https://badge.fury.io/js/card-picker)
 
The smooth and pretty slider you can use this package for making your website unique 😉.


**card picker**:
- has NO DEPENDENCIES :)
- is completely free and open source.



## Table of Contents

- [Demo](#preview)
- [Install](#install)
- [Usage](#usage)
- [Browser Support](#browser-support)
- [License](#license)


# preview
[Example code](https://codesandbox.io/s/card-picker-demo-7yh6lb?file=/src/App.js)

<img src="https://raw.githubusercontent.com/joseph625/card-picker/main/readme.gif" />

> Simple and awesome 😎



## Install

```sh
# Install card picker with npm
$ npm install --save card-picker

# If you use react version < 18
$ npm install --save card-picker --force

```
## Usage

In a React app, use the Slider component:  
`import { Slider } from 'card-picker'`

### Button props

| Name         | Description                   | Require
| -----------  | -----------                   | ---------
| infinity     | Boolean, default false        |    ✘
| height       | String, default '100%'        |    ✘         
| borderRadius | String, default '0px'         |    ✘
| previousButton | String, default arrow       |    ✘             
| nextButton | String, default arrow       |    ✘           


```html
#For previousButton and nextButton you can change default arrow for your svg, img, icon...etc
{
....
previousButton: '<img className="" src="" />',
nextButton: '<img className="" src="">'
}

```
  
## Browser Support

Available in latest browsers.


## License

[MIT](LICENSE) © [Yousif Jasm](https://www.yousifjasm.me/)
