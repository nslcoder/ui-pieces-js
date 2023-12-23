const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");
const accordionImages = document.querySelectorAll(".accordion-images > img");

questions.forEach((question, qind) => {
  question.addEventListener("click", () => {
    answers.forEach((answer, aind) => {
      if(qind === aind) {
        answer.classList.add("active");
      } else {
        answer.classList.remove("active");
      }
    })

    accordionImages.forEach((img, iind) => {
      if(qind === iind) {
        img.classList.add("active");
      } else {
        img.classList.remove("active");
      }
    })
  })
});
