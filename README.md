AngularJS DateTime Picker
=========================

## Requirements

AngularJS v1.5.3+

### Browser support

Chrome | Firefox | IE | Opera | Safari
--- | --- | --- | --- | --- |
 ✔ | ✔ | IE10 + | ✔ | ✔ |

## Load


```html
<!DOCTYPE HTML>
<html>
<head>
  <link href="dist/css/ngDatepicker.min.css" rel="stylesheet" type="text/css" />
</head>
<body ng-app="app">
  <script src="dist/ngDatepicker.min.js"></script>
</body>
</html>
```

### Add module dependency

```js
angular.module('app', ['ngDatepicker']);
```

Call the directive wherever you want in your html page

```html
<datepicker ng-model="defaultDate"></datepicker>
```

## DOC

Option | Type | Default | Description
------------- | ------------- | ------------- | -------------
ng-model | String(new Date()) or Date Object | - | Set a default date to show and init datepicker
date-format | String | YYYY-MM-DD | Set the date format you want to use
date-min | String or Date Object | false | Set a minimum date limit
date-max | String or Date Object | false | Set a maximum date limit
date-disabled-weekdays | String or Date Object | false | Set a maximum date limit
time-picker | String(Array[1, 5, ...]) | false | Disable specific weekdays using an Array of weeks number
datepicker-visibility | Boolean | false | Set the datepicker visibility
allow-clear | String(Boolean) | false | Whether to show clear button
placeholder | String |  -| Set the input placeholder
required | String(Boolean) | false  | Set the input is required








