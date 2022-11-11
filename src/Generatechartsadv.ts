// Version 1.0.4

import { CountUp } from 'countup.js'

interface ArrayAdv {
  result: string
  valueLabels: string[]
  realValues: string[] | number[]
  percValues: string[] | number[]
  type: string
  valueColors: string[]
  labels: string[]
}
class Generatechartsadv {
  arrayAdv!: ArrayAdv;
  chartCard: Element[];
  typedCard!: Element[];
  header!: Element;
  circle!: HTMLInputElement | HTMLBaseElement | any;
  percValue!: any;
  contentRow!: Element[];
  barContent!: Element | any;
  percValueText: any;
  textValue: any;

  constructor(className: string){
    this.chartCard =  [...document.querySelectorAll(`.${className}`)]
  }

  init(array: ArrayAdv){
    this.arrayAdv = array;
    this.typedCard = this.chartCard.filter(
      (elem: any)  => elem.dataset['type'] === array.type
    ) 

    this.iterateMainElement(this.typedCard)
  }

  iterateMainElement(cards: Element[]){
    cards.forEach((el:any, index:number)=>{
      this.header = el.querySelector('.chart-card__header')
      this.circle = el.querySelector('.circle-chart__circle')

      this.header.classList.add(
        this.arrayAdv.valueColors[this.arrayAdv.valueColors.length - 1]
      )

      this.circle.style['stroke-dasharray'] = `${
        this.arrayAdv.percValues[this.arrayAdv.percValues.length - 1]
      } 100`

      let previousPercValue = document.getElementById(`mainValuePerc-${this.arrayAdv.type}-${index}`)
      let value = `${this.arrayAdv.realValues[this.arrayAdv.realValues.length -1]}${this.arrayAdv.valueLabels[this.arrayAdv.valueLabels.length - 1]}`
  
      if (previousPercValue?.innerHTML !== value) {

        this.percValue = new CountUp(
          `mainValuePerc-${this.arrayAdv.type}-${index}`,
          this.arrayAdv.realValues[this.arrayAdv.realValues.length - 1],
          {
            suffix:
            this.arrayAdv.valueLabels[this.arrayAdv.valueLabels.length - 1],
          }
          )
          
          this.percValue.start()
        }
          
      this.contentRow = [...el.querySelectorAll('.content__row')]

      this.iterateRow(this.contentRow, index)

      el.classList.add('active')
    })
  }

  iterateRow(contentRow: Element[], index: number){
    contentRow.forEach((row, indexRow) => {
      this.barContent = row.querySelector('.bar__content')
      this.barContent.classList.add(this.arrayAdv.valueColors[indexRow])
      this.barContent.style.width = `${this.arrayAdv.percValues[indexRow]}%`
      let previousValue = document.getElementById(`perc-value-${this.arrayAdv.type}-${index}-row-${indexRow}`)

      if (previousValue?.innerHTML !==  `${this.arrayAdv.realValues[indexRow]}${this.arrayAdv.valueLabels[indexRow]}`) {

        this.percValueText = new CountUp(
          `perc-value-${this.arrayAdv.type}-${index}-row-${indexRow}`,
          this.arrayAdv.realValues[indexRow],
          {
            suffix: this.arrayAdv.valueLabels[indexRow],
          }
          )
          
          this.percValueText.start()
        }

      this.textValue = document.getElementById(
        `perc-value-${this.arrayAdv.type}-${index}-row-${indexRow}`
        )
        this.textValue.classList.add(`${this.arrayAdv.valueColors[indexRow]}-text`)
      })
    }
  }

  export default Generatechartsadv
