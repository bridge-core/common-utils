import { walkObject } from './walkObject'

export function hasAnyPath(obj: string, paths: string[]) {
	let hasPath = false

	for (const path of paths) {
		walkObject(path, obj, () => (hasPath = true))

		if (hasPath) return true
	}

	return false
}
