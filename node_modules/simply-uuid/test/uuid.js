'use strict';

var expect = require('chai').expect
  , _ = require('lodash');

var UUID = require('../');

describe('UUID', function () {

  describe('#generate()', function () {

    it('should be able to generate a UUID', function () {
      var uuid = UUID.generate();
      expect(uuid).to.be.ok();
      expect(uuid).to.have.length(36);
    });

    it('should generate 100 random UUID\'s', function () {
      var uuids = [];
      for(var i = 0; i < 100; i++) {
        var uuid = UUID.generate();
        expect(_.contains(uuids, uuid)).to.be.false();
        uuids.push(uuid);
      }
      expect(uuids).to.have.length(100);
    });

  });
});