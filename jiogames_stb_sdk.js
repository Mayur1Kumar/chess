function Jiogames() {
    // If its not called as a constructor,
    if (this instanceof arguments.callee == false) {
        /*
                This is used by android to get topScore on exit
        */
        if (!window.topScore) {
            console.log("Jiogames: on exit no score to post");
            window.DroidHandler.postScore(0);
        } else {
            //@param window.topScore, Integer
            window.DroidHandler.postScore(window.topScore);
        }
        return;
    }

    console.log("Jiogames: Initialized SDK!");

    var self = this;
    this.version = "1.0.2";
    var firstAdDelay = false;
    

    this.init = function() {
        if (window.DroidHandler) {
            console.log("JioGames: init");
            window.DroidHandler.init();
        }
    }

    this.postScore = function(score) {
        if (!score) {
            console.log("Jiogames: postScore() no value ", score);
        }
        // window.topScore is integer
        if(window.DroidHandler){
            console.log("Jiogames: postScore() "+score);
            window.DroidHandler.postScore(score);
        }
    }

    this.cacheAd = function(adKeyId, source) {
        console.log("Jiogames: cacheAd() adkeyId: "+adKeyId+" source: "+source+" DroidHandler "+window.DroidHandler);
        if (!adKeyId || !source) {
            adKeyId ? null : (console.log("Jiogames: cacheAd() no adKeyId to cacheAd ", adKeyId));
            source ? null : (console.log("Jiogames: cacheAd() no source to cacheAd ", source));
            return;
        }

        if(window.DroidHandler){
            window.DroidHandler.cacheAd(adKeyId, source);
        }
        if (!firstAdDelay) {
            setTimeout(function(){ 
                firstAdDelay = true;
            }, 20000);
        }
    }

    this.cacheRewardedAd = function(adKeyId, source) {
        console.log("Jiogames: cacheAdRewardedVideo() for ", adKeyId +" source: "+source+" DroidHandler "+window.DroidHandler);
        if (!adKeyId || !source) {
            adKeyId ? null : (console.log("Jiogames: cacheAdRewardedVideo() no adKeyId to cacheAd ", adKeyId));
            source ? null : (console.log("Jiogames: cacheAdRewardedVideo() no source to cacheAd ", source));
            return;
        }

        if(window.DroidHandler){
            window.DroidHandler.cacheAdRewardedVideo(adKeyId, source);
        }
    }

    this.showAd = function(adKeyId, source) {
        console.log("Jiogames: showAd() adKeyId: "+adKeyId+" source "+source+" firstAdDelay "+firstAdDelay+" DroidHandler "+window.DroidHandler);
        if (!adKeyId || !source) {
            adKeyId ? null : (console.log("Jiogames: showAd() no adKeyId to cacheAd ", adKeyId));
            source ? null : (console.log("Jiogames: showAd() no source to cacheAd ", source));
            return;
        }
        if(window.DroidHandler && firstAdDelay){
            window.DroidHandler.showAd(adKeyId, source);
        }
    }

    this.showRewardedAd = function(adKeyId, source) {
        console.log("Jiogames: ShowRewardedVideo() adKeyId: "+adKeyId+" source "+source+" DroidHandler "+window.DroidHandler);
        if (!adKeyId || !source) {
            adKeyId ? null : (console.log("Jiogames: ShowRewardedVideo() no adKeyId to cacheAd ", adKeyId));
            source ? null : (console.log("Jiogames: ShowRewardedVideo() no source to cacheAd ", source));
            return;
        }
        if(window.DroidHandler){
            window.DroidHandler.ShowRewardedVideo(adKeyId, source);
        }
    }
    document.addEventListener("visibilitychange", onVisibilityChanged, false);    
    function onVisibilityChanged() {
        if (document.hidden || document.mozHidden || document.webkitHidden || document.msHidden) {
            //Pause Game
            console.log("Jiogames: Pause Game");
        } else {		
            //Resume Game	
            console.log("Jiogames: Resume Game");
        }
    };
}