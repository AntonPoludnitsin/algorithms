import LinkedList from "../linkedList";

function init (list) {
	list.append('a');
	list.append('b');
	list.append(100);
}

describe("LinkedList", () => {
	let list;

	beforeEach(() => {
		list = new LinkedList;
	});

	test("should append node", () => {
		init(list);

		expect(list.toArray()).toEqual(["a", "b", 100]);
		expect(list.toString()).toBe('a,b,100');
		expect(list.tail.next).toBeNull;
		expect(list.head.value).toBe('a');
		expect(list.tail.value).toBe(100);
	});

	test("should prepend node", () => {
		list.prepend('b');

		expect(list.head.value).toBe('b');
		expect(list.tail.value).toBe('b');
		expect(list.toString()).toBe('b');

		list.append('x');
		list.prepend(100);

		expect(list.toString()).toBe('100,b,x');
		expect(list.head.value).toBe(100);
		expect(list.tail.value).toBe('x');
	});

	test("should find node from list", () => {
		expect(list.find('a')).toBeNull;
		expect(list.find('b')).toBeNull;
		expect(list.find('x')).toBeNull;
		expect(list.find(100)).toBeNull;

		init(list);

		expect(list.find('a')).toBeDefine;
		expect(list.find('b')).toBeDefine;
		expect(list.find(100)).toBeDefine;
		expect(list.find('x')).toBeNull;
	})

	test("should delete node form list", () => {
		init(list);

		expect(list.delete('b').toString()).toBe('b');
		expect(list.toString()).toBe('a,100');
		list.delete('a');
		expect(list.toString()).toBe('100');
		expect(list.head.value).toBe(100);
		expect(list.head.next).toBeNull;
		expect(list.head.value).toBe(100);
		expect(list.head.next).toBeNull;
	});

	test("Delete multiple", () => {
		init(list);

		list.append('a')

		expect(list.toString()).toBe('a,b,100,a')
		expect(list.delete('a').toString()).toBe('a');
		expect(list.toString()).toBe('b,100');
	});

	test("Should insert in the middle", () => {
		init(list);

		let prev = list.find('b');
		list.insertAfter("x", prev);
		expect(list.toString()).toBe("a,b,x,100")
	});

	test("Should insert in the end", () => {
		init(list);

		let prev = list.find(100);
		list.insertAfter("x", prev);
		expect(list.toString()).toBe("a,b,100,x")
		expect(list.tail.value).toBe("x");
		expect(list.tail.next).toBeNull;
	});

	test("Should delete head node", () => {
		const emptyList = new LinkedList();
		
		expect(emptyList.deleteHead()).toBeNull;

		init(list);
		expect(list.deleteHead().value).toBe("a");
		expect(list.toString()).toBe("b,100")
	});
});
