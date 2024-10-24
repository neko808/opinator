document.addEventListener("DOMContentLoaded", () => {
  /*    Activate icons when clicked     */
  const imageContainers = document.querySelectorAll(".image-container");
  const lottieAnimations = document.querySelectorAll(".lottie-animation");

  // Lottie animations
  lottieAnimations.forEach((animationContainer, index) => {
    const animationPath = animationContainer.getAttribute(
      "data-animation-path"
    );
    const animation = lottie.loadAnimation({
      container: animationContainer,
      path: animationPath,
      renderer: "svg",
      loop: false,
      autoplay: false,
    });

    imageContainers[index].addEventListener("click", function () {
      this.classList.toggle("active");
      if (this.classList.contains("active")) {
        animation.play();
      } else {
        animation.stop();
      }
    });

    // Optional: Error handling
    animation.addEventListener("data_failed", () => {
      console.error(`Failed to load animation at ${animationPath}`);
    });
  });

  /*    Slider    */
  const ratingSlider = document.getElementById("ratingSlider");
  const ratingValue = document.getElementById("ratingValue");

  const labels = [
    "Very Poor",
    "Poor",
    "Fair",
    "Average",
    "Good",
    "Very Good",
    "Excellent",
    "Outstanding",
    "Exceptional",
    "Perfect",
  ];

  ratingSlider.addEventListener("input", function () {
    const roundedValue = Math.round(this.value);

    ratingValue.textContent = labels[roundedValue - 1];

    const percentage = (this.value - this.min) / (this.max - this.min);
    const sliderWidth = this.offsetWidth;
    const labelWidth = ratingValue.offsetWidth;

    ratingValue.style.left = `${percentage * (sliderWidth - labelWidth)}px`;
  });

  ratingValue.textContent = labels[Math.round(ratingSlider.value) - 1];
});
