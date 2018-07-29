function testNewBeepIsBeep(){
  var peep = new PeepModel();
  assert.isTrue(peep instanceof PeepModel);
}

function testReturnText(){
  var peep = new PeepModel("test1");
  assert.isTrue(peep.getPeepText() == "test1")
}

testNewBeepIsBeep()
testReturnText()
