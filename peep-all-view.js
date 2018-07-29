(function(exports){
  function PeepAllView(){}


PeepAllView.prototype.buildOutput = function(peeps){
  return `<h1>${peeps}</h1>`
}

  exports.PeepAllView = PeepAllView
})(this)
