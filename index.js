angular.module('demo1', [])
.controller('DemoCtrl', function() {
  var vm = this;

  vm.info = '啊哈';
  vm.infoImage = {
    id: 'img-id',
    name: 'img-name'
  };
  vm.infoText = {
    id: 'txt-id',
    name: 'txt-name'
  };
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
    // transclude: true,
    scope: {
      // type: '=',
      // info: '='
      v1: '=',
      v2: '='
    },
    templateUrl: 'demo1.tpl.html',
    // template: '<dm1 v1="directive v1" v2="directive v2"></dm1>',
    // template: function(element, attrs) {
    //   // ng-transclude
    //   switch (attrs.type) {
    //     case '1':
    //       return '<dm1 p="{{info}}" v1="directive v1" v2="directive v2"></dm1>';
    //     case '2':
    //       return '<dm2 p="info"></dm2>';
    //   };
    // },
    link: function(scope, element) {
      console.log(11111);
    }
  };
})
.component('tplImage', {
  templateUrl: 'image.tpl.html',
  // template: '<div>这是Demo2 {{ ::comp.p }}</div>',
  controller: 'DmCtrl',
  controllerAs: 'tpl',
  bindings: {
    info: '<'
  }
})
.component('tplText', {
  templateUrl: 'text.tpl.html',
  // template: '<div>这是Demo2 {{ ::comp.p }}</div>',
  controller: 'DmCtrl',
  controllerAs: 'tpl',
  bindings: {
    info: '<'
  }
})
.directive('popup', function($compile) {
  return {
    restrict: 'A',
    // transclude: true,
    scope: {
      type: '@',
      info: '=infoData'
    },
    // templateUrl: function(element, attrs) {
    //   console.log(attrs.type);
    //
    //   return attrs.type + '.tpl.html';
    //   // return 'image.tpl.html';
    // },
    // template: function(element, attrs) {
    //   // return '<tpl-' + attrs.type + '></tpl-' + attrs.type + '>';
    //   var tpl = '';
    //   switch (attrs.type) {
    //     case 'image':
    //       tpl = '<tpl-image info="demo.infoImage"></tpl-image>';
    //       break;
    //     default:
    //       tpl = '<tpl-text info="demo.infoText"></tpl-text>';
    //   }
    //
    //   return tpl;
    // }
    // compile: function(element, attrs) {
    //   return {
    //     pre: function(scope, element, attrs) {
    //       console.log(44, scope.info, attrs.infoData);
    //       element.attr('info', attrs.infoData);
    //     }
    //   };
    // }
    link: function(scope, element, attrs) {
      console.log(88888, attrs.type);
      var tpl = '';
      switch (attrs.type) {
        case 'image':
          tpl = '<tpl-image info="info"></tpl-image>';
          break;
        default:
          tpl = '<tpl-text info="info"></tpl-text>';
      }
      element.append($compile(tpl)(scope));
    }
  };
});
