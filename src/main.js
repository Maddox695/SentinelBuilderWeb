import './style.css'
import { renderHome } from './ui.js'
import { showNewProject } from './builder.js'
import { game } from './game.js'
import { staff } from './staff.js'


document.querySelector('#app').innerHTML = renderHome()

const output = document.getElementById('output')


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

<p>🏢 Company: ${game.companyName}</p>

<p>💰 Cash: R${game.money}</p>

<p>📊 Company Value: R${companyValue}</p>

<p>⭐ Reputation: ${game.reputation}</p>

<p>📈 Level: ${game.level}</p>

<p>👮 Guards: ${game.guards}</p>

<p>🐕 K9 Units: ${game.k9Units}</p>

<p>🚓 Vehicles: ${game.vehicles}</p>

<p>📄 Contracts: ${game.contracts}</p>

</div>


<button id="staffBtn">
👮 Staff Management
</button>


<button id="hire">
Hire Guard R5000
</button>


<button id="contract">
Complete Contract
</button>


<div id="result"></div>

`


document.getElementById('staffBtn')
.onclick = showStaff


document.getElementById('hire')
.onclick = ()=>{

game.hireGuard()

showEmpire()

}


document.getElementById('contract')
.onclick = ()=>{

game.createContract()

showEmpire()

}


}



// STAFF SYSTEM

function showStaff(){

output.innerHTML = `

<h2>👮 Staff Management</h2>


<button id="newGuard">
Hire New Employee
</button>


<div>

${staff.guards.map((g,index)=>`

<div class="card">

<h3>${g.name}</h3>

<p>Rank: ${g.rank}</p>

<p>Skill: ${g.skill}%</p>

<p>Salary: R${g.salary}</p>


<button onclick="trainGuard(${index})">
Train
</button>


</div>


`).join("")}


</div>

<div id="staffMessage"></div>

`


document.getElementById('newGuard')
.onclick=()=>{


let name =
prompt("Enter guard name")


if(name){

staff.hire(name)

showStaff()

}

}


window.trainGuard=(index)=>{

staff.train(index)

showStaff()

}


}




// LOAD EMPIRE BUTTON

document.getElementById('empire')
.onclick = showEmpire



// NEW PROJECT

document.getElementById('new')
.onclick = ()=>{

output.innerHTML = showNewProject()

}



// LOAD PROJECT

document.getElementById('open')
.onclick = ()=>{

output.innerHTML = `

<h2>📂 Load Project</h2>

<p>Project loading system active.</p>

`

}



// AI BUILDER

document.getElementById('generate')
.onclick = ()=>{

output.innerHTML=`

<h2>🤖 AI Builder</h2>

<p>Blueprint generator active.</p>

`

}



// SETTINGS

document.getElementById('settings')
.onclick = ()=>{

output.innerHTML=`

<h2>⚙️ Settings</h2>

<p>Sentinel Builder v1.2</p>

`

}
