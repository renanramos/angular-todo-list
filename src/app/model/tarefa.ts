export class Tarefa {

    public titulo: string;
    public descricao: string;
    public dataHoraInclusao: any;

    constructor(titulo: string, descricao: string) {
        this.titulo = titulo;
        this.descricao = descricao
        this.dataHoraInclusao = this.getDataHora(new Date());
    }

    getDataHora(data: Date) {
        return data.toLocaleDateString('pt-BR') + ' - ' + data.toLocaleTimeString('pt-BR')
    }

}
