(function() {
  'use strict';
  angular.module('frontendApp').controller('MainCtrl', function($scope, CampaignService, $q, Title) {

    Title.setTitle('Behind The Curtain');

    $scope.viewModel = {
      moneyByState: null
    };

    CampaignService.getOregon()
      .then(function(result) {
        $scope.viewModel.campaign = result;

      CampaignService.getCampaignMoneyByState('oregon').then(function(result) {
        $scope.viewModel.moneyByState = result;
      });
      CampaignService.getOregonFundingExpenditures().then(function(result) {
        $scope.viewModel.fundingExpenditures = result;
      });

      $q.all([CampaignService.getTopIndividualDonors(),
              CampaignService.getTopBusinessDonors(),
              CampaignService.getTopCommitteeDonors()]).then(function(results) {
                $scope.viewModel.financialSummary.donors = {
                  indiv: results[0],
                  corp: results[1],
                  pac: results[2]
                }
             })
    });
  });
}).call(this);

// (function() {
//   'use strict';
//   angular.module('frontendApp').controller('MainCtrl', function($scope, $location, SessionService, Title) {

//     Title.setTitle('Behind The Curtain');

//   });

// }).call(this);