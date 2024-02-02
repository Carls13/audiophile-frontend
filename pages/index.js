import { HomeView } from "@audiophile/views/Home/Home";

export async function getServerSideProps() {
  return {
      props: {
          isHome: true
      }
  };
};

export default function Home() {
  
  return (
      <HomeView />
  )
}
