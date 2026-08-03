import './style.css'
import { renderHome } from './ui.js'
import { showNewProject } from './builder.js'
import { game } from './game.js'


document.querySelector('#app').innerHTML = renderHome()

const output = document.getElementById('output')


// NEW PROJECT
document.getElementById('new').addEventListener('click', () => {

output.innerHTML = showNewProject()


document.getElementById('createProject')
.addEventListener('click',()=>{


const name =
document.getElementById('projectName').value

const description =
document.getElementById('projectDescription').value

const type =
document.getElementById('projectType').value


if(!name){

alert("Please enter a project name.")
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

<p>💾 Saved successfully.</p>

`

})


})



// LOAD PROJECT

document.getElementById('open')
.addEventListener('click',()=>{


let projects =
JSON.parse(localStorage.getItem("sentinelProjects")) || []


output.innerHTML = `

<h2>📂 Saved Projects</h2>

${projects.map(p=>`

<div style="
padding:10px;
border:1px solid #666;
margin:10px;
border-radius:8px;
">

<h3>${p.name}</h3>

<p>${p.type}</p>

<p>${p.description}</p>

</div>

`).join("")}

`


})




// SENTINEL EMPIRE DASHBOARD

document.getElementById('empire')
.addEventListener('click',()=>{


output.innerHTML = `

<h2>🛡️ Sentinel Security Empire</h2>


<p>🏢 Company: ${game.companyName}</p>

<p>💰 Money: R${game.money}</p>

<p>⭐ Reputation: ${game.reputation}</p>

<p>📈 Level: ${game.level}</p>

<p>👮 Guards: ${game.guards}</p>

<p>🐕 K9 Units: ${game.k9Units}</p>

<p>🚓 Vehicles: ${game.vehicles}</p>

<p>📄 Contracts: ${game.contracts}</p>


<button id="hire">
Hire Guard (R5000)
</button>


<button id="k9">
Train K9 (R10000)
</button>


<button id="vehicle">
Buy Vehicle (R25000)
</button>


<button id="contract">
Complete Contract
</button>


<div id="result"></div>

`



document.getElementById('hire')
.onclick=()=>{

document.getElementById('result').innerHTML =
game.hireGuard()

}


document.getElementById('k9')
.onclick=()=>{

document.getElementById('result').innerHTML =
game.trainK9()

}


document.getElementById('vehicle')
.onclick=()=>{

document.getElementById('result').innerHTML =
game.buyVehicle()

}


document.getElementById('contract')
.onclick=()=>{

document.getElementById('result').innerHTML =
game.createContract()

}


})




// AI BUILDER

document.getElementById('generate')
.onclick=()=>{


output.innerHTML=`

<h2>🤖 AI Builder</h2>

<textarea id="aiPrompt"
placeholder="Describe your app idea..."
style="width:100%;height:120px;">
</textarea>

<br><br>

<button id="build">
Generate Blueprint
</button>

<div id="aiOutput"></div>

`


document.getElementById('build')
.onclick=()=>{


let idea =
document.getElementById('aiPrompt').value


document.getElementById('aiOutput')
.innerHTML=`

<h3>Generated Blueprint</h3>

<p>${idea}</p>


<ul>

<li>User Interface</li>
<li>Database</li>
<li>Money System</li>
<li>Inventory</li>
<li>Progression</li>
<li>Save System</li>

</ul>

`

}


}



// SETTINGS

document.getElementById('settings')
.onclick=()=>{

output.innerHTML=`

<h2>⚙️ Settings</h2>

<p>Sentinel Builder v1.0</p>

`

}
