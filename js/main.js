function scrollEvents(){
  const sections = documen.qerySelectorAll('.section')
  const links = document.querySelectorAll('.nav_link')
  
  const observer = new IntersectionObserver((entries) ⇒ {
    entries.forEach(entry ⇒ {
        if(entry.isIntersecting) {
            links.forEach(link ⇒ {
                const linkHref = link.getAttribute('href').replace('#', '')
                
              if(linkHref == entry.target.id) {
                link.classList.add('active')

              } else {
                  link.classList.remove('active')
              }


            })
        }, {
          threshold: 0.8
        }
    })
  } ) 
  
    sections.forEach(section => {
      observer.observe(section)      
    });
}