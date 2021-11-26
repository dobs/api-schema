/**
 * Mount an `elements-api` for a specified PagerDuty reference set.
 *
 * Branches are automatically picked up from a `branch` querystring option,
 * defaulting to `main`.
 *
 * @param {string} name The reference set name (e.g. `REST`, `events-v1`)
 */
function mountRef(name) {
  // Get settings from query params.
  const urlSearchParams = new URLSearchParams(window.location.search);
  const branch = urlSearchParams.get("branch") || "main";

  // Create and insert the Elements API doc container.
  const docEl = document.createElement("elements-api");
  docEl.apiDescriptionUrl = `https://raw.githubusercontent.com/pagerduty/api-schema/${branch}/reference/${name}/openapiv3.json`;
  docEl.router = "hash";
  docEl.layout = "sidebar";
  document.body.append(docEl);
}
