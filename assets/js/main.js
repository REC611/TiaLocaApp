// ALL CARDS
function buildHTMLBeerCard(beersData){
    return `<div class="card m-5 text-center" style="width: 20rem;">
    <div class="card-header">${beersData.brand}</div>
    <form action="post">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${beersData.name}</h5>
        <br>
        <div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
            <label class="form-check-label" for="inlineCheckbox1">Pinta(500ml)</label>
            <div>
              <input class="number" id="cantidad" name="cantidad" min="1" max="50" step="5">
            </div>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
            <label class="form-check-label" for="inlineCheckbox2">Litro(1litro)</label>
            <div>
              <input class="number" id="cantidad" name="cantidad" min="1" max="50">
            </div>
          </div>
        </div>
        <br>
        <div>
          <input class="number" id="price" placeholder="Precio...">
        </div>
        <br>
        <div>
          <select class="form-select">
            <option selected>Medio de Pago</option>
            <option value="1">Efectivo</option>
            <option value="2">Debito</option>
            <option value="3">QR</option>
          </select>
        </div>
        <br>
        <div>
          <button class="btn btn-primary" type="submit" value="submit">Agregar</button>
          <button class="btn btn-primary" type="reset" value="reset">Borrar</button>
        </div>
      </div>
    </form>
  </div>`
}