

const counter = () => {
    const numString = document.getElementById('number').innerText;
    const num = parseInt(numString);
    addNewNum(num)
};

const addNewNum = num => {
    let newNum = num + 1
    document.getElementById('number').innerText = newNum
    saveDataToLocalStorage(newNum)
    console.log(newNum)
};


const getDataFromLocalStorage = () => {
    let number = 0;
    const storedNum = localStorage.getItem('number');
    if (storedNum) {
        number = storedNum
    }
    return number;
};


const saveDataToLocalStorage = num => {
    const numberString = getDataFromLocalStorage()
    let number = parseInt(numberString);
    const newNumber = number + 1
    localStorage.setItem('number',newNumber)
};



const displayFromLocalStorage = () => {
    const numberString = getDataFromLocalStorage();
    const number = parseInt(numberString);
    addNewNum(number);
};

displayFromLocalStorage()

