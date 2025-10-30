const sections = document.querySelectorAll(".js-scroll")

window.addEventListener("scroll",()=>{
  sections.forEach(section=>{
    const top = section.getBoundingClientRect().top - window.innerHeight*0.4
    if (top < 0)
      section.classList.add("ativo")
  })
})