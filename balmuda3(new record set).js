

function add_Logs(){

	var reportData =
	"amazon-order-id	merchant-order-id	shipment-id	shipment-item-id	amazon-order-item-id	merchant-order-item-id	purchase-date	payments-date	shipment-date	reporting-date	buyer-email	buyer-name	buyer-phone-number	sku	product-name	quantity-shipped	currency	item-price	item-tax	shipping-price	shipping-tax	gift-wrap-price	gift-wrap-tax	ship-service-level	recipient-name	ship-address-1	ship-address-2	ship-address-3	ship-city	ship-state	ship-postal-code	ship-country	ship-phone-number	bill-address-1	bill-address-2	bill-address-3	bill-city	bill-state	bill-postal-code	bill-country	item-promotion-discount	ship-promotion-discount	carrier	tracking-number	estimated-arrival-date	fulfillment-center-id	fulfillment-channel	sales-channel	points-granted\n" +
	"249-0814575-0394263		Dlvj7BYxk	DHf2GPpHR	67225985676654		2017-06-05T06:57:28+09:00	2017-06-05T19:58:19+09:00	2017-06-05T19:58:19+09:00	2017-06-05T22:58:25+09:00	mnqxldr5q311j1g@marketplace.amazon.co.jp	島村賢		K01E-GW	バルミューダ スチームオーブントースター BALMUDA The Toaster K01E-GW（グレー）	1	JPY	24732.00	0.00	0.00	0.00	0.00	0.00	Expedited	島村 賢	足立区千住旭町17-15			--	東京都	120-0026	JP									0.00	0.00	YAMATO	443656408532	2017-06-05T20:00:00+09:00	HND3	AFN	Amazon.co.jp	0\n" +
	"249-2755740-9626201		Dd8Br2YNk	D7fPGMpRR	22033168499822		2017-06-04T22:39:20+09:00	2017-06-05T19:38:33+09:00	2017-06-05T19:38:33+09:00	2017-06-05T22:38:39+09:00	w219z2spg6v1d5k@marketplace.amazon.co.jp	布施木 稔		K01E-GW	バルミューダ スチームオーブントースター BALMUDA The Toaster K01E-GW（グレー）	1	JPY	24732.00	0.00	175.00	0.00	0.00	0.00	Standard	布施木 稔	所沢市東新井町741-20			--	埼玉県	359-0034	JP									0.00	-175.00	YAMATO	443659263412	2017-06-06T20:00:00+09:00	HND3	AFN	Amazon.co.jp	0\n"+
	"250-5566029-6809414		DHslry0Zb	DdRCmdNsR	5.80293E+13		2017-06-04T15:52:52+09:00	2017-06-05T18:42:06+09:00	2017-06-05T18:42:06+09:00	2017-06-05T21:42:12+09:00	cv14t1tckp7gx44@marketplace.amazon.co.jp	平良勝也		EJT-S200	バルミューダ 360°酵素フィルター（EJT-S200／空気清浄機 AirEngine、JetClean用交換フィルター）	1	JPY	10080	0	0	0	0	0	Standard	ファミリーマート 石嶺小学校前	那覇市首里石嶺町４丁目９０番１			--	沖縄県	903-0804	JP									0	0	YAMATO	2.77343E+11	2017-06-10T20:00:00+09:00	FSZ1	AFN	Amazon.co.jp	0\n"+
	"250-0587548-2247834		DlvlsyYgk	Dx05GmpZR	5.01455E+13		2017-06-04T17:44:52+09:00	2017-06-05T18:10:29+09:00	2017-06-05T18:10:29+09:00	2017-06-05T21:10:40+09:00	gld8c0wy0yrf8ln@marketplace.amazon.co.jp	工藤広平		EGF-1600-WC	バルミューダ 省エネ 静音 リビング扇風機 The GreenFan（グリーンファン）| EGF-1600-WC（ホワイト×シャンパンゴー	1	JPY	38880	0	0	0	0	0	Expedited	ブレインキャピタルサービス	千代田区神田神保町１５２	レオマックビル2 ４階		--	東京都	101-0051	JP									0	0	YAMATO	4.43655E+11	2017-06-06T20:00:00+09:00	HND3	AFN	Amazon.co.jp	0\n"+
	"503-2176328-6223811		DR0Z11YDk	D70wGSplR	4.94748E+13		2017-06-05T15:11:38+09:00	2017-06-05T17:55:55+09:00	2017-06-05T17:55:55+09:00	2017-06-05T20:56:02+09:00	vprt7n4p9kjj7jm@marketplace.amazon.co.jp	柏木 崇志		K01E-GW	バルミューダ スチームオーブントースター BALMUDA The Toaster K01E-GW（グレー）	1	JPY	24732	0	0	0	0	0	Expedited	樋下田 薫	横浜市鶴見区東寺尾5-2-10	グランシーナ東寺尾710室		--	神奈川県	230-0077	JP									0	0	YAMATO	4.43659E+11	2017-06-06T20:00:00+09:00	HND3	AFN	Amazon.co.jp	0\n"+
	"249-6803476-5998221		Dmx11DY6k	DqL1G0pKR	1.82113E+13		2017-06-05T14:26:39+09:00	2017-06-05T15:52:05+09:00	2017-06-05T15:52:05+09:00	2017-06-05T18:52:10+09:00	jw9dvj4rwxysk82@marketplace.amazon.co.jp	寺内 真紀		K02A-BK	バルミューダ 電気ケトル BALMUDA The Pot K02A-BK（ブラック）	1	JPY	11880	0	0	0	0	0	Expedited	寺内 真紀	比企郡鳩山町鳩ヶ丘４?９?１０			--	埼玉県	350-0312	JP									0	0	YAMATO	4.43659E+11	2017-06-06T20:00:00+09:00	HND3	AFN	Amazon.co.jp	0\n"+
	"503-8346168-3395065		DRwkrVYzk	DxLrG7pLR	5.10141E+13		2017-06-04T22:25:26+09:00	2017-06-05T15:20:55+09:00	2017-06-05T15:20:55+09:00	2017-06-05T18:21:00+09:00	d1f684xlg5nt87p@marketplace.amazon.co.jp	zhengshuncai		EGF-1600-WC	バルミューダ 省エネ 静音 リビング扇風機 The GreenFan（グリーンファン）| EGF-1600-WC（ホワイト×シャンパンゴー	1	JPY	38880	0	175	0	0	0	Standard		泉北郡忠岡町忠岡南3-1514-7	JT1162070-01		--	大阪府	595-0813	JP									0	-175	YAMATO	4.43658E+11	2017-06-06T20:00:00+09:00	HND3	AFN	Amazon.co.jp	0\n"+
	"249-6330204-1633436		DzD9rWYBk	Dx0WG1p2R	1.0825E+12		2017-06-05T11:33:24+09:00	2017-06-05T17:10:52+09:00	2017-06-05T17:10:53+09:00	2017-06-05T18:10:59+09:00	b6w4x3d3n5c3grx@marketplace.amazon.co.jp	sujinback		K02A-WH	バルミューダ 電気ケトル BALMUDA The Pot K02A-WH（ホワイト）	1	JPY	11880	0	0	0	0	0	Expedited	Backsoojin	堺市堺区戎島町 2-30-1 ターミナル	マンション 朝日プラザ堺 107号室		--	大阪府	590-0985	JP									0	0	YAMATO	4.43659E+11	2017-06-06T20:00:00+09:00	HND3	AFN	Amazon.co.jp	0\n"+
	"503-4161506-3251001		Dy8RrJYCk	DWL1G0pDR	4.63741E+13		2017-06-05T11:27:16+09:00	2017-06-05T14:48:54+09:00	2017-06-05T14:48:54+09:00	2017-06-05T17:49:02+09:00	16pssq07sc5j7jk@marketplace.amazon.co.jp	小川 寛之		K01E-WS	バルミューダ スチームオーブントースター BALMUDA The Toaster K01E-WS（ホワイト）	1	JPY	24732	0	0	0	0	0	Expedited	小川 寛之	足立区弘道1-39-15	アイディーコート青井403		--	東京都	120-0013	JP									0	0	YAMATO	4.43658E+11	2017-06-06T20:00:00+09:00	HND3	AFN	Amazon.co.jp	0\n"+
	"249-5507672-9257449		DM0lr8Yrk	DkLhGnpBR	2.76315E+13		2017-06-05T09:15:37+09:00	2017-06-05T14:20:16+09:00	2017-06-05T14:20:16+09:00	2017-06-05T17:20:23+09:00	k23k5gfnxc489wx@marketplace.amazon.co.jp	タナカ ケンタロウ		EGF-1600-WG	バルミューダ 省エネ 静音 リビング扇風機 The GreenFan（グリーンファン）| EGF-1600-WG（ホワイト×グレー）	1	JPY	38880	0	0	0	0	0	Expedited	田中賢太郎	板橋区加賀2-18-28-716		株式会社ブルームアンドカンパニー	--	東京都	173-0003	JP									0	0	YAMATO	4.43657E+11	2017-06-06T20:00:00+09:00	HND3	AFN	Amazon.co.jp	0\n"+
	"250-3928422-4763817		DdHqrJYkk	DfGMGhppR	7.02411E+12		2017-06-05T09:41:39+09:00	2017-06-05T13:23:05+09:00	2017-06-05T13:23:05+09:00	2017-06-05T16:23:09+09:00	hqs1g276nbn6sss@m.marketplace.amazon.co.jp	打田 裕也		EGF-1600-WC	バルミューダ 省エネ 静音 リビング扇風機 The GreenFan（グリーンファン）| EGF-1600-WC（ホワイト×シャンパンゴー	1	JPY	38880	0	0	0	0	0	Expedited	打田裕也	亀山市野村1-15-8			--	三重県	519-0165	JP									0	0	YAMATO	4.43657E+11	2017-06-06T20:00:00+09:00	HND3	AFN	Amazon.co.jp	0\n"+
	"503-8346168-3395065		DPwxr2Yzk	DvGjG0ppR	5.10141E+13		2017-06-04T22:25:26+09:00	2017-06-05T13:22:09+09:00	2017-06-05T13:22:09+09:00	2017-06-05T16:22:14+09:00	d1f684xlg5nt87p@marketplace.amazon.co.jp	zhengshuncai		EGF-1600-WC	バルミューダ 省エネ 静音 リビング扇風機 The GreenFan（グリーンファン）| EGF-1600-WC（ホワイト×シャンパンゴー	1	JPY	38880	0	175	0	0	0	Standard		泉北郡忠岡町忠岡南3-1514-7	JT1162070-01		--	大阪府	595-0813	JP									0	-175	YAMATO	4.43658E+11	2017-06-06T20:00:00+09:00	HND3	AFN	Amazon.co.jp	0\n"+
	"503-0909486-0669423		Dd7hsjYsk	DxGCG4pmR	6.62746E+13		2017-06-04T14:44:28+09:00	2017-06-05T13:21:07+09:00	2017-06-05T13:21:07+09:00	2017-06-05T16:21:12+09:00	lwx7vq61gy56jwx@marketplace.amazon.co.jp	三井礼子		K01E-GW	バルミューダ スチームオーブントースター BALMUDA The Toaster K01E-GW（グレー）	1	JPY	24732	0	350	0	154	0	Standard	本間千夏	京都市中京区	壬生下溝町17-25ACASA高辻2号室		--	京都府	604-8832	JP									0	-350	YAMATO	4.43657E+11	2017-06-06T20:00:00+09:00	HND3	AFN	Amazon.co.jp	0\n"+
	"503-8818552-8744624		DdDsFpYfk	DkLjGGpvR	3.09607E+13		2017-06-02T17:12:47+09:00	2017-06-05T14:56:36+09:00	2017-06-05T14:56:38+09:00	2017-06-05T15:56:43+09:00	2skn366t9s79tkn@marketplace.amazon.co.jp	やすらぎ苑		K01E-KG	バルミューダ スチームオーブントースター BALMUDA The Toaster K01E-KG（ブラック）	1	JPY	24732	0	175	0	0	0	Standard	さるふつやすらぎ苑	宗谷郡猿払村鬼志別北町７０番地		社会福祉法人 猿払福祉会	--	北海道	098-6234	JP									0	-175	YAMATO	4.43658E+11	2017-06-07T20:00:00+09:00	HND3	AFN	Amazon.co.jp	0\n"+
	"249-5507672-9257449		DsxK3j0Qb	Dm8mlQNmR	6.22498E+13		2017-06-05T09:15:37+09:00	2017-06-05T12:45:10+09:00	2017-06-05T12:45:10+09:00	2017-06-05T15:45:16+09:00	k23k5gfnxc489wx@marketplace.amazon.co.jp	タナカ ケンタロウ		EGF-P100	バルミューダ Battery&Dock（バッテリー＆ドック）The GreenFan専用 コードレスオプション EGF-P100	1	JPY	10584	0	0	0	0	0	Expedited	田中賢太郎	板橋区加賀2-18-28-716		株式会社ブルームアンドカンパニー	--	東京都	173-0003	JP									0	0	YAMATO	4.43657E+11	2017-06-06T20:00:00+09:00	FSZ1	AFN	Amazon.co.jp	0\n"+
	"250-0348679-9363806		DmSxs5Ygk	D4s9G7pZR	3.18065E+13		2017-06-01T13:52:12+09:00	2017-06-05T10:36:21+09:00	2017-06-05T09:34:46+09:00	2017-06-05T11:34:51+09:00	6cb304dfzg5676h@marketplace.amazon.co.jp	南部 旨利		EGF-1600-DK	バルミューダ 省エネ 静音 リビング扇風機 The GreenFan（グリーンファン）| EGF-1600-DK（ダークグレー×ブラック）	1	JPY	38880	0	0	0	0	0	Expedited	南部旨利	野々市市二日市5丁目	381番地		--	石川県	921-8807	JP									0	0	YAMATO	4.43655E+11	2017-06-06T20:00:00+09:00	HND3	AFN	Amazon.co.jp	0\n"+
	"250-3668123-3892651		Dm4JLgYHk	D7svGlpGR	3.3126E+13		2017-06-04T22:55:41+09:00	2017-06-05T04:13:43+09:00	2017-06-05T03:38:03+09:00	2017-06-05T04:38:07+09:00	g91rwp38wsg96b1@marketplace.amazon.co.jp	山内 雅司		K01E-KG	バルミューダ スチームオーブントースター BALMUDA The Toaster K01E-KG（ブラック）	1	JPY	24732	0	0	0	0	0	Expedited	山内 雅司	旭川市末広１条	2丁目6-22 デスパシオナンバー2 102号室		--	北海道	071-8131	JP									0	0	YAMATO	4.43655E+11	2017-06-07T20:00:00+09:00	HND3	AFN	Amazon.co.jp	0";



	//HASH
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
   

 	for(var i=0; i<parsedData.length; i++){
 		var rec_name = quickSearch('customrecordbalmuda1', 'name', 'haskeywords', parsedData[i]['amazon-order-id']);
 		if(rec_name){
 			var LoadsRec = nlapiLoadRecord('customrecordbalmuda1', rec_name.getId());

 			var logError = LoadsRec.getFieldValue('custrecorderrormessageid');
 			LoadsRec.setFieldValue('custrecorderrormessageid',"");

			var logItemOrder = LoadsRec.getFieldValue('custrecorditemorderid');
 			LoadsRec.setFieldValue('custrecorditemorderid',"");

 			if(logError===null) logError="" ;
 			if(logItemOrder===null) logItemOrder="";

 				if (i===0) {
 					LoadsRec.setFieldValue('custrecorderrormessageid',"ERRORがある? "+"	|	"+parsedData[0]["amazon-order-id"]+"	|	"+parsedData[0]["purchase-date"]);
 			
 					LoadsRec.setFieldValue('custrecorditemorderid',"[Number"+"]	|	["+parsedData[0]["sku"]+"]	|	["+parsedData[0]["product-name"] +"]	|	["+parsedData[0]["quantity-shipped"]+"]	|	["+parsedData[0]["currency"]+"]	|	["+parsedData[0]["item-price"]+"]	|	["+parsedData[0]["item-tax"]+"]	|	["+parsedData[0]["shipping-price"]+"]	|	["+parsedData[0]["shipping-tax"]+"]	|	["+parsedData[0]["gift-wrap-price"]+"]	|	["+parsedData[0]["gift-wrap-tax"]+"]");				
 				}else{
 					LoadsRec.setFieldValue('custrecorderrormessageid',logError+'\n'+parsedData[i]["error"]+"	|	"+parsedData[i]["amazon-order-id"]+"	|	"+parsedData[i]["purchase-date"]);
 				
 					LoadsRec.setFieldValue('custrecorditemorderid',logItemOrder+'\n'+"["+i+"]	|	["+parsedData[i]["sku"]+"]	|	["+parsedData[i]["product-name"] +"]	|	["+parsedData[i]["quantity-shipped"]+"]	|	["+parsedData[i]["currency"]+"]	|	["+parsedData[i]["item-price"]+"]	|	["+parsedData[i]["item-tax"]+"]	|	["+parsedData[i]["shipping-price"]+"]	|	["+parsedData[i]["shipping-tax"]+"]	|	["+parsedData[i]["gift-wrap-price"]+"]	|	["+parsedData[i]["gift-wrap-tax"]+"]");
 				}

 			var id = nlapiSubmitRecord(LoadsRec);
 			
 		}else{
 			var rec = nlapiCreateRecord('customrecordbalmuda1')
 			rec.setFieldValue('name', parsedData[i][0]);
			rec.setFieldValue('custrecordorderid', parsedData[i]["amazon-order-id"]);
			rec.setFieldValue('custrecorderrormessageid', parsedData[i]["error"]+"	|	"+parsedData[i]["amazon-order-id"]+"	|	"+parsedData[i]["purchase-date"]);
			rec.setFieldValue('custrecorditemorderid', "["+i+"]	|	["+parsedData[i]["sku"]+"]	|	["+parsedData[i]["product-name"] +"]	|	["+parsedData[i]["quantity-shipped"]+"]	|	["+parsedData[i]["currency"]+"]	|	["+parsedData[i]["item-price"]+"]	|	["+parsedData[i]["item-tax"]+"]	|	["+parsedData[i]["shipping-price"]+"]	|	["+parsedData[i]["shipping-tax"]+"]	|	["+parsedData[i]["gift-wrap-price"]+"]	|	["+parsedData[i]["gift-wrap-tax"]+"]");
	
			nlapiSubmitRecord(rec);
			nlapiLogExecution('debug', JSON.stringify(rec));
 		}
 	}
 }

 add_Logs()



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




/*
function del_Customer (name){

	var results = quickSearch('customrecordbalmuda1', 'name', 'haskeywords', name);
	
	if(results!=null){
		var del_result = nlapiDeleteRecord('customrecordbalmuda1',results.getId());
		return true;
 	}else{
 		alert("results nothing");
 		return false;
 	}
}

del_Customer('amazon order')

*/