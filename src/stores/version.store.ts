import { computed } from 'vue'
import { defineStore } from 'pinia'

/**
 * 1.0: Single Drone Operator
 * 2.0: Better Drones available
 * 3.0: Multiple Drone Operators available
 * 4.0: Global availability
 */
export const useVersionStore = defineStore('version', () => {
    const version = computed<'1.0' | '2.0' | '3.0' | '4.0'>(() => '1.0')
    
    return { version }
})