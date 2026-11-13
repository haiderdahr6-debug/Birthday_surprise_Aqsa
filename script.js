const openButton = document.getElementById("openButton");
const intro = document.getElementById("intro");
const birthdaySite = document.getElementById("birthdaySite");
const song = document.getElementById("birthdaySong");
const musicButton = document.getElementById("musicButton");

openButton.addEventListener("click", () => {
  intro.classList.add("hidden");
  birthdaySite.classList.remove("hidden");
  musicButton.classList.remove("hidden");

  song.play().then(() => {
    musicButton.textContent = "♫";
  }).catch(() => {
    musicButton.textContent = "♫";
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  launchHearts(24);
});

musicButton.addEventListener("click", () => {
  if (song.paused) {
    song.play();
    musicButton.textContent = "♫";
  } else {
    song.pause();
    musicButton.textContent = "♪";
  }
});

// 15 special friendship messages
const messages = [
  [
    "A decade of friendship",
    "Ten beautiful years, and I still feel lucky to have you in my life."
  ],
  [
    "My safe place",
    "Thank you for being someone I can talk to, laugh with and count on."
  ],
  [
    "Endless laughter",
    "Some of my favourite laughs are the ones we have shared together."
  ],
  [
    "Little memories",
    "The smallest moments with you often become the biggest memories."
  ],
  [
    "Always cheering",
    "I hope you always have someone cheering for you as loudly as I do."
  ],
  [
    "A rare bond",
    "Not every friendship is this special. I am grateful ours found its way."
  ],
  [
    "More adventures",
    "There are still so many places to go and stories for us to create."
  ],
  [
    "Stay wonderful",
    "Never stop being your lovely, strong and beautiful self."
  ],
  [
    "All the happiness",
    "You deserve days full of peace, smiles, success and love."
  ],
  [
    "A forever wish",
    "Here is to ten years behind us and a lifetime of friendship ahead."
  ],
  [
    "Thank you",
    "Thank you for every conversation, every smile and every unforgettable day."
  ],
  [
    "Proud of you",
    "I hope this new year brings you closer to every dream you carry."
  ],
  [
    "Always special",
    "No matter how busy life gets, you will always be an important part of my story."
  ],
  [
    "Birthday sparkle",
    "May your birthday be as warm, bright and lovely as your heart."
  ],
  [
    "Best friends",
    "Ten years later, and I would still choose this friendship again."
  ]
];

const messageGrid = document.getElementById("messageGrid");

messages.forEach((item, index) => {
  const card = document.createElement("article");
  card.className = "message-card";

  card.innerHTML = `
    <span class="number">
      A LITTLE NOTE · ${String(index + 1).padStart(2, "0")}
    </span>

    <h3>${item[0]}</h3>
    <p>${item[1]}</p>
  `;

  messageGrid.appendChild(card);
});

// Countdown to December 9
function updateCountdown() {
  const now = new Date();
  let year = now.getFullYear();

  let birthday = new Date(year, 11, 9, 0, 0, 0);

  if (now > birthday) {
    birthday = new Date(year + 1, 11, 9, 0, 0, 0);
  }

  const distance = birthday - now;

  const values = {
    days: Math.floor(
      distance / (1000 * 60 * 60 * 24)
    ),

    hours: Math.floor(
      (distance / (1000 * 60 * 60)) % 24
    ),

    minutes: Math.floor(
      (distance / (1000 * 60)) % 60
    ),

    seconds: Math.floor(
      (distance / 1000) % 60
    )
  };

  Object.entries(values).forEach(([id, value]) => {
    document.getElementById(id).textContent =
      String(value).padStart(2, "0");
  });
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Open gallery photos in a large view
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");

document.querySelectorAll(".gallery img, .hero-photo").forEach((photo) => {
  photo.addEventListener("click", () => {
    lightboxImage.src = photo.src;
    lightbox.classList.remove("hidden");
  });
});

function closeLightbox() {
  lightbox.classList.add("hidden");
  lightboxImage.src = "";
}

document.getElementById("closeLightbox").addEventListener(
  "click",
  closeLightbox
);

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLightbox();
  }
});

// Birthday wish button
document.getElementById("wishButton").addEventListener("click", () => {
  document.getElementById("wishResult").textContent =
    "A little sparkle, a big hug, and all my love for you, Aqsa! ♡";

  launchHearts(35);
});

// Floating hearts and sparkles
function launchHearts(amount) {
  const symbols = ["♡", "✦", "💜", "✨"];

  for (let i = 0; i < amount; i++) {
    const heart = document.createElement("span");

    heart.className = "heart";

    heart.textContent =
      symbols[Math.floor(Math.random() * symbols.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
      (14 + Math.random() * 20) + "px";

    heart.style.animationDuration =
      (4 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 8500);
  }
    }
