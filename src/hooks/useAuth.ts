import { useCallback, useState } from "react";
import axios from "axios";
import { User } from "../types/api/user";
import { useHistory } from "react-router-dom";
import { useMessage } from "./useMessage";
import { useLoginUser } from "./useLoginUser";

export const useAuth = () => {
  const history = useHistory();
  const { showMessage } = useMessage();
  //setLoginUserはLoginUserProviderの中にあるやつ
  const { setLoginUser } = useLoginUser();
  const [loading, setLoding] = useState(false);
  const login = useCallback(
    (id: string) => {
      setLoding(true);
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            const isAdmin = res.data.id === 10 ? true : false;
            setLoginUser({ ...res.date, isAdmin });
            showMessage({ title: "ログインしました。", status: "success" });
            history.push("/home");
          } else {
            showMessage({
              title: "ユーザーが見つかりません。",
              status: "error"
            });
            setLoading(false);
          }
        })
        .catch(() => {
          showMessage({
            title: "ログインできません",
            status: "error"
          });
          setLoading(false);
        });
    },
    [history, showMessage, setLoginUser]
  );
  return { login, loading };
};
