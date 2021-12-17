export async function hash(data: Uint8Array) {
	return new Uint8Array(await crypto.subtle.digest('sha-1', data))
}
