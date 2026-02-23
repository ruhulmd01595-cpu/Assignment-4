1. What is the difference between getElementById, getElementsByClassName, and querySelector/querySelectorAll?
Answer:

getElementById → returns 1 element by ID.

getElementsByClassName → returns many elements by class.

querySelector → returns first match (any CSS selector).

querySelectorAll → returns all matches.

.
2. How do you create and insert a new element into the DOM?
Answer:

Create → document.createElement("div")

Set text → div.textContent = "Hi"

Insert → parent.appendChild(div)

.
3. What is Event Bubbling?
Answer:

Event goes from child → parent → document when clicked.

.
4. What is Event Delegation in JavaScript? Why is it useful?
Answer:

Parent handles events of all children.
Useful because: less code, better performance, works for new elements.

.
5. What is the difference between preventDefault() and stopPropagation()?
Answer:

preventDefault() → stops default action (form submit, link open).

stopPropagation() → stops event from bubbling to parent.