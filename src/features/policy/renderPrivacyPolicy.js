import { PRIVACY_POLICY_HERO, PRIVACY_POLICY_SECTIONS, POLICY_UPDATED_ON } from "../../constants/policy.js";
import { createPageHero } from "../../components/common/PageHero.js";
import { createPolicyContent } from "../../components/common/PolicyContent.js";

export function renderPrivacyPolicy() {
  const hero = document.getElementById("pageHero");
  const content = document.getElementById("policyContent");
  if (!hero || !content) return;

  hero.innerHTML = createPageHero(PRIVACY_POLICY_HERO);
  content.innerHTML = createPolicyContent({
    updatedOn: POLICY_UPDATED_ON,
    sections: PRIVACY_POLICY_SECTIONS,
  });

  window.lucide?.createIcons();
}
