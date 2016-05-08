import * as Domain from '../src/Domain'
import * as Chai from "chai"
const should = Chai.should();

describe('Item allow', function() {
  describe('with airport', function() {

    it("should render correctly on allow for specific route with one direction", function() {
      var ia = new Domain.ItemAllow();
      ia.AddAirport("CPH", "LPA");
      ia.allow.should.include('CPH-LPA');
    });

    it("should render correctly on allow for specific route both directions", function() {
      var ia = new Domain.ItemAllow();
      ia.AddAirportBothDirections("CPH", "LPA");
      ia.allow.should.include('CPH-LPA');
      ia.allow.should.include('LPA-CPH');
    });

    it("should render correctly on allow for all route with one direction", function() {
      var ia = new Domain.ItemAllow();
      ia.AddAirportAll("CPH", false);
      ia.allow.should.include('CPH-*');
    });

    it("should render correctly on allow for all route with one direction reversed", function() {
      var ia = new Domain.ItemAllow();
      ia.AddAirportAll("CPH", true);
      ia.allow.should.include('*-CPH');
    });

  });
});