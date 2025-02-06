import { type SetStateAction, useEffect, useRef, useState } from 'react'

import { isString } from '@/utils/is'

// [UtilityType] adicionar a pasta types global
type Maybe<T> = T | undefined

export type DispatchDebounce<T> = (
  value: SetStateAction<T>,
  options?: { immediate?: boolean },
) => void

interface DebounceOptions {
  /** Time delay in milliseconds before the debounced value is updated */
  wait?: number
  /** Minimum number of characters required to update the debounced value */
  minLength?: number
}

/**
 * Custom hook to manage a debounced state value. Useful for reducing the frequency of updates for values that change rapidly, like search inputs.
 *
 * @template T - Type of the value being debounced
 * @param defaultValue - The initial value for the state
 * @param options - Configuration options for debounce behavior
 * @param options.wait - Time delay in milliseconds before the debounced value is updated (default is 500 ms)
 * @param options.minLength - Minimum number of characters required to update the debounced value (default is 0)
 * @returns A tuple containing:
 * - debouncedValue: The debounced value, which only updates after the delay specified by wait.
 * - value: The immediate value, which updates without any delay.
 * - debouncedSetValue: Function to set the state value with optional debounce behavior.
 */
export function useSearchDebounce<T = any>(
  defaultValue?: Maybe<T>,
  options?: DebounceOptions,
) {
  const { wait = 500, minLength = 0 } = options || {}

  const [value, setValue] = useState<Maybe<T>>(defaultValue)
  const [debouncedValue, setDebouncedValue] = useState<Maybe<T>>(defaultValue)

  const timeoutRef = useRef<number | undefined>()

  /**
   * Clears the current debounce timeout
   */
  const clearTimeout = () => window.clearTimeout(timeoutRef.current)

  /**
   * Handles setting the debounced value after the specified delay.
   * @param newValue - The new value to debounce
   */
  const debounceChange = (newValue: SetStateAction<Maybe<T>>) => {
    setValue(newValue)
    clearTimeout()

    if (newValue && isString(newValue) && newValue.length < minLength) {
      return
    }

    timeoutRef.current = window.setTimeout(() => {
      setDebouncedValue(newValue)
    }, wait)
  }

  /**
   * Immediately sets both value and debouncedValue to the new value.
   * @param newValue - The new value to set immediately
   */
  const immediateChange = (newValue: SetStateAction<Maybe<T>>) => {
    setValue(newValue)
    setDebouncedValue(newValue)
  }

  /**
   * Sets the value with optional debounce behavior.
   * @param newValue - The new value to set
   * @param setOptions - Options to determine if the value should be set immediately
   */
  const debouncedSetValue: DispatchDebounce<Maybe<T>> = (
    newValue: SetStateAction<Maybe<T>>,
    setOptions,
  ) => {
    if (setOptions?.immediate) immediateChange(newValue)
    else debounceChange(newValue)
  }

  useEffect(() => clearTimeout, [])

  return [debouncedValue, value, debouncedSetValue] as const
}
