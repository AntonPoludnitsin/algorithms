import LinkedListNode from "../linkedListNode";

describe("LinkedListNode", () => {
	test("should create node with value", () => {
		const node = new LinkedListNode('a');

		expect(node.value).toBe('a');
		expect(node.next).toBeNull;
	});

	test("should correct link nodes", () => {
		const node = new LinkedListNode(1);
		const node2 = new LinkedListNode(2, node);

		expect(node2.next).toBeDefine;
		expect(node2.next).toEqual(node);
		expect(node.next).toBeNull;

		expect(node2.value).toBe(2);
		expect(node.value).toBe(1);
		expect(node2.next.value).toBe(1);
	});

	test("should change node value to string", () => {
		const node = new LinkedListNode(123);

		expect(node.toString()).toBe('123');
		expect(node.next).toBeNull;

		node.value = null;
		expect(node.toString()).toBe('null');
	});
});
