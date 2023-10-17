const footer = document.querySelector('.footer')
const footerObserverOptions ={
  rootMargin : '-100px'
}
const footerObserver = new IntersectionObserver((entries,observer)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      if(!sessionStorage.getItem('buildfp_bigAnimation')){
        if(window.innerWidth > 710){
          buildfp_bigAnimation()
          buildFooter_aAnimation()
        }
        sessionStorage.setItem('buildfp_bigAnimation',1)
      }
    }
  })
},footerObserverOptions)

footerObserver.observe(footer)

const fp_big = document.querySelectorAll('[id=fp_big]')

buildfp_bigAnimation =()=>{
  fp_big.forEach(fp=>{
    fp.innerHTML = 
    fp.innerHTML.split('').map((span)=>{
      if(span === ' '){
        span = '&nbsp '
      }
      return `<span class='fp_span'>${span}</span>`
    }).join('')
    
    const fp_span = document.querySelectorAll('.fp_span')
    fp_span.forEach((fps,fi)=>{
      anime({
        targets: fps,
        translateX: [30,0],
        opacity: [0,1],
        delay : 10 * fi,
        easing: 'easeInOutQuad',
        duration: 300,
      });
    })
  })
}

const buildFooter_aAnimation = ()=>{
  let footer_a = document.querySelectorAll('.footer_mid section div a')
  
  footer_a.forEach((a,ai)=>{
    anime({
      targets: a,
      translateY: [100,0],
      opacity: [0,1],
      delay : 70 * ai,
      easing: 'easeInOutQuad',
      duration: 500,
      begin:()=>{
        document.querySelector('.footer').style.overflow = 'hidden'
      },
    });
  })
}