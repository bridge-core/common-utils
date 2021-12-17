import { toHexString } from '../uint8array/toHexString'
import { hash } from './hash'

const textEncoder = new TextEncoder()

export async function hashString(str: string) {
	const rawData = textEncoder.encode(str)
	if (!rawData) return ''

	const hashedData = await hash(rawData)

	return toHexString(hashedData)
}
