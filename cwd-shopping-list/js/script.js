const button = document.querySelector('#enter')
const input = document.querySelector('#user-input')
const itemsList = document.querySelector('#items-list')
const items = itemsList.querySelectorAll('li')

function inputLength() {
	return input.value.length
}

function createListItem() {
	const li = document.createElement('li')
	const span = document.createElement('span')

	span.appendChild(document.createTextNode(input.value))
	span.classList.add('text')
	li.appendChild(span)

	li.appendChild(createDeleteBtn())

	itemsList.appendChild(li)

	input.value = ''
}

function createDeleteBtn() {
	const delBtn = document.createElement('button')
	delBtn.textContent = 'delete'
	delBtn.classList.add('del-btn')
	return delBtn
}

function addItemAfterClick() {
	if (inputLength() > 0) {
		createListItem()
	}
}

function addItemAfterKeypress(e) {
	if (inputLength() > 0 && e.key === 'Enter') {
		createListItem()
	}
}

function completedTask(e) {
	if (e.target.classList.contains('text')) {
		e.target.classList.toggle('done')
	} else if (e.target.parentElement === itemsList) {
		e.target.firstElementChild.classList.toggle('done')
	}
}

function addDeleteBtnToCurrentItems() {
	items.forEach(item => {
		const span = document.createElement('span')
		span.classList.add('text')
		span.textContent = item.textContent
		item.textContent = ''
		item.appendChild(span)

		item.appendChild(createDeleteBtn())
	})
}

function deleteListItem(e) {
	if (e.target.classList.contains('del-btn')) {
		e.target.parentElement.remove()
	}
}

function listHandler(e) {
	completedTask(e)
	deleteListItem(e)
}

button.addEventListener('click', addItemAfterClick)
input.addEventListener('keydown', addItemAfterKeypress)
document.addEventListener('DOMContentLoaded', addDeleteBtnToCurrentItems)
itemsList.addEventListener('click', listHandler)
