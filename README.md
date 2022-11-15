## Getting started 

[NPM](https://www.npmjs.com/package/charts-library-adv)

#### Latest Version
[Unpkg](https://unpkg.com/charts-library-adv@%5E*/dist/Generatechartsadv.js)

### How to use

Import it in the html head or with `npm i charts-library-adv`

Then initialize it after the DOM is loaded

```js
const chart = new Generatechartsadv()
```


### Init
The init method accept only this interface object

Interface
```ts
interface ObjAdv {
  result: string
  valueLabels: string[]
  realValues: string[] | number[]
  percValues: string[] | number[]
  type: string
  valueColors: string[]
  labels: string[]
}
```

Example
```js
const gmb = {
  result: 'ok',
  valueLabels: ['', '', '%', ' days', '%'],
  realValues: [4.7, 61.0, 16.0, 0.01, 80.0],
  percValues: [94, 100, 16, 100, 80],
  type: 'gmb-reviews',
  valueColors: ['green', 'green', 'red', 'green', 'orange'],
  labels: [
    'Satisfaccion',
    'Numero reseñas',
    'Respondidas',
    'Tiempo de respuesta',
    'Global',
  ],
}
```

In the html code the `data-type` has to be the same of the `type` properties inside the object to populate all the fields
The loading class is used to view the Skeleon whne the data is not yet retrived.

```html
<div class="chart-card loading" data-type="gmb-reviews">
	...
</div>
```


Pass this object to the init method

```js
chart.init(gmb)
```

To init another object pass it into init method

```js
chart.init(advertising)
```

if you want to reload a chart use the method reload() passing the new object

```js
chart.reload(newGmb)
```

