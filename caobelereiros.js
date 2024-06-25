const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let lembretes = []
exibirMenu()

function exibirMenu() {
	console.log(`
	Bem Vindo ao Cãobelereiros! Escolha uma opção:
	1. Cadastrar Pet
	2. Listar horários marcados
	3. Editar horários
	4. Marcar presença concluída
	5. Sair
	`)

rl.question('Escolha uma opção: ', (opcao) => {
		switch (opcao) {
			case '1':
				cadastrarPet()
				break
			case '2':
				listarHorarios()
				break
			case '3':
				editarHorarios()
				break
			case '4':
				marcarPresenca()
				break
			case '5':
				console.log('Até mais! :)')
				rl.close()
				break
			default:
				console.log('\nOpção inválida, tente novamente.')
				exibirMenu()
				break
		}
	})
}


