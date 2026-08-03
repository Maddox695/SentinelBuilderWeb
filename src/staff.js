export const staff = {

guards: [

{
name:"John Smith",
rank:"Junior Guard",
salary:3000,
skill:50
},

{
name:"Mike Daniels",
rank:"Senior Guard",
salary:5000,
skill:80
}

],


hire(name){

this.guards.push({

name:name,

rank:"Junior Guard",

salary:3000,

skill:50

})


},


train(index){

if(this.guards[index]){

this.guards[index].skill += 10

}

}

}
