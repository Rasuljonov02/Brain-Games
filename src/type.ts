type A = false | "boburbek";

const a: A = false;

type Person1 = {
	name: string;
};
type Person2 = {
	age: number;
};

type Person = Person1 & Person2;
