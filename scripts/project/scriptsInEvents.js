"use strict";



{
	const scriptsInEvents = {

		async Egame_Event1_Act1(runtime, localVars)
		{
			//alert('common sheet');
			jioGames.cacheAd(adSpot, GamePackage);
		},

		async Egame_Event180_Act3(runtime, localVars)
		{
			//alert('Show ad');
			jioGames.showAd(adSpot, GamePackage);
		},

		async Egame_Event180_Act4(runtime, localVars)
		{
			//alert(runtime.globalVars.Tscore);
			var highscore=runtime.globalVars.Tscore;
			 jioGames.postScore(highscore);
			 console.log('HighScore:',highscore);
		},

		async Efinish_Event1_Act1(runtime, localVars)
		{
			//alert('Finish level');
			jioGames.showAd(adSpot, GamePackage);
		}

	};
	
	self.C3.ScriptsInEvents = scriptsInEvents;
}
