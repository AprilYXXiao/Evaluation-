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

const createRegionDrop = (arr) => {
    let tmp = '';
    tmp += `<option>ALL</option>`;
    let regionList = getRegion(arr);   
    regionList.forEach((ele) => {
        tmp += `<option>${ele}</option>`;
    })
    return tmp;
}

const createModelDrop = (arr) => {
    let tmp = '';
    let modelList = getModel(arr);   
    modelList.forEach((ele) => {
        tmp += `<option>${ele}</option>`;
    })
    return tmp;
}

const getModel = (arr) => {
    let modelList = [];
    arr.forEach((ele) => {
        
            modelList.push(ele.model);
    })
    let uniqueChars = [...new Set(modelList)];
    return uniqueChars;
}
// console.log(getModel(data));




const reginDrop = document.querySelector("#regionDrop");
const regionDropHTML = createRegionDrop(data);
reginDrop.innerHTML = regionDropHTML;

const modelDrop = document.querySelector("#modelDrop");
const modelDropHTML = createModelDrop(data);
modelDrop.innerHTML = modelDropHTML;


const table2 = document.querySelector("#test");
table2.innerHTML = html;

// const setUpEvent = (arr) => {
//     let regions = document.querySelector('#regionDrop');
//     let models = document.querySelector('#modelDrop');
//     const filter = document.querySelector("#test");
//     regions.addEventListener('change', event => {
//         if (event.target.value == "ALL") {
            
//         } else if (){

//         }
//         view.domElements.values.value = event.target.value;
//     });
//     models.addEventListener('change', event => {
//         view.domElements.keys.value = event.target.value;
//     });
// }

function filterTable() {
    // Variables
    let dropdown, table, rows, cells, country, filter;
    dropdown = document.querySelector("#regionDrop");
    table = document.querySelector("#test");
    rows = table.getElementsByTagName("tr");
    filter = dropdown.value;
    // Loops through rows and hides those with countries that don't match the filter
    for (let row of rows) { // `for...of` loops through the NodeList
      cells = row.getElementsByTagName("td");
      country = cells[1] || null; // gets the 2nd `td` or nothing
      // if the filter is set to 'All', or this is the header row, or 2nd `td` text matches filter
      if (filter === "ALL" || !country || (filter === country.textContent)) {
        row.style.display = ""; // shows this row
        console.log(filter);
      }
      else {
        row.style.display = "none"; // hides this row
      }
    }


  }
  filterTable();
