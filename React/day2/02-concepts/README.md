Concepts: 
JSX Expressions & UseState

What I learned

==> JSX Expressions

* JSX lets you embed any valid JavaScript expression inside markup using curly braces {}
* Works for variables, arithmetic, function calls, ternary conditions, and string concatenation
* Only expressions are allowed inside {} — not full statements like if or for loops
* Common use case: displaying dynamic values (like a name or calculated result) directly in the UI


=> useState
 * useState is a React Hook that lets a component "remember" and update data between renders
 *  Import it with import { useState } from 'react'
 * Returns an array: the current value and a function to update it, e.g. const [count, setCount] = useState(0)
 * Calling the setter function (e.g. setCount(count + 1)) triggers React to re-render the component with the new value
 * State is local to the component — each component instance keeps its own separate state
 * Unlike regular variables, updating a normal JS variable doesn't cause React to re-render the UI, but updating state does


 =>What I practiced
* Displaying dynamic values inside JSX using expressions (variables, simple math, a ternary for conditional text)
* A basic counter component using useState — a button that increments a number on click and displays the updated value