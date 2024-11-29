const innerCircle = document.getElementById("inner-circle");
let direction = 1; // 1 for moving up, -1 for moving down
let position = 0; // Initial position

setInterval(() => {
  if (position <= -10) direction = 1; // Reverse to moving down
  if (position >= 0) direction = -1; // Reverse to moving up

  position += direction; // Update position
  innerCircle.style.transform = `translateY(${position}px)`;
}, 30); // Adjust the interval for smoother/faster animation



