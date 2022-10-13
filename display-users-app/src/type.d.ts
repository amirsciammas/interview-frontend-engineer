interface IUsers {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

interface IPosts {
  id: number;
  userId: number;
  title: string;
  body: string;
}

type AppState = {
  users: IUsers[];
  posts: IPosts[];
};

type AppAction = {
  type: string;
  payload?: any;
};

type DispatchType = (args: AppAction) => AppAction;
