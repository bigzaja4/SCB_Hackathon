export const Color = {
  primary: '#43956B',
  secondary: '#A2D376',
  primaryText: '#000000',
  secondarytext: '#505050',
  background: '#f0f6ff',
}

export const Container = {
  borderRadius: 10,
}

export const Text = {
  font: {
    family: 'Kanit',
    size: 18
  }
}

export const bankNumberFormatter = (number, format) => {
  const numberArray = `${number}`.split('')
  let count = 0
  const result = format.split('').map((char, index) => {
    if (char === 'y') {
      return numberArray[count++]
    } else if (char === 'x') {
      count++
      return char
    }
    return char
  })
  // console.log(numberArray)
  // console.log(result)
  return result
}