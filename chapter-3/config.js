class Ass {
  exec() {
    console.log('base')
  }
}

class Bg extends Ass {
  exec() {
    console.log('BG')
  }
}

class Ass2 {
  exec() {
    if (configObject()) {
      configObject().exec()
    } else {
      console.log('base')
    }
  }
}

class Bg2 {
  exec() {
    console.log('BG')
  }
}


undefined || javascript

maybe thats a sign you've got too much going on in your space fruit
you've got too much going on in your space fruit
