/**
 * Checks if the provided value is of type string.
 *
 * @param value - The value to check.
 * @returns True if the value is a string, otherwise false.
 */
export const isString = (value: unknown): value is string => {
  return typeof value === 'string'
}
