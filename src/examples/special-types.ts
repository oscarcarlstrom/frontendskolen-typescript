// any
const isNumber = (str: any) => typeof str === "number";
isNumber(3); // true
isNumber("3"); // false
const anyInpuIsValid = (input: any) => input && input.length;

//unknown
const isString = (str: unknown) => typeof str === "string";
isString(3); // false
isString("3"); // true
const unknownInpuIsValid = (input: unknown) =>
	input && (input as string).length;

// "Anything is assignable to unknown, but unknown isn't assignable to anything but itself"

let anyValue: any = "any value"; // We can assign anything to any
let unknownValue: unknown = "unknown value"; // We can assign anything to unknown

let str1: string = anyValue; // Any is assignable to anything
let str2: string = unknownValue; // Invalid; we can't assign vUnknown to any other type

//never - "Computer says no!"
const iIamNeverGoingToTerminate = () => {
	while (true) {
		console.log("Infinite loop in progress... please wait");
	}
};

const iThrowErrorsAllTheTime = () => {
	throw new Error("An error occurred!");
};

interface Obj1 {
	a: string;
	b?: never;
}

interface Obj2 {
	b: number;
	a?: never;
}

const fn = (obj: Obj1 | Obj2) =>
	obj.hasOwnProperty("a")
		? console.log("This is of type Obj1")
		: console.log("This is of type Obj2");

const myObj = { a: "foo", b: 123 };
fn(myObj);

const myObj1 = { a: "foo" };
fn(myObj1);

// Union types
type answer = "yes" | "no";
type answerTolerant = "yes" | "no" | true | false | 1 | 0;

type allowedPrimitives = string | number | boolean;
interface AllowedObject {
	[key: string]: allowedPrimitives;
}
type allowedValue =
	| allowedPrimitives
	| AllowedObject
	| (() => allowedPrimitives);

//Conditional types
type StringOrNot<T> = T extends string ? string : never;
type isNever = StringOrNot<0>;
type isString = StringOrNot<string>;
type isAlsoString = StringOrNot<"hello">;

type aOrBReturnType<T extends Obj1 | Obj2> = (
	T: Obj1 | Obj2
) => T extends Obj1 ? string : number;
const aOrB: aOrBReturnType<Obj1 | Obj2> = (obj: Obj1 | Obj2) =>
	obj.hasOwnProperty("a") ? (obj.a as string) : (obj.b as number);

aOrB(myObj1);

type Flatten<T> = T extends any[] ? T[number] : T;

// Extracts out the element type.
type Str = Flatten<string[]>;

// Leaves the type alone.
type Num = Flatten<number>;

type FlattenWithInfer<Type> = Type extends Array<infer Item> ? Item : Type;

type inferredFlat1 = FlattenWithInfer<Obj1[]>;
type inferredFlat2 = FlattenWithInfer<Obj2>;
