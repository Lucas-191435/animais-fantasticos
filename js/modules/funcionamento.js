export default class Funcionamento {
  constructor(data, classActive){
    console.log('vaiEntrar')
    this.funcionamento = document.querySelector(data);
   
    if(classActive === undefined){
      this.activeClass = 'aberto';
    }else{
      this.activeClass = classActive;
    }
  }

  dadosFuncionamento(){
    this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number);

    console.log(this.diasSemana);
  }

  dadosAgora(){
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horarioAgora = this.dataAgora.getUTCHours() - 3;
  }

  estaAberto(){
    const semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;
    const horarioAberto = (this.horarioAgora >= this.horarioSemana[0] && this.horarioAgora < this.horarioSemana[1]);

    return semanaAberto && horarioAberto;
  }

  ativaAberto(){
    if(this.estaAberto()){
      this.funcionamento.classList.add(this.activeClass);
      console.log(this.activeClass)
    }
  }

  init(){
    if (this.funcionamento) {
      this.dadosFuncionamento();
      this.dadosAgora()
      this.ativaAberto();
    }
    console.log('entrou')
    return this;
  }
}
