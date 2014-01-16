var player = {
    items: [ [material.wood, 2], [material.metal, 1] ]
}



// Items/Recipes

var item = {
    make: function () {

    }
};

var type = {
    sword: "sword",
    gun: "gun"
};

var basicSword = {
    name: "Basic Sword",
    desc: "A basic sword crafted from easy to acquire materials.",
    type: type.sword,
    minDmg: 1,
    maxDmg: 5,
    buffs: [str.add(5)],
    reqMaterials: [materials.wood, materials.metal]
};