import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Todo from '../Todos/Todo'

test('delete button is rendered', () => {
    const doneInfo = (
        <>
            <span>This todo is done</span>
            <span>
                <button onClick={() => console.log('button clicked')}> Delete </button>
            </span>
        </>
    )
    render(<Todo info={doneInfo} />)
    expect(screen.getByText('Delete')).toBeInTheDocument()
})