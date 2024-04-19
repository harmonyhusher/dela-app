import { redirect } from "next/navigation";
import React from "react";

export const Init = () => {

  React.useEffect(() => {
    redirect('/auth')
  }, []);

  return <div>page</div>;
};
