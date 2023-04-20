ScrollReveal({
    reset:true,
    distance:'30px',
    duration: 2000,
    // delay:400
})

ScrollReveal().reveal('.old-harley, .founders-text, .follow, small', { 
    origin:'left',
 });

 ScrollReveal().reveal('.history-text, .harley-pilot', {
    origin:'right',
 })

 ScrollReveal().reveal('.museum-text, .harley-museum',{
    origin:'top',
 })

 ScrollReveal().reveal('.media-icon',{
    origin:'bottom',
    interval: 200
 })