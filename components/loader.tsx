import { Loading, Spacer } from "@nextui-org/react";

export default function Loader() {
  return (
    <>
      <Loading size="xl" />
      <Spacer />
      {/* Note: If you want to use a custom size please see this */}
      <Loading
        loadingCss={{ $$loadingSize: "100px", $$loadingBorder: "10px" }}
      />
    </>
  );
}
