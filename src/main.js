import './style.css'
import { renderHome } from './ui.js'
import { showNewProject } from './builder.js'
import { game } from './game.js'


document.querySelector('#app').innerHTML = renderHome()

const output = document.getElementById('output')


// NEW PROJECT

document.getElementById('new').onclick = () => {

output.innerHTML = showNewProject()


document.getElementById('createProject').onclick = () => {


const name = projectName.value
const description = projectDescription.value
const type = projectType.value


if(!name){

alert("Enter project name")
return

}


let projects =
JSON.parse(localStorage.getItem("sentinelProjects")) || []


projects.push({
name,
description,
type,
date:new Date().toLocaleString()
})


localStorage.setItem(
"sentinelProjects",
JSON.stringify(projects)
)


output.innerHTML = `
<h2>✅ Project Created</h2>
<p>${name}</p>
<p>💾 Saved</p>
`

}

}



// LOAD PROJECT

document.getElementById('open').onclick = () => {


let projects =
JSON.parse(localStorage.getItem("sentinelProjects")) || []


output.innerHTML = `

<h2>📂 Saved Projects</h2>

${projects.map(p=>`

<div class="card">

<h3>${p.name}</h3>

<p>${p.type}</p>

<p>${p.description}</p>

</div>

`).join("")}

`

}




// SENTINEL DASHBOARD


function showEmpire(){


const companyValue =
(game.money +
(game.guards * 5000) +
(game.k9Units * 10000) +
(game.vehicles * 25000))


output.innerHTML = `

<h2>🛡️ Sentinel Security Empire</h2>


<div class="card">

<p>🏢 Company:
${game.companyName}</p>

<p>💰 Cash:
R${game.money}</p>

<p>📊 Company Value:
R${companyValue}</p>

<p>⭐ Reputation:
${game.reputation}</p>

<p>📈 Level:
${game.level}</p>

<p>👮 Guards:
${game.guards}</p>

<p>🐕 K9 Units:
${game.k9Units}</p>

<p>🚓 Vehicles:
${game.vehicles}</p>

<p>📄 Contracts:
${game.contracts}</p>

</div>


<button id="hire">
👮 Hire Guard R5000
</button>


<button id="k9">
🐕 Train K9 R10000
</button>


<button id="vehicle">
🚓 Buy Vehicle R25000
</button>


<button id="contract">
📄 Complete Contract
</button>


<div id="message"></div>


`



document.getElementById('hire').onclick=()=>{

game.hireGuard()
showEmpire()

}


document.getElementById('k9').onclick=()=>{

game.trainK9()
showEmpire()

}


document.getElementById('vehicle').onclick=()=>{

game.buyVehicle()
showEmpire()

}


document.getElementById('contract').onclick=()=>{

game.createContract()
showEmpire()

}


}



document.getElementById('empire').onclick =
showEmpire




// AI BUILDER

document.getElementById('generate').onclick = ()=>{


output.innerHTML=`

<h2>🤖 AI Builder</h2>

<textarea id="aiPrompt"
placeholder="Describe your idea..."
style="width:100%;height:120px;">
</textarea>


<br><br>


<button id="build">
Generate Blueprint
</button>


<div id="aiOutput"></div>

`


document.getElementById('build').onclick=()=>{

aiOutput.innerHTML=`

<h3>Generated Blueprint</h3>

<p>${aiPrompt.value}</p>

<ul>
<li>Database</li>
<li>Systems</li>
<li>Interface</li>
<li>Progression</li>
</ul>

`

}

}



// SETTINGS

document.getElementById('settings').onclick=()=>{

output.innerHTML=`

<h2>⚙️ Settings</h2>

<p>Sentinel Builder v1.1</p>

`

}
