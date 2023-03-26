interface Contact {
	id: number
	name: ContactName
	birthDate?: Date
	status: ContactStatus
}

type ContactName = string

enum ContactStatus {
	Active = 'active',
	Inactive = 'inactive',
	New = 'new',
}

interface UserContact<TExternalId> {
	id: number
	name: string
	birthDate?: Date
	status: ContactStatus
	username: string
	externalId: TExternalId
	loadExternalId(): Promise<TExternalId>
}

function clone<T1, T2 extends T1>(source: T1): T2 {
	if (typeof source !== 'object' || source === null) {
		throw new Error('Object expected')
	}

	return { ...source } as T2
}

const primaryContact: Contact = {
	id: 1,
	name: 'John',
	birthDate: new Date('01-01-1980'),
	status: ContactStatus.Active,
}

const b = clone<Contact, UserContact<string>>(primaryContact)

const dateRange = { startDate: new Date(), endDate: new Date() }
const dateRangeCopy = clone(dateRange)
