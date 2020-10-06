let healer = {

    strength: {
        name: "Strength",
        value: 0
    },

    agility: {
        name: "Agility",
        value: 0
        
    },

    charisma: {
        name: "Charisma",
        value: 0
    },

    intelligence: {
        name: "Intelligence",
        value: 0
    },

    onload: function() {
        $('#stat-strength').html("Strength: " + this.strength.value);
        $('#stat-agility').html("Agility: " + this.strength.value);
        $('#stat-charisma').html("Charisma: " + this.strength.value);
        $('#stat-intelligence').html("Intelligence: " + this.strength.value);
    },

    setStats: function () {

    }
};
