export const game = {

    companyName: "Sentinel Security",

    money: 50000,

    reputation: 10,

    level: 1,

    guards: 5,

    k9Units: 1,

    vehicles: 1,

    contracts: 0,


    hireGuard() {

        if(this.money >= 5000){

            this.money -= 5000
            this.guards++

            return "Guard hired successfully."

        }

        return "Not enough money."

    },


    buyVehicle(){

        if(this.money >= 25000){

            this.money -= 25000
            this.vehicles++

            return "Vehicle purchased."

        }

        return "Not enough money."

    },


    trainK9(){

        if(this.money >= 10000){

            this.money -= 10000
            this.k9Units++

            return "K9 unit trained."

        }

        return "Not enough money."

    },


    createContract(){

        this.contracts++

        this.money += 15000

        this.reputation += 5

        return "Security contract completed."

    }

}
