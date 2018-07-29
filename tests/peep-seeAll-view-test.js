function testInstatiation(){
  var peepSeeAllView = new PeepSeeALLView()
  assert.isTrue(peepSeeAllView instanceof PeepSeeALLView)
}

function testStorePeepsInArray(){
  var PeepAllModel = new PeepAllModel()
  var peepSeeAllView = new PeepSeeALLView(PeepAllModel)
  assert.isTrue(peepSeeAllView.peep === PeepAllModel)
}

function testBuildOutput(){
  var peepAllModel = new PeepAllModel()
  peepAllModel.createPeep("test8")
  var peepSeeAllView = new PeepSeeALLView(peepAllModel)
  assert.isTrue(peepSeeAllView.buildOutput() === `<ul><li><a href="http://localhost:8080#peeps/0">test8</a></li></ul>`)
}


testInstatiation();
testStorePeepsInArray();
testBuildOutput();
