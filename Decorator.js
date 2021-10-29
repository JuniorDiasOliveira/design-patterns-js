function Junior() {
  this.legs = () => {
    return 2;
  };
}

function AddMoreLegs(junior) { // <--- the decorator 
  const legs = junior.legs();
  junior.legs = () => {
    return legs + 98;
  };
}

const junior = new Junior();

AddMoreLegs(junior)

console.log(junior.legs())


