export class HistoricData {
  constructor(importeOrigen, importeCambiado, divisaFrom, divisaTo, fecha) {
    this.importeOrigen = importeOrigen;
    this.importeCambiado = importeCambiado;
    this.divisaFrom = divisaFrom;
    this.divisaTo = divisaTo;
    this.fecha = new Date(fecha);
  }
}
