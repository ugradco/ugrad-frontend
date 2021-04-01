import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { LOCAL_STORAGE } from "../Constants/global.constants";

function HomePage() {
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem(LOCAL_STORAGE.accessToken)) {
      // TODO: check this for each page
      // TODO: routing based on request code
      router.push("/main", undefined, { shallow: true });
    } else {
      router.push("/login", undefined, { shallow: true });
    }
  }, []);

  return null;
}
export default HomePage;
