
const hidden = document.querySelectorAll('.hidden');


const observer = new IntersectionObserver ((item)=>{
  console.log(item);
  item.forEach( (entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show")
    } else {
      entry.target.classList.remove("show")
    }
  })
})

hidden.forEach( (elemento) => observer.observe(elemento))