let main = {

    findBoardInStory: function(name){
        let chapters = Object.keys(storyboards);
        for(let i = 0; i < chapters.length; i++){
            if (chapters[i] === name){
                return i;
            }
        }

        return -1;
    },

    randomizeStats: function () {

    },

    getMap: function () {

        let mySketch = function (p) {
            p.setup = function () {
                p.createCanvas(600, 300);
                p.background(255);
            }
        };
        new p5(mySketch, 'map');
    },

    tenSecInterval: function () {

    },

    //TODO: clean up p5 related objects - redesign map system

    onload: function () {
        // this.getMap();
        // let canvas = $('.p5Canvas');
        // let map = $('.map');
        // canvas.attr("id", "canvas");
        // map.append(canvas);
        // localDirections.print();
        // map.onload();
        combat.onload();
        story.onload();
        healer.onload();
        wordSys.onload();
        gameTimer.onload();
        vines.onload();
    }
};



window.onload = main.onload.bind(main);
