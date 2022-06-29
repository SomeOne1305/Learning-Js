// alert("If you want to see all information list write 'all' into prompt")
alert("We have some information about 14 people")
alert("They are 'Baxtiyor', 'Jason', 'Tony', 'Bob', 'Sarah' 'Lobar', 'Mike', 'Aziz', 'Malik', 'E'zoza', 'Matluba'")
let name = ['Baxtiyor']
let search = prompt("Kim haqida ma'lumot olmoqchisiz ? ")

let info =[
    {
        Name: "Baxtiyor",
        Surname: "Qurbonnazarov",
        Age : 16,
        Job : "Pupil",
        father: 'John Brown',
        mother: 'Daisy Brown',
        hobbies: "Learn programming, playing computer games and playing football with friends",
        img: "./0508fff.jpg"
    },

    {
        Name: "Tony",
        Surname: "Sama",
        Age : 18,
        Job : "Student",
        father: 'John Brown',
        mother: 'Daisy Brown',
        hobbies: "Learn programming, playing computer games and playing football with friends"
    },

    {
        Name: "Jason",
        Surname: "Paul",
        Age : 36,
        Job : "Unemployed",
        father: 'John Brown',
        mother: 'Daisy Brown',
        hobbies: "Go fishing and reading newspapers"
    },

    {
        Name: "Bob",
        Surname: "Miller",
        Age : 66,
        Job : "Retired",
        father: 'John Brown',
        mother: 'Daisy Brown',
        hobbies: "Reading newspapers and listening to the radio"
    },

    {
        Name: "Lobar",
        Surname: "Ulug'berdiyeva",
        Age : 15,
        Job : "Pupil",
        father: 'no added information',
        mother: 'no add information',
        hobbies: "Talking to her friends"
    },

    {
        Name: "Sarah",
        Surname: "Nico",
        Age : 26,
        Job : "Secretary",
        father: 'John Brown',
        mother: 'Daisy Brown',
        hobbies: "Make up and Going to hairdresser"
    },

    {
        Name: "Mike",
        Surname: "Walter",
        Age : 23,
        Job : "Football player",
        father: 'John Brown',
        mother: 'Daisy Brown',
        hobbies: "Riding a horse and go swimming"
    },

    {
        Name: "Aziz",
        Surname: "Qudratov",
        Age : 34,
        Job : "Pilot",
        father: 'John Brown',
        mother: 'Daisy Brown',
        hobbies: "Going out with pet like dog"
    },

    {
        Name: "Malik",
        Surname: "Izzatov",
        Age : 32,
        Job : "Barber",
        father: 'John Brown',
        mother: 'Daisy Brown',
        hobbies: "Being together with his family"
    },

    {
        Name: "E'zoza",
        Surname: "Umarova",
        Age : 40,
        Job : "Doctor",
        father: 'John Brown',
        mother: 'Daisy Brown',
        hobbies: "Keep people's health and eatin in restaurants"
    },

    {
        Name: "Matluba",
        Surname: "Mahmudova",
        Age : 38,
        Job : "Director of the school",
        father: 'John Brown',
        mother: 'Daisy Brown',
        hobbies: "Watching TV and go to bed earlier"
    },

    {
        Name: "Myle",
        Surname: "Charlie",
        Age : 41,
        Job : "Teacher",
        father: 'John Brown',
        mother: 'Daisy Brown',
        hobbies: "Working with children and look after her children"
    },
]


for(let i =0; i < info.length; i++){
    // if(conf === people[i].name){
    //     console.log(people[i]);
    // }
    if (search === info[i].Name) {
        document.write(`
        <table>
        <tr>
          <th style="background-color: rgb(28, 155, 73);" colspan="4">${info[i].Name}    ${info[i].Surname}</th>
        </tr>
        <tr>
            <th>Name</th>
            <td colspan="2">${info[i].Name}</td>
            <td rowspan="3">ㅤㅤ</td>
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
            <td colspan="3">${info[i].Job}</td>
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
        </table>`)
    } else {
        alert(`We can't find ${search}`)
    }
}
