(function(exports){
  function PeepModel(peepText){
      this.peepText = peepText
  }

  PeepModel.prototype.getPeepText = function(){
    return this.peepText;
  }

exports.PeepModel = PeepModel
})(this)
