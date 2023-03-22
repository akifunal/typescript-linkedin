"use strict";
var displayName = "Jess's standing desk";
var inventoryType = 'furniture';
var trackingNumber = 'DF123455';
var createDate = new Date();
var originalCost;
if (typeof originalCost === 'number') {
    var cost = originalCost;
}
else {
    var x = originalCost;
}
var InventoryItemType;
(function (InventoryItemType) {
    InventoryItemType["Computer"] = "computer";
    InventoryItemType["Furniture"] = "furniture";
})(InventoryItemType || (InventoryItemType = {}));
function getInventoryItem(trackingNumber) {
    return {
        displayName: displayName,
        inventoryType: 'computer',
        trackingNumber: trackingNumber,
        createDate: createDate,
        originalCost: 123,
    };
}
function saveInventoryItem(item) { }
var inventoryItem = getInventoryItem(trackingNumber);
var updatedInventoryItem = inventoryItem;
inventoryItem.createDate = new Date();
saveInventoryItem({
    displayName: 'MacBook Pro 15 Retina',
    inventoryType: 'computer',
    trackingNumber: 'MBP123456',
    createDate: new Date(),
});
function clone(source, options) {
    var serialized = JSON.stringify(source);
    return JSON.parse(serialized);
}
var cloned = clone(inventoryItem, { deep: true });
var keyValue1 = { Key: 123, Value: 123 };
var keyValue2 = { Key: 'test', Value: true };
