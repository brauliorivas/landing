const databaseURL =
  "https://landing-9923a-default-rtdb.firebaseio.com/newsletter.json";

const sendData = () => {
  const form = document.getElementById("form");

  const formData = new FormData(form);

  const data = Object.fromEntries(formData.entries());
  data["saved"] = new Date().toLocaleString("es-CO", {
    timeZone: "America/Guayaquil",
  });

  fetch(databaseURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        alert(
          "Agradeciendo tu preferencia, nos mantenemos actualizados y enfocados en atenderte como mereces",
        );
        form.reset();
      }
      return response.json();
    })
    .then((result) => {
      alert(
        "Agradeciendo tu preferencia, nos mantenemos actualizados y enfocados en atenderte como mereces",
      );
      form.reset();
    })
    .catch((error) => {
      alert("Hemos experimentado un error. ¡Vuelve pronto!");
    });
};
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
      return;
    }

    sendData();
  });
};

window.addEventListener("DOMContentLoaded", ready);
window.addEventListener("load", loaded);