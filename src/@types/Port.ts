export type Port = {
  port: string;
  terminals: Terminal[];
};

export type Terminal = {
  terminal: string;
  berths: string[];
};
