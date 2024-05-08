// @ts-nocheck
const _ = require("lodash");

const members = [
  { name: "Rakesh Gupta", age: 20 },
  { name: "Yash Jangid", age: 40 },
  { name: "Firoz Khan", age: 41 },
  { name: "Amrit Srivastava", age: 17 },
  { name: "Chandraprakash Sharma" },
  { name: "Swpril Ahuja", age: 45 },
  { name: "Yogesh Khatri", age: 51 },
];

const first_name = _.map(members, function (member) {
  return _.head(_.split(member.name, " "));
});
const last_name = _.map(members, function (member) {
  return _.toUpper(_.last(_.split(member.name, " ")));
});

const age_40_60 = _.filter(members, function (member) {
  return _.inRange(member.age, 40, 61);
});

const average_age = Math.floor(_.sumBy(members, "age") / members.length);
console.log(average_age);

const max_age = _.maxBy(members, "age").age;

const age_groups = _.reduce(
  members,
  function (total, member) {
    if (_.isUndefined(member.age)) {
      total.noage.push(member);
    } else if (_.lt(member.age, 35)) {
      total.young.push(member);
    } else {
      total.old.push(member);
    }
    return total;
  },
  { young: [], old: [], noage: [] }
);

const new_member = { name: "Surendra Pandar", age: 19 };
members.splice(2, 0, new_member);

const [first_element, second_element] = members;

const new_member_array = [
  {
    name: "Suri Pandar",
    age: 18,
  },
  ...members,
];

const [
  { name: first_member_name, age: first_member_age },
  { name: second_member_name, age: second_member_age },
] = members;

const [{ name: first_mbr_name, age: first_mbr_age }, ...rest_members] = members;

const existing_object = {
  name: "Rahul",
  age: 22,
};

const new_object = _.assign({}, existing_object, { age: 29 });


const total_experience = _.sumBy(members, "age");

console.log(new_object, total_experience);