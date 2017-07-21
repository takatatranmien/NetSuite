
/*********************** Store Records ***********************/



//JS
//Parse Invoice Data
var response = reportData;

var parsedData = response.split(/\n/g);
var DEFAULT_LOCATION = 309;//1; //TODO?
var DEFAULT_CLASS = 407;
var DEFAULT_TEST_ITEM = 330;
//var TEMP_TRAN_DATE = '2016/3/1'; //TODO
var testItem = 286;//333;

for (var i = 1; i < length; i++) {
    var previousRecord = quickSearch("invoice", "custbody_amazon_order_id", "haskeywords", parsedData[i]['amazon-order-id']);
    if (previousRecord) {
        //nlapiLogExecution('debug', "Found Previous Record: " + previousRecord);
        var rec = nlapiLoadRecord('invoice', previousRecord.getId());

        rec.setFieldValue('trandate', convertDate(parsedData[i]['shipment-date']));
        rec.setFieldValue('custbody_amazon_order_id', parsedData[i]['amazon-order-id']);
        rec.setFieldValue('otherrefnum', parsedData[i]['amazon-order-id']);

        var internalid = quickSearch('inventoryitem', 'itemid', 'haskeywords', parsedData[i]['sku']);
        if (internalid != null) { internalid = internalid.getId(); } else { internalid = DEFAULT_TEST_ITEM; }

        var itm = searchLineItem(rec, 'item', 'item', internalid);
        nlapiLogExecution('debug', 'item ' + itm);

        if (itm == 0) {
            nlapiLogExecution('debug', 'creating item ' + itm);
            rec.selectNewLineItem('item');
            var item = quickSearch('inventoryitem', 'itemid', 'haskeywords', parsedData[i]['sku']); //TODO: Redundant??
            if (item != null) { item = item.getId(); } else { item = DEFAULT_TEST_ITEM; }

            rec.setCurrentLineItemValue('item', 'item', item);
            rec.setCurrentLineItemValue('item', 'amount', parsedData[i]['item-price']);
            rec.setCurrentLineItemValue('item', 'quantity', parsedData[i]['quantity-shipped']); //quantity
            //rec.setCurrentLineItemValue('item', 'location', DEFAULT_LOCATION); //not required
            rec.setCurrentLineItemValue('item', 'taxcode', DEFAULT_TAX_CODE);
            rec.setCurrentLineItemValue('item', 'taxrate1', parsedData[i]['item-tax']);
            //rec.setCurrentLineItemValue('item', 'custcol_amazon_sku', parsedData[i]['sku']);
            rec.commitLineItem('item');

            nlapiLogExecution('debug', JSON.stringify(rec));
            //nlapiLogExecution('debug', JSON.stringify(rec));

        }
        nlapiSubmitRecord(rec);
    } else {
        var rec = nlapiCreateRecord('invoice');
        rec.setFieldValue('entity', DEFAULT_ENTITY);
        rec.setFieldValue('subsidiary', DEFAULT_SUBSIDIARY);

        rec.setFieldValue('trandate', convertDate(parsedData[i]['shipment-date']));
        rec.setFieldValue('location', DEFAULT_LOCATION);
        rec.setFieldValue('class', DEFAULT_CLASS);
        rec.setFieldValue('custbody_amazon_order_id', parsedData[i]['amazon-order-id']);
        rec.setFieldValue('otherrefnum', parsedData[i]['amazon-order-id']);
        rec.selectNewLineItem('item');
        var item = quickSearch('inventoryitem', 'itemid', 'haskeywords', parsedData[i]['sku']); //TODO: try/catch
        if (item != null) { item = item.getId(); } else { item = DEFAULT_TEST_ITEM; }

        rec.setCurrentLineItemValue('item', 'item', item);
        rec.setCurrentLineItemValue('item', 'amount', parsedData[i]['item-price']);
        rec.setCurrentLineItemValue('item', 'quantity', parsedData[i]['quantity-shipped']); //quantity
        rec.setCurrentLineItemValue('item', 'location', DEFAULT_LOCATION);
        rec.setCurrentLineItemValue('item', 'taxcode', DEFAULT_TAX_CODE);
        rec.setCurrentLineItemValue('item', 'taxrate1', parsedData[i]['item-tax']);
        //rec.setCurrentLineItemValue('item', 'custcol_amazon_sku', parsedData[i]['sku']);
        rec.commitLineItem('item');

        nlapiLogExecution('debug', JSON.stringify(rec));
        nlapiSubmitRecord(rec);
    }
    createUpdateInvoice(parsedData[i]);
    //yieldScript();
}
