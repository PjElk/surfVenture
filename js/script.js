document.addEventListener("DOMContentLoaded", function () {
  // Select all elements with the class 'close'
  const closeButtons = document.querySelectorAll(".close");
  // Add click event listener to each close button
  closeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Hide the parent element (the list item)
      this.parentElement.style.display = "none";
    });
  });

  // Select all elements with the class 'save-later-btn'
  const saveLaterButtons = document.querySelectorAll(".save-later-btn");
  // Select all elements with the class 'like-btn'
  const likeButtons = document.querySelectorAll(".like-btn");

  // Add click event listener to each save later button
  saveLaterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const id = this.dataset.id;
      const title = this.dataset.title;

      // Get saved items from localStorage or initialize an empty array
      let savedItems = JSON.parse(localStorage.getItem("savedItems")) || [];
      // Check if the item is not already saved
      if (!savedItems.find((item) => item.id === id)) {
        // Add item to savedItems and update localStorage
        savedItems.push({ id, title });
        localStorage.setItem("savedItems", JSON.stringify(savedItems));
        const totalSavedItems = savedItems.length;
        alert(
          `${title} has been saved for later. You now have ${totalSavedItems} items in your Save for later folder.`
        );
      } else {
        alert(`${title} is already saved.`);
      }
    });
  });

  // Add click event listener to each like button
  likeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const id = this.dataset.id;
      const title = this.dataset.title;

      // Get liked items from localStorage or initialize an empty array
      let likedItems = JSON.parse(localStorage.getItem("likedItems")) || [];
      // Check if the item is not already liked
      if (!likedItems.find((item) => item.id === id)) {
        // Add item to likedItems and update localStorage
        likedItems.push({ id, title });
        localStorage.setItem("likedItems", JSON.stringify(likedItems));
        alert(`${title} has been liked.`);
      } else {
        alert(`${title} is already liked.`);
      }
    });
  });
});

$(document).ready(function () {
  // Toggle menu functionality
  $("#toggle-menu").click(function () {
    $("nav.main-nav").slideToggle();
  });

  // Save for later functionality using jQuery
  $(".save-later-btn").click(function () {
    const id = $(this).data("id");
    const title = $(this).data("title");

    let savedItems = JSON.parse(localStorage.getItem("savedItems")) || [];
    if (!savedItems.find((item) => item.id === id)) {
      savedItems.push({ id, title });
      localStorage.setItem("savedItems", JSON.stringify(savedItems));
      const totalSavedItems = savedItems.length;
      alert(
        `${title} has been saved for later. You now have ${totalSavedItems} items in your Save for later folder.`
      );
    } else {
      alert(`${title} is already saved.`);
    }
  });

  // Like functionality using jQuery
  $(".like-btn").click(function () {
    const id = $(this).data("id");
    const title = $(this).data("title");

    let likedItems = JSON.parse(localStorage.getItem("likedItems")) || [];
    if (!likedItems.find((item) => item.id === id)) {
      likedItems.push({ id, title });
      localStorage.setItem("likedItems", JSON.stringify(likedItems));
      alert(`${title} has been liked.`);
    } else {
      alert(`${title} is already liked.`);
    }
  });

  // Animation effects on hover using jQuery
  $(".item").hover(
    function () {
      $(this).animate({ opacity: 0.5 }, 300);
    },
    function () {
      $(this).animate({ opacity: 1 }, 300);
    }
  );

  // Chained effects on click using jQuery
  $(".item").click(function () {
    $(this).find("h2").slideUp(500).slideDown(500).fadeOut(500).fadeIn(500);
  });
});
