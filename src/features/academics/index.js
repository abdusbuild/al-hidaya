import { renderHero } from "./renderHero.js";
import { renderCurriculum } from "./renderCurriculum.js";
import { renderSections } from "./renderSections.js";
import { renderCoCurricular } from "./renderCoCurricular.js";
import { renderSchoolInfo } from "./renderSchoolInfo.js";
import { renderCTA } from "./renderCTA.js";

export function initAcademics() {
  renderHero();
  renderCurriculum();
  renderSections();
  renderCoCurricular();
  renderSchoolInfo();
  renderCTA();
}
