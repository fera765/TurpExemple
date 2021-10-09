interface IComments {
  id: number;
  text: string;
  user: {
    name: string;
  };
}

interface IPosts {
  id: number;
  title: string;
  active: boolean;
  comments: IComments[];
}

export type { IPosts, IComments };
