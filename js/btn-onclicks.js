let methods = {
    continue: {
        method: "story.nextBoard()"
    },

    getNextChapter: function(chapterNumber){

    },

    next: {
        method: 'story.nextChapter("second")'
    },

    question1: {
        method: 'story.nextChapter("first")'
    },

    getMethod: function (btn) {
        if(methods[btn] !== this.getNextChapter()){
            return methods[btn].method;
        } else {

        }

    }
};