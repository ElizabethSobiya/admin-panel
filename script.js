var url = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';

 
inputData = document.getElementById('search-box');
tableDetail = document.getElementById("data");
 var allDatas;


fetch(
  "http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D"
).then((res) => {
  res.json().then((data) => {
    allDatas = data;

    // console.log(data);
    if (data.length > 0) {
      let temp = "";
      data.forEach((itemData, i) => {
        // console.log(i);
        temp += `<tr onClick = rowClick(${i}) id=${i}>`;
        temp += "<td >" + itemData.id + "</td>";
        temp += "<td>" + itemData.firstName + "</td>";
        temp += "<td>" + itemData.lastName + "</td>";
        temp += "<td>" + itemData.email + "</td>";
        temp += "<td>" + itemData.phone + "</td>";
      });
      document.getElementById("data").innerHTML = temp;
      myFunction(res);
    } else {
      $("#table-data data").html();
    }

    // table color change

    function myFunction(res) {
      $("#table-data tbody tr").click(function () {
        $("#table-data tbody tr.active").removeClass("active");
        this.classList = "active";
      });
    }
    // table color change ends

  //  search bar

    $("#search-box").keyup(function () {
      let inputValue = "";
      data.map((itemData1,i) => {
        console.log(itemData1);
        let outValue = itemData1.firstName;
        if (outValue.match(this.value.toLowerCase())) {
          inputValue += `<tr id=${itemData1.id}>;
          <td > ${itemData1.id}</td>;
          <td> ${itemData1.firstName} </td>;
          <td> ${itemData1.lastName} </td>;
          <td> ${itemData1.email} </td>;
          <td> ${itemData1.phone} </td>;
          </tr>`;
        }
      });
      $("#table-data table tbody").html(inputValue);
      myFunction(res);
    });
  });

});

// get datas from on click and put it in the box

 function rowClick(id) {
   var info = document.getElementById("info-content");
   var des = document.getElementById("des");
   let openDetail = [];
   allDatas.map((item) => {
     openDetail.push(item);
   });
   // console.log(allDatas);
  //  console.log(id);
   
    // console.log(info);
    info.innerHTML = `
     <div><b>User selected:</b> ${openDetail[id].firstName} ${openDetail[id].lastName} </div>
             <div>
               <b>Description: </b>
                <textarea cols="50" rows="5" readonly>
                  ${openDetail[id].description}
                </textarea>
             </div>
    <div><b>Address:</b> ${openDetail[id].address.streetAddress}</div>
             <div><b>City:</b> ${openDetail[id].address.city}</div>
             <div><b>State:</b>${openDetail[id].address.state}</div>
             <div><b>Zip:</b> ${openDetail[id].address.zip}</div>
    
     `;
 }
// / get datas from on click and put it in the box ends

//  get data from table//
// function search_value() {
//   let input = document.getElementById("search-box").value;
//   input = input.toLowerCase();
//   let x = document.getElementsById("data");

//   for (i = 0; i < x.length; i++) {
//     if (!x[i].innerHTML.toLowerCase().includes(input)) {
//       x[i].style.display = "none";
//     } else {
//       x[i].style.display = "";
//     }
//   }
// }






// search box value ///
// const log = document.getElementById("search-box");
// document.addEventListener('keyup', logKey);
// function logKey(e) {
// 	const value=log.value;
// 	if (e.key === 'Enter' || e.keyCode === 13) {
// 		transmit({search: value});
// 	}
// };
// search box value ///


