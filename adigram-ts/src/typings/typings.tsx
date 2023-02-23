export type IUser = {
  email: string;
  id: Number;
  name: string;
  phone: string;
  username: string;
  website: string;
  address: IAddress;
  company: ICompany;
};

type IAddress = {
  city: string;
  geo: { lat: string; lng: string };
  street: string;
  suite: string;
  zipcode: string;
};

type ICompany = {
  bs: string;
  catchPhrase: string;
  name: string;
};

export type IPost = {
  body: string;
  id: Number;
  title: string;
  userId: Number;
};
