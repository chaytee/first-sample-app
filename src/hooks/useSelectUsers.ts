import { useCallback, useState } from "react";
import { User } from "../types/api/user";

type Props = {
  id: number;
  users: Array<User>;
  onOpen: () => void;
};
//選択したユーザー情報を特定しモーダルを表示するカスタムフック
export const useSelectUsers = () => {
  const [selectdUser, setSelectedUsers] = useState<User | null>();
  const onSelectUser = useCallback((props: Props) => {
    const { id, users, onOpen } = props;
    const targetUser = users.find((user) => user.id === id);
    setSelectedUsers(targetUser ?? null); //左辺がundifineのときnullを返す
    onOpen();
  }, []);
  return { onSelectUser, selectdUser };
};
