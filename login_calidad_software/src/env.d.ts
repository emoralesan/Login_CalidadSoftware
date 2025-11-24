/// <reference types="astro/client" />

declare namespace App {
  interface Locals {
    showLoader: () => void;
    hideLoader: () => void;
  }
}

