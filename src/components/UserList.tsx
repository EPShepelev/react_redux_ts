import { FC } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";

const UserList: FC = () => {
  const { error, loading, users } = useTypedSelector((state) => state.user);

  return <div>aaaa</div>;
};

export default UserList;
