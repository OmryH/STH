
let story = {
    boardNumber: 0,
    currentChapter: null,

    nextChapter: function (chapterNumber) {
        this.boardNumber = 0;
        this.currentChapter = storyboards[Object.keys(storyboards)[chapterNumber]];
        this.nextBoard();
    },

    nextBoard: function(){
        let text = this.currentChapter.boards[this.boardNumber].text;
        $('#story-text').html(text);
        this.setButtons(this.currentChapter.boards[this.boardNumber]);
        this.boardNumber++;
    },

    getChapter: function(name){
        return storyboards[name];
    },

    setButtons: function (board) {
        let buttons = $('.buttons');
        buttons.empty();
        for (let i = 0; i < board.buttons.length; i++) {
            let btn = $('<button/>', {
                    type: 'button',
                    class: 'story-btn',
                    id: 'button-' + i,
                    onclick:  board.buttons[i].methods
                }
            );
            btn.html(board.buttons[i].text);
            buttons.append(btn);
        }
    },

    onload: function () {
        this.nextChapter(0);
    }
};
