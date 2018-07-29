function testViewInstatiation(){
  var peepAllView = new PeepAllView()
  assert.isTrue(peepAllView instanceof PeepAllView)
}

function testBuildOutput(){
  var peepAllModel = new PeepAllModel()
  peepAllModel.createPeep("test6")
  var peepAllView = new PeepAllView(peepAllModel)
  assert.isTrue(peepAllView.buildOutput() === "<h1>test6</h1>")
}

testViewInstatiation();
testBuildOutput();
