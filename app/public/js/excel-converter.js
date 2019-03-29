// Converter
function Converter(name, $, _) {
    this.name = name;
};
Converter.prototype.fileNameDebounceKeyUp = _.debounce(function(event) {
    var value = event.target.value;
    this.setFileTitle(value.toLowerCase());
}, 150);
Converter.prototype.setFileTitle = function(title) {
    var element = document.getElementById('file-title');
    var wrapper = element.getElementsByTagName('span')[0];
    wrapper.innerHTML = title;
    /* update */
    this.fileName = title;
};
Converter.prototype.clearFileNameInput = function() {
    document.getElementById('file-name').value = '';
};
Converter.prototype.clearFileNameHTML = function()  {
    var element = document.getElementById('file-title');
    var wrapper = element.getElementsByTagName('span')[0];
    wrapper.innerHTML = '';
};
Converter.prototype.getTableExportDefaults = function() {
    return {
        startOnInstance: true,
        exportButtons: false
    };
};
Converter.prototype.getProductsDataLength = function() {
    return document.querySelectorAll('.products-data').length;
};
Converter.prototype.createInput = function(id) {
    var input = document.createElement("input");
    input.type = "text";
    // input.name = id;
    input.className = 'form-control';
    input.onfocus = this.onInputFocus;
    input.onfocusout = this.onFocusOut;
    return input;
};
Converter.prototype.onInputFocus = function(event) {
    event.target.placeholder = '';
};
Converter.prototype.onFocusOut = function(event) {
    event.target.placeholder = event.target.name;
};
Converter.prototype.createTableInputs = function() {
    var ids = document.querySelector('.editor').children;
    for (var i = 0; i < ids.length; i++) {
        var id = ids[i].id;
        document.querySelector('#' + id).appendChild(this.createInput(id));
    }
};
Converter.prototype.addItem = function() {
    var cloneRow = document.querySelector('.editor').cloneNode(true);
    cloneRow.className = 'products-data';
    this.removePlaceholders(cloneRow.children);
    this.convertInputsIntoInnerHTMLText(cloneRow.children);
    document.getElementById('products-for-excel').appendChild(cloneRow);
    this.clearEditor();
    document.querySelector('#id-number input').focus();
    // Animate to bottom when adding item
    $('html, body').animate({scrollTop:$(document).height()}, 'slow');
};
Converter.prototype.setExcelTableData = function() {
    this.workbook = XLSX.utils.table_to_book(document.getElementById('products-for-excel'));
};
Converter.prototype.getExcelTableData = function() {
    return XLSX.utils.table_to_book(document.getElementById('products-for-excel'));
};
Converter.prototype.clearEditor = function() {
    var editor = document.querySelector('.editor');
    for (var i = 0; i < editor.children.length; i++) {
        editor.children[i].children[0].value = '';
    }
};
Converter.prototype.convertInputsIntoInnerHTMLText = function(htmlCollection) {
    for (var i = 0; i < htmlCollection.length; i++) {
        htmlCollection[i].innerHTML = $('table#products #' + htmlCollection[i].id + ' input').val();
    }
};
Converter.prototype.removePlaceholders = function(htmlCollection) {
    for (var i = 0; htmlCollection.length > i; i++) {
        htmlCollection[i].children[0].placeholder = '';
    }
};
Converter.prototype.removeLastItem = function() {
    var productsDataElements = document.querySelectorAll('.products-data');
    last = _.last(productsDataElements);
    if (last) {
        last.remove(last);
    } else {
        return;
    }
};
Converter.prototype.addItemOnEnter = function() {
    document.addEventListener('keyup', function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            // Trigger the button element with a click
            document.getElementById("add-item-button").click();
        }
    });
};
Converter.prototype.clearExcelTable = function() {
    var productsDataElements = document.querySelectorAll('.products-data');
    productsDataElements.forEach(function(product) {
        product.remove(product);
    });
};
// TODO: add download file button
Converter.prototype.downloadFile = function(event) {
    var fileName = this.fileName || 'test';
    var url = fileName + '.xlsx';
    var workbook = XLSX.utils.table_to_book(document.getElementById('products-for-excel'));
    XLSX.writeFile(workbook, url);
};
Converter.prototype.sendExcelFileViaMail = function() {
    var that = this;
    var workbook = XLSX.utils.table_to_book(document.getElementById('products-for-excel'));
    var hasAnyItemsAdded = document.getElementById('products-for-excel').children.length > 1;
    if (!hasAnyItemsAdded) {
        alert('Por favor, agregue al menos 1 item');
        return;
    }
    var data = {
        workbook: workbook,
        fileName: this.fileName || 'test'
    };
    $.ajax({
        url: '/entries/generatefile',
        data:  JSON.stringify(data),
        method: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        success: function(result) {
            console.log(result);
            that.resetAll();
            alert('Su archivo ha sido enviado con exito a los depositos de We Carry!');
        },
        error: function(error) {
            console.log(error);
            console.log('Error has occured: ' + error);
            alert('Error has occured: ' + error);
        }
    });
};
Converter.prototype.resetAll = function() {
    this.fileName = ''; // File name to empty String
    this.clearFileNameInput();
    this.clearFileNameHTML();
    this.clearEditor(); // Clear editor
    this.clearExcelTable(); // Clear excel table
};
