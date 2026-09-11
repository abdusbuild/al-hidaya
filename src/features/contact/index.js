import { renderHero } from "./renderHero.js";
import { renderDetailsAndMap } from "./renderDetailsAndMap.js";
import { renderForm } from "./renderForm.js";

export function initContact() {
  renderHero();
  renderDetailsAndMap();
  renderForm();
}
