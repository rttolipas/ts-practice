enum Gender {FEMALE, MALE}; // Enum Type { core type }
type CivilStatus = 'single' | 'married'; // Type Alias Name

const person: {
    name: string;
    age: number;
    work: boolean;
    gender: number;
    status: CivilStatus;
    anything: string | number | boolean; // union aliases
    } = {
        name: 'Ralph',
        age: 29,
        work: false,
        gender: Gender.MALE,
        status: 'single',
        anything: "this is an example of UNION ALIASES" 
    }

const hobbies: string[] = ['Coding','Dancing'];

hobbies.forEach(element => {
    console.log(element.toLocaleUpperCase())
});