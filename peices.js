  class Pawn{
    constructor(color, type, posistion){
      this.color = color
      this.type = type
      this.posistion = posistion;
    }
    get Type(){
      return this.type;
    }
    movePeice(x, y){
      this.posistion = [x, y]
    }
  }
  class Rook{
    constructor(color, type){
      this.color = color
      this.type = type
    }
    get Type(){
      return this.type;
    }
  }
  class knight{
    constructor(color, type){
      this.color = color
      this.type = type
    }
    get Type(){
      return this.type;
    }
  }
  class Bishop{
    constructor(color, type){
      this.color = color
      this.type = type
    }
    get Type(){
      return this.type;
    }
  }
  class Queen{
    constructor(color, type){
      this.color = color
      this.type = type
    }
    get Type(){
      return this.type;
    }
  }
  class King{
    constructor(color, type){
      this.color = color
      this.type = type
    }
    get Type(){
      return this.type;
    }
  }
  