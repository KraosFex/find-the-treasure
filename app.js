// treasure coordinates
const WIDTH = 400;
const HEIGH = 400;

const target = {
  x: getRandomNumber(WIDTH),
  y: getRandomNumber(HEIGH)
};



// click handler
const $map = document.querySelector('#map');
const $distance = document.querySelector('#distance');
let clicks = 0;

$map.addEventListener('click', function (e) {
  clicks++;
  const distance = getDistance(e, target);
  const distanceHint = getDistanceHint(distance);
  $distance.innerHTML = `<h2>${distanceHint}</h2>`;

  if (distance < 20 ) {
    alert(`Found the treasure in ${clicks} clicks!`);
    location.reload();
  }
});