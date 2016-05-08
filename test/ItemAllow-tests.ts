import * as Domain from '../src/Domain'
import * as Chai from "chai"
const should = Chai.should();

describe('Item allow', function() {
  describe('with airport', function() {

    it("should render correctly on allow", function() {
      var ia = new Domain.ItemAllow();
      ia.AddAirport("CPH", "LPA");

      ia.allow.should.include('CPH-LPA');
    });

  });
});