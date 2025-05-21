export const formatDate = (date, isTime = false, option = { separatorType: ' ', format: 'ddmmyyyy', lang: 'id' }) => {
	if (!date) {
		return 'Belum tersedia'
	}

	let resultDate
	const convert = new Date(date)
	const separator = option.separatorType === 'Slash' ? '/' : option.separatorType === 'Dash' ? '-' : ' '

	const day = String(convert.getUTCDate()).padStart(2, '0')
	const month = String(convert.getUTCMonth() + 1).padStart(2, '0')
	const year = convert.getUTCFullYear()
	const hours = String(convert.getUTCHours()).padStart(2, '0')
	const minutes = String(convert.getUTCMinutes()).padStart(2, '0')
	const seconds = String(convert.getUTCSeconds()).padStart(2, '0')

	if (option.format === 'ddMMyyyy') {
		resultDate = `${day}${separator}${month}${separator}${year}`
	} else {
		resultDate = `${day}${separator}${month}${separator}${year}`
	}

	if (isTime) {
		resultDate = `${resultDate} ${hours}:${minutes}:${seconds}`
	}

	return resultDate
}

export const formatTime = (time) => {
	const minutes = Math.floor(time / 60)
	const seconds = time % 60
	return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}

/**
 *
 * cara penggunaannya seperti dibawah ini
 * @params date = tanggal yang diperoleh
 * @params true = untuk menampilkan waktu
 * @params separatorType = bentuk yang digunakan
 * convertDate(date, true, { separatorType: 'Slash' }
 *
 **/
