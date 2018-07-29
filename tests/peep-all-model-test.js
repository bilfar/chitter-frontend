function testInstatiation(){
  var peepAllModel = new PeepAllModel()
    assert.isTrue(peepAllModel instanceof PeepAllModel)
}

function testIfArray(){
  var peepAllModel = new PeepAllModel()
  assert.isTrue(Array.isArray(peepAllModel.peeps))
}

function testStorePeepsInArray(){
  var peepModel = new PeepModel()
  var peepAllModel = new PeepAllModel()
  peepAllModel.storePeep("test3")
  assert.isTrue(peepAllModel.peeps.includes("test3"))
}

function testGetAllPeeps(){
  peepModel = new PeepModel()
  peepALlModel = new PeepAllModel()
  peepAllModel.storePeep("test4")
  assert.isTrue(peepAllModel.getAllPeeps().includes("test4"))
}

function testCreateNewPeep(){
  var peepAllModel = new PeepAllModel()
  peepAllModel.create("test5")
  assert.isTrue(peepAllMOdel.getAllPeeps()[0].peepText === "test5")
}

testInstatiation();
testIfArray();
testStorePeepsInArray();
testGetAllPeeps();
testCreateNewPeep();
