var app = angular.module('monsterApp', ['firebase', 'ngRoute', 'pubnub.angular.service', 'ui.bootstrap','ngAnimate', 'ngSanitize', 'ui.bootstrap']);
app.config(function($routeProvider){
    $routeProvider
    .when('/join', {
      templateUrl: '/src/mChat/views/join.html',
      controller: 'JoinCtrl'
    }).when('/chat', {
      templateUrl: '/src/mChat/views/chat.html',
      controller: 'ChatCtrl'
    })
    .when('/landing', {
        templateUrl: 'landing.html',
        controller: 'landingCtrl'
    })
    .when('/login', {
        templateUrl: 'login/login.html',
        controller: 'loginController'
    })
    .when('/registration', {
        templateUrl: '/src/login/contractorRegistration.html',
        controller: 'conRegController'
    })
    .when('/Gallery', {
        templateUrl: 'mGallery.html',
        controller: 'mGalleryCtrl'
    })
    .when('/Contact', {
     templateUrl: '/contactus.html',
        controller: 'contactCtrl'
        // resolve: {
        //    getProjectsRef: function (gprojectService) {
        //     return gprojectService.getProjects();
        //     }
        // }
    }).
      when('/store', {
        templateUrl: 'partials/store.htm',
        controller: storeController 
      }).
      when('/products/:productSku', {
        templateUrl: 'partials/product.htm',
        controller: storeController
    }).
    when('/cart', {
        templateUrl: 'partials/shoppingCart.htm',
        controller: storeController
    }).
     
    when('/monsterNation', {
     templateUrl: 'monsternation.html',
        controller: 'monsterNationCtrl'
    }).
       when('/werewolf-landing',{
           templateUrl: 'mChat/werewolf-landing.html',
           controller: 'werewolf-landingCtrl'
       }).
        when('/vampire-landing', {
            templateUrl: 'mChat/vampire-landing.html',
            controller: 'vampire-landingCtrl'
        }).
        when('/zombie-landing', {
           templateUrl: 'mChat/zombie-landing.html',
           controller: 'zombie-landingCtrl'
        }).
        when('/suggestion-landing',{
          templateUrl: 'mChat/suggestion-landing.html',
          controller: 'suggestion-landingCtrl'
    })
    .otherwise({
        redirectTo: '/landing'
    })
    });
// create a data service that provides a store and a shopping cart that
// will be shared by all views (instead of creating fresh ones for each view).
app.factory("DataService", function () {

    // create store
    var myStore = new store();

    // create shopping cart
    var myCart = new shoppingCart("MonsterStore");

    // enable PayPal checkout
    // note: the second parameter identifies the merchant; in order to use the 
    // shopping cart with PayPal, you have to create a merchant account with 
    // PayPal. You can do that here:
    // https://www.paypal.com/webapps/mpp/merchant
    myCart.addCheckoutParameters("PayPal", "monsterbus15@yahoo.com");

   
    // return data object with store and cart
    return {
        store: myStore,
        cart: myCart
    };
});
