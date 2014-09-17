'use strict';

describe('maboApp.version module', function() {
  beforeEach(module('maboApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
