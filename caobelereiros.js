const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let pets = []
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
				console.log('Até mais, aumigo! :)')
				rl.close()
				break
			default:
				console.log('\nOpção inválida, tente novamente.')
				exibirMenu()
				break
		}
	})
}

function cadastrarPet(){
	rl.question('Digite o nome do dono(a) do pet: ', (nomeDoDono) => {
		rl.question('Digite o nome do pet: ', (nomeDoPet) => {
			rl.question('Digite a raça do pet: ', (raca) => {
				rl.question('Digite o tipo de serviço: ', (servico) => {
					rl.question('Digite o horario: ', (horario) => {
						pets.push({nomeDoDono:nomeDoDono, nomeDoPet:nomeDoPet, raca:raca, 
							servico:servico, horario:horario, concluido:false})
							console.log('\nPet adicionado com sucesso!')
							exibirMenu()
					})
						
				})
			})

		})
	})
	
}

function listarHorarios() {
	if (pets.length === 0) {
		console.log('\nNenhum pet adicionado ainda!')
		exibirMenu()
	} else {
		console.log('\nLista de pets cadastrados:')
		pets.forEach((pet, index) => {
            console.log(` 
			${index + 1}. Nome do pet: ${pet.nomeDoPet} 
			Raça: ${pet.raca} 
			Nome do dono(a): ${pet.nomeDoDono} 
			Tipo de serviço: ${pet.servico} 
			Horário: ${pet.horario} 
			Status: ${pet.concluido}
            `)
        })
        exibirMenu()
    }
}

function editarHorarios() {
	if (pets.length === 0) {
		console.log('\nNenhum pet cadastrado ainda!')
		exibirMenu()
	} else {
		console.log('\nLista de pets cadastrados:')
		pets.forEach((pet, index) => {
			console.log(` 
			${index + 1}. Nome do pet: ${pet.nomeDoPet} 
			Raça: ${pet.raca} 
			Nome do dono(a): ${pet.nomeDoDono} 
			Tipo de serviço: ${pet.servico} 
			Horário: ${pet.horario} 
			Status: ${pet.concluido}
            `)
        })

		rl.question('Digite o número do cadastro que deseja editar: ', (numero) => {
			if(numero > 0 && numero <= pets.length){
				rl.question('Digite o novo horário: ', (horario) => {
							pets[numero - 1] = {
								horario
							}
							console.log('\nEditado com sucesso!')
							exibirMenu()
						})
				} else {
					console.log('\nNúmero inválido, tente novamente.')
					exibirMenu()
				}
			})

	}
}

function marcarPresenca() {
	if (pets.length === 0) {
		console.log('Nenhum pet cadastrado!')
		exibirMenu()
	} else {
		console.log('\nLista de pets cadastrados: ')
		pets.forEach((pet, index) => {
			console.log(`${index + 1}. ${pets.nomeDoPet}`)
		})
		rl.question('Digite o número do pet que você deseja marcar presença: ', (numero) => {
			if (numero > 0 && numero <= pets.length) {
				pets[numero-1].concluido = true
			}
			console.log("\nPresença registrada com sucesso!")
			exibirMenu()
		}
	)}
}