import { game } from './game.js'


export const contracts = {

active: [],


available: [

{
client:"Shopping Mall",
type:"Retail Security",
risk:"Low",
guards:2,
payment:10000,
reputation:5
},


{
client:"Warehouse Company",
type:"Asset Protection",
risk:"Medium",
guards:5,
payment:25000,
reputation:10
},


{
client:"VIP Executive",
type:"Close Protection",
risk:"High",
guards:3,
payment:50000,
reputation:20
}

],



accept(index){


const contract = this.available[index]


if(!contract){

return "Invalid contract."

}



if(game.guards < contract.guards){

return "❌ Not enough guards for this contract."

}



game.money += contract.payment

game.reputation += contract.reputation

game.level = Math.floor(game.reputation / 10)


this.active.push(contract)

this.available.splice(index,1)


game.save()


return `✅ Contract completed. Earned R${contract.payment}`


}


}
