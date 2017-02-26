angular.module('demo1', [])
.controller('DemoCtrl', function() {
  var vm = this;

  vm.info = '啊哈';
})
.component('dm1', {
  // templateUrl: 'http://7xqxox.com1.z0.glb.clouddn.com/demo.tpl.html',
  templateUrl: 'demo.tpl.html',
  // template: '<div>这是Demo1 {{ ::comp.p }}</div>',
  controller: 'DmCtrl',
  // controllerAs: 'comp',
  controllerAs: 'sco',
  bindings: {
    v1: '=',
    v2: '='
  }
})
.component('dm2', {
  templateUrl: 'demo.tpl.html',
  // template: '<div>这是Demo2 {{ ::comp.p }}</div>',
  controller: 'DmCtrl',
  controllerAs: 'comp',
  bindings: {
    p: '<'
  }
})
.controller('DmCtrl', function() {
  var vm = this;

  vm.v1 = '3';
  vm.v2 = '8';
})
.directive('te', function() {
  return {
    restrict: 'A',
    transclude: true,
    scope: {
      type: '=',
      info: '='
    },
    template: function(element, attrs) {
      // ng-transclude
      switch (attrs.type) {
        case '1':
          return '<dm1 p="{{info}}" v1="directive v1" v2="directive v2" ng-transclude></dm1>';
        case '2':
          return '<dm2 p="info"></dm2>';
      };
    },
    link: function(scope, element) {
      console.log(11111);
    }
  };
});
