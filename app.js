// alert("If you want to see all information list write 'all' into prompt")
alert("We have some information about 14 people")
alert("They are 'Baxtiyor', 'Jason', 'Tony', 'Bob', 'Sarah' 'Lobar', 'Mike', 'Aziz', 'Malik', 'E'zoza', 'Matluba'")
let name = ['Baxtiyor']
let search = prompt("Who do you want to know about ? ")

let info =[
    {
        Name: "Baxtiyor",
        Surname: "Qurbonnazarov",
        Age : 16,
        Job : "Pupil",
        father: 'John Brown',
        mother: 'Daisy Brown',
        hobbies: "Learn programming, playing computer games and playing football with friends",
        img: "./0508fff.jpg",
        Number: '+998 91 132 34 56',
        House_number: 31,
        Street: 'The  Mall street',
        City: 'London'
    },

    {
        Name: "Tony",
        Surname: "Sama",
        Age : 18,
        Job : "Student",
        father: 'John Brown',
        mother: 'Daisy Brown',
        hobbies: "Learn programming, playing computer games and playing football with friends",
        Number: '+1 889 121 11 33',
        House_number: 31,
        Street: 'The  Mall street',
        City: 'London'

    },

    {
        Name: "Jason",
        Surname: "Paul",
        Age : 36,
        Job : "Unemployed",
        father: 'John Brown',
        mother: 'Daisy Brown',
        hobbies: "Go fishing and reading newspapers",
        Number: '+1 889 121 11 33',
        House_number: 31,
        Street: 'The  Mall street',
        City: 'London'
    },

    {
        Name: "Bob",
        Surname: "Miller",
        Age : 66,
        Job : "Retired",
        father: 'John Brown',
        mother: 'Daisy Brown',
        hobbies: "Reading newspapers and listening to the radio",
        Number: '+1 889 121 11 33',
        House_number: 31,
        Street: 'The  Mall street',
        City: 'London'
    },

    {
        Name: "Lobar",
        Surname: "Ulug'berdiyeva",
        Age : 15,
        Job : "Pupil",
        father: 'no added information',
        mother: 'no add information',
        hobbies: "Talking to her friends",
        Number: '+998 91 238 31 21',
        House_number: 31,
        Street: 'Anhor',
        City: 'Kumkurgan'
    },

    {
        Name: "Sarah",
        Surname: "Nico",
        Age : 26,
        Job : "Secretary",
        father: 'John Brown',
        mother: 'Daisy Brown',
        hobbies: "Make up and Going to hairdresser",
        Number: '+1 889 121 11 33',
        House_number: 31,
        Street: 'The  Mall street',
        City: 'London'
    },

    {
        Name: "Mike",
        Surname: "Walter",
        Age : 23,
        Job : "Football player",
        father: 'John Brown',
        mother: 'Daisy Brown',
        hobbies: "Riding a horse and go swimming",
        Number: '+1 889 121 11 33',
        House_number: 31,
        Street: 'The  Mall street',
        City: 'London'
    },

    {
        Name: "Aziz",
        Surname: "Qudratov",
        Age : 34,
        Job : "Pilot",
        father: 'John Brown',
        mother: 'Daisy Brown',
        hobbies: "Going out with pet like dog",
        Number: '+998 91 238 34 31',
        House_number: 31,
        Street: 'R.Rashidov',
        City: 'Kumkurgan'
    },

    {
        Name: "Malik",
        Surname: "Izzatov",
        Age : 32,
        Job : "Barber",
        father: 'John Brown',
        mother: 'Daisy Brown',
        hobbies: "Being together with his family",
        Number: '+998 93 225 36 51',
        House_number: 31,
        Street: 'no added information',
        City: 'Tashkent'
    },

    {
        Name: "E'zoza",
        Surname: "Umarova",
        Age : 40,
        Job : "Doctor",
        father: 'John Brown',
        mother: 'Daisy Brown',
        hobbies: "Keep people's health and eatin in restaurants",
        Number: '+998 91 231 21 13',
        House_number: 31,
        Street: 'jiydali',
        City: 'Kumkurgan'
    },

    {
        Name: "Matluba",
        Surname: "Mahmudova",
        Age : 38,
        Job : "Director of the school",
        father: 'John Brown',
        mother: 'Daisy Brown',
        hobbies: "Watching TV and go to bed earlier",
        Number: '+998 91 238 34 41',
        House_number: 31,
        Street: 'Oqsoy',
        City: 'Kumkurgan'
    },

    {
        Name: "Myle",
        Surname: "Charlie",
        Age : 41,
        Job : "Teacher",
        father: 'John Brown',
        mother: 'Daisy Brown',
        hobbies: "Working with children and look after her children",
        Number: '+1 889 121 11 33',
        House_number: 31,
        Street: 'The  Mall street',
        City: 'London'
    },
]


for(let i =0; i < info.length; i++){
    // if(conf === people[i].name){
    //     console.log(people[i]);
    // }
    if (search.toLocaleUpperCase === info[i].Name) {
        document.write(`
        <div class="container">
        <table>
        <tr>
          <th style="background-color: rgb(28, 155, 73);" colspan="4">${info[i].Name}    ${info[i].Surname}</th>
        </tr>
        <tr>
            <th>Name</th>
            <td colspan="2">${info[i].Name}</td>
            <td class="image" rowspan="4" colspan="0.2">ㅤㅤ</td>
        </tr>
        <tr>
            <th>Surname</th>
            <td>${info[i].Surname}</td>
        </tr>
        <tr>
            <th>Age</th>
            <td>${info[i].Age}</td>
        </tr>
        <tr>
            <th>Job</th>
            <td colspan="2">${info[i].Job}</td>
        </tr>
        <tr>
            <th>Hobbies</th>
            <td colspan="3"><p>${info[i].hobbies}</p></td>
        </tr>
        <tr>
        <th>Father</th>
        <td colspan="3">${info[i].father}</td>
        </tr>
        <tr>
        <th>Mother</th>
        <td colspan="3">${info[i].mother}</td>
        </tr>
        <th>Phone Number</th>
        <td colspan="3">${info[i].Number}</td>
        </tr>
        <th>House Number</th>
        <td colspan="3">${info[i].House_number}</td>
        </tr>
        <th>Street name</th>
        <td colspan="3">${info[i].Street}</td>
        </tr>
        <th>City</th>
        <td colspan="3">${info[i].City}</td>
        </tr>
        </table>
        </div>
        `)
    } 
}
