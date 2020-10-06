let combat = {
  board: '',
  context: '',

  onload: () => {
    combat.canvas = document.getElementById("combat-board");
    combat.context = combat.canvas.getContext('2d');
  }
};
