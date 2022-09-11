const anyArrayIsEmpty = (array: any[]) => array.length === 0;
const genericArrayIsEmpty = <T>(array: T[]) => array.length === 0;

const anyArrayEmpty = anyArrayIsEmpty([1, 2]);
const genericArrayEmpty = genericArrayIsEmpty([1, 2]);

const lastValueOfAnyArray = (array: any[]) => array.at(-1);
const lastValueOfGenericArray = <T>(array: T[]) => array.at(-1);

const lastOfAny = lastValueOfAnyArray([1, 2]);
const lastOfGeneric = lastValueOfGenericArray([1, 2]);

interface Nameable {
	fullName: string;
}

const hello = <T extends Nameable>({ fullName }: T) => `Hello ${fullName}!`;
const me = {
	fullName: "Oscar Carlström",
	age: 30,
};

hello(me);

const car = {
	brand: "Volvo",
	color: "Red",
};

hello(car);
