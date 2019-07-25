const foodButton01 = document.querySelector('button#get-food-01')
const foodButton02 = document.querySelector('button#get-food-02')
const foodButton03 = document.querySelector('button#get-food-03')

const onClick01 = () => {
  fetch("https://world.openfoodfacts.org/api/v0/product/[5600826209561].json")
    .then(response => {
      console.log(response)
      if (response.status === 200) {
        return response.json()
      } else {
        displayErrorMessage(response)
      }
    })
    .then(json => {
      console.log(json)
      document.querySelector('.brand-name-01')
        .textContent = json.product.brands
      document.querySelector('.product-name-01')
        .textContent = json.product.product_name_en
      // console.log(json.product.image_url)
      // const foodImage = json.product.image_url
      // console.log(foodImage)
      const foodImage = `<img src='${json.product.image_url}' alt=${json.product.product_name_en} width='220' />`
      document.querySelector('.food-pic-01')
        .innerHTML = foodImage
      // const foodImage = `<img src='${json.product.image_url}' alt=${json.product.product_name_en} />`
      // document.querySelector('.food-pic-01')
      //   .innerHTML = '<img src=json.product.image_url alt="" width='200' />'
      // newElement.textContent = `${Deck[i].name} of ${Deck[i].suit}`
      document.querySelector('.product-type-01')
        .textContent = json.product.labels
      document.querySelector('.country-of-origin-01')
        .textContent = json.product.purchase_places_tags[1]
    })
}

const onClick02 = () => {
  fetch("https://world.openfoodfacts.org/api/v0/product/[20830427].json")
    .then(response => {
      if (response.status === 200) {
        return response.json()
      } else {
        displayErrorMessage(response)
      }
    })
    .then(json => {
      console.log(json)
      document.querySelector('.brand-name-02')
        .textContent = json.product.brands
      document.querySelector('.product-name-02')
        .textContent = json.product.product_name_en
      const foodImage02 = `<img src='${json.product.image_url}' alt=${json.product.product_name_en} width='220' />`
      document.querySelector('.food-pic-02')
        .innerHTML = foodImage02
      document.querySelector('.product-type-02')
        .textContent = json.product.labels
      document.querySelector('.country-of-origin-02')
        .textContent = json.product.purchase_places_tags[1]
    })
}

const onClick03 = () => {
  fetch("https://world.openfoodfacts.org/api/v0/product/[3564707091701].json")
    .then(response => {
      if (response.status === 200) {
        return response.json()
      } else {
        displayErrorMessage(response)
      }
    })
    .then(json => {
      console.log(json)
      document.querySelector('.brand-name-03')
        .textContent = json.product.brands
      document.querySelector('.product-name-03')
        .textContent = json.product.product_name_en
      const foodImage03 = `<img src='${json.product.image_url}' alt=${json.product.product_name_en} width='220' />`
      document.querySelector('.food-pic-03')
        .innerHTML = foodImage03
      document.querySelector('.product-type-03')
        .textContent = json.product.labels
      document.querySelector('.country-of-origin-03')
        .textContent = json.product.purchase_places_tags[1]
    })
}

const main = () => {
  foodButton01.addEventListener('click', onClick01)
  foodButton02.addEventListener('click', onClick02)
  foodButton03.addEventListener('click', onClick03)
}

document.addEventListener('DOMContentLoaded', main)
