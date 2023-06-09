const currencyEl_one = document.getElementById('currency-one')
const currencyEl_two = document.getElementById('currency-two')
const amountEl_one = document.getElementById('amount-one')
const amountEl_two = document.getElementById('amount-two')
const swapBtn = document.getElementById('swap')
const rateEl = document.getElementById('rate')

async function calculate() {
  const currency_one = currencyEl_one.value
  const currency_two = currencyEl_two.value

  const res = await fetch(
    `https://api.exchangerate-api.com/v4/latest/${currency_one}`
  )
  const data = await res.json()
  console.log(data)

  const rate = data.rates[currency_two]
  console.log(rate)

  rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`

  amountEl_two.value = (amountEl_one.value * rate).toFixed(2)
}

currencyEl_one.addEventListener('change', calculate)
amountEl_one.addEventListener('input', calculate)
currencyEl_two.addEventListener('change', calculate)
amountEl_two.addEventListener('input', calculate)
swapBtn.addEventListener('click', () => {
  const temp = currencyEl_one.value
  currencyEl_one.value = currencyEl_two.value
  currencyEl_two.value = temp
  calculate()
})

calculate()
