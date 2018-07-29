(function(exports){
  function PeepAllModel(){
    this.peeps = []
  }

  PeepAllModel.prototype.storePeep = function(peep){
    this.peeps.push(peep);
  }

  PeepAllModel.prototype.getAllPeeps = function(){
    return this.peeps
  }

  PeepAllModel.prototype.createPeep = function(string){
    peep = new PeepModel(string)
    this.storePeep(peep);
  }

 exports.PeepAllModel = PeepAllModel
})(this);
