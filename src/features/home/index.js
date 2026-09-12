import { renderAboutPreview } from "./renderAboutPreview.js";
import { renderWhyChoose } from "./renderWhyChoose.js";
import { renderPrograms } from "./renderPrograms.js";
import { renderFacilities } from "./renderFacilities.js";
import { renderGalleryPreview } from "./renderGalleryPreview.js";
import { renderAdmissionProcess } from "./renderAdmissionProcess.js";
import { renderFAQ } from "./renderFAQ.js";
import { renderCTA } from "./renderCTA.js";

export function initHome() {
  renderAboutPreview();
  renderWhyChoose();
  renderPrograms();
  renderFacilities();
  renderGalleryPreview();
  renderAdmissionProcess();
  renderFAQ();
  renderCTA();
}
