// Calculator Challenge = /js/calc_challenge.js
// Array & String Challenges = /js/array_string_challenges.js
// User ID Challenge = /js/generate_uid.js
"use strict";
function hideAllScripts() {
  document.getElementById("calcScript").disabled = true;
  document.getElementById("arrayStringScript").disabled = true;
  document.getElementById("uidScript").disabled = true;
}

function runScript(scriptId) {
  hideAllScripts();
  document.getElementById(scriptId).disabled = false;
}
