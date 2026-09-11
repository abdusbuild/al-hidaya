import { renderHero } from "./renderHero.js";
import { renderSteps } from "./renderSteps.js";
import { renderEligibilityAndDocs } from "./renderEligibilityAndDocs.js";
import { renderEnquiryForm } from "./renderEnquiryForm.js";
import { renderFaq } from "./renderFaq.js";

export function initAdmissions() {
  renderHero();
  renderSteps();
  renderEligibilityAndDocs();
  renderEnquiryForm();
  renderFaq();
}
