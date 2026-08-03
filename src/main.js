import './style.css'
import { renderHome } from './ui.js'
import { game } from './game.js'
import { staff } from './staff.js'
import { contracts } from './contracts.js'


document.querySelector('#app').innerHTML = renderHome()

const output = document.getElementById('output')



function showEmpire(){

output.innerHTML = `

<h2>🛡️ Sentinel Security Empire</h2>


<div class="card">

<p>🏢 Company: ${game.companyName}</p>

<p>💰 Cash: R${game.money}</p>

<p>⭐ Reputation: ${game.reputation}</p>

<p>📈 Level: ${game.level}</p>

<p>👮 Guards: ${game.guards}</p>

<p>🐕 K9 Units: ${game.k9Units}</p>

<p>🚓 Vehicles: ${game.vehicles}</p>

<p>📄 Active Contracts: ${contracts.active.length}</p>

</div>


<button id="staffBtn">
👮 Staff
</button>


<button id="contractBtn">
📄 Contracts
</button>


`

document.getElementById('staffBtn')
.onclick = showStaff


document.getElementById('contractBtn')
.onclick = showContracts


}




function showStaff(){

output.innerHTML = `

<h2>👮 Staff Management</h2>


<button id="hireStaff">
Hire Guard
</button>


${staff.guards.map((g,index)=>`

<div class="card">

<h3>${g.name}</h3>

<p>${g.rank}</p>

<p>Skill: ${g.skill}%</p>

<p>Salary: R${g.salary}</p>


<button onclick="train(${index})">
Train
</button>


</div>


`).join("")}


`


document.getElementById('hireStaff')
.onclick=()=>{

let name=prompt("Guard name")

if(name){

staff.hire(name)

showStaff()

}

}


window.train=(index)=>{

staff.train(index)

showStaff()

}


}




function showContracts(){

output.innerHTML = `

<h2>📄 Available Contracts</h2>


${contracts.available.map((c,index)=>`

<div class="card">

<h3>${c.client}</h3>

<p>Type: ${c.type}</p>

<p>Risk: ${c.risk}</p>

<p>Guards Needed: ${c.guards}</p>

<p>Payment: R${c.payment}</p>

<p>Reward: ⭐${c.reputation}</p>


<button onclick="acceptContract(${index})">

Accept Contract

</button>


</div>


`).join("")}


<h2>Active Contracts</h2>


${contracts.active.map(c=>`

<div class="card">

${c.client}

</div>

`).join("")}


`


window.acceptContract=(index)=>{


const result =
contracts.accept(index)


output.innerHTML += `

<p>✅ ${result}</p>

`

}


}




document.getElementById('empire')
.onclick=showEmpire



document.getElementById('new')
.onclick=()=>{

output.innerHTML="<h2>New Project</h2>"

}



document.getElementById('open')
.onclick=()=>{

output.innerHTML="<h2>Load Project</h2>"

}



document.getElementById('generate')
.onclick=()=>{

output.innerHTML="<h2>AI Builder</h2>"

}



document.getElementById('settings')
.onclick=()=>{

output.innerHTML="<h2>Settings</h2>"

}
