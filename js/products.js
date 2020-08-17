var show = [];

function showproductsList(productsArray) {

    let htmlContentToAppend = "";
    for (let i = 0; i < Array.lenght; i++) {
        let products = Array[i];

        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
            <div class="col-3">
                <img src="` + products.imgSrc + `"alt="` + products.description + `"class="img-thumbnail">
                </div>
            <div class="col">
                <div class="d-flex w-100 justify-content-between">
                    <h4 class="mb-1">`+ products.name + `</h4>
                    <small class="text-muted">` + products.soldCount + ` artículos vendidos</small>
                </div>
                <p>`+ products.description + `</p>
                <p>`+ products.currency +" " + products.cost + ` </p>
            </div>
        </div>
    </div>
    `

    document.getElementById("products-list-container").innerHTML = htmlContentToAppend;
    }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document,addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).them(function(resultObj){
        //showSpiner();
        if (resultObj.status === "ok"){
            show = resultObj.data;
            productsArray = resultObj.data;
            //Muestro las categorías ordenadas
            showproductsList(productsArray);
        }
        //hideSpiner();
    });
});