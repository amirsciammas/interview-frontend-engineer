export type User = {
  id: string,
  name: string,
  username: string,
  email: string,
  address: Address,
  phone: string,
  website: string,
  company: Company,
}

export type Address = {
  street: string, 
  suite: string, 
  city: string,
  zipcode: string,
  geo: Geo,
}

export type Company = {
  name: string,
  catchPhrase: string,
  bs: string,
}

export type Geo = {
  lat: string,
  lng: string,
}

export type Post = {
  id: number,
  userId: number,
  title: string,
  body: string,
}
