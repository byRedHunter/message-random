const messages = [
	'No te rindas!! 😁',
	'Sigue adelante...💪',
	'Se que tu puedes hacerlo. 😎',
	'Nunca pares de aprender. 🥇',
	'Tu mejor arma es la educacion. 📚',
	'Si yo pude, tu tambien, no te rindas. 💚',
	'Vamos un poco mas, ya estas muy cerca. 🏆',
	'Ser inteligente es dedicarle el tiempo necesario a resolver tus problemas.',
	'La supervivencia es no rendirse nunca. 😎',
	'Siempre es demasiado pronto para rendirse. 🥇',
	'Hay algo en ti que el mundo necesita. 📚',
	'Sé que ha sido duro, pero todavía te estoy animando. 💚',
	'Puedes gritar, puedes llorar, pero no te rindas. 🏆',
]

const randomMsg = () => {
	const message = messages[Math.floor(Math.random() * messages.length)]

	console.log(message)
}

module.exports = { randomMsg }
