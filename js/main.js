let ready = () => {
  console.log("DOM está listo");
};

let loaded = () => {
  console.log("Iframes e Images cargadas");

  let myform = document.getElementById("form");
  myform.addEventListener("submit", (eventSubmit) => {
    eventSubmit.preventDefault();

    let emailElement = document.querySelector(".form-control-lg");
    let emailText = emailElement.value;

    if (emailText.length === 0) {
      emailElement.focus();

      const animation = new Animation(
        new KeyframeEffect(
          emailElement,
          [
            { transform: "translateX(0)" },
            { transform: "translateX(50px)" },
            { transform: "translateX(-50px)" },
            { transform: "translateX(0)" },
          ],
          { duration: 400, iterations: 1 },
        ),
      );

      animation.play();
    }
  });
};

window.addEventListener("DOMContentLoaded", ready);
window.addEventListener("load", loaded);
