import { CountUp } from 'countup.js'

interface ObjAdv {
  result: string
  valueLabels: string[]
  realValues: string[] | number[]
  percValues: string[] | number[]
  type: string
  valueColors: string[]
  labels: string[]
  valueRangeColors: number[]
  format: string
}
class Generatechartsadv {
  objAdv!: ObjAdv;
  chartCard: Element[];
  typedCard!: Element[];
  header!: Element;
  circle!: HTMLInputElement | HTMLBaseElement | any;
  percValue!: any;
  contentRow!: Element[];
  barContent!: Element | any;
  percValueText: any;
  textValue: any;
  update: boolean;
  setLoading: boolean;

  constructor(){
    // @ts-ignore
    this.chartCard =  [...document.querySelectorAll(`.chart-card`)] 
    this.update = false
    this.setLoading = true
  }

  loading(loading: boolean, el?: HTMLElement | any){
    this.setLoading = loading 
    el.classList.contains('loading') ? el.classList.remove('loading') : null
  }

  init(obj: ObjAdv){
    this.objAdv = obj;
    this.typedCard = (this.chartCard as any | Element[]).filter(
      (elem: any)  => elem.dataset['type'] === obj.type
    ) 

    this.iterateMainElement(this.typedCard)
  }

  reload(obj: ObjAdv) {
    this.update = true;
    this.init(obj);
  }

  iterateMainElement(cards: Element[]){
    cards.forEach((el:any, index:number)=>{
      this.header = el.querySelector('.chart-card__header')
      this.loading(false, el)

      let status = this.objAdv.percValues[this.objAdv.percValues.length - 1] >= 0 && this.objAdv.percValues[this.objAdv.percValues.length - 1] < this.objAdv.valueRangeColors[0] ? 'red' : this.objAdv.percValues[this.objAdv.percValues.length - 1] >= this.objAdv.valueRangeColors[0] && this.objAdv.percValues[this.objAdv.percValues.length - 1] < this.objAdv.valueRangeColors[1] ? 'orange' : 'green'
      if (this.objAdv.format === 'type1') {
        
        this.circle = el.querySelector('.circle-chart__circle')
        
        
        if (this.header) {
          
          this.header.classList.contains('red') && this.header.classList.remove('red')
          this.header.classList.contains('orange') && this.header.classList.remove('orange')
          this.header.classList.contains('green') && this.header.classList.remove('green')
          
          this.header.classList.add(
            status
            )
          }
          
          this.circle.style['stroke-dasharray'] = `${
            this.objAdv.percValues[this.objAdv.percValues.length - 1]
          } 100`
          
          let previousPercValue = document.getElementById(`mainValuePerc-${this.objAdv.type}-${index}`)
          let value = `${this.objAdv.realValues[this.objAdv.realValues.length -1]}${this.objAdv.valueLabels[this.objAdv.valueLabels.length - 1]}`
          
          if (previousPercValue?.innerHTML !== value) {
            this.percValue = new CountUp(
              `mainValuePerc-${this.objAdv.type}-${index}`,
              this.objAdv.realValues[this.objAdv.realValues.length - 1] as number,
              {
                suffix:
                this.objAdv.valueLabels[this.objAdv.valueLabels.length - 1],
              }
              )
              if (this.update) { 
                this.percValue.update(this.objAdv.realValues[this.objAdv.realValues.length - 1])
              } else {
                this.percValue.start()
              }
            } 
          }

      if (this.objAdv.format === 'type2') {
        let rowType: any = document.querySelector(`[data-type=${this.objAdv.type}]`)
        let bullet: any = rowType.querySelectorAll('.overlay__full')
        let valuePerc = this.objAdv.percValues[this.objAdv.percValues.length - 1] as number

        this.loading(false, rowType)

          
          bullet.forEach((el: any)=>{
            el.style.background = `${status}`
          })
          if (valuePerc > 0 && valuePerc <20) {
            bullet[0].style.width = `${(valuePerc / 2) * 10}%`
          } 
          if (valuePerc >= 20 && valuePerc <40) {
            bullet[0].style.width = '100%'
            setTimeout(()=>{
              bullet[1].style.width = `${((valuePerc - 20) / 2) * 10}%`
            }, 200)
          } 
          if (valuePerc >= 40 && valuePerc <60) {
            bullet[0].style.width = `100%`
            setTimeout(()=>{
              bullet[1].style.width = `100%`
            },200)
            setTimeout(()=>{
              bullet[2].style.width = `${((valuePerc - 40) / 2) * 10}%`
            }, 400)
          } 
          if (valuePerc >= 60 && valuePerc <80) {
            bullet[0].style.width = `100%`
            setTimeout(()=>{
              bullet[1].style.width = `100%`
            },200)
            setTimeout(()=>{
              bullet[2].style.width = `100%`
            },400)
            setTimeout(()=>{
              bullet[3].style.width = `${((valuePerc - 60) / 2) * 10}%`
            }, 600)
          } 
          if (valuePerc >= 80) {
            bullet[0].style.width = `100%`
            setTimeout(()=>{
              bullet[1].style.width = `100%`
            },200)
            setTimeout(()=>{
              bullet[2].style.width = `100%`
            },400)
            setTimeout(()=>{
              bullet[3].style.width = `100%`
            },600)
            setTimeout(()=>{
              bullet[4].style.width = `${((valuePerc - 80) / 2) * 10}%`
            }, 800)
          } 

          // bul.style.background = status 
          // bul.style.width = `${this.objAdv.percValues[this.objAdv.percValues.length - 1]}%` 
      
        
        let titlePercValue = new CountUp(
          `perc-title-${this.objAdv.type}`,
          this.objAdv.realValues[this.objAdv.realValues.length - 1] as number,
          {
            suffix: this.objAdv.valueLabels[this.objAdv.realValues.length - 1],
          }
          )
          titlePercValue.start()


      }
          
      this.contentRow = [...el.querySelectorAll('.content__row')]

      this.iterateRow(this.contentRow, index)

      el.classList.add('active')
    })
  }

