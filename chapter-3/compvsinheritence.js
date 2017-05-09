class Fruit {

}

class PeelableFruit extends Fruit {
  peel() {
    console.log('peeled')
  }
}

class PeelableEdableFruit extends PeelableFruit {
  eat() {
    console.log('yummies')
  }
}

class Apple extends PeelableEdableFruit {
}

class Bannana extends PeelableEdibleFruit {
}

class Pineapple extends Fruit {
}

class NonEdiblePeelableFruit extends PeelableFruit {
  eat() {
    console.log('MASSIVE VOMS/POOPS')
  }
}

class BaneBerry extends NonEdiblePeelableFruit {
}

class ChinaBerry extends NonEdiblePeelableFruit {
}

class SpaceFruit extends Fruit {
  peel() {
    console.log('WOAH YOU CANT DO THAT!')
  }

  eat() {
    console.log('MASSIVE VOMS/POOPS')
  }
}

let createEdible = function () {
  return {
    eat: () => {
      console.log('YUM!')
    }
  }
}

let spaceFruit function() {
  let eat = createNonEdible()
  let peel = createNonPeelable()

  return {
    eat: eat.eat,
    peel: peel.peel
  }
}

// Composition
let createApple = function() {
  let eat = eatFact()

  return {
    eat: eat.eat
  }
}

let createBannana = function() {
  let eat = eatFact()

  return {
    eat: eat.eat
  }
}

let header {
  id: '',
  title: ''
}

let specic = {
  header: {
    id: '',
    title: ''
  }
}
