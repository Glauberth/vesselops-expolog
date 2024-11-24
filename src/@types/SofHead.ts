export type SofHead = {
  idSofHead?: number;
  idVessel: number;
  vessel?: {
    idVessel: number;
    vesselName: string;
    vesselIMO: string;
  };
  portName: string;
  terminalName: string;
  berthName: string;
  // vesselType: string;
  status: string;
  startAt: string;
  // vessel: Vessel;
  createdAt?: Date;
  endAt?: string;
};
