let storyboards = {
    wordSystem: { // 0
        boards: [
            {
                text: `This is the word <span class='animated separate good' data-delay='0/1'>system</span>
                        This is the <span class='animated separate bounce good' data-delay='0/0.2'>second line</span>`,
                buttons: [
                    {
                        text: "Nice.",
                        methods: "story.nextChapter(1)"
                    }
                ]
            }
        ]
    },

    first: { // 1
        boards: [
            {
                text:"This is the initial text\n" +
                    "we are starting with and there will be\n" +
                    "more to come In the future. this is for checking what will happen if I just keep writing\n" +
                    "This is the initial text\n" +
                    "we are starting with and there will be\n" +
                    "One more line",
                buttons: [
                    {
                        text: "Continue",
                        methods: "story.nextBoard()"
                    },
                    {
                        text: "Don't care.",
                        methods: "story.nextChapter(2)"
                    }
                ]
            },
            {
                text: "This is the first text to be tested. It is written in one line so I can see what this does when entered in the box",
                buttons: [
                    {
                        text: "Continue",
                        methods: "story.nextBoard()"
                    }
                ]
            },
            {
                text: "This is the second text to be tested. It is much shorter",
                buttons: [
                    {
                        text: "Next",
                        methods: "story.nextChapter(2)"
                    }
                ]
            }
        ]
    },

    second: { // 2
        boards: [
            {
                text:"This is the SECOND text\n" +
                    "we are starting with and there will be\n" +
                    "more to come In the future. this is for checking what will happen if I just keep writing\n" +
                    "This is the SECOND text\n" +
                    "we are starting with and there will be\n" +
                    "more to come In the future. this is for checking what will happen if I just keep writing",
                buttons: [
                    {
                        text: "Continue",
                        methods: "story.nextBoard()"
                    }
                ]
            },
            {
                text: "This is the SECOND text to be tested. It is written in ONE line so I can see what this does when entered in the box",
                buttons: [
                    {
                        text: "Continue",
                        methods: "story.nextBoard()"
                    }
                ]
            },
            {
                text: "This is the SECOND second text to be tested. It is MUCH shorter",
                buttons: [
                    {
                        text: "Next",
                        methods: "story.nextChapter(0)"
                    }
                ]
            }
        ]
    }
};
