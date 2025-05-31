const chars = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
  'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
  'u', 'v', 'w', 'x', 'y', 'z'
]

function v12(length) {
   let data = ''
   let vlength = 0
   while(vlength < length){
      let random = Math.floor(Math.random() * 36)
      data = data + chars[random]
      vlength++
   }

   return data
}

module.exports = {v12}