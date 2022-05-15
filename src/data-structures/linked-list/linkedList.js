import LinkedListNode from "./LinkedListNode";

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	append(value) {
		const newNode = new LinkedListNode(value);

		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;

			return this;
		}

		this.tail.next = newNode;
		this.tail = newNode;
		

		return this;
	}

	prepend(value) {
		const newNode = new LinkedListNode(value, this.head);

		this.head = newNode;

		if (!this.tail) {
			this.tail = newNode;
		}

		return this;
	}

	find(value) {
		if (!value || !this.head) {
			return null;
		}

		let currentNode = this.head;
		
		while(currentNode) {
			if (value === currentNode.value) {
				return currentNode;
			}

			currentNode = currentNode.next;
		}

		return null;
	}

	delete(value) {
		if (!value || !this.head) {
			return null;
		}

		let deletedNode = null;

		while(this.head && this.head.value === value) {
			deletedNode = this.head;
			this.head = this.head.next;
		}

		let currentNode = this.head;

		if (currentNode) {
			while(currentNode.next) {
				if (currentNode.next.value === value) {
					deletedNode = currentNode.next;
					currentNode.next = currentNode.next.next;
				} else {
					currentNode = currentNode.next;
				}
			}
		}

		if (this.tail?.value === value) {
			this.tail = currentNode;
		}

		return deletedNode;
	}

	insertAfter(value, prevNode) {
		if (prevNode === null) {
			return this;
		}

		const newNode = new LinkedListNode(value);

		newNode.next = prevNode.next;
		prevNode.next = newNode;

		if (newNode.next === null) {
			this.tail = newNode;
		}

		return this;
	}

	deleteHead() {
		if (!this.head) {
			return null;
		}

		let deletedNode = this.head;

		if (this.head.next) {
			this.head = this.head.next;
		} else {
			this.head = null;
			this.tail = null;
		}

		return deletedNode;
	}

	toArray() {
		const nodes = [];

		let currentNode = this.head;
		while (currentNode) {
			nodes.push(currentNode.value);
			currentNode = currentNode.next;
		}

		return nodes;
	}

	toString() {
		return this.toArray().map(node => node.toString()).toString();
	}
}

export default LinkedList;
