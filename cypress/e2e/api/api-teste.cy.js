describe('Teste API', () => {
    var dojo = {
        aula: "API",
        duracao: 3,
        professor: "Fábio"
    }


    var frutas = ["banana", "maçã", "uva"]

    var usuarios = [
        {

            "nome": "Tiago",
            "usuario": "tiago@usuario.com",
            "senha": "123321"
        },
        {
            "nome": "Jorge",
            "usuario": "jorge@usuario.com",
            "senha": "123320"

        },
        {
            "usuario": "maria@usuario.com",
            "senha": "123320",
            "perfil": "admin"

        }

    ]

    it('Teste DOJO', () => {
        expect(dojo.aula).to.equal("API")
        expect(dojo.duracao).to.equal(3)
        expect(dojo.professor).to.equal("Fábio")
    });

    it('Deve validar o retonro dos usuários', () => {
        expect(usuarios[0].usuario).to.equal("tiago@usuario.com")
        expect(usuarios[1].usuario).to.equal("jorge@usuario.com")
        expect(usuarios[2].usuario).to.equal("maria@usuario.com")
    });

});
