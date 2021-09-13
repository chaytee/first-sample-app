import { useContext } from "react";
import {
  LoginUserContext,
  LoginUserContextType
} from "./providers/LoginUserProvider";

//useLoginUserを呼ぶだけuseContextのコードは不要となる
export const useLoginUser = (): LoginUserContextType =>
  useContext(LoginUserContext);
