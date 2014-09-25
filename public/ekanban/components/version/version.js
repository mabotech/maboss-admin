'use strict';

angular.module('maboApp.version', [
  'maboApp.version.interpolate-filter',
  'maboApp.version.version-directive'
])

.value('version', '0.1');
