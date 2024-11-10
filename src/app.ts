// type Human = {
//     name: string;
// };

// type Animal = {
//     name: string;
//     age: 13;
// };

// const getName = <T extends Human | Animal>(item: T) => {
//     if("age" in item) {
//         return {
//             age: item.age
//         }
//     }
//     return {
//         name: item.name    
//     }
// };

// console.log(getName({name: "Ilkin"}));
// console.log(getName({name: "Tiger", age: 12}));


/* ------------------------------------------------------------------------------------------------------------------- */


// interface User {
//     id: number;
//     name: string;
//     email: string;
// }

// function updateUser(user: User, updates: Partial<User>): User {
//     return { ...user, ...updates };
// }

// const user = { id: 1, name: 'hac1yev', email: 'ilkin@gmail.com' };
// console.log(updateUser(user, { name: 'elvin' }));


/* ------------------------------------------------------------------------------------------------------------------- */

// interface Animal {
//     name: string;
// };

// interface Human {
//     firstName: string;
//     lastName: string;
// }

// const getName = <T extends Animal | Human>(item: T) => {
//     if('name' in item) {
//         return {
//             displayName: item.name
//         }
//     }else if('firstName' in item) {
//         return {
//             displayName: item.firstName
//         }
//     }
// };

// console.log(getName({ name: 'Tiger' }));
// console.log(getName({ firstName: 'İlkin', lastName: 'Haciyev' }));

/* ------------------------------------------------------------------------------------------------------------------- */


// type Letters = "a" | "b" | "c";

// type RemoveC<T> = T extends 'c' ? never : T;

// type WoWithoutC = RemoveC<Letters>; 
  

/* ------------------------------------------------------------------------------------------------------------------- */


// type IconSize = "sm" | "xs" | Omit<string, "sm" | "xs">;

// interface IconProps {
//     size: IconSize;
// };

// const Icon = (props: IconProps) => {
//     return props;
// };

// const Comp1 = () => {
//     return {
//         icon1: Icon({ size: "sm" }),
//         icon2: Icon({ size: 'sdsd' })
//     }
// };

// console.log(Comp1());


/* ------------------------------------------------------------------------------------------------------------------- */


// export type Event = 
//    | {
//       type: "LOG IN";
//       payload: {
//           userId: string;
//       };
//     }
//   | {
//       type: "SIGN OUT";
//     };

// const sendEvent = <T extends Event["type"]>(
//     ...args: Extract<Event, { type: T }> extends { payload: infer TPayload }
//         ? [type: T, payload: TPayload]
//         : [type: T]
// ) => {};   

// sendEvent("SIGN OUT");
// sendEvent("LOG IN", {
//     userId: "123"
// })


/* ------------------------------------------------------------------------------------------------------------------- */


// const data = [
//     {
//         firsName: 'Ilkin',
//         lastName: 'Haciyev',
//         age: 24,
//         graduated: true
//     },
//     {
//         firsName: 'Ramiz',
//         lastName: 'Qayibov',
//         age: 16,
//         graduated: false
//     },
//     {
//         firsName: 'Elvin',
//         lastName: 'Cabbarli',
//         age: 24,
//         graduated: true
//     },
// ];

// function myData <T extends { firsName: string, lastName: string }>(data: T[]) {
//     const newArr = data.map((item) => {
//         return {
//             ...item,
//             fullName: `${item.firsName} ${item.lastName}`
//         }
//     })

//     return newArr;
// };

// console.log(myData(data));


/* ------------------------------------------------------------------------------------------------------------------- */


// const ageData = <T, K extends keyof T>(data: T[], year: K): T[K][] => {
//     const ages = data.map((item) => item[year]);

//     return ages;
// };

// console.log(ageData(data, 'age'));


/* ------------------------------------------------------------------------------------------------------------------- */


// type MyPartial<T> = {
//     [K in keyof T]?: T[K];
// };

// interface User {
//     name: string;
//     age: number;
//     email: string;
// };

// const user: MyPartial<User> = {
//     name: 'Alice'
// };


/* ------------------------------------------------------------------------------------------------------------------- */


// type MyPick<T, K extends keyof T> = Pick<T, K>;

// interface Product {
//     id: number;
//     name: string;
//     price: number;
//     description: string;
// }

