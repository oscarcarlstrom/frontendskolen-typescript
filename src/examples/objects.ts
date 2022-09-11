const aCar = { brand: "Volvo", color: "Red" };

type CarType = {
	brand: string;
	color: string;
};

const aSecondCar: CarType = { brand: "Toyota", color: "White" };

interface ICar {
	brand: string;
	color: string;
}

// The object must implement all properties and every property of the interface (this is also true for type)
// const aThirdCar: ICar = { brand: "Tesla" };
const aThirdCar: ICar = {
	brand: "Tesla",
	color: "Black",
	// fuel: "electric",
};

const drive = ({ brand, color }: ICar) =>
	console.log(`Driving a ${color} ${brand}`);

drive(aCar);
drive(aSecondCar);
drive(aThirdCar);

type CarTypeCopy1 = CarType;
type CarTypeCopy2 = ICar;

interface ICarCopy1 extends CarType {}
interface ICarCopy2 extends ICar {}

// Optional properties
interface Input {
	name: string;
	value: string;
	error?: string;
}

type InputType = {
	name: string;
	value: string;
	error?: string;
};

// Inheritance
interface Pet {
	name: string;
	numberOfLegs?: number;
}

interface FourLeggedPet extends Pet {
	numberOfLegs: number;
}

type Snake = Omit<Pet, "numberOfLegs">;

interface Dog extends FourLeggedPet {
	bark: () => void;
	fetch: (item: string) => void;
}

const dog: Dog = {
	name: "Bajas",
	numberOfLegs: 4,
	bark: () => console.log("Voff voff!"),
	fetch: (item: string) => console.log(`Fetching ${item}`),
};

type Cat = FourLeggedPet & {
	meow: () => void;
	scratch: (item: string) => void;
};

const cat: Cat = {
	name: "Tom",
	numberOfLegs: 4,
	meow: () => console.log("Meeeeow!"),
	scratch: (item: string) => console.log(`Scratching ${item}`),
};

// Inheritance with overrides
type Puppy = Omit<Dog, "fetch" | "bark">;

const puppy: Puppy = {
	name: "Zorro",
	numberOfLegs: 4,
	// bark: () => console.log("Vooff!"),
	fetch: (item: string) => console.log(`Fetching ${item}`),
};

interface Kitten extends Omit<Cat, "name"> {
	eyesOpen: boolean;
}

const kitten: Kitten = {
	name: "Kitty",
	numberOfLegs: 4,
	meow: () => console.log("Meeeow"),
	scratch: (item: string) => console.log(`Scratching ${item}`),
	eyesOpen: false,
};
