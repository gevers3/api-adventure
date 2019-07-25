const foodButton01 = document.querySelector('button#get-food-01')

const onClick = () => {
  fetch("https://world.openfoodfacts.org/api/v0/product/[5600826209561].json")
    .then(response => {
      if (response.status === 200) {
        return response.json()
      } else {
        displayErrorMessage(response)
      }
    })
    .then(json => {
      console.log(json)
      document.querySelector('.brand-name')
        .textContent = json.product.brands
      document.querySelector('.product-name')
        .textContent = json.product.product_name_en
      // document.querySelector('.food-pic')
      //   .innerHTML = '${<img src=}' + json.product.image_url + '${alt="" width='200' />}'

      // newElement.textContent = `${Deck[i].name} of ${Deck[i].suit}`

      document.querySelector('.product-type')
        .textContent = json.product.labels
      document.querySelector('.country-of-origin')
        .textContent = json.product.purchase_places_tags[1]
      // displayData(json)
    })  // console.log('Get Food!')
  // fetch("https://world.openfoodfacts.org/api/v0/product/[5600826209561].json")
  //   .then(response => {
  //     console.log(response)
  //     return response.json()
  //     // console.log(response.json)

  //   })
  //   .then(json => {
  //     document.querySelector('.brand-name')
  //       .textContent = json.brands
  //   })
}

const main = () => {
  // fetch("https://world.openfoodfacts.org/api/v0/product/[5600826209561].json")
  //   .then(response => {
  //     if (response.status === 200) {
  //       return response.json()
  //     } else {
  //       displayErrorMessage(response)
  //     }
  //   })
  //   .then(json => {
  //     console.log(json)
  //     // displayData(json)
  //   })

  // if (document.querySelector('h1.hello-world')) {
  //   document.querySelector('h1.hello-world').textContent = 'Hello, World!'
  // }

  foodButton01.addEventListener('click', onClick)
}

document.addEventListener('DOMContentLoaded', main)
