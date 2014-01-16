// Sample crafting script

var playerMaterials = {
    wood: 0,
    metal: 0
};

var checkMaterials = function (materials) {
    // check if player has enough materials to make item
    var m = materials,
        reqsMet = false;

    if (m.wood >= 2 && m.metal >= 1)
        reqsMet = true;

    return reqsMet;
};

function updaterMaterialQty() {

}

function Consume(qty) {

}

function makeItem() {
    alert("You made an item!");
}


$(function () {

    $("#make").on("click", function (e) {
        var qtyWood = $("#qty-wood").val(),
            qtyMetal = $("#qty-metal").val(),
            hasEnough = checkMaterials({ wood: qtyWood, metal: qtyMetal });

        if (hasEnough)
            makeItem();
        else
            alert("You did not have enough materials to make an item.");
    });

});