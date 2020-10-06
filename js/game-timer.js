let gameTimer = {
    weeks: 3,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,

    setNewGameTimer: () => {
        $(".weeks").text("Weeks: " + gameTimer.weeks);
        $(".days").text("Days: " + gameTimer.days);
        $(".hours").text("Hours: " + gameTimer.hours);
        $(".minutes").text("Minutes: " + gameTimer.minutes);
        $(".seconds").hide();
    },



    onload: () => {
      gameTimer.setNewGameTimer();
    }
};
