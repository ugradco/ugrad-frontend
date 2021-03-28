import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { LOCAL_STORAGE } from "../Constants/global.constants";

function HomePage() {
  const router = useRouter();
  useEffect(() => {
    if (LOCAL_STORAGE.accessToken) {
      // router.push("/main", undefined, { shallow: true });
      router.push("/login", undefined, { shallow: true });
    } else {
      router.push("/login", undefined, { shallow: true });
    }
  }, []);

  return null;
}
export default HomePage;