// type ProductSummary = MyPick<Product, 'id' | 'name'>;

// const product: ProductSummary = {
//     id: 1,
//     name: 'Laptop'
//     // Only `id` and `name` are allowed
// };


/* ------------------------------------------------------------------------------------------------------------------- */


// type MyReadonly<T> = Readonly<T>;

// interface Car {
//     make: string;
//     model: string;
//     year: number;
// }

// const car: MyReadonly<Car> = {
//     make: 'Tesla',
//     model: 'Model S',
//     year: 2022
// };

// car.year = 2023;  // This should result in a TypeScript error


/* ------------------------------------------------------------------------------------------------------------------- */


// type MyRecord<K extends keyof any, T> = {
//     [P in K]: T
// };

// type Color = 'red' | 'green' | 'blue';
// type ColorInfo = MyRecord<Color, string>;

// const colorInfo: ColorInfo = {
//     red: '#FF0000',
//     green: '#00FF00',
//     blue: '#0000FF'
// };


/* ------------------------------------------------------------------------------------------------------------------- */


// type MyOmit<T, K extends keyof any> = Omit<T, K>;

// interface Person {
//     name: string;
//     age: number;
//     email: string;
// }

// type PersonWithoutEmail = MyOmit<Person, 'email'>;

// const person: PersonWithoutEmail = {
//     name: 'John',
//     age: 30
//     // `email` should not be allowed here
// };


/* ------------------------------------------------------------------------------------------------------------------- */


// type MyExclude<T, U> = Exclude<T, U>;

// type PossibleValues = 'apple' | 'banana' | 'cherry';
// type Fruits = MyExclude<PossibleValues, 'banana'>;

// const fruit: Fruits = 'apple';  // Valid
// // const fruit: Fruits = 'banana';  // Should give an error


/* ------------------------------------------------------------------------------------------------------------------- */


// type MyNonNullable<T> = NonNullable<T>;

// type Input = string | number | null | undefined;
// type ValidInput = MyNonNullable<Input>;

// const value: ValidInput = 'Hello';  // Valid
// // const value: ValidInput = null;  // Should give an error


/* ------------------------------------------------------------------------------------------------------------------- */


// type DeepReadonly<T> = Readonly<T>;

// interface NestedObject {
//     a: {
//         b: {
//             c: string;
//         };
//     };
// }

// const obj: DeepReadonly<NestedObject> = {
//     a: {
//         b: {
//             c: 'test'
//         }
//     }
// };

// obj.a.b.c = 'new value';  // This should result in a TypeScript error


/* ------------------------------------------------------------------------------------------------------------------- */


// type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never;

// function add(a: number, b: number): number {
//     return a + b;
// }

// type Params = MyParameters<typeof add>;  // [number, number]

// const args: Params = [2, 3];  // Valid


/* ------------------------------------------------------------------------------------------------------------------- */


// type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

// function getUser() {
//     return {
//         name: 'Alice',
//         age: 25
//     };
// }

// type UserReturnType = MyReturnType<typeof getUser>;  // { name: string; age: number }

// const user: UserReturnType = {
//     name: 'Alice',
//     age: 25
// };


/* ------------------------------------------------------------------------------------------------------------------- */


// interface User {
//     name: string;
//     address: {
//       city: string;
//       postalCode: string;
//     };
//   }
  
//   type PartialUser = DeepPartial<User>;
//   type DeepPartial<T> = Partial<T>; 
  
  // Result:
  // PartialUser = {
  //   name?: string;
  //   address?: {
  //     city?: string;
  //     postalCode?: string;
  //   }
  // } 


/* ------------------------------------------------------------------------------------------------------------------- */


// interface Person {
//     name: string;
//     age: number;
//     isAdmin: boolean;
//   }
  
//   type StringPropertiesOnly = FilterByType<Person, string>;

//   type FilterByType<T, U> = {
//     [K in keyof T]: T[K] extends U ? K : never;
//   }[keyof T]; // Step 1: Get the keys where value types match `U`
  
//   type PickByType<T, U> = Pick<T, FilterByType<T, U>>;


/* ------------------------------------------------------------------------------------------------------------------- */


// interface Settings {
//     mode: string;
//     user: {
//       id: number;
//       roles: string[];
//     };
//   }
  
