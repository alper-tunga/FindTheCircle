var jant = document.querySelector('.jant')
var button = document.querySelector('button')
var body = document.body
var oyunaBasla = false
var transformX  
var transformY 
const win = () => {
oyunaBasla = false
if(oyunaBasla ==false){
  button.style.display ='block'
  jant.style.display ='none'
  // window.alert('e_kullanici_adi Kazandı')

  }
}
const start = () => {
  oyunaBasla = true
  if(oyunaBasla){
    button.style.display='none'
    jant.style.display ='flex'
    transformX =  Math.floor(Math.random()*1800 +50)
    transformY = Math.floor(Math.random()*850 +50)
    jant.style.transform = 'translate('+transformX+'px,'+transformY+'px)'
  }
}
button.addEventListener('click',start)
jant.addEventListener('click',win)
// Not Yarıçapı unutmayın ! Dairenin hiçbir kısmı çerçeve dışına çıkmayacak //
