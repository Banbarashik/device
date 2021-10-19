"use strict";
function openFeature(evt, feature) {
  let i;
  let featureContent;
  let featureButton;

  // Get all elements with class="features-content" and hide them
  featureContent = document.getElementsByClassName("features-content");
  for (i = 0; i < featureContent.length; i++) {
    featureContent[i].style.display = "none";
  }

  // Get all elements with class="features-list-side-menu--item" and remove the class "active"
  featureButton = document.getElementsByClassName(
    "features-list-side-menu--item"
  );
  for (i = 0; i < featureButton.length; i++) {
    featureButton[i].className = featureButton[i].className.replace(
      " active",
      ""
    );
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(feature).style.display = "block";
  evt.currentTarget.className += " active";
}

function openSlide(evt, slide) {
  let i;
  let sliderContent;
  let sliderButton;

  // Get all elements with class="goods-item" and hide them
  sliderContent = document.getElementsByClassName("goods-item");
  for (i = 0; i < sliderContent.length; i++) {
    sliderContent[i].style.display = "none";
  }

  // Get all elements with class="goods-slider-switcher" and remove the class "active"
  sliderButton = document.getElementsByClassName("goods-slider-switcher");
  for (i = 0; i < sliderButton.length; i++) {
    sliderButton[i].className = sliderButton[i].className.replace(
      " active",
      ""
    );
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(slide).style.display = "grid";
  evt.currentTarget.className += " active";
}

function showMenu() {
  let activatingString;
  let headerBlock;
  let menu;
  menu = document.getElementById("menu");
  menu.style.display = "grid";
  headerBlock = document.getElementById("header-block");
  headerBlock.style.zIndex = "2";
}

function closeMenu() {
  let activatingString;
  let headerBlock;
  let menu;
  menu = document.getElementById("menu");
  menu.style.display = "none";
  headerBlock = document.getElementById("header-block");
  headerBlock.style.zIndex = "0";
}