  iterateRow(contentRow: Element[], index: number){
    contentRow.forEach((row, indexRow) => {
      let status = this.objAdv.percValues[indexRow] >= 0 && this.objAdv.percValues[indexRow] < this.objAdv.valueRangeColors[0] ? 'red' : this.objAdv.percValues[indexRow] >= this.objAdv.valueRangeColors[0] && this.objAdv.percValues[indexRow] < this.objAdv.valueRangeColors[1] ? 'orange' : 'green'

      if (this.objAdv.format === 'type1') {
        this.barContent = row.querySelector('.bar__content')
        if (this.barContent) {
          this.barContent.classList.contains('red') && this.barContent.classList.remove('red')
          this.barContent.classList.contains('orange') && this.barContent.classList.remove('orange')
          this.barContent.classList.contains('green') && this.barContent.classList.remove('green')
          
          this.barContent.classList.add(status)
          this.barContent.style.width = `${this.objAdv.percValues[indexRow]}%`
        }
      }
      

      if (this.objAdv.format === 'type2') {
        let circleResult = row.querySelectorAll('.circle-chart__circle')
        
        circleResult.forEach((circle)=>{
          // @ts-ignore
          circle.style['stroke'] = `${status}`
          // @ts-ignore
          circle.style['stroke-dasharray'] = `${
            this.objAdv.percValues[indexRow]
          } 100`
        })
      }

      let previousValue = document.getElementById(`perc-value-${this.objAdv.type}-${index}-row-${indexRow}`)

        if (previousValue?.innerHTML !==  `${this.objAdv.realValues[indexRow]}${this.objAdv.valueLabels[indexRow]}`) {

          this.percValueText = new CountUp(
            `perc-value-${this.objAdv.type}-${index}-row-${indexRow}`,
            this.objAdv.realValues[indexRow] as number,
            {
              suffix: this.objAdv.valueLabels[indexRow],
            }
            )
            if (this.update) {
              this.percValueText.update(this.objAdv.realValues[indexRow])
            } else {
              this.percValueText.start()
            }
          }


      this.textValue = document.getElementById(
        `perc-value-${this.objAdv.type}-${index}-row-${indexRow}`
        )
        
        if (this.textValue) {

          this.textValue.classList.contains('red-text') && this.textValue.classList.remove('red-text')
          this.textValue.classList.contains('orange-text') && this.textValue.classList.remove('orange-text')
          this.textValue.classList.contains('green-text') && this.textValue.classList.remove('green-text')
          
          this.textValue.classList.add(`${status}-text`)
        }
      })
    }
  }
 
  
  
  
  
  // @ts-ignore
  globalThis.Generatechartsadv = Generatechartsadv
  
  export default Generatechartsadv