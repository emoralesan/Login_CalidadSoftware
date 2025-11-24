export const showLoader = (): void => {
  const loaderOverlay = document.querySelector(".loader-overlay");
  if (loaderOverlay) {
    loaderOverlay.classList.remove("hidden");
  }
  document.body.classList.add("loading");
};

export const hideLoader = (): void => {
  const loaderOverlay = document.querySelector(".loader-overlay");
  if (loaderOverlay) {
    loaderOverlay.classList.add("hidden");
  }
  document.body.classList.remove("loading");
};

