let vines = {
  points: [
    {x: 0, y: 0},
    {x: 25, y: 12},
    {x: 50, y: 40},
    {x: 75, y: 100}
  ],

  draw: () => {
    combat.context.beginPath();
    combat.context.moveTo(0, 0);
    combat.context.lineTo(100, 100);
    combat.context.lineWidth = 1;
    combat.context.strokeStyle = 'rgb(255,0,0)';
    combat.context.stroke();
  },

  // bSpline
  drawVine: (points) => {
    let context = combat.context;
    let ax, ay, bx, by, cx, cy, dx, dy;
    context.beginPath();
    for (let t = 0; t < 1; t += 0.1) {
      ax = (-points[0].x + 3 * points[1].x - 3 * points[2].x + points[3].x) / 6;
      ay = (-points[0].y + 3 * points[1].y - 3 * points[2].y + points[3].y) / 6;
      bx = (points[0].x - 2 * points[1].x + points[2].x) / 2;
      by = (points[0].y - 2 * points[1].y + points[2].y) / 2;
      cx = (-points[0].x + points[2].x) / 2;
      cy = (-points[0].y + points[2].y) / 2;
      dx = (points[0].x + 4 * points[1].x + points[2].x) / 6;
      dy = (points[0].y + 4 * points[1].y + points[2].y) / 6;
      context.moveTo(
          ax * Math.pow(t, 3) + bx * Math.pow(t, 2) + cx * t + dx,
          ay * Math.pow(t, 3) + by * Math.pow(t, 2) + cy * t + dy
      );
      context.lineTo(
          ax * Math.pow(t + 0.1, 3) + bx * Math.pow(t + 0.1, 2) + cx * (t + 0.1) + dx,
          ay * Math.pow(t + 0.1, 3) + by * Math.pow(t + 0.1, 2) + cy * (t + 0.1) + dy
      );
    }
    context.stroke();
  },

  basic:  {
    fps: 10,
    increment: 0.05,
    branches: [
        {
          points: [
            {x: 0, y: 0},
            {x: 25, y: 12},
            {x: 50, y: 40},
            {x: 75, y: 100}
          ],
          direction: 0
        }
      ],
    animateVine: (branches, t) => {
      const context = combat.context;
      const fps = vines.basic.fps;
      const increment = vines.basic.increment;
      for (let i = 0; i < branches.length; i++) {
        const ax = (-branches[i].points[0].x + 3 * branches[i].points[1].x - 3 * branches[i].points[2].x + branches[i].points[3].x) / 6;
        const ay = (-branches[i].points[0].y + 3 * branches[i].points[1].y - 3 * branches[i].points[2].y + branches[i].points[3].y) / 6;
        const bx = (branches[i].points[0].x - 2 * branches[i].points[1].x + branches[i].points[2].x) / 2;
        const by = (branches[i].points[0].y - 2 * branches[i].points[1].y + branches[i].points[2].y) / 2;
        const cx = (-branches[i].points[0].x + branches[i].points[2].x) / 2;
        const cy = (-branches[i].points[0].y + branches[i].points[2].y) / 2;
        const dx = (branches[i].points[0].x + 4 * branches[i].points[1].x + branches[i].points[2].x) / 6;
        const dy = (branches[i].points[0].y + 4 * branches[i].points[1].y + branches[i].points[2].y) / 6;
        context.beginPath();
        context.moveTo(
            ax * Math.pow(t, 3) + bx * Math.pow(t, 2) + cx * t + dx,
            ay * Math.pow(t, 3) + by * Math.pow(t, 2) + cy * t + dy
        );
        context.lineTo(
            ax * Math.pow(t + increment, 3) + bx * Math.pow(t + increment, 2) + cx * (t + increment) + dx,
            ay * Math.pow(t + increment, 3) + by * Math.pow(t + increment, 2) + cy * (t + increment) + dy
        );
        context.stroke();
      }
      if (t >= 1) {
        let newBranches = [];
        for (let j = 0; j < branches.length; j++) {
          for (let k = 0; k < 2; k++) {
            let direction = branches[j].direction - (Math.random() * 180 - 90);
            let length = Math.random() * 20 + 5;

            let newPoint = {
              x: branches[j].points[3].x + Math.sin(Math.PI * direction / 180) * length,
              y: branches[j].points[3].y - Math.cos(Math.PI * direction / 180) * length
            };

            newBranches.push({
              points: [
                  branches[j].points[1],
                  branches[j].points[2],
                  branches[j].points[3],
                  newPoint
              ],
              direction: direction
            });
          }
        }
        while (newBranches.length > 10) {
          newBranches.splice(Math.floor(Math.random() * newBranches.length), 1);
        }
        vines.basic.branches = newBranches;
        setTimeout(() => {
          requestAnimationFrame(() => {
            vines.basic.animateVine(newBranches, 0);
          });
        }, 1000 / fps);
      }
      else {
        setTimeout(() => {
          requestAnimationFrame(() => {
            vines.basic.animateVine(vines.basic.branches,t + increment);
          });
        }, 1000 / fps);
      }
    },
  },



  onload: () => {
    // vines.drawVine(vines.points);
    vines.basic.animateVine(vines.basic.branches, 0);
  }
};




