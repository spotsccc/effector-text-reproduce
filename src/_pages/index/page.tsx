import { useUnit } from "effector-react";
import { getPageContentQuery } from "./model";

export function Home() {
  const data = useUnit(getPageContentQuery.$data);
  return (
    <>
      <main>
        <ul>
          {data?.data.users.map(({ name, id }) => <li key={id}>{name}</li>)}
        </ul>
      </main>
    </>
  );
}
