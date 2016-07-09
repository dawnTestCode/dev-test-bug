/* Used Tutorial here: https://nicolas.perriault.net/code/2013/testing-frontend-javascript-code-using-mocha-chai-and-sinon/ */
var expect = chai.expect;

describe("Code", function() {
  var sandbox;
  
  
  describe("#extractIdsFromRows", function() {
    it("beerlist without data should complain", function() {
      expect(function() {
        (new BeerList.extractIdsFromRows())
      }).to.throw(Error);
    })

    it("beerlist with empty data should contain no beer", function() {
        var beers = BeerList.setData([],function(){
          return BeerList.data
        }) 
        expect(beers).to.be.empty
    })

    it("beerlist with no selected items should return no ids", function() {
        var ids = BeerList.extractIdsFromRows([])
        expect(ids).to.be.empty
    })    

     it("beerlist with selected items should return item ids", function() {
        var ids = BeerList.extractIdsFromRows([{"id":"bar"},{"id":"beer"}])
        expect(ids).to.contain("beer")
        expect(ids).to.contain("bar")
        expect(ids).to.have.length.of(2)
    })
  })
  describe("Mocks", function() {
    describe("#extractIdsFromRows", function() {
      beforeEach(function() {
      // create a sandbox
      sandbox = sinon.sandbox.create()
      // stub some methods
      sandbox.stub(BeerList, "getSelectedRowsFromTable")
      sandbox.stub(BeerList, "extractIdsFromRows", function(){
        return ["foo","bar"]
      })
    })

    afterEach(function() {
      // restore the environment as it was before
      sandbox.restore();
    })
      it("checked row object should include ids of checked rows", function() {
          var object = BeerList.getCheckedRowObject()
          expect(object.ids).to.contain("bar")
          sinon.assert.calledOnce(BeerList.getSelectedRowsFromTable)
          sinon.assert.calledOnce(BeerList.extractIdsFromRows)
      }) 
    })
  })
})