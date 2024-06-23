// Function to read local storage and saves item to container
document.addEventListener("DOMContentLoaded", function () {
  const savedItemsContainer = document.getElementById("saved-items-container");

  function loadSavedItems() {
    const savedItems = JSON.parse(localStorage.getItem("savedItems")) || [];
    savedItemsContainer.innerHTML = "";
    if (savedItems.length > 0) {
      savedItems.forEach((item) => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "saved-item";
        itemDiv.innerText = item.title;
        savedItemsContainer.appendChild(itemDiv);
      });
    } else {
      savedItemsContainer.innerText = "No items saved.";
    }
  }

  loadSavedItems();
});

// Function to read local storage and saves liked item to container
document.addEventListener("DOMContentLoaded", function () {
  const likedItemsContainer = document.getElementById("liked-items-container");

  function loadLikedItems() {
    const likedItems = JSON.parse(localStorage.getItem("likedItems")) || [];
    likedItemsContainer.innerHTML = "";
    if (likedItems.length > 0) {
      likedItems.forEach((item) => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "liked-item";
        itemDiv.innerText = item.title;
        likedItemsContainer.appendChild(itemDiv);
      });
    } else {
      likedItemsContainer.innerText = "No items liked.";
    }
  }

  loadLikedItems();
});

//Clear items section
$(document).ready(function () {
  const savedItems = JSON.parse(localStorage.getItem("savedItems")) || [];

  function renderSavedItems() {
    $("#saved-items-list").empty();
    if (savedItems.length === 0) {
      $("#saved-items-list").append("<p>No items saved for later.</p>");
    } else {
      savedItems.forEach((item) => {
        $("#saved-items-list").append(
          `<div class="item"><h2>${item.title}</h2></div>`
        );
      });
    }
  }

  //Clear saved-items section
  $("#clear-saved-items").click(function () {
    localStorage.removeItem("savedItems");
    alert("All saved items have been cleared.");
    renderSavedItems();
  });

  //Clear all-items section
  $("#clear-all-items").click(function () {
    localStorage.removeItem("savedItems");
    localStorage.removeItem("likedItems");
    alert("All saved and liked items have been cleared.");
    renderSavedItems();
  });

  renderSavedItems();

  // Dropdown menu functionality
  $(".dropdown-toggle").click(function () {
    $(".dropdown-menu").slideToggle();
  });

  $(".dropdown-menu a").click(function () {
    const section = $(this).attr("href");
    window.location.href = section;
  });
});
