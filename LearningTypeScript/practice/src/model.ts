let displayName = "Jess's standing desk"
let inventoryType = 'furniture'
let trackingNumber = 'DF123455'
let createDate = new Date()

type Cost = number | string

let originalCost: Cost

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

function saveInventoryItem(item: InventoryItem) {}

let inventoryItem = getInventoryItem(trackingNumber)

let updatedInventoryItem = inventoryItem

inventoryItem.createDate = new Date()

saveInventoryItem({
	displayName: 'MacBook Pro 15 Retina',
	inventoryType: 'computer',
	trackingNumber: 'MBP123456',
	createDate: new Date(),
})

function clone<T, U>(source: T, options: U): T {
	const serialized = JSON.stringify(source)
	return JSON.parse(serialized)
}

const cloned = clone(inventoryItem, { deep: true })

interface KeyValuePair<TKey, TValue> {
	Key: TKey
	Value: TValue
}

const keyValue1: KeyValuePair<number, number> = { Key: 123, Value: 123 }
const keyValue2: KeyValuePair<string, boolean> = { Key: 'test', Value: true }

declare var Vue: any
