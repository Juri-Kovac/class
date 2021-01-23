/*--set name to the colour and create changeable rainbow whit click button as a game.
Rainbow colour in order are  red, orange, yellow, green, blue, indigo, violet--*/
/*--do refactor--*/


class Rainbow{
    constructor(colour1) {
        this.colour1  = colour1;
        this.name = colour1;
    }
    setRed(){
        document.querySelector("#r1").style.backgroundColor = this.colour1;
        // document.querySelector(".rainbow").innerHTML = this.name;
        return this;
    }
    setOrange(){
        document.querySelector("#r2").style.backgroundColor = this.colour1;
        // document.querySelector(".rainbow").innerHTML = this.name;

        return this;
    }
    setYellow(){
        document.querySelector("#r3").style.backgroundColor = this.colour1;
        return this;
    }
    setGreen(){
        document.querySelector("#r4").style.backgroundColor = this.colour1;
        return this;
    }
    setBlue(){
        document.querySelector("#r5").style.backgroundColor = this.colour1;
        return this;
    }setIndigo(){
        document.querySelector("#r6").style.backgroundColor = this.colour1;
        return this;
    }
    setViolet(){
        document.querySelector("#r7").style.backgroundColor = this.colour1;
        return this;
    }
    updateColourLine(){

        let counter = 0;
        console.log(this.name);
        let setColour = document.querySelector(".rainbow").innerHTML = this.name;
        if (setColour === null){
            counter++
        }
        return this;
    }

}

let rainbow  = new Rainbow("red",);
let rainbow1 = new Rainbow("orange");
let rainbow2 = new Rainbow( "yellow");
let rainbow3 = new Rainbow("green");
let rainbow4 = new Rainbow("blue");
let rainbow5 = new Rainbow("indigo");
let rainbow6 = new Rainbow("violet");
rainbow.setRed();
rainbow1.setOrange();
rainbow2.setYellow();
rainbow3.setGreen();
rainbow4.setBlue();
rainbow5.setIndigo();
rainbow6.setViolet();

