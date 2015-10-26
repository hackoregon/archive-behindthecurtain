(function() {
  'use strict';
  angular.module('frontendApp', ['ngCookies', 'ngResource', 'ngSanitize', 'ngRoute']).config(function($routeProvider) {
    return $routeProvider.when('/', {
      templateUrl: 'views/home.html',
      controller: 'MainCtrl'
    }).when('/search', {
      templateUrl: 'views/search.html',
      controller: 'SearchCtrl'
    }).when('/results/:searchType?/:searchTerm?', {
      templateUrl: 'views/results.html',
      controller: 'ResultsCtrl'
    }).when('/campaign/:campaignId', {
      templateUrl: 'views/campaign.html',
      controller: 'CampaignCtrl'
    }).when('/oregon', {
      templateUrl: 'views/campaign.html',
      controller: 'OregonCtrl'
    }).when('/measures', {
      templateUrl: 'views/measures.html',
      controller: 'MeasuresCtrl'
    }).when('/donors', {
      templateUrl: 'views/donors.html',
      controller: 'DonorsCtrl'
    }).when('/candidates', {
      templateUrl: 'views/candidates.html',
      controller: 'CandidatesCtrl'
    }).when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    }).when('/faq', {
      templateUrl: 'views/faq.html',
      controller: 'FaqCtrl'
    }).when('/contact', {
      templateUrl: 'views/contact.html',
      controller: 'ContactCtrl'
    }).when('/acquisition', {
      templateUrl: 'views/acquisition.html',
      controller: 'AcquisitionCostsCtrl'
    }).otherwise({
      redirectTo: '/'
    });
  });
  // angular.module('app').config(function ($locationProvider) {
  //   $locationProvider.html5Mode(true);
  // });
}).call(this);


// (function() {
//   'use strict';
//   angular.module('frontendApp', ['ngCookies', 'ngResource', 'ngSanitize', 'ngRoute']).config(function($routeProvider) {
//     return $routeProvider.when('/', {
//       templateUrl: 'views/home.html',
//       controller: 'MainCtrl'
//     }).when('/browse', {
//       templateUrl: 'views/browse.html',
//       controller: 'BrowseCtrl'
//     }).when('/myballot/:raceLevel?', {
//       templateUrl: 'views/myballot.html',
//       controller: 'MyBallotCtrl'
//     }).when('/search', {
//       templateUrl: 'views/search.html',
//       controller: 'SearchCtrl'
//     }).when('/results/:searchType?/:searchTerm?', {
//       templateUrl: 'views/results.html',
//       controller: 'ResultsCtrl'
//     }).when('/campaign/:campaignId', {
//       templateUrl: 'views/campaign.html',
//       controller: 'CampaignCtrl'
//     }).when('/oregon', {
//       templateUrl: 'views/campaign.html',
//       controller: 'OregonCtrl'
//     }).when('/spend/:campaignId/:contributorId?', {
//       templateUrl: 'views/spend.html',
//       controller: 'SpendCtrl'
//     }).when('/where/:campaignId/:raceLevel?', {
//       templateUrl: 'views/where.html',
//       controller: 'WhereCtrl'
//     }).when('/worth/:campaignId/:contributorId?', {
//       templateUrl: 'views/worth.html',
//       controller: 'WorthCtrl'
//     }).when('/calculate', {
//       templateUrl: 'views/calculate.html',
//       controller: 'CalculateCtrl'
//     }).when('/about', {
//       templateUrl: 'views/about.html',
//       controller: 'AboutCtrl'
//     }).when('/faq', {
//       templateUrl: 'views/faq.html',
//       controller: 'FaqCtrl'
//     }).when('/sandbox', {
//       templateUrl: 'views/sandbox.html',
//       controller: 'SandboxCtrl'
//     }).when('/register', {
//       templateUrl: 'views/register.html',
//       controller: 'RegisterCtrl'
//     }).when('/hack_pac', {
//       templateUrl: 'views/hack_pac.html',
//       controller: 'HackPacCtrl'
//     }).when('/contact', {
//       templateUrl: 'views/contact.html',
//       controller: 'ContactCtrl'
//     }).otherwise({
//       redirectTo: '/'
//     });
//   });

// }).call(this);