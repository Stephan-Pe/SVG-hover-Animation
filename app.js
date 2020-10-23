const buttons = document.querySelectorAll("button");

const turbulence = document.querySelector("feTurbulence");
let verticalFreq = 0.00001;
let horizontalFreq = 0.0001;

turbulence.setAttribute("baseFrequency", verticalFreq + horizontalFreq);
const steps = 30;
const interval = 10;

buttons.forEach(function (button) {
  button.addEventListener("mouseover", function () {
    verticalFreq = 0.00001;

    for (i = 0; i < steps; i++) {
      //the steps will be
      // setTimeout to give the browser time enough to render function
      setTimeout(function () {
        verticalFreq += 0.002;
          horizontalFreq += 0.002;
          turbulence.setAttribute("baseFrequency", verticalFreq + horizontalFreq);
      }, i * interval);
    }
    setTimeout(function(){
        let verticalFreq = 0.00001;
        let horizontalFreq = 0.0001;
        turbulence.setAttribute("baseFrequency", verticalFreq + horizontalFreq);
    },steps * interval)
  });
});
