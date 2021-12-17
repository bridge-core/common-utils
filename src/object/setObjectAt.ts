import { _walkObject } from './_walkObject'

export function setObjectAt<T = any>(
	path: string,
	obj: any,
	onSet: (data: T) => T
) {
	const keys = path.length === 0 || path === '/' ? [] : path.split('/')
	if (keys.length === 0) return

	const lastKey = keys.pop()!

	_walkObject(keys, obj, (currentObj) => {
		if (typeof currentObj !== 'object') return

		if (lastKey === '*') {
			for (const key in currentObj) {
				currentObj[key] = onSet(currentObj[key])
			}
		} else if (currentObj[lastKey] !== undefined) {
			currentObj[lastKey] = onSet(currentObj[lastKey])
		}
	})
}
