(function(exports){
  function PeepSeeALLView(PeepAllModel){
    this.peep = PeepAllModel
  }

  PeepSeeALLView.prototype.buildOutput = function(){
    peeps = this.peep.peeps
    array = []
    arrayLength = peeps.length
    for(var i = 0; i < arrayLength; i++){

      peepLink = `<a href="http://localhost:8080#peeps/${i}">`
      peepText = `notes[i].peepText.substring(0,20)`
    }
    return array.join("")
  }

  exports.PeepSeeALLView = PeepSeeALLView
})(this)
