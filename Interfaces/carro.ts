interface ICarro {  
    potencia: number;
    motorista(velocidade: number): void;
}

class Veiculo implements ICarro {  
    potencia: number;

    constructor() {
        console.log('Por dentro da Corrida');
    }

    motorista(velocidade: number): void {
        console.log('Estou dirigindo à..: ' + velocidade + ' km/h!');
    }
}



let corridaCarro = new Veiculo();  
dirigirRapido(corridaCarro);