import { TERMS_HERO, TERMS_SECTIONS, POLICY_UPDATED_ON } from "../../constants/policy.js";
import { createPageHero } from "../../components/common/PageHero.js";
import { createPolicyContent } from "../../components/common/PolicyContent.js";

export function renderTermsAndConditions() {
  const hero = document.getElementById("pageHero");
  const content = document.getElementById("policyContent");
  if (!hero || !content) return;

  hero.innerHTML = createPageHero(TERMS_HERO);
  content.innerHTML = createPolicyContent({
    updatedOn: POLICY_UPDATED_ON,
    sections: TERMS_SECTIONS,
  });

  window.lucide?.createIcons();
}
