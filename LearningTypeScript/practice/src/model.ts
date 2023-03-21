let displayName = "Jess's standing desk"
let inventoryType = 'furniture'
let trackingNumber = 'DF123455'
let createDate = new Date()

type Cost = number | string

let originalCost: Cost
originalCost = 425

if (typeof originalCost === 'number') {
	let cost = originalCost
} else {
	let x = originalCost
}

enum InventoryItemType {
	Computer = 'computer',
	Furniture = 'furniture',
}

interface InventoryItem {
	displayName: string
	inventoryType: 'computer' | 'furniture'
	readonly trackingNumber: string
	createDate: Date
	originalCost?: number

	addNote?: (note: string) => string
}

function getInventoryItem(trackingNumber: string): InventoryItem {
	return {
		displayName,
		inventoryType: 'computer',
		trackingNumber,
		createDate,
		originalCost: 123,
	}
}

function saveInventoryItem(item: InventoryItem): void {}

let inventoryItem = getInventoryItem(trackingNumber)

inventoryItem.createDate = new Date()

saveInventoryItem({
	displayName: 'MacBook Pro 15 Retina',
	inventoryType: 'computer',
	trackingNumber: 'MBP123456',
	createDate: new Date(),
})
