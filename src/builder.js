export function showNewProject() {
  return `
    <h2>📁 New Project</h2>

    <label>Project Name</label><br>
    <input id="projectName" type="text" placeholder="My Security App"><br><br>

    <label>Description</label><br>
    <textarea id="projectDescription" rows="4" placeholder="Describe your app..."></textarea><br><br>

    <label>App Type</label><br>
    <select id="projectType">
      <option>Security</option>
      <option>Business</option>
      <option>Inventory</option>
      <option>Notes</option>
    </select>

    <br><br>

    <button id="createProject">
      🚀 Create Project
    </button>
  `;
}
