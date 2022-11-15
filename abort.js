// Abort v1 by proudparrot2


const themes = {
  dark: { fg: '#F5F9FC', bg: '#151515' },
  light: { fg: '#130F26', bg: '#E1E1E1' },
  red: { fg: '#F5F9FC', bg: '#FA4B4B' },/*
  orange: { fg: '#F5F9FC', bg: '#D96D00' },
  yellow: { fg: '#F5F9FC', bg: '#A68A00' },
  lime: { fg: '#F5F9FC', bg: '#639400' },
  green: { fg: '#F5F9FC', bg: '#00A11B' },
  teal: { fg: '#F5F9FC', bg: '#0093B0' },
  blue: { fg: '#F5F9FC', bg: '#0F87FF' },
  blurple: { fg: '#F5F9FC', bg: '#8E78FF' },
  purple: { fg: '#F5F9FC', bg: '#B266FF' },
  magenta: { fg: '#F5F9FC', bg: '#EB3BEB' },
  pink: { fg: '#F5F9FC', bg: '#F545BA' },*/
};
const color = themes[document.currentScript.getAttribute('theme') || 'blue'];

const badge = `

<style>
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans&display=swap');
  #abortBadge {
    position: fixed;
    cursor: pointer;
    bottom: 5px;
    right: 5px;
    z-index: 1000;
  }
  
  .button {
    padding: 15px;
    border: none;
    background-color: ${color.bg};
    color: ${color.fg};
    border-radius: 15px;
    font-family: "DM Sans";
    font-size: 14px;
  }

  .button {
    opacity: 0.75;
    transition-property: opacity, transform;
    transition: opacity 120ms, transform 120ms;
    transition-timing-function: ease-out;
  }

  .button:hover {
    transform: scale(1.05);
    opacity: 1;
  }
</style>

<div id="abortBadge">
  <button class="button" id="abortBtn" onclick="ActivateAbort()"><i class="fa-solid fa-arrow-right-to-bracket"></i> Abort</button>
  <!--<button class="button" id="settingsBtn"><i class="fa-solid fa-gear"></i> Settings</button> -->
</div>
`;

function ActivateAbort() {
  window.parent.window.location.replace("https://abort.parrotdev.repl.co/activate");
}
document.body.insertAdjacentHTML('beforeend', badge);
