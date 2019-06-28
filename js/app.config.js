  profiles.config(function($stateProvider , $urlRouterProvider) {
    var home = {
      name: 'home',
      url: '/',
      templateUrl: 'cards.htm',
      controller:'cardsController'
    };
  
    var edit = {
      name: 'edit',
      url: '/edit',
      templateUrl: 'js/editForm/editForm.htm',
      controller:'editForm'
    };
  
    $stateProvider.state(home);
    $stateProvider.state(edit);

    $urlRouterProvider.otherwise("/")
  });