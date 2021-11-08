const data = [
    {region: 'US', model: 'A', sales: 150},
    {region: 'US', model: 'B', sales: 120},
    {region: 'US', model: 'C', sales: 350},
    {region: 'EU', model: 'A', sales: 200},
    {region: 'EU', model: 'B', sales: 100},
    {region: 'EU', model: 'C', sales: 250},
    {region: 'CA', model: 'A', sales: 200},
    {region: 'CA', model: 'B', sales: 100},
    {region: 'CA', model: 'C', sales: 230},
    {region: 'CA', model: 'D', sales: 400},
];



// get region list
const getRegion = (arr) => {
    let regionList = [];
    for (let i = 0; i < arr.length; i++) {
        if (i === 0 || arr[i].region !== arr[i - 1].region) {
            regionList.push(arr[i].region);
        }
    }
    return regionList;
};


// count sales sum for each region
const getSum = (arr, region) => {
    let amount = 0;
    arr.forEach((ele) => {
        if (ele.region === region) {
            amount += ele.sales;
        }
    })
    return amount;
};


const createRows = (arr) => {
    let tmp = '';
    tmp += ` 
    <tr>
    <th>Region</th>
    <th>Model</th>
    <th>Sales</th>
  </tr>
</tr>`;
    const row = document.querySelector(".records");
    let regionList = getRegion(arr);
    regionList.forEach((ele) => {
        let sum = getSum(arr, ele);
        tmp += ` 
            <tr>
            <td>${ele}</td>
            <td> SUM </td>
            <td>${sum}</td>
        </tr>`;

        arr.forEach((element) => {
            if (element.region === ele) {
                tmp += ` 
                <tr>
                <td>${element.region}</td>
                <td> ${element.model} </td>
                <td>${element.sales}</td>
            </tr>`;
            }
           
          });

    });
    
    return tmp;
};

const row = document.querySelector(".records");

let html = createRows(data);
row.innerHTML = html;

//question 2
// const filter = document.querySelector(".filter");
// let htmlFilter = createRows(data);
// filter.innerHTML = htmlFilter;

const createDropList = (arr) => {
    let tmpRegion = '';
    let regionList = getRegion(arr);
    
    regionList.forEach((ele) => {
        tmpRegion += `<option>${ele}</option>`;
    })
    return tmpRegion;
}

// let Drop = querySelector('#regionDrop');
// let regionHTML = createDropList(data);
// Drop.innerHTML = regionHTML; 



const getModel = (arr) => {
    let modelList = [];
    arr.forEach((ele) => {
        
            modelList.push(ele.model);
    })
    let uniqueChars = [...new Set(modelList)];
    return uniqueChars;
}
// console.log(getModel(data));


const filter = document.querySelector("#test");
// let table2 = createRows(data);
filter.innerHTML = html;

// let dropdown = document.querySelector("#regionDrop");
const setUpEvent = () => {
    let regionDrop = document.querySelector("#regionDrop");
    let modelDrop = document.querySelector("#modelDrop");
    regionDrop.addEventListener('change', event => {
        dropdown.value = event.target.value;
    });
    modelDrop.values.addEventListener('change', event => {
        modelDrop.value = event.target.value;
    });
}

setUpEvent();
