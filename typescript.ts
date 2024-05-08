
interface Member  {
    name: string;
    age?: number;
}

const members: Member[] = [
    { name: 'Rakesh Gupta', age: 20 },
    { name: 'Yash Jangid', age: 40 },
    { name: 'Firoz Khan', age: 41 },
    { name: 'Amrit Srivastava', age: 17 },
    { name: 'Chandraprakash Sharma' },
    { name: 'Swpril Ahuja', age: 45 },
    { name: 'Yogesh Khatri', age: 51 }
];

const first_name: string[] = members.map((member: Member) => {
    return member.name.split(' ')[0];
});



const last_name: string[] = members.map((member: Member) => {
    return member.name.split(' ')[1]?.toUpperCase() || '';
});


const age_40_60: Member[] = members.filter((member: Member) => {
    return member.age && member.age >= 40 && member.age <= 60;
});



const average_age: number = members.reduce((total: number, member: Member) => {
    return total + (member.age || 0);
}, 0) / members.length;

const max_age: number = members.reduce((max_age: number, member: Member) => {
    return member.age && member.age > max_age ? member.age : max_age;
}, 0);



interface AgeGroups {
    young: Member[];
    old: Member[];
    noage: Member[];
}



const age_groups: AgeGroups = members.reduce((age_groups: AgeGroups, member: Member) => {
    if (member.age === undefined) {
        age_groups.noage.push(member);
    } else if (member.age < 35) {
        age_groups.young.push(member);
    } else {
        age_groups.old.push(member);
    }
    return age_groups;
}, { young: [], old: [], noage: [] });



const new_member: Member = { name: 'Surendra Pandar', age: 19 };
members.splice(2, 0, new_member);



const [first_element, second_element]: Member[] = members;



const new_member_array: Member[] = [
    { name: 'Suri Pandar', age: 18 },
    ...members
];



const [{ name: first_member_name, age: first_member_age }, { name: second_member_name, age: second_member_age }] = members;

const [{ name: first_mbr_name, age: first_mbr_age }, ...rest_members]: Member[] = members;

const existing_object: Member = {
    name: 'Rahul',
    age: 22,
};

const new_object: Member = {
    ...existing_object,
    age: 23
};

const total_experience: number = members.reduce((total: number, member: Member) => {
    return total + (member.age || 0);
}, 0);


console.log(total_experience)

