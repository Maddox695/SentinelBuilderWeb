import './style.css'
import { renderHome } from './ui.js'
import { showNewProject } from './builder.js'

document.querySelector('#app').innerHTML = renderHome()

const output = document.getElementById('output')

document.getElementById('new').addEventListener('click', () => {
  output.innerHTML = showNewProject()

  document.getElementById('createProject').addEventListener('click', () => {
    const name = document.getElementById('projectName').value
    const description = document.getElementById('projectDescription').value
    const type = document.getElementById('projectType').value

    if (!name) {
      alert("Please enter a project name.")
      return
    }

    output.innerHTML = `
      <h2>✅ Project Created</h2>

      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Type:</strong> ${type}</p>
      <p><strong>Description:</strong></p>

      <div style="padding:10px;border:1px solid #666;border-radius:8px;">
        ${description}
      </div>

      <br>

      <p>This project is ready for the next generation stage.</p>
    `
  })
})

document.getElementById('open').addEventListener('click', () => {
  output.innerHTML = `
    <h2>📂 Open Project</h2>
    <p>Coming soon.</p>
  `
})

document.getElementById('generate').addEventListener('click', () => {
  output.innerHTML = `
    <h2>🤖 AI Generator</h2>
    <p>Coming soon.</p>
  `
})

document.getElementById('settings').addEventListener('click', () => {
  output.innerHTML = `
    <h2>⚙️ Settings</h2>
    <p>Coming soon.</p>
  `
})
