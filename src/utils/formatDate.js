const formatDate = (value) => {
  let day = new Date(value).getDay()
  const month = new Date(value).getMonth()
  const year = new Date(value).getFullYear()

  if (day < 10) {
    day = '0' + day
  }

  return (day + '/' + month + '/' + year)
}

export default formatDate;