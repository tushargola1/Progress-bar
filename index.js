const buttons = document.querySelectorAll('.buttons button');
const circle = document.querySelectorAll(' .steps');
const line = document.querySelectorAll(' .line');
let clickCount = 0;

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.id === "nextBtn") {
      clickCount = Math.min(clickCount + 1, circle.length - 1);
    } else if (e.target.id === "prevBtn") {
      clickCount = Math.max(clickCount - 1, 0);
    }

    circle.forEach((step, index) => {
      if (index <= clickCount) {
        step.classList.add("active");
    
      } else {
        step.classList.remove("active");
       
      }
    });

    line.forEach((lines, index) => {
      if (index < clickCount) {
        lines.classList.add("val");
    
      } else {
        lines.classList.remove("val");
       
      }
    });
  });
});
