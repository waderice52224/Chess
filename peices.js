class Peices {
    constructor(color, type) {
      this.color = color;
      this.type = type;
      this.isAlive = true;
    }
  }
  class Pawn extends Peices{
    constructor(){
      super(color, color, this.isAlive);
    }
  }
  class Rook extends Peices{
    constructor(){
      super(color, color, this.isAlive);
    }
  }
  class knight extends Peices{
    constructor(){
      super(color, color, this.isAlive);
    }
  }
  class Bishop extends Peices{
    constructor(){
      super(color, color, this.isAlive);
    }
  }
  class Queen extends Peices{
    constructor(){
      super(color, color, this.isAlive);
    }
  }
  class King extends Peices{
    constructor(){
      super(color, color, this.isAlive);
    }
  }