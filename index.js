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
// console.log(getRegion(data));

// const addRowtoData = (arr) => {
//     let regionList = getRegion(arr);
//     let sumRecord = {};
//     let sumUS = getSum(arr,regionList[0]);
//     let sumEU = getSum(arr,regionList[1]);
//     let sumCS = getSum(arr,regionList[2]);

//     for (let i = 0; i < arr.length; i++) {
//         if (i == 0 || arr[i].region !== arr[i - 1].region) {
//             arr.push({region: arr[i].region, model: 'Sum', sales: sum});
//         }
//     }
//     return arr;
// }
// console.log(addSuntoData(arr));

// const createRows = (arr, region) => {
//     let tmp = '';

//     let sum = getSum(arr, region);
//     tmp += ` 
//             <tr>
//             <td>${region}</td>
//             <td> SUM </td>
//             <td>${sum}</td>
//         </tr>`;
//     arr.forEach((ele) => {
//         if (ele.region === region) {
//             tmp += ` 
//             <tr>
//             <td>${ele.region}</td>
//             <td> ${ele.model} </td>
//             <td>${ele.sales}</td>
//         </tr>`;
//         }
       
//       });
//     return tmp;
// };

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

// const row = document.querySelector(".records");
// let regionList = getRegion(data);
// regionList.forEach((ele) => {
//     const htmlRocords = createRows(data, ele);
//     row.innerHTML = htmlRocords;
// });
// let test = 'US';
// const htmlRocords = createRows(data, test);
// row.innerHTML = htmlRocords;


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
// let test = 'US';
// const htmlRocords = createRows(data, test);
// row.innerHTML = htmlRocords;
