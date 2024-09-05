import {
    TestResponseBody,
} from '@/index'
import { expect, test } from 'vitest'

test('Test TestResponseBody', () => {
    const responseBody = new TestResponseBody('test')

    // Test that the fixed date function returns the correct date
    expect(responseBody.body).toBe('test')
})
