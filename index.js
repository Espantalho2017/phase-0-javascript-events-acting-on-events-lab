// Your code here

// below code creates a function to move dodger left 
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

// below code creates a function to move dodger right 
// instead of moving the dodger ${left - 1}px, 
// you'll be moving it ${left + 1}px.
// using the dodger's style.right property to move the dodger right, 
// will not because changing the style.right property 
// doesn't change the style.left property, 
// which means we'd have conflicting information 
// about where the dodger should be on the screen

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left + 1}px`;
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
    else if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });
