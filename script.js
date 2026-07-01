const base = [
  "harvest mouse", 
];

const ears = [
  "harvest mouse", 
];

const tail = [
  "mouse", 
];

const head_accessory = [
  "mouse", 
];

const neck_accessory = [
  "seal", 
];

const leg_accessories = [
  "seal", 
];

const small_decoration = [
  "seal", 
];

const color = [
  "seal", 
];

const extras = [
  "unicorn horn", "", "none"
];

/* Trigger words for warning
const arachnidTriggers = [
  "name of trigger", 
];

function showArachnophobiaWarning(animal) {
  alert("WARNING: Arachnophobia generated");
  console.warn("Arachnophobia Warning Triggered for:", animal);
}

function closeWarning() {
  document.getElementById("warningOverlay").style.display = "none";
}

function checkForArachnids(animal) {
  return arachnidTriggers.some(trigger => animal.toLowerCase().includes(trigger));
}
*/
const partMap = [base, ears, tail, head_accessory, neck_accessory, leg_accessories, small_decoration, color];

function generateAnimalWithAnimation(index) {
  const button = document.querySelector(`button[onclick='generateAnimalWithAnimation(${index})']`);
  const element = document.getElementById(`num${index}`);
  const arr = partMap[index];
  button.disabled = true;
  let count = 0;
  const interval = setInterval(() => {
    element.textContent = arr[Math.floor(Math.random() * arr.length)];
    count++;
    if (count > 20) {
      clearInterval(interval);
      const final = arr[Math.floor(Math.random() * arr.length)];
      element.textContent = final;
      button.disabled = false;
  //if (checkForArachnids(final)) showArachnophobiaWarning(final);
    }
  }, 20);
}

function generateExtraWithAnimation(index) {
  const button = document.querySelector(`button[onclick='generateExtraWithAnimation(${index})']`);
  const element = document.getElementById(`num${index}`);
  button.disabled = true;
  let count = 0;
  const interval = setInterval(() => {
    element.textContent = extras[Math.floor(Math.random() * extras.length)];
    count++;
    if (count > 20) {
      clearInterval(interval);
      element.textContent = extras[Math.floor(Math.random() * extras.length)];
      button.disabled = false;
    }
  }, 20);
}
