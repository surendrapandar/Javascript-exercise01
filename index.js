// @ts-nocheck
const members = [
    {name: 'Rakesh Gupta', age: 20},
    {name: 'Yash Jangid', age: 40},
    {name: 'Firoz Khan', age: 41},
    {name: 'Amrit Srivastava', age: 17},
    {name: 'Chandraprakash Sharma'},
    {name: 'Swpril Ahuja', age: 45},
    {name: 'Yogesh Khatri', age: 51}
  ];

  const first_name = members.map(function(member){
    return member.name.split(' ')[0];
  });

  const last_name = members.map(function(member){
    return member.name.split(' ')[1].toUpperCase();
  });


  const age_40_60 = members.filter(function(member){
    return member.age >= 40 && member.age <= 60;
  });


  const average_age  = members.reduce(function(total, member){
    return total + (member.age || 0);
  }, 0) / members.length;

  console.log(average_age);


  const max_age = members.reduce(function(max_age, member) {
    return member.age > max_age ? member.age : max_age
  }, 0)


const age_groups = members.reduce(function(age_groups, member){
  if(member.age < 35){
    age_groups.young.push(member);
  }else if(member.age > 35){
    age_groups.old.push(member);
  }else{
    age_groups.noage.push(member);
  }
  return age_groups;
}, {young: [], old: [], noage: []});



const new_member = {name: 'Surendra Pandar', age: 19};
members.splice(2, 0, new_member);



const [first_elements, second_element] = members;

const new_member_array = [{
  name: 'Suri Pandar',
  age: 18
},
  ...members]


const [{name: first_member_name, age: first_member_age}, {name: second_member_name, age: second_member_age} ] = members; 

const [{name: first_mbr_name, age: first_mbr_age},...rest_members] = members;


const existing_object = {
  name: 'Rahul',
  age: 22,
};

const new_object = {
 ...existing_object,
  age: 23
}


const total_experience = members.reduce(function(total, member){
  return total + (member.age? member.age : 0);
}, 0);

