import React, { Component } from 'react';
import Player from './Player';
import './Players.css';

class Players extends Component {
    constructor() {
        super();
        this.state = {
            All: [
                {
                    id: 1,
                    fullName: "Chennai Super Kings",
                    shortName: "Super Kings",
                    abbreviation: "CSK",
                    type: "m",
                    primaryColor: "FDB913",
                    secondaryColor: "F85C00",
                    isChampion: true,
                    year: "2010,2011,2018",
                    venue: "M. A. Chidambaram Stadium",
                    players: [
                        {
                            id: 100,
                            fullName: "Ambati Rayudu",
                            shortName: "A Rayudu",
                            nationality: "Indian",
                            dateOfBirth: "1985-09-23",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "OFF_SPIN"
                        },
                        {
                            id: 4944,
                            fullName: "KM Asif",
                            shortName: "KM Asif",
                            nationality: "Indian",
                            dateOfBirth: "1993-07-24",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "MEDIUM_SEAM"
                        },
                        {
                            id: 140,
                            fullName: "Deepak Chahar",
                            shortName: "D Chahar",
                            nationality: "Indian",
                            dateOfBirth: "1992-08-07",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "MEDIUM_SEAM"
                        },
                        {
                            id: 25,
                            fullName: "Dwayne Bravo",
                            shortName: "DJ Bravo",
                            nationality: "West Indian",
                            dateOfBirth: "1983-10-07",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "MEDIUM_SEAM"
                        },
                        {
                            id: 24,
                            fullName: "Faf du Plessis",
                            shortName: "F du Plessis",
                            nationality: "South African",
                            dateOfBirth: "1984-07-13",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "LEG_SPIN"
                        },
                        {
                            id: 898,
                            fullName: "Imran Tahir",
                            shortName: "I Tahir",
                            nationality: "South African",
                            dateOfBirth: "1979-03-27",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "LEG_SPIN"
                        },
                        {
                            id: 4942,
                            fullName: "Narayan Jagadeesan",
                            shortName: "N Jagadeesan",
                            nationality: "Indian",
                            dateOfBirth: "1995-12-24",
                            rightArmedBowl: true,
                            rightHandedBat: true
                        },
                        {
                            id: 1118,
                            fullName: "Karn Sharma",
                            shortName: "K Sharma",
                            nationality: "Indian",
                            dateOfBirth: "1987-10-23",
                            rightArmedBowl: true,
                            rightHandedBat: false,
                            bowlingStyle: "LEG_SPIN"
                        },
                        {
                            id: 297,
                            fullName: "Kedar Jadhav",
                            shortName: "K Jadhav",
                            nationality: "Indian",
                            dateOfBirth: "1985-03-26",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "OFF_SPIN"
                        },
                        {
                            id: 3746,
                            fullName: "Lungi Ngidi",
                            shortName: "L Ngidi",
                            nationality: "South African",
                            dateOfBirth: "1996-03-29",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "FAST_SEAM"
                        },
                        {
                            id: 1903,
                            fullName: "Mitchell Santner",
                            shortName: "M Santner",
                            nationality: "New Zealander",
                            dateOfBirth: "1992-02-05",
                            rightArmedBowl: false,
                            rightHandedBat: false,
                            bowlingStyle: "ORTHODOX"
                        },
                        {
                            id: 1560,
                            fullName: "Monu Kumar",
                            shortName: "M Kumar",
                            nationality: "Indian",
                            dateOfBirth: "1994-11-05",
                            rightArmedBowl: false,
                            rightHandedBat: true
                        },
                        {
                            id: 1,
                            fullName: "MS Dhoni",
                            shortName: "MS Dhoni",
                            nationality: "Indian",
                            dateOfBirth: "1981-07-07",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "MEDIUM_SEAM",
                            isCaptian: true,
                        },
                        {
                            id: 7,
                            fullName: "Murali Vijay",
                            shortName: "M Vijay",
                            nationality: "Indian",
                            dateOfBirth: "1984-04-01",
                            rightArmedBowl: false,
                            rightHandedBat: false
                        },
                        {
                            id: 9,
                            fullName: "Ravindra Jadeja",
                            shortName: "R Jadeja",
                            nationality: "Indian",
                            dateOfBirth: "1988-12-06",
                            rightArmedBowl: false,
                            rightHandedBat: false,
                            bowlingStyle: "ORTHODOX"
                        },
                        {
                            id: 5443,
                            fullName: "Ruturaj Gaikwad",
                            shortName: "R Gaikwad",
                            nationality: "Indian",
                            dateOfBirth: "1997-01-31",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "OFF_SPIN"
                        },
                        {
                            id: 227,
                            fullName: "Shane Watson",
                            shortName: "S Watson",
                            nationality: "Australian",
                            dateOfBirth: "1981-06-17",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "MEDIUM_SEAM"
                        },
                        {
                            id: 1745,
                            fullName: "Shardul Thakur",
                            shortName: "S Thakur",
                            nationality: "Indian",
                            dateOfBirth: "1991-10-16",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "MEDIUM_SEAM"
                        },
                        {
                            id: 2939,
                            fullName: "Sam Curran",
                            shortName: "S Curran",
                            nationality: "English",
                            dateOfBirth: "1998-06-03",
                            rightArmedBowl: false,
                            rightHandedBat: false,
                            bowlingStyle: "MEDIUM_SEAM"
                        },
                        {
                            id: 76,
                            fullName: "Piyush Chawla",
                            shortName: "P Chawla",
                            nationality: "Indian",
                            dateOfBirth: "1988-12-24",
                            rightArmedBowl: false,
                            rightHandedBat: false
                        },
                        {
                            id: 857,
                            fullName: "Josh Hazlewood",
                            shortName: "J Hazlewood",
                            nationality: "Australian",
                            dateOfBirth: "1991-01-08",
                            rightArmedBowl: true,
                            rightHandedBat: false,
                            bowlingStyle: "FAST_SEAM"
                        },
                        {
                            id: 7123,
                            fullName: "R Sai Kishore",
                            shortName: "RS Kishore",
                            nationality: "Indian",
                            dateOfBirth: "1996-11-06",
                            rightArmedBowl: false,
                            rightHandedBat: false,
                            bowlingStyle: "ORTHODOX"
                        }
                    ],
                    wicketKeeperId: 1,
                    matchType: "ALL",
                    shirtNumbers: {},
                    capNumbers: {}
                },
                {
                    id: 3,
                    fullName: "Delhi Capitals",
                    shortName: "Delhi",
                    abbreviation: "DC",
                    type: "m",
                    primaryColor: "004C93",
                    secondaryColor: "0358a7",
                    isChampion: false,
                    venue: "Feroz Shah Kotla Ground",
                    players: [
                        {
                            id: 135,
                            fullName: "Ajinkya Rahane",
                            shortName: "A Rahane",
                            nationality: "Indian",
                            dateOfBirth: "1988-06-06",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "MEDIUM_SEAM"
                        },
                        {
                            id: 30,
                            fullName: "Amit Mishra",
                            shortName: "A Mishra",
                            nationality: "Indian",
                            dateOfBirth: "1982-11-24",
                            rightArmedBowl: true,
                            rightHandedBat: true
                        },
                        {
                            id: 1561,
                            fullName: "Avesh Khan",
                            shortName: "A Khan",
                            nationality: "Indian",
                            dateOfBirth: "1996-12-13",
                            rightArmedBowl: true,
                            rightHandedBat: true
                        },
                        {
                            id: 1113,
                            fullName: "Axar Patel",
                            shortName: "A Patel",
                            nationality: "Indian",
                            dateOfBirth: "1994-01-20",
                            rightArmedBowl: false,
                            rightHandedBat: false
                        },
                        {
                            id: 157,
                            fullName: "Harshal Patel",
                            shortName: "H Patel",
                            nationality: "Indian",
                            dateOfBirth: "1990-11-23",
                            rightArmedBowl: true,
                            rightHandedBat: true
                        },
                        {
                            id: 38,
                            fullName: "Ishant Sharma",
                            shortName: "I Sharma",
                            nationality: "Indian",
                            dateOfBirth: "1988-09-02",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "FAST_SEAM"
                        },
                        {
                            id: 1664,
                            fullName: "Kagiso Rabada",
                            shortName: "K Rabada",
                            nationality: "South African",
                            dateOfBirth: "1995-05-25",
                            rightArmedBowl: true,
                            rightHandedBat: false,
                            bowlingStyle: "FAST_SEAM"
                        },
                        {
                            id: 3101,
                            fullName: "Keemo Paul",
                            shortName: "K Paul",
                            nationality: "West Indian",
                            dateOfBirth: "1998-02-21",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "FAST_SEAM"
                        },
                        {
                            id: 3764,
                            fullName: "Prithvi Shaw",
                            shortName: "P Shaw",
                            nationality: "Indian",
                            dateOfBirth: "1999-11-09",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "OFF_SPIN"
                        },
                        {
                            id: 8,
                            fullName: "Ravichandran Ashwin",
                            shortName: "R Ashwin",
                            nationality: "Indian",
                            dateOfBirth: "1986-09-17",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "OFF_SPIN"
                        },
                        {
                            id: 2972,
                            fullName: "Rishabh Pant",
                            shortName: "R Pant",
                            nationality: "Indian",
                            dateOfBirth: "1997-10-04",
                            rightArmedBowl: false,
                            rightHandedBat: false
                        },
                        {
                            id: 3013,
                            fullName: "Sandeep Lamichhane",
                            shortName: "S Lamichhane",
                            nationality: "Nepalese",
                            dateOfBirth: "2000-08-14",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "LEG_SPIN"
                        },
                        {
                            id: 41,
                            fullName: "Shikhar Dhawan",
                            shortName: "S Dhawan",
                            nationality: "Indian",
                            dateOfBirth: "1985-12-05",
                            rightArmedBowl: true,
                            rightHandedBat: false,
                            bowlingStyle: "OFF_SPIN"
                        },
                        {
                            id: 1563,
                            fullName: "Shreyas Iyer",
                            shortName: "S Iyer",
                            nationality: "Indian",
                            dateOfBirth: "1994-12-06",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "LEG_SPIN",
                            isCaptian: true,
                        },
                        {
                            id: 3882,
                            fullName: "Alex Carey",
                            shortName: "A Carey",
                            nationality: "Australian",
                            dateOfBirth: "1991-08-27",
                            rightArmedBowl: false,
                            rightHandedBat: false
                        },
                        {
                            id: 1705,
                            fullName: "Shimron Hetmyer",
                            shortName: "S Hetmyer",
                            nationality: "West Indian",
                            dateOfBirth: "1996-12-26",
                            rightArmedBowl: false,
                            rightHandedBat: false
                        },
                        {
                            id: 1107,
                            fullName: "Mohit Sharma",
                            shortName: "M Sharma",
                            nationality: "Indian",
                            dateOfBirth: "1991-12-19",
                            rightArmedBowl: false,
                            rightHandedBat: true
                        },
                        {
                            id: 3257,
                            fullName: "Tushar Deshpande",
                            shortName: "T Deshpande",
                            nationality: "Indian",
                            dateOfBirth: "1995-05-15",
                            rightArmedBowl: false,
                            rightHandedBat: true
                        },
                        {
                            id: 964,
                            fullName: "Marcus Stoinis",
                            shortName: "M Stoinis",
                            nationality: "Australian",
                            dateOfBirth: "1989-08-16",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "MEDIUM_SEAM"
                        },
                        {
                            id: 6870,
                            fullName: "Lalith Yadav",
                            shortName: "L Yadav",
                            nationality: "Indian",
                            dateOfBirth: "1995-12-17",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "FAST_SEAM"
                        },
                        {
                            id: 5433,
                            fullName: "Anrich Nortje",
                            shortName: "A Nortje",
                            nationality: "South African",
                            dateOfBirth: "1993-11-16",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "FAST_SEAM"
                        },
                        {
                            id: 4649,
                            fullName: "Daniel Sams",
                            shortName: "D Sams",
                            nationality: "Australian",
                            dateOfBirth: "1992-10-27",
                            rightArmedBowl: false,
                            rightHandedBat: true,
                            bowlingStyle: "FAST_SEAM"
                        }
                    ],
                    wicketKeeperId: 2972,

                    matchType: "ALL",
                    shirtNumbers: {},
                    capNumbers: {}
                },
                {
                    id: 4,
                    fullName: "Kings XI Punjab",
                    shortName: "Kings XI",
                    abbreviation: "KXIP",
                    type: "m",
                    primaryColor: "aa4545",
                    secondaryColor: "740f0b",
                    isChampion: false,
                    venue: "IS Bindra Stadium",
                    players: [
                        {
                            id: 4698,
                            fullName: "Arshdeep Singh",
                            shortName: "A Singh",
                            nationality: "Indian",
                            dateOfBirth: "1999-02-05",
                            rightArmedBowl: false,
                            rightHandedBat: false,
                            bowlingStyle: "MEDIUM_SEAM"
                        },
                        {
                            id: 236,
                            fullName: "Chris Gayle",
                            shortName: "C Gayle",
                            nationality: "West Indian",
                            dateOfBirth: "1979-09-21",
                            rightArmedBowl: true,
                            rightHandedBat: false,
                            bowlingStyle: "OFF_SPIN"
                        },
                        {
                            id: 4447,
                            fullName: "Darshan Nalkande",
                            shortName: "D Nalkande",
                            nationality: "Indian",
                            dateOfBirth: "1998-10-04",
                            rightArmedBowl: true,
                            rightHandedBat: true
                        },
                        {
                            id: 3834,
                            fullName: "Krishnappa Gowtham",
                            shortName: "K Gowtham",
                            nationality: "Indian",
                            dateOfBirth: "1988-10-20",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "OFF_SPIN"
                        },
                        {
                            id: 1276,
                            fullName: "Hardus Viljoen",
                            shortName: "H Viljoen",
                            nationality: "South African",
                            dateOfBirth: "1989-03-06",
                            rightArmedBowl: false,
                            rightHandedBat: true
                        },
                        {
                            id: 5441,
                            fullName: "Harpreet Brar",
                            shortName: "H Brar",
                            nationality: "Indian",
                            dateOfBirth: "1995-09-16",
                            rightArmedBowl: false,
                            rightHandedBat: false,
                            bowlingStyle: "ORTHODOX"
                        },
                        {
                            id: 2741,
                            fullName: "Jagadeesha Suchith",
                            shortName: "J Suchith",
                            nationality: "Indian",
                            dateOfBirth: "1994-01-16",
                            rightArmedBowl: false,
                            rightHandedBat: false
                        },
                        {
                            id: 276,
                            fullName: "Karun Nair",
                            shortName: "K Nair",
                            nationality: "Indian",
                            dateOfBirth: "1991-12-06",
                            rightArmedBowl: true,
                            rightHandedBat: true
                        },
                        {
                            id: 1125,
                            fullName: "KL Rahul",
                            shortName: "KL Rahul",
                            nationality: "Indian",
                            dateOfBirth: "1992-04-18",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            isCaptian: true,
                        },
                        {
                            id: 72,
                            fullName: "Mandeep Singh",
                            shortName: "M Singh",
                            nationality: "Indian",
                            dateOfBirth: "1991-12-18",
                            rightArmedBowl: true,
                            rightHandedBat: true
                        },
                        {
                            id: 158,
                            fullName: "Mayank Agarwal",
                            shortName: "M Agarwal",
                            nationality: "Indian",
                            dateOfBirth: "1991-02-18",
                            rightArmedBowl: true,
                            rightHandedBat: true
                        },
                        {
                            id: 94,
                            fullName: "Mohammad Shami",
                            shortName: "M Shami",
                            nationality: "Indian",
                            dateOfBirth: "1990-09-03",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "FAST_SEAM"
                        },
                        {
                            id: 4572,
                            fullName: "Mujeeb Ur Rahman",
                            shortName: "M Ur Rahman",
                            nationality: "Afghan",
                            dateOfBirth: "2001-03-28",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "OFF_SPIN"
                        },
                        {
                            id: 3187,
                            fullName: "Murugan Ashwin",
                            shortName: "M Ashwin",
                            nationality: "Indian",
                            dateOfBirth: "1990-09-08",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "LEG_SPIN"
                        },
                        {
                            id: 1703,
                            fullName: "Nicholas Pooran",
                            shortName: "N Pooran",
                            nationality: "West Indian",
                            dateOfBirth: "1995-10-02",
                            rightArmedBowl: false,
                            rightHandedBat: false
                        },
                        {
                            id: 1564,
                            fullName: "Sarfaraz Khan",
                            shortName: "S Khan",
                            nationality: "Indian",
                            dateOfBirth: "1997-10-22",
                            rightArmedBowl: true,
                            rightHandedBat: true
                        },
                        {
                            id: 282,
                            fullName: "Glenn Maxwell",
                            shortName: "G Maxwell",
                            nationality: "Australian",
                            dateOfBirth: "1988-10-14",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "OFF_SPIN"
                        },
                        {
                            id: 1309,
                            fullName: "Sheldon Cottrell",
                            shortName: "S Cottrell",
                            nationality: "West Indian",
                            dateOfBirth: "1989-08-19",
                            rightArmedBowl: false,
                            rightHandedBat: true,
                            bowlingStyle: "FAST_SEAM"
                        },
                        {
                            id: 1556,
                            fullName: "Deepak Hooda",
                            shortName: "D Hooda",
                            nationality: "Indian",
                            dateOfBirth: "1995-04-19",
                            rightArmedBowl: false,
                            rightHandedBat: true
                        },
                        {
                            id: 3777,
                            fullName: "Ishan Porel",
                            shortName: "I Porel",
                            nationality: "Indian",
                            dateOfBirth: "1998-09-05",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "MEDIUM_SEAM"
                        },
                        {
                            id: 19351,
                            fullName: "Ravi Bishnoi",
                            shortName: "R Bishnoi",
                            nationality: "Indian",
                            dateOfBirth: "2000-09-05",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "LEG_SPIN"
                        },
                        {
                            id: 971,
                            fullName: "Jimmy Neesham",
                            shortName: "J Neesham",
                            nationality: "New Zealander",
                            dateOfBirth: "1990-09-17",
                            rightArmedBowl: true,
                            rightHandedBat: false,
                            bowlingStyle: "MEDIUM_SEAM"
                        },
                        {
                            id: 1299,
                            fullName: "Chris Jordan",
                            shortName: "C Jordan",
                            nationality: "English",
                            dateOfBirth: "1988-10-04",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "FAST_SEAM"
                        },
                        {
                            id: 4943,
                            fullName: "Tajinder Singh",
                            shortName: "T Singh",
                            nationality: "Indian",
                            dateOfBirth: "1992-05-25",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "OFF_SPIN"
                        },
                        {
                            id: 5436,
                            fullName: "Simran Singh",
                            shortName: "S Singh",
                            nationality: "Indian",
                            dateOfBirth: "2000-08-10",
                            rightArmedBowl: true,
                            rightHandedBat: true
                        }
                    ],
                    wicketKeeperId: 1125,
                    matchType: "ALL",
                    shirtNumbers: {},
                    capNumbers: {}
                },
                {
                    id: 5,
                    fullName: "Kolkata Knight Riders",
                    shortName: "Knight Riders",
                    abbreviation: "KKR",
                    type: "m",
                    primaryColor: "70458f",
                    secondaryColor: "3d2057",
                    isChampion: true,
                    year: "2012,2014",
                    venue: "Eden Gardens",
                    players: [
                        {
                            id: 177,
                            fullName: "Andre Russell",
                            shortName: "A Russell",
                            nationality: "West Indian",
                            dateOfBirth: "1988-04-29",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "FAST_SEAM"
                        },
                        {
                            id: 102,
                            fullName: "Dinesh Karthik",
                            shortName: "D Karthik",
                            nationality: "Indian",
                            dateOfBirth: "1985-06-01",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "OFF_SPIN",
                            isCaptian: true,
                        },
                        {
                            id: 3766,
                            fullName: "Kamlesh Nagarkoti",
                            shortName: "K Nagarkoti",
                            nationality: "Indian",
                            dateOfBirth: "1999-12-28",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "MEDIUM_SEAM"
                        },
                        {
                            id: 261,
                            fullName: "Kuldeep Yadav",
                            shortName: "K Yadav",
                            nationality: "Indian",
                            dateOfBirth: "1994-12-14",
                            rightArmedBowl: false,
                            rightHandedBat: false,
                            bowlingStyle: "UNORTHODOX"
                        },
                        {
                            id: 3729,
                            fullName: "Lockie Ferguson",
                            shortName: "L Ferguson",
                            nationality: "New Zealander",
                            dateOfBirth: "1991-06-13",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "FAST_SEAM"
                        },
                        {
                            id: 2738,
                            fullName: "Nitish Rana",
                            shortName: "N Rana",
                            nationality: "Indian",
                            dateOfBirth: "1993-12-27",
                            rightArmedBowl: true,
                            rightHandedBat: false
                        },
                        {
                            id: 5105,
                            fullName: "Prasidh Krishna",
                            shortName: "P Krishna",
                            nationality: "Indian",
                            dateOfBirth: "1996-02-19",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "MEDIUM_SEAM"
                        },
                        {
                            id: 3830,
                            fullName: "Rinku Singh",
                            shortName: "R Singh",
                            nationality: "Indian",
                            dateOfBirth: "1997-10-12",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "LEG_SPIN"
                        },
                        {
                            id: 1092,
                            fullName: "Sandeep Warrier",
                            shortName: "S Warrier",
                            nationality: "Indian",
                            dateOfBirth: "1991-04-04",
                            rightArmedBowl: false,
                            rightHandedBat: true
                        },
                        {
                            id: 3779,
                            fullName: "Shivam Mavi",
                            shortName: "S Mavi",
                            nationality: "Indian",
                            dateOfBirth: "1998-11-26",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "FAST_SEAM"
                        },
                        {
                            id: 3761,
                            fullName: "Shubman Gill",
                            shortName: "S Gill",
                            nationality: "Indian",
                            dateOfBirth: "1999-09-08",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "OFF_SPIN"
                        },
                        {
                            id: 2739,
                            fullName: "Siddhesh Lad",
                            shortName: "SD Lad",
                            nationality: "Indian",
                            dateOfBirth: "1992-05-23",
                            rightArmedBowl: true,
                            rightHandedBat: true
                        },
                        {
                            id: 203,
                            fullName: "Sunil Narine",
                            shortName: "S Narine",
                            nationality: "West Indian",
                            dateOfBirth: "1988-05-26",
                            rightArmedBowl: false,
                            rightHandedBat: false
                        },
                        {
                            id: 197,
                            fullName: "Eoin Morgan",
                            shortName: "E Morgan",
                            nationality: "English",
                            dateOfBirth: "1986-09-10",
                            rightArmedBowl: true,
                            rightHandedBat: false,
                            bowlingStyle: "MEDIUM_SEAM"
                        },
                        {
                            id: 488,
                            fullName: "Pat Cummins",
                            shortName: "P Cummins",
                            nationality: "Australian",
                            dateOfBirth: "1993-05-08",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "FAST_SEAM"
                        },
                        {
                            id: 3838,
                            fullName: "Rahul Tripathi",
                            shortName: "R Tripathi",
                            nationality: "Indian",
                            dateOfBirth: "1991-03-02",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "MEDIUM_SEAM"
                        },
                        {
                            id: 5432,
                            fullName: "Varun Chakravarthy",
                            shortName: "V Chakravarthy",
                            nationality: "Indian",
                            dateOfBirth: "1991-08-29",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "LEG_SPIN"
                        },
                        {
                            id: 7119,
                            fullName: "M Siddharth",
                            shortName: "M Siddharth",
                            nationality: "Indian",
                            dateOfBirth: "1998-07-03",
                            rightArmedBowl: false,
                            rightHandedBat: true,
                            bowlingStyle: "ORTHODOX"
                        },
                        {
                            id: 3803,
                            fullName: "Chris Green",
                            shortName: "C Green",
                            nationality: "South African",
                            dateOfBirth: "1993-10-01",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "OFF_SPIN"
                        },
                        {
                            id: 3770,
                            fullName: "Tom Banton",
                            shortName: "T Banton",
                            nationality: "English",
                            dateOfBirth: "1998-11-11",
                            rightArmedBowl: true,
                            rightHandedBat: true
                        },
                        {
                            id: 2732,
                            fullName: "Nikhil Naik",
                            shortName: "N Naik",
                            nationality: "Indian",
                            dateOfBirth: "1994-11-09",
                            rightArmedBowl: false,
                            rightHandedBat: true
                        },
                        {
                            id: 20569,
                            fullName: "Ali Khan",
                            shortName: "A Khan",
                            nationality: "American",
                            dateOfBirth: "1990-12-13",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "FAST_SEAM"
                        }
                    ],
                    wicketKeeperId: 102,
                    matchType: "ALL",
                    shirtNumbers: {},
                    capNumbers: {}
                },
                {
                    id: 6,
                    fullName: "Mumbai Indians",
                    shortName: "Mumbai",
                    abbreviation: "MI",
                    type: "m",
                    primaryColor: "005da0",
                    secondaryColor: "003a63",
                    isChampion: true,
                    year: "2013,2015,2017,2019",
                    venue: "Wankhede Stadium",
                    players: [
                        {
                            id: 99,
                            fullName: "Aditya Tare",
                            shortName: "A Tare",
                            nationality: "Indian",
                            dateOfBirth: "1987-11-07",
                            rightArmedBowl: true,
                            rightHandedBat: true
                        },
                        {
                            id: 2965,
                            fullName: "Anmolpreet Singh",
                            shortName: "A Singh",
                            nationality: "Indian",
                            dateOfBirth: "1998-03-28",
                            rightArmedBowl: true,
                            rightHandedBat: true
                        },
                        {
                            id: 3774,
                            fullName: "Anukul Roy",
                            shortName: "A Roy",
                            nationality: "Indian",
                            dateOfBirth: "1998-11-30",
                            rightArmedBowl: false,
                            rightHandedBat: false,
                            bowlingStyle: "ORTHODOX"
                        },
                        {
                            id: 101,
                            fullName: "Dhawal Kulkarni",
                            shortName: "D Kulkarni",
                            nationality: "Indian",
                            dateOfBirth: "1988-12-10",
                            rightArmedBowl: true,
                            rightHandedBat: true
                        },
                        {
                            id: 2740,
                            fullName: "Hardik Pandya",
                            shortName: "H Pandya",
                            nationality: "Indian",
                            dateOfBirth: "1993-10-11",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "MEDIUM_SEAM"
                        },
                        {
                            id: 2975,
                            fullName: "Ishan Kishan",
                            shortName: "I Kishan",
                            nationality: "Indian",
                            dateOfBirth: "1998-07-18",
                            rightArmedBowl: false,
                            rightHandedBat: false
                        },
                        {
                            id: 1124,
                            fullName: "Jasprit Bumrah",
                            shortName: "J Bumrah",
                            nationality: "Indian",
                            dateOfBirth: "1993-12-06",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "FAST_SEAM"
                        },
                        {
                            id: 1740,
                            fullName: "Jayant Yadav",
                            shortName: "J Yadav",
                            nationality: "Indian",
                            dateOfBirth: "1990-01-22",
                            rightArmedBowl: true,
                            rightHandedBat: true
                        },
                        {
                            id: 210,
                            fullName: "Kieron Pollard",
                            shortName: "K Pollard",
                            nationality: "West Indian",
                            dateOfBirth: "1987-05-12",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "MEDIUM_SEAM"
                        },
                        {
                            id: 3183,
                            fullName: "Krunal Pandya",
                            shortName: "K Pandya",
                            nationality: "Indian",
                            dateOfBirth: "1991-03-24",
                            rightArmedBowl: false,
                            rightHandedBat: false
                        },
                        {
                            id: 730,
                            fullName: "Mitchell McClenaghan",
                            shortName: "M McClenaghan",
                            nationality: "New Zealander",
                            dateOfBirth: "1986-06-11",
                            rightArmedBowl: false,
                            rightHandedBat: false
                        },
                        {
                            id: 834,
                            fullName: "Quinton de Kock",
                            shortName: "Q de Kock",
                            nationality: "South African",
                            dateOfBirth: "1992-12-17",
                            rightArmedBowl: false,
                            rightHandedBat: false
                        },
                        {
                            id: 3763,
                            fullName: "Rahul Chahar",
                            shortName: "R Chahar",
                            nationality: "Indian",
                            dateOfBirth: "1999-08-04",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "LEG_SPIN"
                        },
                        {
                            id: 107,
                            fullName: "Rohit Sharma",
                            shortName: "R Sharma",
                            nationality: "Indian",
                            dateOfBirth: "1987-04-30",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "OFF_SPIN",
                            isCaptian: true,
                        },
                        {
                            id: 5396,
                            fullName: "Sherfane Rutherford",
                            shortName: "S Rutherford",
                            nationality: "West Indian",
                            dateOfBirth: "1998-08-15",
                            rightArmedBowl: true,
                            rightHandedBat: false,
                            bowlingStyle: "MEDIUM_SEAM"
                        },
                        {
                            id: 108,
                            fullName: "Suryakumar Yadav",
                            shortName: "S Yadav",
                            nationality: "Indian",
                            dateOfBirth: "1990-09-14",
                            rightArmedBowl: true,
                            rightHandedBat: true
                        },
                        {
                            id: 969,
                            fullName: "Trent Boult",
                            shortName: "T Boult",
                            nationality: "New Zealander",
                            dateOfBirth: "1989-07-22",
                            rightArmedBowl: false,
                            rightHandedBat: true,
                            bowlingStyle: "FAST_SEAM"
                        },
                        {
                            id: 179,
                            fullName: "Chris Lynn",
                            shortName: "C Lynn",
                            nationality: "Australian",
                            dateOfBirth: "1990-04-10",
                            rightArmedBowl: false,
                            rightHandedBat: true
                        },
                        {
                            id: 840,
                            fullName: "Nathan Coulter-Nile",
                            shortName: "N Coulter-Nile",
                            nationality: "Australian",
                            dateOfBirth: "1987-10-11",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "FAST_SEAM"
                        },
                        {
                            id: 163,
                            fullName: "Saurabh Tiwary",
                            shortName: "S Tiwary",
                            nationality: "Indian",
                            dateOfBirth: "1989-12-30",
                            rightArmedBowl: true,
                            rightHandedBat: false
                        },
                        {
                            id: 4952,
                            fullName: "Mohsin Khan",
                            shortName: "M Khan",
                            nationality: "Indian",
                            dateOfBirth: "1998-07-15",
                            rightArmedBowl: false,
                            rightHandedBat: false,
                            bowlingStyle: "FAST_SEAM"
                        },
                        {
                            id: 15137,
                            fullName: "Digvijay Deshmukh",
                            shortName: "D Deshmukh",
                            nationality: "Indian",
                            dateOfBirth: "1998-04-12",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "FAST_SEAM"
                        },
                        {
                            id: 6076,
                            fullName: "Prince Balwant Rai Singh",
                            shortName: "P Singh",
                            nationality: "Indian",
                            dateOfBirth: "1999-05-05",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "LEG_SPIN"
                        },
                        {
                            id: 199,
                            fullName: "James Pattinson",
                            shortName: "J Pattinson",
                            nationality: "Australian",
                            dateOfBirth: "1990-05-03",
                            rightArmedBowl: true,
                            rightHandedBat: false,
                            bowlingStyle: "FAST_SEAM"
                        }
                    ],
                    wicketKeeperId: 834,
                    matchType: "ALL",
                    shirtNumbers: {},
                    capNumbers: {}
                },
                {
                    id: 8,
                    fullName: "Rajasthan Royals",
                    shortName: "Royals",
                    abbreviation: "RR",
                    type: "m",
                    primaryColor: "2d4d9d",
                    secondaryColor: "172e5e",
                    isChampion: true,
                    year: "2008",
                    venue: "Sawai Mansingh Stadium",
                    players: [
                        {
                            id: 1106,
                            fullName: "Ankit Rajpoot",
                            shortName: "A Rajpoot",
                            nationality: "Indian",
                            dateOfBirth: "1993-12-04",
                            rightArmedBowl: false,
                            rightHandedBat: true
                        },
                        {
                            id: 1154,
                            fullName: "Ben Stokes",
                            shortName: "B Stokes",
                            nationality: "English",
                            dateOfBirth: "1991-06-04",
                            rightArmedBowl: true,
                            rightHandedBat: false,
                            bowlingStyle: "FAST_SEAM"
                        },
                        {
                            id: 3502,
                            fullName: "Jofra Archer",
                            shortName: "J Archer",
                            nationality: "English",
                            dateOfBirth: "1995-04-01",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "FAST_SEAM"
                        },
                        {
                            id: 509,
                            fullName: "Jos Buttler",
                            shortName: "J Buttler",
                            nationality: "English",
                            dateOfBirth: "1990-09-08",
                            rightArmedBowl: true,
                            rightHandedBat: true
                        },
                        {
                            id: 2970,
                            fullName: "Mahipal Lomror",
                            shortName: "M Lomror",
                            nationality: "Indian",
                            dateOfBirth: "1999-11-16",
                            rightArmedBowl: false,
                            rightHandedBat: false
                        },
                        {
                            id: 1085,
                            fullName: "Manan Vohra",
                            shortName: "M Vohra",
                            nationality: "Indian",
                            dateOfBirth: "1993-07-18",
                            rightArmedBowl: false,
                            rightHandedBat: true
                        },
                        {
                            id: 4951,
                            fullName: "Mayank Markande",
                            shortName: "M Markande",
                            nationality: "Indian",
                            dateOfBirth: "1997-11-11",
                            rightArmedBowl: true,
                            rightHandedBat: true
                        },
                        {
                            id: 1749,
                            fullName: "Rahul Tewatia",
                            shortName: "R Tewatia",
                            nationality: "Indian",
                            dateOfBirth: "1993-05-20",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "LEG_SPIN"
                        },
                        {
                            id: 4445,
                            fullName: "Riyan Parag",
                            shortName: "R Parag",
                            nationality: "Indian",
                            dateOfBirth: "2001-11-10",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "LEG_SPIN"
                        },
                        {
                            id: 258,
                            fullName: "Sanju Samson",
                            shortName: "S Samson",
                            nationality: "Indian",
                            dateOfBirth: "1994-11-11",
                            rightArmedBowl: true,
                            rightHandedBat: true
                        },
                        {
                            id: 3261,
                            fullName: "Shashank Singh",
                            shortName: "S Singh",
                            nationality: "Indian",
                            dateOfBirth: "1991-11-21",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "OFF_SPIN"
                        },
                        {
                            id: 1748,
                            fullName: "Shreyas Gopal",
                            shortName: "S Gopal",
                            nationality: "Indian",
                            dateOfBirth: "1993-09-04",
                            rightArmedBowl: true,
                            rightHandedBat: true
                        },
                        {
                            id: 271,
                            fullName: "Steve Smith",
                            shortName: "S Smith",
                            nationality: "Australian",
                            dateOfBirth: "1989-06-02",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "LEG_SPIN",
                            isCaptian: true,
                        },
                        {
                            id: 61,
                            fullName: "Varun Aaron",
                            shortName: "V Aaron",
                            nationality: "Indian",
                            dateOfBirth: "1989-10-29",
                            rightArmedBowl: true,
                            rightHandedBat: true
                        },
                        {
                            id: 127,
                            fullName: "Robin Uthappa",
                            shortName: "R Uthappa",
                            nationality: "Indian",
                            dateOfBirth: "1985-11-11",
                            rightArmedBowl: true,
                            rightHandedBat: true
                        },
                        {
                            id: 86,
                            fullName: "Jaydev Unadkat",
                            shortName: "J Unadkat",
                            nationality: "Indian",
                            dateOfBirth: "1991-10-18",
                            rightArmedBowl: false,
                            rightHandedBat: true
                        },
                        {
                            id: 13538,
                            fullName: "Yashasvi Jaiswal",
                            shortName: "Y Jaiswal",
                            nationality: "Indian",
                            dateOfBirth: "2001-12-28",
                            rightArmedBowl: false,
                            rightHandedBat: false,
                            bowlingStyle: "MEDIUM_SEAM"
                        },
                        {
                            id: 10788,
                            fullName: "Anuj Rawat",
                            shortName: "A Rawat",
                            nationality: "Indian",
                            dateOfBirth: "1999-10-17",
                            rightArmedBowl: true,
                            rightHandedBat: false,
                            bowlingStyle: "FAST_SEAM"
                        },
                        {
                            id: 12585,
                            fullName: "Akash Singh",
                            shortName: "A Singh",
                            nationality: "Indian",
                            dateOfBirth: "2002-04-26",
                            rightArmedBowl: false,
                            rightHandedBat: true,
                            bowlingStyle: "FAST_SEAM"
                        },
                        {
                            id: 10059,
                            fullName: "Kartik Tyagi",
                            shortName: "K Tyagi",
                            nationality: "Indian",
                            dateOfBirth: "2000-11-08",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "FAST_SEAM"
                        },
                        {
                            id: 187,
                            fullName: "David Miller",
                            shortName: "D Miller",
                            nationality: "South African",
                            dateOfBirth: "1989-06-10",
                            rightArmedBowl: true,
                            rightHandedBat: false,
                            bowlingStyle: "OFF_SPIN"
                        },
                        {
                            id: 5146,
                            fullName: "Oshane Thomas",
                            shortName: "O Thomas",
                            nationality: "West Indian",
                            dateOfBirth: "1997-02-18",
                            rightArmedBowl: true,
                            rightHandedBat: false,
                            bowlingStyle: "FAST_SEAM"
                        },
                        {
                            id: 6399,
                            fullName: "Anirudha Joshi",
                            shortName: "A Joshi",
                            nationality: "Indian",
                            dateOfBirth: "1998-09-09",
                            rightArmedBowl: true,
                            rightHandedBat: false,
                            bowlingStyle: "FAST_SEAM"
                        },
                        {
                            id: 1480,
                            fullName: "Andrew Tye",
                            shortName: "A Tye",
                            nationality: "Australian",
                            dateOfBirth: "1986-12-12",
                            rightArmedBowl: true,
                            rightHandedBat: true
                        },
                        {
                            id: 3646,
                            fullName: "Tom Curran",
                            shortName: "T Curran",
                            nationality: "English",
                            dateOfBirth: "1995-03-12",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "FAST_SEAM"
                        }
                    ],
                    wicketKeeperId: 509,
                    matchType: "ALL",
                    shirtNumbers: {},
                    capNumbers: {}
                },
                {
                    id: 9,
                    fullName: "Royal Challengers Bangalore",
                    shortName: "Challengers",
                    abbreviation: "RCB",
                    type: "m",
                    primaryColor: "000000",
                    secondaryColor: "464646",
                    isChampion: false,
                    venue: "M. Chinnaswamy Stadium",
                    players: [
                        {
                            id: 233,
                            fullName: "AB de Villiers",
                            shortName: "AB de Villiers",
                            nationality: "South African",
                            dateOfBirth: "1984-02-17",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "MEDIUM_SEAM"
                        },
                        {
                            id: 5430,
                            fullName: "Devdutt Padikkal",
                            shortName: "D Padikkal",
                            nationality: "Indian",
                            dateOfBirth: "2000-07-07",
                            rightArmedBowl: true,
                            rightHandedBat: false,
                            bowlingStyle: "OFF_SPIN"
                        },
                        {
                            id: 253,
                            fullName: "Gurkeerat Mann Singh",
                            shortName: "GM Singh",
                            nationality: "Indian",
                            dateOfBirth: "1990-06-29",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "OFF_SPIN"
                        },
                        {
                            id: 1735,
                            fullName: "Moeen Ali",
                            shortName: "M Ali",
                            nationality: "English",
                            dateOfBirth: "1987-06-18",
                            rightArmedBowl: true,
                            rightHandedBat: false,
                            bowlingStyle: "OFF_SPIN"
                        },
                        {
                            id: 3840,
                            fullName: "Mohammed Siraj",
                            shortName: "M Siraj",
                            nationality: "Indian",
                            dateOfBirth: "1994-03-13",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "MEDIUM_SEAM"
                        },
                        {
                            id: 3824,
                            fullName: "Navdeep Saini",
                            shortName: "N Saini",
                            nationality: "Indian",
                            dateOfBirth: "1992-11-23",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "FAST_SEAM"
                        },
                        {
                            id: 44,
                            fullName: "Parthiv Patel",
                            shortName: "P Patel",
                            nationality: "Indian",
                            dateOfBirth: "1985-03-09",
                            rightArmedBowl: false,
                            rightHandedBat: false
                        },
                        {
                            id: 53,
                            fullName: "Pawan Negi",
                            shortName: "P Negi",
                            nationality: "Indian",
                            dateOfBirth: "1983-01-06",
                            rightArmedBowl: false,
                            rightHandedBat: false
                        },
                        {
                            id: 5431,
                            fullName: "Shivam Dube",
                            shortName: "S Dube",
                            nationality: "Indian",
                            dateOfBirth: "1993-06-26",
                            rightArmedBowl: true,
                            rightHandedBat: false,
                            bowlingStyle: "MEDIUM_SEAM"
                        },
                        {
                            id: 59,
                            fullName: "Umesh Yadav",
                            shortName: "U Yadav",
                            nationality: "Indian",
                            dateOfBirth: "1987-10-25",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "FAST_SEAM"
                        },
                        {
                            id: 164,
                            fullName: "Virat Kohli",
                            shortName: "V Kohli",
                            nationality: "Indian",
                            dateOfBirth: "1988-11-05",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "MEDIUM_SEAM",
                            isCaptian: true,
                        },
                        {
                            id: 2973,
                            fullName: "Washington Sundar",
                            shortName: "W Sundar",
                            nationality: "Indian",
                            dateOfBirth: "1999-10-05",
                            rightArmedBowl: true,
                            rightHandedBat: false
                        },
                        {
                            id: 111,
                            fullName: "Yuzvendra Chahal",
                            shortName: "Y Chahal",
                            nationality: "Indian",
                            dateOfBirth: "1990-07-23",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "LEG_SPIN"
                        },
                        {
                            id: 167,
                            fullName: "Aaron Finch",
                            shortName: "A Finch",
                            nationality: "Australian",
                            dateOfBirth: "1986-11-17",
                            rightArmedBowl: false,
                            rightHandedBat: true,
                            bowlingStyle: "ORTHODOX"
                        },
                        {
                            id: 836,
                            fullName: "Chris Morris",
                            shortName: "C Morris",
                            nationality: "South African",
                            dateOfBirth: "1987-04-30",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "FAST_SEAM"
                        },
                        {
                            id: 4518,
                            fullName: "Josh Philippe",
                            shortName: "J Philippe",
                            nationality: "Australian",
                            dateOfBirth: "1997-06-01",
                            rightArmedBowl: true,
                            rightHandedBat: true
                        },
                        {
                            id: 4957,
                            fullName: "Pavan Deshpande",
                            shortName: "P Deshpande",
                            nationality: "Indian",
                            dateOfBirth: "1989-09-16",
                            rightArmedBowl: true,
                            rightHandedBat: false,
                            bowlingStyle: "OFF_SPIN"
                        },
                        {
                            id: 180,
                            fullName: "Dale Steyn",
                            shortName: "D Steyn",
                            nationality: "South African",
                            dateOfBirth: "1983-06-27",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "FAST_SEAM"
                        },
                        {
                            id: 13803,
                            fullName: "Shahbaz Ahamad",
                            shortName: "S Ahamad",
                            nationality: "Indian",
                            dateOfBirth: "1994-12-11",
                            rightArmedBowl: false,
                            rightHandedBat: false,
                            bowlingStyle: "ORTHODOX"
                        },
                        {
                            id: 690,
                            fullName: "Isuru Udana",
                            shortName: "I Udana",
                            nationality: "Sri Lankan",
                            dateOfBirth: "1988-02-17",
                            rightArmedBowl: false,
                            rightHandedBat: true,
                            bowlingStyle: "MEDIUM_SEAM"
                        },
                        {
                            id: 958,
                            fullName: "Adam Zampa",
                            shortName: "A Zampa",
                            nationality: "Australian",
                            dateOfBirth: "1992-03-31",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "LEG_SPIN"
                        }
                    ],
                    wicketKeeperId: 44,
                    matchType: "ALL",
                    shirtNumbers: {},
                    capNumbers: {}
                },
                {
                    id: 62,
                    fullName: "Sunrisers Hyderabad",
                    shortName: "Sunrisers",
                    abbreviation: "SRH",
                    type: "m",
                    primaryColor: "fb643e",
                    secondaryColor: "b81c25",
                    isChampion: true,
                    year: "2016  ",
                    venue: "Rajiv Gandhi Intl. Cricket Stadium",
                    players: [
                        {
                            id: 3760,
                            fullName: "Abhishek Sharma",
                            shortName: "A Sharma",
                            nationality: "Indian",
                            dateOfBirth: "2000-09-04",
                            rightArmedBowl: false,
                            rightHandedBat: false,
                            bowlingStyle: "ORTHODOX"
                        },
                        {
                            id: 3825,
                            fullName: "Basil Thampi",
                            shortName: "B Thampi",
                            nationality: "Indian",
                            dateOfBirth: "1993-09-11",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "MEDIUM_SEAM"
                        },
                        {
                            id: 116,
                            fullName: "Bhuvneshwar Kumar",
                            shortName: "B Kumar",
                            nationality: "Indian",
                            dateOfBirth: "1990-02-05",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "MEDIUM_SEAM"
                        },
                        {
                            id: 1521,
                            fullName: "Billy Stanlake",
                            shortName: "B Stanlake",
                            nationality: "Australian",
                            dateOfBirth: "1994-11-04",
                            rightArmedBowl: true,
                            rightHandedBat: false
                        },
                        {
                            id: 170,
                            fullName: "David Warner",
                            shortName: "D Warner",
                            nationality: "Australian",
                            dateOfBirth: "1986-10-27",
                            rightArmedBowl: true,
                            rightHandedBat: false,
                            bowlingStyle: "LEG_SPIN",
                            isCaptian: true,
                        },
                        {
                            id: 506,
                            fullName: "Jonny Bairstow",
                            shortName: "J Bairstow",
                            nationality: "English",
                            dateOfBirth: "1989-09-26",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "MEDIUM_SEAM"
                        },
                        {
                            id: 440,
                            fullName: "Kane Williamson",
                            shortName: "K Williamson",
                            nationality: "New Zealander",
                            dateOfBirth: "1990-08-08",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "OFF_SPIN"
                        },
                        {
                            id: 123,
                            fullName: "Manish Pandey",
                            shortName: "M Pandey",
                            nationality: "Indian",
                            dateOfBirth: "1989-09-10",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "MEDIUM_SEAM"
                        },
                        {
                            id: 618,
                            fullName: "Mohammad Nabi",
                            shortName: "M Nabi",
                            nationality: "Afghan",
                            dateOfBirth: "1985-01-01",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "OFF_SPIN"
                        },
                        {
                            id: 2885,
                            fullName: "Rashid Khan",
                            shortName: "R Khan",
                            nationality: "Afghan",
                            dateOfBirth: "1998-09-20",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "LEG_SPIN"
                        },
                        {
                            id: 1112,
                            fullName: "Sandeep Sharma",
                            shortName: "S Sharma",
                            nationality: "Indian",
                            dateOfBirth: "1993-05-18",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "MEDIUM_SEAM"
                        },
                        {
                            id: 57,
                            fullName: "Shahbaz Nadeem",
                            shortName: "S Nadeem",
                            nationality: "Indian",
                            dateOfBirth: "1989-08-12",
                            rightArmedBowl: false,
                            rightHandedBat: true,
                            bowlingStyle: "ORTHODOX"
                        },
                        {
                            id: 95,
                            fullName: "Shreevats Goswami",
                            shortName: "S Goswami",
                            nationality: "Indian",
                            dateOfBirth: "1989-05-18",
                            rightArmedBowl: false,
                            rightHandedBat: false
                        },
                        {
                            id: 1086,
                            fullName: "Siddarth Kaul",
                            shortName: "S Kaul",
                            nationality: "Indian",
                            dateOfBirth: "1990-05-19",
                            rightArmedBowl: false,
                            rightHandedBat: true
                        },
                        {
                            id: 2964,
                            fullName: "Khaleel Ahmed",
                            shortName: "K Ahmed",
                            nationality: "Indian",
                            dateOfBirth: "1997-12-05",
                            rightArmedBowl: false,
                            rightHandedBat: true,
                            bowlingStyle: "MEDIUM_SEAM"
                        },
                        {
                            id: 3831,
                            fullName: "T Natarajan",
                            shortName: "T Natarajan",
                            nationality: "Indian",
                            dateOfBirth: "1991-05-27",
                            rightArmedBowl: false,
                            rightHandedBat: false,
                            bowlingStyle: "MEDIUM_SEAM"
                        },
                        {
                            id: 1083,
                            fullName: "Vijay Shankar",
                            shortName: "V Shankar",
                            nationality: "Indian",
                            dateOfBirth: "1991-01-26",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "MEDIUM_SEAM"
                        },
                        {
                            id: 16,
                            fullName: "Wriddhiman Saha",
                            shortName: "W Saha",
                            nationality: "Indian",
                            dateOfBirth: "1984-10-24",
                            rightArmedBowl: true,
                            rightHandedBat: true
                        },
                        {
                            id: 6966,
                            fullName: "Virat Singh",
                            shortName: "V Singh",
                            nationality: "Indian",
                            dateOfBirth: "1997-12-08",
                            rightArmedBowl: true,
                            rightHandedBat: false,
                            bowlingStyle: "OFF_SPIN"
                        },
                        {
                            id: 3775,
                            fullName: "Priyam Garg",
                            shortName: "P Garg",
                            nationality: "Indian",
                            dateOfBirth: "2000-11-30",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "MEDIUM_SEAM"
                        },
                        {
                            id: 221,
                            fullName: "Mitchell Marsh",
                            shortName: "M Marsh",
                            nationality: "Australian",
                            dateOfBirth: "1991-10-20",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "MEDIUM_SEAM"
                        },
                        {
                            id: 8242,
                            fullName: "Sandeep Bavanaka",
                            shortName: "S Bavanaka",
                            nationality: "Indian",
                            dateOfBirth: "1992-04-25",
                            rightArmedBowl: true,
                            rightHandedBat: false,
                            bowlingStyle: "FAST_SEAM"
                        },
                        {
                            id: 1707,
                            fullName: "Fabian Allen",
                            shortName: "F Allen",
                            nationality: "West Indian",
                            dateOfBirth: "1995-05-07",
                            rightArmedBowl: false,
                            rightHandedBat: true,
                            bowlingStyle: "ORTHODOX"
                        },
                        {
                            id: 19352,
                            fullName: "Abdul Samad",
                            shortName: "A Samad",
                            nationality: "Indian",
                            dateOfBirth: "2001-10-28",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "LEG_SPIN"
                        },
                        {
                            id: 10631,
                            fullName: "Sanjay Yadav",
                            shortName: "S Yadav",
                            nationality: "Indian",
                            dateOfBirth: "1995-05-10",
                            rightArmedBowl: false,
                            rightHandedBat: false,
                            bowlingStyle: "ORTHODOX"
                        },
                        {
                            id: 1075,
                            fullName: "Jason Holder",
                            shortName: "J Holder",
                            nationality: "West Indian",
                            dateOfBirth: "1991-11-05",
                            rightArmedBowl: true,
                            rightHandedBat: true,
                            bowlingStyle: "MEDIUM_SEAM"
                        }
                    ],

                    wicketKeeperId: 506,
                    matchType: "ALL",
                    shirtNumbers: {},
                    capNumbers: {}
                }
            ]
        }
    }
    render() {
        let playerMarkup = this.state.All.map(el => {
            let idcontent = window.location.href.split('?')[1];
            let id = idcontent.split('=')[1]
            if (el.id === Number(id)) {
                return el.players.map(player => {
                    let name = player.fullName;
                    let firstName = name.split(' ')[0];
                    let lastName = name.substr(name.indexOf(' ') + 1);

                    return <Player key={player.id} name={player.fullName} playerId={player.id} firstName={firstName} lastName={lastName} primaryColor={el.primaryColor} secondaryColor={el.secondaryColor} />
                })
            }
        })
        return (
            <div className="container">
                <h1>Players List</h1>
                <div className="playerList">
                    {playerMarkup}
                </div>
            </div>

        )
    }
}

export default Players