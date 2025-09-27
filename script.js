let count = 0;

const countEl = document.getElementById("count");
const incBtn = document.getElementById("increment");
const decBtn = document.getElementById("decrement");
const clearBtn = document.getElementById("clear");
const errorEl = document.getElementById("error");

function updateUI() {
  countEl.innerHTML = count;

  // Show/Hide Clear button
  if (count > 0) {
    clearBtn.style.display = "inline-block";
  } else {
    clearBtn.style.display = "none";
  }

  // Hide error by default
  errorEl.style.display = "none";
}

incBtn.addEventListener("click", () => {
  count++;
  updateUI();
});

decBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    updateUI();
  } else {
    errorEl.style.display = "block";
  }
});

clearBtn.addEventListener("click", () => {
  count = 0;
  updateUI();
});

// Initialize
updateUI();
