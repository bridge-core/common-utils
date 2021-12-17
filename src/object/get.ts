export function get(obj: any, path: string[], defaultValue?: any): any {
	if (path.length === 0) return obj

	let current = obj
	for (let i = 0; i < path.length; i++) {
		if (current === undefined) return defaultValue
		current = current[path[i]]
	}

	return current
}
