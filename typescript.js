var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var members = [
    { name: 'Rakesh Gupta', age: 20 },
    { name: 'Yash Jangid', age: 40 },
    { name: 'Firoz Khan', age: 41 },
    { name: 'Amrit Srivastava', age: 17 },
    { name: 'Chandraprakash Sharma' },
    { name: 'Swpril Ahuja', age: 45 },
    { name: 'Yogesh Khatri', age: 51 }
];
var first_name = members.map(function (member) {
    return member.name.split(' ')[0];
});
var last_name = members.map(function (member) {
    var _a;
    return ((_a = member.name.split(' ')[1]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || '';
});
var age_40_60 = members.filter(function (member) {
    return member.age && member.age >= 40 && member.age <= 60;
});
var average_age = members.reduce(function (total, member) {
    return total + (member.age || 0);
}, 0) / members.length;
var max_age = members.reduce(function (max_age, member) {
    return member.age && member.age > max_age ? member.age : max_age;
}, 0);
var age_groups = members.reduce(function (age_groups, member) {
    if (member.age === undefined) {
        age_groups.noage.push(member);
    }
    else if (member.age < 35) {
        age_groups.young.push(member);
    }
    else {
        age_groups.old.push(member);
    }
    return age_groups;
}, { young: [], old: [], noage: [] });
var new_member = { name: 'Surendra Pandar', age: 19 };
members.splice(2, 0, new_member);
var first_element = members[0], second_element = members[1];
var new_member_array = __spreadArray([
    { name: 'Suri Pandar', age: 18 }
], members, true);
var _a = members[0], first_member_name = _a.name, first_member_age = _a.age, _b = members[1], second_member_name = _b.name, second_member_age = _b.age;
var _c = members[0], first_mbr_name = _c.name, first_mbr_age = _c.age, rest_members = members.slice(1);
var existing_object = {
    name: 'Rahul',
    age: 22,
};
var new_object = __assign(__assign({}, existing_object), { age: 23 });
var total_experience = members.reduce(function (total, member) {
    return total + (member.age || 0);
}, 0);
console.log(total_experience);
