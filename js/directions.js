let mainDirections = {
  LeftTop: {
    name: 'left',
    angleOne: 210,
    angleTwo: 240,
    anchor: (this.angleTwo - this.angleOne) / 2
  },

  LeftBottom: {
    name: 'left',
    angleOne: 120,
    angleTwo: 150,
    anchor: (this.angleTwo - this.angleOne) / 2
  },
  
  Right: {
    name: 'right',
    angleOne: 345,
    angleTwo: 375,
    anchor: (this.angleTwo - this.angleOne) / 2
  }
};

let localDirections = {
  print: function () {
console.log('in directions');
  }

};