let map  = {
  mapProc: function(processing){
      let centerX, centerY;
      let maxArmLength;
      let now, hoursPosition, minutesPosition, secondsPosition;

      processing.setup = function () {
          centerX = processing.width / 2;
          centerY = processing.height / 2;
          maxArmLength = Math.min(centerX, centerY);
          processing.size(200,200);
      };

      processing.draw = function () {
          processing.background(224);

          getTime();

          // Moving hours arm by small increments
          drawArm(hoursPosition, 0.5, 5);

          // Moving minutes arm by small increments
          drawArm(minutesPosition, 0.80, 3);

          // Moving hour arm by second increments
          drawArm(secondsPosition, 0.90, 1);
      };

      function drawArm(position, lengthScale, weight) {
          processing.strokeWeight(weight);
          processing.line(centerX, centerY,
              centerX + Math.sin(position * 2 * Math.PI) * lengthScale * maxArmLength,
              centerY - Math.cos(position * 2 * Math.PI) * lengthScale * maxArmLength);
      }

      function getTime(){
          now = new Date();
          hoursPosition = (now.getHours() % 12 + now.getMinutes() / 60) / 12;
          minutesPosition = (now.getMinutes() + now.getSeconds() / 60) / 60;
          secondsPosition = now.getSeconds() / 60;
      }
  },

  onload: function () {
    // let canvas = $("#my-canvas");
    // console.log(canvas);
    let p = new Processing($("#my-canvas"), this.mapProc);
  }
};
