function MockDocument(){
  this.innerHTML = "asd ad"
  this.mock = 0
}

MockDocument.prototype.getElementById = function(){
  this.mock = new MockDocument()
  return this.mock
}

function testInsertHTML(){
  peep = new PeepAllModel()
  peep.createPeep("oneone")
  controller = new Controller

  controller.getFromModel()
  assert.isTrue(mockDocument.mock.innerHTML === "twotwo")
}

testInsertHTML()
