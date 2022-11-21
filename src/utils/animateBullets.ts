const animateBullets = (bullet: [] | any, valuePerc: number, precValue?: number) =>{
   
    
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
    
    }

export default animateBullets