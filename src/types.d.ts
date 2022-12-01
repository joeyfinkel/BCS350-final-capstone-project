export type VoidFunctionWithCallback = (callback: VoidFunction) => void;
export type MappedType<Type> = { [Property in keyof Type]: Type[Property] };
export type UserInfo = {
  id?: number;
  email: string;
  password: string;
  first_name?: string;
  last_name?: string;
  username?: string;
};
