'use strict';


(function(){
var app = angular.module('gemStoreApp', []);

app.controller('StoreController', function( ) {
 
this.product = gem; 

});

var gem = { 
name: 'cool things',
price: 2.95, 
description: 'A description of cool things',
canPurchase: false,
soldOut: true,}
/*image: {
        url="http://www.overseasgem.com/images/gems.png",
      },;*/

})();

app.controller('PanelController', function( ){

	this.tab =1;

	this.selectTab=function(setTab){

		this.tab= setTab;
	}

	this.selected = function(checkTab) {

		return this.tab === checkTab;

	};


});
