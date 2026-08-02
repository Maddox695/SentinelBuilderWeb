export function renderHome() {
  return `
    <div class="container">
      <h1>🛡️ Sentinel Builder</h1>
      <p>AI App Builder</p>

      <button id="new">📁 New Project</button>
      <button id="open">📂 Open Project</button>
      <button id="generate">🤖 AI Generate App</button>
      <button id="settings">⚙️ Settings</button>

      <div id="output"></div>
    </div>
  `;
}
