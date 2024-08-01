import { pageStarted } from "@/_pages/index/model";
import { Home } from "@/_pages/index/page";
import { allSettled, fork, serialize } from "effector";

export default Home;

export async function getServerSideProps() {
  const scope = fork();

  await allSettled(pageStarted, { scope });

  return {
    props: {
      values: serialize(scope),
    },
  };
}
