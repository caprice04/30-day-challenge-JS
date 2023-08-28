
const button = document.querySelector("button"),
      toast = document.querySelector(".toast")
      closeIcon = document.querySelector(".close"),
    
      button.addEventListener("click", () => {
        toast.classList.add("active");
      });
      
      closeIcon.addEventListener("click", () => {
        toast.classList.remove("active");
        
      });


