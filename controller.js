(function(exports){
  function Controller (peepAll){
    this.peepAllModel = new PeepAllModel();
    this.peepAllView = new PeepAllView(peepAll);
  }

  Controller.prototype.setEventListeners = function(){
    document.getElementById('button')
    .addEventListener('click', this.getFromModel.bind(this));
  }

  Controller.prototype.getFromModel = function(){
    let peeps = this.peepAllModel.getAllPeeps()
    this.displayResult(peeps);
  }

  Controller.prototype.displayResult = function(peeps){
    document.getElementById('output')
    .innerHTML = this.peepAllView.buildOutput(peeps);
  }


  exports.Controller = Controller
})(this)