//   type ReadonlySettings = DeepReadonly<Settings>;
//   type DeepReadonly<T> = Readonly<T>;
  // Result:
  // ReadonlySettings = {
  //   readonly mode: string;
  //   readonly user: {
  //     readonly id: number;
  //     readonly roles: readonly string[];
  //   }
  // } 


/* ------------------------------------------------------------------------------------------------------------------- */


// interface Task {
//   id: number;
//   title: string;
//   description?: string;
//   completed?: boolean;
// };

// type OptionalTaskProps = PickOptional<Task>;

// type PickOptional<T> = {
//   [K in keyof T as undefined extends T[K] ? K : never]: T[K];
// };

// Result: OptionalTaskProps = { description?: string; completed?: boolean }
  

/* ------------------------------------------------------------------------------------------------------------------- */


// type TransformArgs<T extends (...args: any) => any, U> = (...args: U[]) => ReturnType<T>;

// // Example usage:
// type Func = (a: number, b: string) => boolean;

// type TransformedFunc = TransformArgs<Func, string>;
// Result: 
// TransformedFunc = (a: string, b: string) => boolean


/* ------------------------------------------------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------------------------------------------------- */


// TYPESCRIPT DOCUMENTATION


// Enum Start

// enum Direction {
//   Up = "UP",
//   Down = "DOWN"
// }

// let direction: Direction = Direction.Down;  // Valid
// direction = "LEFT"; // Error: Type '"LEFT"' is not assignable to type 'Direction'.

// enum Direction {
//   Up = 1,
//   Down,
//   Left,
//   Right
// }

// console.log(Direction['Up']);  // Output: "Up"

// Enum End


// Interface Start

// interface PlayerInfo extends PlayerSuccess {
//   name: string,
//   surname: string,
//   age: number,
// };

// interface PlayerSuccess {
//   ballonDor: number,
//   fifaBest: number,
// };

// interface PlayerSuccess {
//   readonly goldenBoot: number,
//   puskas: number,
// }

// const player: PlayerInfo = {
//   name: "Cristiano",
//   surname: "Ronaldo",
//   age: 39,
//   ballonDor: 5,
//   fifaBest: 3,
//   goldenBoot: 23,
//   puskas: 1,
// };

// player.goldenBoot = 56    // Not Allowed

// type Animal = {
//   readonly name: string
// }

// type Human = {
//   surname: string
// } & Animal;

// const animal: Human = {
//   name: 'Tiger',
//   surname: 'Sadsada'
// }

// animal.name = "asdas"   // Not Allowed

// Interface End


// GENERICS Start
 
// const items = [
//   { id: 1, name: "Alice", age: 25 },
//   { id: 2, name: "Bob", age: "unknown" },
// ];

// const filtered = filterByPropertyType(items, "age", "number");

// function filterByPropertyType<T>(arr: T[], age: keyof T, type: string): T[] {
//   return arr.filter(item => typeof item[age] === type);
// }

// GENERICS End


// Conditional Type Start

// type Person = {
//   name: string;
//   surname: string;
//   age: number;
//   married: boolean;
// };

// type TypeObjectOfPerson<T> = T extends Person ? T : {};

// type PersonType = TypeObjectOfPerson<Person>;
// type EmptyType = TypeObjectOfPerson<"string">;

// const person: PersonType = {
//   name: 'Ilkin',
//   surname: 'Haciyev',
//   age: 24,
//   married: false
// };

// const empty: EmptyType = {};

// Conditional Type End


// async function fetchData<T>(url: string): Promise<T | null> {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data as T;
//   } catch (error) {
//     console.error("Fetch error:", error);
//     return null;
//   }
// }

// fetchData<any>('https://my.api.mockaroo.com/home_category.json?key=281cec00')
//   .then(data => console.log(data))
//   .catch(error => console.error("Caught error:", error));


// type Result<T> = { data: T | null; error: Error | null };

// async function fetchData<T>(url: string): Promise<Result<T>> {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     return { data: data as T, error: null };
//   } catch (error) {
//     return { data: null, error: error as Error }
//   }
// };

// fetchData<any>('https://my.api.mockaroo.com/home_category.json?key=281cec00')
//   .then(data => console.log(data))
//   .catch(error => console.error("Caught error:", error));