interface MyObject {
	name: string;
	value: number;
}

type MyObjectKey = keyof MyObject; // "name" | "value"
const aKeyOfMyObject: MyObjectKey = "name";

const getObjectValueFromKey = (obj: MyObject, key: keyof MyObject) => obj[key];
const getObjectValueFromKeyAlt = (obj: MyObject, key: MyObjectKey) => obj[key];

getObjectValueFromKey({ name: "Oscar", value: 30 }, "name");
getObjectValueFromKey({ name: "Oscar", value: 30 }, "not a key");

interface A {
	requiredAProp: string;
	optionalAProp?: number;
}

interface B extends A {
	optionalAProp: number;
}

// Mapped types
type SameAsAButNoOptionalProps = {
	[key in keyof A]-?: A[key];
};

const aButNoOptionalProps: SameAsAButNoOptionalProps = {
	optionalAProp: 0,
	requiredAProp: "hei",
	other: "other",
};

type SameAsAButAllOptionalProps = {
	[key in keyof A]?: A[key];
};

const aOnlyOptionalProps: SameAsAButAllOptionalProps = {};

type SameAsAButAllOptionalPropAlt = {
	[key in keyof A]+?: A[key];
};

const aOnlyOptionalPropsAlt: SameAsAButAllOptionalPropAlt = {};

// interface WillNotWork {
//   [key: keyof A]-?: A[typeof key]; // The -? operator does not work on interface properties
// }

// As of TS 2.7.2 union type signatures are not allowed in interfaces
// interface WillNotWorkAndNotTheSame {
// 	[key: keyof A]: A[typeof key]; // An index signature parameter type cannot be a literal type or generic type
// }

// interface WillNotWorkAndNotTheSame {
// 	[key: keyof A]: A[keyof A]; // An index signature parameter type cannot be a literal type or generic type
// }
