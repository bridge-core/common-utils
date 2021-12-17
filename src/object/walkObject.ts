import { _walkObject } from './_walkObject'

export function walkObject(
	path: string,
	obj: any,
	onReach: (data: any) => void
) {
	const keys = path.length === 0 || path === '/' ? [] : path.split('/')
	return _walkObject(keys, obj, onReach)
}
