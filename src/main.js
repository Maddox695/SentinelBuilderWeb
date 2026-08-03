import './style.css'
import { renderHome } from './ui.js'
import { showNewProject } from './builder.js'


document.querySelector('#app').innerHTML = renderHome()

const output = document.getElementById('output')


// NEW PROJECT
document.getElementById('new').addEventListener('click', () => {

  output.innerHTML = showNewProject()


  document.getElementById('createProject')
  .addEventListener('click', () => {


    const name = document.getElementById('projectName').value
    const description = document.getElementById('projectDescription').value
    const type = document.getElementById('projectType').value


    if (!name) {
      alert("Please enter a project name.")
      return
    }


    const project = {
      name,
      description,
      type,
      date: new Date().toLocaleString()
    }


    let projects =
    JSON.parse(localStorage.getItem("sentinelProjects")) || []


    projects.push(project)


    localStorage.setItem(
      "sentinelProjects",
      JSON.stringify(projects)
    )


    output.innerHTML = `

    <h2>✅ Project Created</h2>

    <p><b>Name:</b> ${name}</p>

    <p><b>Type:</b> ${type}</p>

    <p><b>Description:</b></p>

    <div style="padding:10px;border:1px solid #666;border-radius:8px;">
    ${description}
    </div>

    <br>

    <p>💾 Saved successfully.</p>

    `
  })

})




// LOAD PROJECT
document.getElementById('open')
.addEventListener('click', () => {


let projects =
JSON.parse(localStorage.getItem("sentinelProjects")) || []


if(projects.length === 0){

output.innerHTML =
`
<h2>📂 Open Project</h2>
<p>No projects saved.</p>
`

return

}


let html = `
<h2>📂 Saved Projects</h2>
`


projects.forEach((p)=>{


html += `

<div style="
padding:10px;
margin:10px;
border:1px solid #666;
border-radius:8px;
">


<h3>${p.name}</h3>

<p>Type: ${p.type}</p>

<p>${p.description}</p>

<small>${p.date}</small>


</div>

`

})


output.innerHTML = html


})





// AI GENERATOR
document.getElementById('generate')
.addEventListener('click',()=>{


output.innerHTML = `

<h2>🤖 AI Builder</h2>


<textarea 
id="aiPrompt"
placeholder="Describe your app or game idea..."
style="
width:100%;
height:120px;
">

</textarea>


<br><br>


<button id="buildAI">
Generate Blueprint
</button>


<div id="aiOutput"></div>


`



document.getElementById('buildAI')
.addEventListener('click',()=>{


const idea =
document.getElementById('aiPrompt').value


if(!idea){

alert("Enter an idea first.")

return

}



document.getElementById('aiOutput')
.innerHTML = `


<h3>Generated Blueprint</h3>


<p><b>Project Idea:</b></p>


<div style="
padding:10px;
border:1px solid #666;
border-radius:8px;
">

${idea}

</div>



<h3>Recommended Systems</h3>


<ul>

<li>User Interface</li>

<li>Database</li>

<li>Money System</li>

<li>Inventory System</li>

<li>Progression System</li>

<li>Save System</li>

</ul>


`

})


})




// SETTINGS
document.getElementById('settings')
.addEventListener('click',()=>{


output.innerHTML = `

<h2>⚙️ Settings</h2>

<p>Sentinel Builder v1.0</p>

<p>Local project storage enabled.</p>

`

})
