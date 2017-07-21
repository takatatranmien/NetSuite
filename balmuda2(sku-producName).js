
function add_Logs(customerName){

	var reportData =
	"sku	product-name	quantity-shipped	currency	item-price	item-tax	shipping-price	shipping-tax	gift-wrap-price	gift-wrap-tax\n"+
	"K01E-GW	バルミューダ スチームオーブントースター BALMUDA The Toaster K01E-GW（グレー）	1	JPY	24732	0	0	0	0	0\n"+
	"K01E-GW	バルミューダ スチームオーブントースター BALMUDA The Toaster K01E-GW（グレー）	1	JPY	24732	0	175	0	0	0\n"+
	"EJT-S200	バルミューダ 360°酵素フィルター（EJT-S200／空気清浄機 AirEngine、JetClean用交換フィルター）	1	JPY	10080	0	0	0	0	0\n"+
	"EGF-1600-WC	バルミューダ 省エネ 静音 リビング扇風機 The GreenFan（グリーンファン）| EGF-1600-WC（ホワイト×シャンパンゴー	1	JPY	38880	0	0	0	0	0\n"+
	"K01E-GW	バルミューダ スチームオーブントースター BALMUDA The Toaster K01E-GW（グレー）	1	JPY	24732	0	0	0	0	0\n"+
	"K02A-BK	バルミューダ 電気ケトル BALMUDA The Pot K02A-BK（ブラック）	1	JPY	11880	0	0	0	0	0\n"+
	"EGF-1600-WC	バルミューダ 省エネ 静音 リビング扇風機 The GreenFan（グリーンファン）| EGF-1600-WC（ホワイト×シャンパンゴー	1	JPY	38880	0	175	0	0	0\n"+
	"K02A-WH	バルミューダ 電気ケトル BALMUDA The Pot K02A-WH（ホワイト）	1	JPY	11880	0	0	0	0	0\n"+
	"K01E-WS	バルミューダ スチームオーブントースター BALMUDA The Toaster K01E-WS（ホワイト）	1	JPY	24732	0	0	0	0	0\n"+
	"EGF-1600-WG	バルミューダ 省エネ 静音 リビング扇風機 The GreenFan（グリーンファン）| EGF-1600-WG（ホワイト×グレー）	1	JPY	38880	0	0	0	0	0\n"+
	"EGF-1600-WC	バルミューダ 省エネ 静音 リビング扇風機 The GreenFan（グリーンファン）| EGF-1600-WC（ホワイト×シャンパンゴー	1	JPY	38880	0	0	0	0	0\n"+
	"EGF-1600-WC	バルミューダ 省エネ 静音 リビング扇風機 The GreenFan（グリーンファン）| EGF-1600-WC（ホワイト×シャンパンゴー	1	JPY	38880	0	175	0	0	0\n"+
	"K01E-GW	バルミューダ スチームオーブントースター BALMUDA The Toaster K01E-GW（グレー）	1	JPY	24732	0	350	0	154	0\n"+
	"K01E-KG	バルミューダ スチームオーブントースター BALMUDA The Toaster K01E-KG（ブラック）	1	JPY	24732	0	175	0	0	0\n"+
	"EGF-P100	バルミューダ Battery&Dock（バッテリー＆ドック）The GreenFan専用 コードレスオプション EGF-P100	1	JPY	10584	0	0	0	0	0\n"+
	"EGF-1600-DK	バルミューダ 省エネ 静音 リビング扇風機 The GreenFan（グリーンファン）| EGF-1600-DK（ダークグレー×ブラック）	1	JPY	38880	0	0	0	0	0\n"+
	"K01E-KG	バルミューダ スチームオーブントースター BALMUDA The Toaster K01E-KG（ブラック）	1	JPY	24732	0	0	0	0	0";



    //JS
    var response = reportData;

    var parsedData = response.split(/\n/g);
    for (var i = 0; i < parsedData.length; i++) {
    	parsedData[i] = parsedData[i].split("\t");
    }

    for (var y = 0; y < parsedData.length; y++) {
    	for (var x = 0; x < parsedData[y].length; x++) {
    		var str = parsedData[0][x];
    		parsedData[y][str] = parsedData[y][x];
    	}
    }

   // console.log(parsedData[1]["amazon-order-id"]);



   var rec_name = quickSearch('customrecordbalmuda1', 'name', 'haskeywords', customerName);
   if(rec_name){
   	var LoadsRec = nlapiLoadRecord('customrecordbalmuda1', rec_name.getId());


   	for(var i=0; i<parsedData.length; i++){
   		if (i===0) {
   			var logItemOrder = LoadsRec.getFieldValue('custrecorditemorderid');
   			LoadsRec.setFieldValue('custrecorditemorderid',"");

   			LoadsRec.setFieldValue('custrecorditemorderid',"[Number"+"]	|	["+parsedData[0]["sku"]+"]	|	["+parsedData[0]["product-name"] +"]	|	["+parsedData[0]["quantity-shipped"]+"]	|	["+parsedData[0]["currency"]+"]	|	["+parsedData[0]["item-price"]+"]	|	["+parsedData[0]["item-tax"]+"]	|	["+parsedData[0]["shipping-price"]+"]	|	["+parsedData[0]["shipping-tax"]+"]	|	["+parsedData[0]["gift-wrap-price"]+"]	|	["+parsedData[0]["gift-wrap-tax"]+"]");
   		}else{
   			var logItemOrder = LoadsRec.getFieldValue('custrecorditemorderid');
   			LoadsRec.setFieldValue('custrecorditemorderid',logItemOrder+'\n'+"["+i+"]	|	["+parsedData[i]["sku"]+"]	|	["+parsedData[i]["product-name"] +"]	|	["+parsedData[i]["quantity-shipped"]+"]	|	["+parsedData[i]["currency"]+"]	|	["+parsedData[i]["item-price"]+"]	|	["+parsedData[i]["item-tax"]+"]	|	["+parsedData[i]["shipping-price"]+"]	|	["+parsedData[i]["shipping-tax"]+"]	|	["+parsedData[i]["gift-wrap-price"]+"]	|	["+parsedData[i]["gift-wrap-tax"]+"]");
   		}
   	}

   	var id = nlapiSubmitRecord(LoadsRec);
   	return id;
   }else{
   	alert("Nothing !!!");
   }
}

add_Logs('bCustom1234')



function quickSearch(recordId, column, operator, value) {
	try {
		var filters = new Array();
		filters[0] = new nlobjSearchFilter(column, null, operator, value);

		var columns = new Array();
		columns[0] = new nlobjSearchColumn(column);

		var results = nlapiSearchRecord(recordId, null, filters, columns);
	}
	catch (e) {
		nlapiLogExecution("ERROR", "quickSearch(): " + e.message);
	}
	if (results) {
		return results[0];
	}
	return null;
}


