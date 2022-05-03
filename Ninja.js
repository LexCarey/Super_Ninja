class Ninja {
    constructor(name, health = 50, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName = () => {
        console.log("Hey, I'm " + this.name + "!");
    }

    showStats = () => {
        console.log("Ninja's name is " + this.name);
        console.log("Ninja's health is " + this.health);
        console.log("Ninja's speed is " + this.speed);
        console.log("Ninja's strength is " + this.strength);
    }

    drinkSake = () => {
        this.health += 3;
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();


class Sensei extends Ninja {
    constructor(name) {
        super(name, 200, 10, 10);
        this.wisdom = 10;
    }

    speakWisdom = () => {
        this.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }

    showStats = () => {
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + this.speed + ", Strength: " + this.strength + " Wisdom: " + this.wisdom);
    }
}

const sensei1 = new Sensei("Master Splinter");
sensei1.speakWisdom();
sensei1.showStats();