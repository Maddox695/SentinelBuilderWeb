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

if(contract){

this.active.push(contract)

return "Contract accepted."

}

return "Invalid contract."

}

}
