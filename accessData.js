const numbers = [22, 45, 34, 5, 18, 62, 10];
const friends = [{ id: "01", name: "nahid hasan", age: 10, gender: "male" }];
// console.log(friends[0].name);
// console.log(numbers[0]);

// const friend = [
//   {
//     id: "01",
//     name: "nahid hasan",
//     age: 10,
//     gender: "male",
//   },
//   {
//     id: "02",
//     name: "priya",
//     age: 19,
//     gender: "female",
//     friends: {
//         name: 'mehedi',
//         address: {
//             village: 'chokpara',
//             distric:"natore"
//         }
//     }
//   },
//   {
//     id: "03",
//     name: "asif iqbal",
//     age: 29,
//     gender: "male",
//   },
// ];

// console.log(friend[1].name);
// console.log(friend[1].friends.address.vill);

const friend = [
    {
        id: "01",
        name: "nahid hasan",
        age: 13,
        gender: "male",
    },
    {
        id: "02",
        name: "laila khatun",
        age: 21,
        gender: "female",
        friends: [
            {
                name: 'sajib',
                address: {
                    village: 'rayna',
                    distric: "natore"
                }
            },
            {
                name: 'shovo hasan',
                address: {
                    village: 'manikpur',
                    distric: "natore"
                }
            }
        ]
    },
    {
        id: "03",
        name: "shahin alom",
        age: 22,
        gender: "male",
    },
];

console.log(friend[1].friends[1].address.distric);